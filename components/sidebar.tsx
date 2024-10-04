import React from "react";

export default function Sidebar() {
  return (
    <>
      <nav className="h-full mt-10 z-[10] fixed left-0 flex space-y-2.5 flex-col py-[10px] px-2 w-[70px] border-r dark:border-dark-border border-light-border bg-light-foreground dark:bg-dark-foreground">
        <a className="w-full group transition-all ease-linear duration-100 flex flex-col items-center text-center justify-center">
          <div className="bg-zinc-800 flex flex-col items-center justify-center rounded-full h-8 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover: group-active:"
            >
              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
            </svg>
          </div>
          <span className="group-hover:font-[450] group-active:font-[450] text-[13.5px] mt-[2.5px] font-[420] tracking-[-0.005em]">
            Explorer
          </span>
        </a>
        <a className="w-full group transition-all ease-linear duration-100 flex flex-col items-center text-center justify-center">
          <div className="transition-all flex flex-col items-center justify-center ease-linear duration-100 hover:bg-zinc-800 bg-zinc-800/70 rounded-full h-8 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-0.5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <span className="group-hover:font-[450] group-active:font-[450] text-[13.5px] mt-[2.5px] font-[420] tracking-[-0.005em]">
            Search
          </span>
        </a>
        <a className="w-full group transition-all ease-linear duration-100 flex flex-col items-center text-center justify-center">
          <div className="transition-all flex flex-col items-center justify-center ease-linear duration-100 hover:bg-zinc-800 bg-zinc-800/70 rounded-full h-8 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-0.5"
            >
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </div>
          <span className="group-hover:font-[450] group-active:font-[450] text-[13.5px] mt-[2.5px] font-[420] tracking-[-0.005em]">
            Run
          </span>
        </a>
      </nav>
    </>
  );
}
