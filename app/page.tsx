import Sidebar from "@/components/sidebar";
import Toolbar from "@/components/toolbar";
import React from "react";

export default function Home() {
  return (
    <>
      <main className="w-full h-full flex flex-col">
        <Toolbar />
        <div className="flex flex-row items-center w-full h-full">
          <Sidebar />
          <div className="w-full code-area text-md font-normal">Code areae</div>
        </div>
      </main>
    </>
  );
}
