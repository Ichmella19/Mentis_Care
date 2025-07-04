import React from "react";

const PageLoader = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-slate-900 transition-colors">
    <div className="flex flex-col items-center gap-8">
      {/* Cube Loader */}
      <div className="cube-loader">
        <div className="cube cube1"></div>
        <div className="cube cube2"></div>
        <div className="cube cube3"></div>
        <div className="cube cube4"></div>
      </div>
      <span className="text-2xl font-bold tracking-widest text-[#08A3DC] font-display drop-shadow-lg">
       MentisCare
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-300 tracking-wide">
        Chargement en cours...
      </span>
    </div>
    <style>{`
      .cube-loader {
        width: 60px;
        height: 60px;
        position: relative;
        margin: 0 auto;
      }
      .cube {
        width: 24px;
        height: 24px;
        background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
        position: absolute;
        border-radius: 6px;
        animation: cubeMove 1.2s infinite ease-in-out;
      }
      .cube1 { left: 0; top: 0; animation-delay: 0s; }
      .cube2 { right: 0; top: 0; animation-delay: 0.3s; }
      .cube3 { right: 0; bottom: 0; animation-delay: 0.6s; }
      .cube4 { left: 0; bottom: 0; animation-delay: 0.9s; }

      @keyframes cubeMove {
        0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
        25% { transform: scale(0.7) rotate(90deg); opacity: 0.7; }
        50% { transform: scale(1) rotate(180deg); opacity: 1; }
        75% { transform: scale(0.7) rotate(270deg); opacity: 0.7; }
      }
    `}</style>
  </div>
);

export default PageLoader;
