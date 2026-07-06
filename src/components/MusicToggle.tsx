"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";

export type MusicToggleHandle = { play: () => void };

function NoteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

const MusicToggle = forwardRef<MusicToggleHandle>(function MusicToggle(_, ref) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    play: () => {
      audioRef.current
        ?.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    },
  }));

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/background.mp3" loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? "Tắt nhạc nền" : "Bật nhạc nền"}
        className="fixed bottom-5 right-5 z-[400] w-11 h-11 rounded-full bg-sage-panel text-white flex items-center justify-center shadow-lg hover:bg-sage transition-colors duration-200"
      >
        <span className={playing ? "animate-spin-slow" : ""}>
          <NoteIcon />
        </span>
      </button>
    </>
  );
});

export default MusicToggle;
