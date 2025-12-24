
import React, { useEffect, useState } from 'react';
import { IMAGES } from '../constants';

const DeltaReveal: React.FC = () => {
  const [showDiamond, setShowDiamond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowDiamond(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <style>{`
        @keyframes delta-pop {
          0% { transform: scale(0.5) translateY(50px); opacity: 0; }
          70% { transform: scale(1.1) translateY(-10px); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes diamond-sparkle {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 25px rgba(255,255,255,0.8)); transform: scale(1) rotate(0deg); }
          50% { filter: brightness(1.4) drop-shadow(0 0 50px rgba(255,255,255,1)); transform: scale(1.05) rotate(5deg); }
        }

        @keyframes ray-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .legendary-plate {
          background: linear-gradient(135deg, #8b4513 0%, #b8860b 25%, #ffd700 50%, #b8860b 75%, #8b4513 100%);
          box-shadow: 
            inset 0 2px 4px rgba(255,255,255,0.8),
            inset 0 -2px 4px rgba(0,0,0,0.5),
            0 8px 20px rgba(0,0,0,0.6);
          border: 2px solid #5d2e07;
          position: relative;
          animation: floating 4s ease-in-out infinite;
        }

        .legendary-plate::before {
          content: '';
          position: absolute;
          inset: 2px;
          border: 1px solid rgba(255,215,0,0.5);
          border-radius: inherit;
          pointer-events: none;
        }

        .embossed-text {
          color: #5d2e07;
          text-shadow: 1px 1px 1px rgba(255,255,255,0.6);
          font-weight: 900;
        }

        /* 赛博古典艺术标题 */
        .art-title-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: -0.05em; /* 紧凑排列 */
          filter: drop-shadow(0 0 20px rgba(220, 38, 38, 1));
          animation: floating 5s ease-in-out infinite 0.5s;
        }

        /* 积雪硬核宋体单字 */
        .char-box {
          position: relative;
          display: inline-block;
          line-height: 0.9;
          font-family: 'Noto Serif SC', serif; /* 使用宋体作为基础 */
          font-weight: 900;
          background: linear-gradient(
            to bottom, 
            #ffffff 0%, 
            #ffffff 22%, 
            #fff9c4 23%, 
            #fbc02d 45%, 
            #f57f17 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          /* 强化宋体的肃穆感，略微压扁一点点增加厚重感 */
          transform: scale(1.05, 1);
        }

        /* 古典错落重心配置 - 保持严谨的大气感 */
        .char-1 { transform: translateY(-4px) rotate(-1.5deg); }
        .char-2 { transform: translateY(6px) rotate(1deg); margin-left: -5px; }
        .char-3 { transform: translateY(-2px) rotate(-0.5deg); margin-left: -5px; }
        .char-4 { transform: translateY(8px) rotate(2deg); margin-left: -5px; }
        .char-5 { transform: translateY(-6px) rotate(-1deg); margin-left: -5px; }
        .char-6 { transform: translateY(4px) rotate(0.5deg); margin-left: -5px; }

        .delicate-gold {
          color: #fff176;
          text-shadow: 0 4px 10px rgba(0,0,0,0.9);
          letter-spacing: 0.6em;
          font-weight: 300;
          opacity: 0.9;
          animation: floating 6s ease-in-out infinite 1s;
        }
      `}</style>

      {/* 动态辐射背景 */}
      <div className="absolute w-[200vw] h-[200vw] animate-[ray-spin_25s_linear_infinite] opacity-30 pointer-events-none"
           style={{
             background: 'conic-gradient(from 0deg, transparent 0%, rgba(255,215,0,0.4) 15%, transparent 30%)',
             backgroundSize: '100% 100%'
           }}>
      </div>

      <div className="relative flex flex-col items-center animate-[delta-pop_0.6s_cubic-bezier(0.175,0.885,0.32,1.275)]">
        
        {/* 三角洲标志外框 */}
        <div className="relative w-80 h-80 flex items-center justify-center mb-4 animate-[floating_4.5s_ease-in-out_infinite]">
           <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-[0_0_100px_rgba(255,255,255,0.5)]">
             <polygon points="50,5 98,90 2,90" fill="white" />
             <polygon points="50,12 92,86 8,86" fill="#c41e3a" />
             <polygon points="50,18 86,81 14,81" fill="white" />
           </svg>

           {/* 非洲之星钻石 */}
           {showDiamond && (
             <div className="relative w-56 h-56 z-10 flex items-center justify-center animate-[diamond-sparkle_2s_infinite]">
                <img 
                  src={IMAGES.STAR_OF_AFRICA} 
                  alt="Diamond"
                  className="w-full h-full object-contain"
                />
             </div>
           )}
        </div>

        {/* 底部祝福文案区 */}
        <div className="mt-8 text-center z-20 px-4 flex flex-col items-center">
          
          {/* 3D 传说铭牌 */}
          <div className="legendary-plate px-12 py-3 rounded-lg mb-14 transform -rotate-1">
            <span className="font-impact text-3xl tracking-[0.5em] embossed-text">
              传说级奖励
            </span>
          </div>
          
          <div className="space-y-12">
            {/* 主标题：赛博古典艺术徽标 */}
            <div className="art-title-logo select-none">
              <span className="char-box char-1 text-8xl">圣</span>
              <span className="char-box char-2 text-8xl">诞</span>
              <span className="char-box char-3 text-8xl">快</span>
              <span className="char-box char-4 text-8xl">乐</span>
              <span className="char-box char-5 text-8xl">干</span>
              <span className="char-box char-6 text-8xl">员</span>
            </div>
            
            {/* 副标题：精致细金字 */}
            <div className="mt-8 flex flex-col items-center">
                <p className="delicate-gold text-2xl uppercase italic">
                  愿幸运常伴你左右
                </p>
                <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mt-8 opacity-60 animate-[floating_7s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>

        {/* 氛围粒子 */}
        {[...Array(35)].map((_, i) => (
            <div 
                key={i}
                className="absolute bg-white/40 w-1.5 h-1.5 rounded-full animate-ping"
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 2}s`
                }}
            />
        ))}
      </div>
    </div>
  );
};

export default DeltaReveal;
