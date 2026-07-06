"use client";

import { useRef, useState } from "react";
import Cover from "@/components/Cover";
import HeroStrip from "@/components/HeroStrip";
import InviteSection from "@/components/InviteSection";
import OurStory from "@/components/OurStory";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import WeddingCalendar from "@/components/WeddingCalendar";
import GiftSection from "@/components/GiftSection";
import Contact from "@/components/Contact";
import MapSection from "@/components/MapSection";
import RSVPSection from "@/components/RSVPSection";
import Guestbook from "@/components/Guestbook";
import MusicToggle, { MusicToggleHandle } from "@/components/MusicToggle";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [coverMounted, setCoverMounted] = useState(true);
  const musicRef = useRef<MusicToggleHandle>(null);

  return (
    <>
      {coverMounted && (
        <Cover
          onOpen={() => {
            setIsOpen(true);
            musicRef.current?.play();
          }}
          isOpen={isOpen}
          onExitComplete={() => setCoverMounted(false)}
        />
      )}

      <MusicToggle ref={musicRef} />

      <main>
        <HeroStrip />
        <InviteSection />
        <OurStory />
        <WeddingCalendar />
        <Countdown />
        <Timeline />
        <Gallery />
        <GiftSection />
        <Contact />
        <MapSection />
        <RSVPSection />
        <Guestbook />

        <footer className="bg-sage-panel py-10 px-6 text-center">
          <p className="font-display italic text-white/50 text-sm">
            Nguyễn Đình Hải Dương &amp; Phạm Thị Trà My
          </p>
          <p className="text-white/30 text-xs tracking-[0.2em] uppercase mt-1">
            25 · 07 · 2026
          </p>
        </footer>
      </main>
    </>
  );
}
