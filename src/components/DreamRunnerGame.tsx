import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Trophy, X, RotateCcw, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';

interface DreamRunnerGameProps {
  onClose?: () => void;
  isModal?: boolean;
}

export const DreamRunnerGame: React.FC<DreamRunnerGameProps> = ({ onClose, isModal = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Game UI state
  const [gameState, setGameState] = useState<'start' | 'playing' | 'gameover'>('start');
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(() => {
    return parseInt(localStorage.getItem('dream_runner_hi') || '0', 10);
  });
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isDucking, setIsDucking] = useState<boolean>(false);

  // Audio Context ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Game logic refs to avoid closure stalls in requestAnimationFrame
  const stateRef = useRef<'start' | 'playing' | 'gameover'>('start');
  const scoreRef = useRef<number>(0);
  const soundRef = useRef<boolean>(soundEnabled);
  soundRef.current = soundEnabled;

  const playChime = (freqStart: number, freqEnd: number, duration: number, type: OscillatorType = 'sine') => {
    if (!soundRef.current) return;
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          audioCtxRef.current = new AudioContextClass();
        }
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      if (!audioCtxRef.current) return;

      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freqStart, audioCtxRef.current.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freqEnd, audioCtxRef.current.currentTime + duration);

      gain.gain.setValueAtTime(0.18, audioCtxRef.current.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, audioCtxRef.current.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);
      osc.start();
      osc.stop(audioCtxRef.current.currentTime + duration);
    } catch {
      // Audio context may be restricted by autoplay policy
    }
  };

  useEffect(() => {
    stateRef.current = gameState;
  }, [gameState]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const GAME_WIDTH = 800;
    const GAME_HEIGHT = 450;
    const GROUND_Y = 370;

    // Helper: Draw 5-point star
    const drawStar = (
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      outerR: number,
      innerR: number,
      points: number = 5
    ) => {
      let rot = (Math.PI / 2) * 3;
      const step = Math.PI / points;
      context.beginPath();
      context.moveTo(cx, cy - outerR);
      for (let i = 0; i < points; i++) {
        let x = cx + Math.cos(rot) * outerR;
        let y = cy + Math.sin(rot) * outerR;
        context.lineTo(x, y);
        rot += step;
        x = cx + Math.cos(rot) * innerR;
        y = cy + Math.sin(rot) * innerR;
        context.lineTo(x, y);
        rot += step;
      }
      context.closePath();
      context.fill();
    };

    // Game variables
    let animationFrameId: number;
    let speed = 6;
    let frameCount = 0;

    // Pastel Player (Whimsical Star Cat)
    const player = {
      x: 75,
      y: GROUND_Y - 50,
      width: 48,
      height: 48,
      vy: 0,
      gravity: 0.86,
      jumpForce: -16.5,
      isGrounded: true,
      isDucking: false,
      wingCycle: 0,

      reset() {
        this.y = GROUND_Y - 50;
        this.vy = 0;
        this.isGrounded = true;
        this.isDucking = false;
        this.height = 48;
      },

      jump() {
        if (this.isGrounded) {
          this.vy = this.jumpForce;
          this.isGrounded = false;
          playChime(340, 720, 0.15, 'sine');
          spawnSparkles(this.x + 20, GROUND_Y, '#fbcfe8');
        }
      },

      duck(down: boolean) {
        this.isDucking = down;
        setIsDucking(down);
        if (down) {
          this.height = 30;
          if (this.isGrounded) {
            this.y = GROUND_Y - 30;
          }
        } else {
          this.height = 48;
          if (this.isGrounded) {
            this.y = GROUND_Y - 48;
          }
        }
      },

      update() {
        if (!this.isGrounded) {
          this.vy += this.gravity;
          this.y += this.vy;

          if (this.y >= GROUND_Y - this.height) {
            this.y = GROUND_Y - this.height;
            this.vy = 0;
            this.isGrounded = true;
          }
        }
        this.wingCycle += 0.15;
      },

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.translate(this.x, this.y);

        const w = this.width;
        const h = this.height;

        // Aura glow
        c.fillStyle = 'rgba(251, 207, 232, 0.45)';
        c.beginPath();
        c.arc(w / 2, h / 2, w * 0.65, 0, Math.PI * 2);
        c.fill();

        // Pastel Cloud/Cat Body
        c.fillStyle = '#fbcfe8';
        c.beginPath();
        c.roundRect(0, 0, w, h, [18, 18, 14, 14]);
        c.fill();

        // Ears
        if (!this.isDucking) {
          c.fillStyle = '#f472b6';
          c.beginPath();
          c.moveTo(6, 0);
          c.lineTo(13, -11);
          c.lineTo(20, 0);
          c.fill();

          c.beginPath();
          c.moveTo(w - 20, 0);
          c.lineTo(w - 13, -11);
          c.lineTo(w - 6, 0);
          c.fill();
        }

        // Rosy Cheeks
        c.fillStyle = '#fb7185';
        c.beginPath();
        c.arc(8, h * 0.58, 4, 0, Math.PI * 2);
        c.arc(w - 8, h * 0.58, 4, 0, Math.PI * 2);
        c.fill();

        // Cute Happy Eyes
        c.strokeStyle = '#831843';
        c.lineWidth = 2.5;
        c.lineCap = 'round';

        c.beginPath();
        c.arc(15, h * 0.45, 4, Math.PI * 0.8, Math.PI * 2.2);
        c.stroke();

        c.beginPath();
        c.arc(w - 15, h * 0.45, 4, Math.PI * 0.8, Math.PI * 2.2);
        c.stroke();

        // Golden Star Tiara
        c.fillStyle = '#fef08a';
        const starX = w / 2;
        const starY = -5 + Math.sin(this.wingCycle) * 2;
        drawStar(c, starX, starY, 6, 3, 5);

        c.restore();
      },
    };

    // Scenery: Background Stars & Clouds
    const bgStars = Array.from({ length: 32 }, () => ({
      x: Math.random() * GAME_WIDTH,
      y: Math.random() * (GROUND_Y - 120),
      size: Math.random() * 2.5 + 1,
      alpha: Math.random(),
      speed: Math.random() * 0.03 + 0.01,
    }));

    const clouds = [
      { x: 50, y: 75, scale: 0.8, speed: 0.5 },
      { x: 320, y: 130, scale: 1.15, speed: 0.7 },
      { x: 640, y: 60, scale: 0.7, speed: 0.45 },
    ];

    // Obstacles: Ground Puffs, Tall Dream Clouds, High Flying Stars
    interface ObstacleItem {
      type: 'ground-puff' | 'tall-cloud' | 'flying-star';
      x: number;
      y: number;
      width: number;
      height: number;
      color: string;
    }

    let obstacles: ObstacleItem[] = [];
    let nextObstacleTimer = 65;

    const createObstacle = (type: ObstacleItem['type']): ObstacleItem => {
      if (type === 'ground-puff') {
        return {
          type,
          x: GAME_WIDTH + 20,
          y: GROUND_Y - 50,
          width: 44,
          height: 50,
          color: '#c084fc', // soft purple
        };
      }
      if (type === 'tall-cloud') {
        return {
          type,
          x: GAME_WIDTH + 20,
          y: GROUND_Y - 72,
          width: 58,
          height: 72,
          color: '#f472b6', // pastel pink
        };
      }
      // Flying star (duck under or stay low)
      return {
        type,
        x: GAME_WIDTH + 20,
        y: GROUND_Y - 88,
        width: 42,
        height: 38,
        color: '#38bdf8', // cosmic blue
      };
    };

    // Sparkle Particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
    }
    let particles: Particle[] = [];

    const spawnSparkles = (x: number, y: number, color = '#fbcfe8') => {
      for (let i = 0; i < 9; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 6,
          vy: (Math.random() - 0.5) * 6,
          life: 1,
          color,
        });
      }
    };

    // Trigger Game Over
    const triggerGameOver = () => {
      stateRef.current = 'gameover';
      setGameState('gameover');
      playChime(420, 140, 0.35, 'triangle');
      spawnSparkles(player.x + 24, player.y + 24, '#fb7185');

      const finalScore = Math.floor(scoreRef.current);
      const curHi = parseInt(localStorage.getItem('dream_runner_hi') || '0', 10);
      if (finalScore > curHi) {
        localStorage.setItem('dream_runner_hi', String(finalScore));
        setHighScore(finalScore);
      }
    };

    // Main Update
    const update = () => {
      if (stateRef.current !== 'playing') return;

      frameCount++;
      scoreRef.current += 0.15;
      setScore(Math.floor(scoreRef.current));

      // Gradual acceleration
      speed = 6 + Math.min(8, Math.floor(scoreRef.current / 150) * 0.5);

      player.update();

      // Cloud & star animation
      clouds.forEach((c) => {
        c.x -= c.speed;
        if (c.x < -100) c.x = GAME_WIDTH + 60;
      });

      bgStars.forEach((s) => {
        s.alpha += s.speed;
      });

      // Spawn Obstacles
      nextObstacleTimer--;
      if (nextObstacleTimer <= 0) {
        const types: ObstacleItem['type'][] = ['ground-puff', 'tall-cloud', 'flying-star'];
        const chosen = types[Math.floor(Math.random() * types.length)];
        obstacles.push(createObstacle(chosen));
        nextObstacleTimer = Math.floor(Math.random() * 55) + 65;
      }

      // Obstacle collision check
      const pBounds = {
        left: player.x + 6,
        right: player.x + player.width - 6,
        top: player.y + 6,
        bottom: player.y + player.height - 4,
      };

      for (let i = obstacles.length - 1; i >= 0; i--) {
        const ob = obstacles[i];
        ob.x -= speed;

        const oBounds = {
          left: ob.x + 6,
          right: ob.x + ob.width - 6,
          top: ob.y + 6,
          bottom: ob.y + ob.height - 4,
        };

        // AABB check
        if (
          pBounds.right > oBounds.left &&
          pBounds.left < oBounds.right &&
          pBounds.bottom > oBounds.top &&
          pBounds.top < oBounds.bottom
        ) {
          triggerGameOver();
          return;
        }

        if (ob.x < -100) {
          obstacles.splice(i, 1);
        }
      }

      // Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.035;
        if (p.life <= 0) particles.splice(i, 1);
      }
    };

    // Render
    const render = () => {
      ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

      // Sky Gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
      skyGrad.addColorStop(0, '#f5d0fe');
      skyGrad.addColorStop(0.6, '#fce7f3');
      skyGrad.addColorStop(1, '#fed7aa');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, GAME_WIDTH, GROUND_Y);

      // Twinkling Background Stars
      bgStars.forEach((s) => {
        const opacity = (Math.sin(s.alpha) + 1) / 2;
        ctx.fillStyle = `rgba(253, 224, 71, ${opacity * 0.85})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Fluffy Background Clouds
      clouds.forEach((c) => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(c.x, c.y, 25 * c.scale, 0, Math.PI * 2);
        ctx.arc(c.x + 20 * c.scale, c.y - 10 * c.scale, 28 * c.scale, 0, Math.PI * 2);
        ctx.arc(c.x + 45 * c.scale, c.y, 22 * c.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // Dream Floor
      ctx.fillStyle = '#fbcfe8';
      ctx.fillRect(0, GROUND_Y, GAME_WIDTH, GAME_HEIGHT - GROUND_Y);

      ctx.strokeStyle = '#f472b6';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y);
      ctx.lineTo(GAME_WIDTH, GROUND_Y);
      ctx.stroke();

      // Floor sparkles / dots moving
      ctx.fillStyle = '#f472b6';
      const offset = (frameCount * speed) % 40;
      for (let x = -offset; x < GAME_WIDTH + 40; x += 40) {
        ctx.beginPath();
        ctx.arc(x, GROUND_Y + 15, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Obstacles
      obstacles.forEach((ob) => {
        ctx.save();
        ctx.translate(ob.x, ob.y);

        if (ob.type === 'ground-puff' || ob.type === 'tall-cloud') {
          ctx.fillStyle = ob.color;
          ctx.beginPath();
          ctx.arc(ob.width * 0.35, ob.height * 0.45, ob.width * 0.35, 0, Math.PI * 2);
          ctx.arc(ob.width * 0.7, ob.height * 0.4, ob.width * 0.3, 0, Math.PI * 2);
          ctx.arc(ob.width * 0.5, ob.height * 0.7, ob.width * 0.35, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.beginPath();
          ctx.arc(ob.width * 0.35, ob.height * 0.35, ob.width * 0.15, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Flying shooting star
          ctx.fillStyle = '#fef08a';
          drawStar(ctx, ob.width / 2, ob.height / 2, ob.width / 2, ob.width / 4, 5);

          ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
          ctx.beginPath();
          ctx.moveTo(ob.width / 2, ob.height / 2);
          ctx.lineTo(ob.width + 16, ob.height / 2 - 6);
          ctx.lineTo(ob.width + 16, ob.height / 2 + 6);
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      });

      // Draw Particles
      particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw Player
      player.draw(ctx);
    };

    // Animation Loop
    const loop = () => {
      update();
      render();
      animationFrameId = requestAnimationFrame(loop);
    };
    animationFrameId = requestAnimationFrame(loop);

    // Keyboard & interaction setup
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent scrolling when space or arrow keys are pressed inside the game
      if (['Space', 'ArrowUp', 'ArrowDown'].includes(e.code)) {
        e.preventDefault();
      }

      if (e.code === 'Space' || e.code === 'ArrowUp') {
        if (stateRef.current === 'playing') {
          player.jump();
        } else {
          startNewGame();
        }
      } else if (e.code === 'ArrowDown') {
        if (stateRef.current === 'playing') {
          player.duck(true);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'ArrowDown') {
        player.duck(false);
      }
    };

    const startNewGame = () => {
      scoreRef.current = 0;
      setScore(0);
      speed = 6;
      obstacles = [];
      particles = [];
      player.reset();
      stateRef.current = 'playing';
      setGameState('playing');
      playChime(300, 600, 0.2, 'sine');
    };

    // Listeners on window
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Attach actions to ref container for direct component trigger
    (canvas as unknown as { startNewGame: () => void; triggerJump: () => void; triggerDuck: (d: boolean) => void }).startNewGame = startNewGame;
    (canvas as unknown as { startNewGame: () => void; triggerJump: () => void; triggerDuck: (d: boolean) => void }).triggerJump = () => {
      if (stateRef.current === 'playing') {
        player.jump();
      } else {
        startNewGame();
      }
    };
    (canvas as unknown as { startNewGame: () => void; triggerJump: () => void; triggerDuck: (d: boolean) => void }).triggerDuck = (d: boolean) => {
      player.duck(d);
    };

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleAction = () => {
    const canvas = canvasRef.current as unknown as { triggerJump?: () => void };
    if (canvas?.triggerJump) {
      canvas.triggerJump();
    }
  };

  const handleDuckTouch = (down: boolean) => {
    const canvas = canvasRef.current as unknown as { triggerDuck?: (d: boolean) => void };
    if (canvas?.triggerDuck) {
      canvas.triggerDuck(down);
    }
  };

  return (
    <div
      ref={containerRef}
      id="dream-runner-container"
      className="w-full max-w-4xl mx-auto my-6 bg-white/95 backdrop-blur-md border border-pink-200 rounded-3xl p-4 sm:p-6 shadow-xl relative overflow-hidden transition-all animate-fadeIn"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 shadow-2xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-stone-800 flex items-center gap-2">
              <span>Dream Runner</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                Mini Game
              </span>
            </h2>
            <p className="text-xs text-stone-500 hidden sm:block">
              Pastel edition inspired by Chrome Dino & the Whimsical Star Cat
            </p>
          </div>
        </div>

        {/* Action icons & Sound toggle */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-semibold text-pink-800">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Best: {String(highScore).padStart(5, '0')}</span>
          </div>

          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200/60 transition-colors cursor-pointer"
            title={soundEnabled ? 'Mute game sound' : 'Enable game sound'}
            aria-label={soundEnabled ? 'Mute game sound' : 'Enable game sound'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
              title="Close game"
              aria-label="Close game"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Canvas Viewport */}
      <div className="relative w-full aspect-16/9 max-h-[400px] rounded-2xl overflow-hidden border-2 border-pink-200 shadow-inner bg-gradient-to-b from-purple-100 via-pink-100 to-amber-100">
        <canvas
          ref={canvasRef}
          width={800}
          height={450}
          className="w-full h-full block cursor-pointer"
          onClick={handleAction}
        />

        {/* HUD Overlay Score */}
        <div className="absolute top-3 left-4 right-4 flex justify-between items-center pointer-events-none text-xs sm:text-sm font-bold tracking-wider text-pink-900 drop-shadow-xs">
          <span>✨ SCORE: {String(score).padStart(5, '0')}</span>
          <span>HI: {String(highScore).padStart(5, '0')}</span>
        </div>

        {/* Start / Game Over Modal Overlay */}
        {gameState !== 'playing' && (
          <div className="absolute inset-0 bg-stone-900/30 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white/95 border-2 border-pink-300 rounded-3xl p-6 text-center max-w-sm w-full shadow-2xl space-y-3 transform transition-all animate-popIn">
              <div className="w-12 h-12 mx-auto rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xl shadow-xs">
                {gameState === 'gameover' ? '🎀' : '✨'}
              </div>

              <h3 className="text-xl font-extrabold text-stone-900">
                {gameState === 'gameover' ? 'Dream Over!' : 'Dream Runner'}
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed">
                {gameState === 'gameover' ? (
                  <>
                    You floated <strong className="text-pink-600">{score}</strong> meters!
                    {score >= highScore && score > 0 && (
                      <span className="block text-emerald-600 font-bold mt-1">🎉 New High Score!</span>
                    )}
                  </>
                ) : (
                  'Help the Whimsical Star Cat leap over cotton candy clouds & duck under cosmic shooting stars!'
                )}
              </p>

              <button
                type="button"
                id="dream-runner-play-btn"
                onClick={handleAction}
                className="w-full py-2.5 px-5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-bold text-sm shadow-md transition-transform hover:scale-102 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                {gameState === 'gameover' ? (
                  <>
                    <RotateCcw className="w-4 h-4" />
                    <span>Fly Again (Space / Tap)</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Start Running (Space / Tap)</span>
                  </>
                )}
              </button>

              <div className="text-[11px] text-pink-700/80 font-medium">
                Tip: Press <kbd className="px-1 py-0.5 bg-pink-100 rounded text-pink-900">Space</kbd> or <kbd className="px-1 py-0.5 bg-pink-100 rounded text-pink-900">↑</kbd> to jump • <kbd className="px-1 py-0.5 bg-pink-100 rounded text-pink-900">↓</kbd> to duck
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Touch Bar */}
      <div className="mt-3 flex items-center justify-center gap-4 sm:hidden">
        <button
          type="button"
          onTouchStart={(e) => {
            e.preventDefault();
            handleAction();
          }}
          onClick={handleAction}
          className="flex-1 py-2.5 rounded-2xl bg-pink-500 active:bg-pink-600 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2"
        >
          🚀 Jump
        </button>
        <button
          type="button"
          onTouchStart={(e) => {
            e.preventDefault();
            handleDuckTouch(true);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            handleDuckTouch(false);
          }}
          onMouseDown={() => handleDuckTouch(true)}
          onMouseUp={() => handleDuckTouch(false)}
          className={`flex-1 py-2.5 rounded-2xl font-bold text-sm shadow-sm transition-colors ${
            isDucking
              ? 'bg-pink-700 text-white'
              : 'bg-pink-100 text-pink-800 active:bg-pink-200 border border-pink-300'
          }`}
        >
          🫧 Duck
        </button>
      </div>
    </div>
  );
};
