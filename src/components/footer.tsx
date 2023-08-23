import * as React from "react";

export const Footer = () => {
  return (
    <footer className="w-full mt-10 flex justify-center font-PT">
      <span className="mx-auto px-5 py-5 border-t-2 border-zinc-300">
        <a className="hover:underline" href="/resume.pdf">
          PDF Version
        </a>
      </span>
    </footer>
  );
};
