"use client";
import React, { useRef, useEffect, useState } from "react";
import * as monaco from "monaco-editor";
import Sidebar from "@/components/sidebar";
import Toolbar from "@/components/toolbar";

interface MonacoEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (containerRef.current) {
      monaco.editor.defineTheme("code", {
        base: "vs-dark",
        inherit: true,
        rules: [],
        colors: {
          "editor.background": "#151415",
          "editor.foreground": "#CACACAFF",
          "editor.lineHighlightBackground": "#212121FF",
          "editorCursor.foreground": "#AEAFAD",
        },
      });
      monaco.editor.setTheme("code");
      editorRef.current = monaco.editor.create(containerRef.current, {
        value,
        language: "typescript",
        theme: "code",
        fontSize: 14,
      });
      editorRef.current.onDidChangeModelContent(() => {
        const code = editorRef.current?.getValue();
        if (code) {
          onChange(code);
          monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            allowJs: true,
            checkJs: true,
            skipLibCheck: false,
            target: monaco.languages.typescript.ScriptTarget.ESNext,
            module: monaco.languages.typescript.ModuleKind.CommonJS,
            jsx: monaco.languages.typescript.JsxEmit.React,
            tsx: monaco.languages.typescript.JsxEmit.React,
          });
        }
      });
    }
    return () => {
      if (editorRef.current) {
        editorRef.current.dispose();
      }
    };
  }, [value, onChange]);
  return <div ref={containerRef} className="w-full h-full" />;
};
export default function Home() {
  const [code, setCode] = useState("");
  return (
    <>
      <main className="w-full h-screen overflow-hidden flex flex-col">
        <Toolbar />
        <Sidebar />
        <div className="flex ml-[70px] flex-row items-start justify-center w-full h-full">
          <MonacoEditor
            value={code}
            onChange={(e: any) => setCode(e.target.value)}
          />
        </div>
      </main>
    </>
  );
}
