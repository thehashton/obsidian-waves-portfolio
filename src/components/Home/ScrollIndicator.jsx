"use client";
export const ScrollIndicator = () => {
  return (
    <div className="absolute right-2 md:top-1/4 transform -translate-y-1/2 animate-pulseSlow rotate-90 -right-[30px]">
      <div className="flex flex-col items-center gap-0">
        {/*<span className="text-white tracking-widest rotate-90">/</span>*/}
        <span className="text-white tracking-widest">// SCROLL //</span>
        {/*<span className="text-white tracking-widest rotate-90">/</span>*/}
      </div>
    </div>
  );
};
