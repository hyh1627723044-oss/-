
import React, { useState, useRef } from 'react';
import GiftBox from './components/GiftBox';
import DeltaReveal from './components/DeltaReveal';
import SnowEffect from './components/SnowEffect';
import { MUSIC_URLS, IMAGES } from './constants';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const christmasMusicRef = useRef<HTMLAudioElement | null>(null);
  const deltaMusicRef = useRef<HTMLAudioElement | null>(null);

  const startExperience = () => {
    setHasStarted(true);
    if (christmasMusicRef.current) {
      christmasMusicRef.current.play().catch(e => console.log("Music play blocked", e));
    }
  };

  const handleOpenGift = () => {
    setIsOpened(true);
    if (christmasMusicRef.current) {
      christmasMusicRef.current.pause();
    }
    if (deltaMusicRef.current) {
      deltaMusicRef.current.currentTime = 0;
      deltaMusicRef.current.playbackRate = 1.6;
      deltaMusicRef.current.play().catch(e => console.log("Music play blocked", e));
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[#a81d1d]">
      {/* 动态背景层 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#8b0000] via-[#a81d1d] to-[#5d0e0e]">
        <div className="absolute inset-0 opacity-20 animate-pulse" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffeb3b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* 圣诞场景装饰 */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* 左侧：圣诞树 + 装饰 */}
        <div className="absolute bottom-24 left-[-20px] sm:left-4">
            <img src={IMAGES.XMAS_TREE} className="w-48 sm:w-64 drop-shadow-[0_0_30px_rgba(34,139,34,0.4)]" alt="Tree" />
            {/* 树上的闪烁小彩灯模拟 */}
            <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-yellow-300 rounded-full animate-ping shadow-[0_0_10px_yellow]"></div>
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
            <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-ping shadow-[0_0_10px_blue] delay-700"></div>
        </div>

        {/* 右侧：雪人 + 礼物堆 */}
        <div className="absolute bottom-24 right-2 flex flex-col items-end">
            <img src={IMAGES.SNOWMAN} className="w-32 sm:w-40 drop-shadow-2xl" alt="Snowman" />
            <div className="flex -mt-8 -mr-4">
                <img src={IMAGES.GIFT_STACK} className="w-24 sm:w-32 rotate-6" alt="Gifts" />
                <img src={IMAGES.GIFT_STACK} className="w-16 sm:w-24 -rotate-12 -ml-8 scale-75 opacity-90" alt="Gifts" />
            </div>
        </div>

        {/* 顶部：悬挂的铃铛和星星 */}
        <img src={IMAGES.XMAS_BELL} className="absolute top-8 left-8 w-20 animate-[wiggle_3s_infinite] origin-top drop-shadow-xl" alt="Bell" />
        <img src={IMAGES.STAR} className="absolute top-12 right-12 w-12 animate-pulse" alt="Star" />
        <img src={IMAGES.SANTA_HAT} className="absolute top-24 left-1/4 w-16 -rotate-12 opacity-80" alt="Hat" />
        <img src={IMAGES.CANDY_CANE} className="absolute top-4 right-1/4 w-14 rotate-12 opacity-80" alt="Candy" />
      </div>

      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
      `}</style>

      <audio ref={christmasMusicRef} src={MUSIC_URLS.CHRISTMAS} loop />
      <audio ref={deltaMusicRef} src={MUSIC_URLS.DELTA_MEME} loop />

      <SnowEffect count={80} />
      
      {!hasStarted ? (
        <div className="z-50 flex flex-col items-center">
            <div className="mb-10 text-center">
                <img src={IMAGES.GIFT_STACK} className="w-32 h-32 mx-auto animate-bounce mb-4" alt="Icon" />
                <h1 className="font-impact text-white text-5xl tracking-tighter drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                  干员，空投包已就绪
                </h1>
            </div>
            <button 
                onClick={startExperience}
                className="bg-[#228b22] text-white px-16 py-8 rounded-full text-4xl font-black shadow-[0_12px_0_#154715] border-4 border-[#ffd700] transform transition hover:scale-105 active:translate-y-2 active:shadow-none"
            >
                点击部署 🚁
            </button>
        </div>
      ) : (
        <div className="relative w-full h-full flex items-center justify-center z-20">
          {!isOpened ? (
            <div className="flex flex-col items-center scale-110">
                <div className="bg-white/10 backdrop-blur-2xl px-12 py-6 rounded-3xl border-2 border-white/40 mb-20 shadow-[0_0_50px_rgba(0,0,0,0.3)] transform -rotate-1">
                    <p className="font-impact text-[#ffd700] text-4xl text-center drop-shadow-lg tracking-[0.2em]">
                        机密物资：圣诞限定
                    </p>
                </div>
                <GiftBox onOpen={handleOpenGift} />
            </div>
          ) : (
            <DeltaReveal />
          )}
        </div>
      )}

      {/* 地面雪堆覆盖层 */}
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-white via-white/90 to-transparent z-10 pointer-events-none">
          <div className="absolute bottom-0 w-full h-32 bg-white rounded-t-[150px] shadow-[0_-20px_50px_rgba(255,255,255,0.5)]"></div>
      </div>
    </div>
  );
};

export default App;
