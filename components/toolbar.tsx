import React from "react";

export default function Toolbar() {
  return (
    <nav className="sticky top-0 flex flex-row items-center justify-between w-full py-1.5 bg-dark-foreground px-2.5">
      <div className="flex flex-row items-center space-x-0.5 w-full">
        <a className="text-sm hover:bg-zinc-800/70 px-[9px] py-1 rounded-lg hover:text-white text-zinc-50 transition-all ease-linear duration-100 hover:font-[450] font-normal tracking-[-0.015]">
          Dosya
        </a>
        <a className="text-sm hover:bg-zinc-800/70 px-[9px] py-1 rounded-lg hover:text-white text-zinc-50 transition-all ease-linear duration-100 hover:font-[450] font-normal tracking-[-0.015]">
          Düzenle
        </a>
        <a className="text-sm hover:bg-zinc-800/70 px-[9px] py-1 rounded-lg hover:text-white text-zinc-50 transition-all ease-linear duration-100 hover:font-[450] font-normal tracking-[-0.015]">
          Görünüm
        </a>
        <a className="text-sm hover:bg-zinc-800/70 px-[9px] py-1 rounded-lg hover:text-white text-zinc-50 transition-all ease-linear duration-100 hover:font-[450] font-normal tracking-[-0.015]">
          Terminal
        </a>
      </div>
      <div className="flex flex-row items-center w-full justify-start">
        flex
      </div>
    </nav>
  );
}
