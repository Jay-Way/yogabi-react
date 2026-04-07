"use client";

import { useState, useEffect } from "react";

const GITHUB_URL = "https://github.com/Jay-Way/yogabi-react";

export function ClosedModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("modal-dismissed")) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    localStorage.setItem("modal-dismissed", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          aria-label="Schließen"
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 text-xl leading-none"
        >
          ✕
        </button>

        <div className="text-5xl mb-4">🙏</div>

        <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
          Dieses Yogastudio hat geschlossen.
        </h2>

        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6">
          Die Website bleibt als Referenz online und zeigt, wie eine statische
          React-App mit Next.js auf AWS (S3 + CloudFront) deployt werden kann.
        </p>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-zinc-800 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
        >
          Quellcode auf GitHub →
        </a>

        <button
          onClick={dismiss}
          className="block mx-auto mt-4 text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          Seite weiter erkunden
        </button>
      </div>
    </div>
  );
}
