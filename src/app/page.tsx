"use client";

import React, { useState, useEffect } from "react";

// Standard Types for timeline and objectives
interface TimelineItem {
  date: string;
  activity: string;
  description: string;
  color: "red" | "yellow" | "green" | "blue";
}

interface ObjectiveItem {
  title: string;
  desc: string;
}

export default function Home() {
  // Target date for the Kick-Off: June 25, 2026 at 9:00 AM UTC+8 (Manila time)
  const targetDate = new Date("2026-06-25T09:00:00+08:00").getTime();

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  // Hydration state check
  const [isHydrated, setIsHydrated] = useState(false);

  // Toast / Prompt Alert State for placeholders
  const [activeAlert, setActiveAlert] = useState<{
    show: boolean;
    title: string;
    details: string;
    lineRef: string;
  }>({
    show: false,
    title: "",
    details: "",
    lineRef: "",
  });

  // Calculate time remaining
  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setIsHydrated(true);
    });

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft((prev) => ({ ...prev, isExpired: true }));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      });
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => {
      cancelAnimationFrame(handle);
      clearInterval(intervalId);
    };
  }, [targetDate]);

  // Handler for Photobooth and DP Blast placeholder CTAs
  const handlePlaceholderClick = (ctaName: string, lineNo: string) => {
    setActiveAlert({
      show: true,
      title: `${ctaName} Placeholder Triggered!`,
      details: `This button acts as a placeholder redirection link. Developers: replace the href in "src/app/page.tsx" at line ${lineNo} with the production service URL.`,
      lineRef: lineNo,
    });

    // Auto-dismiss alert after 8 seconds
    setTimeout(() => {
      setActiveAlert((prev) => (prev.lineRef === lineNo ? { ...prev, show: false } : prev));
    }, 8000);
  };

  const timelineData: TimelineItem[] = [
    {
      date: "June 1 – June 18",
      activity: "Pre-Event Promotions",
      description: "Exciting teasers, campus tours, and social media build-ups. Get ready to ignite your innovation!",
      color: "red",
    },
    {
      date: "June 19",
      activity: "Registration Opens",
      description: "Registration portal goes live. Secure your slot and prepare your team profiles.",
      color: "blue",
    },
    {
      date: "June 25",
      activity: "Kick-Off Program",
      description: "The grand launch of SparkFest 2026. Setting the rules, revealing tracks, and matchmaking partners.",
      color: "yellow",
    },
    {
      date: "July 2",
      activity: "First Submission",
      description: "Initial prototype submission deadline. Teams upload progress logs and pitch outlines.",
      color: "green",
    },
    {
      date: "July 3 – July 6",
      activity: "Workshops & Mentorship",
      description: "Engage in technical and product bootcamps. Industry mentors guide teams on refinement.",
      color: "blue",
    },
    {
      date: "July 9",
      activity: "Pitching & Awarding",
      description: "The final showdown! Pitch ideas to judges and industry leaders.",
      color: "red",
    },
  ];

  const objectives: ObjectiveItem[] = [
    {
      title: "Drive Innovation",
      desc: "Implement technology-driven software solutions addressing real community pain points.",
    },
    {
      title: "Strengthen Collaboration",
      desc: "Develop interdisciplinary teamwork between developers, designers, and project lead creators.",
    },
    {
      title: "Hands-on Experience",
      desc: "Gain raw experience in hackathons and startup simulation runs with active feedback.",
    },
    {
      title: "Community Outreach",
      desc: "Create social accountability where winning projects benefit real underserved sectors.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-off-white text-black-02 selection:bg-halftone-blue selection:text-black-02">
      {/* Dev Mode Notification Toast */}
      {activeAlert.show && (
        <div className="fixed top-6 right-6 z-50 max-w-md animate-bounce border-2 border-black-02 bg-pastel-yellow p-4 shadow-retro">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-bold text-google-red-500 uppercase tracking-wider text-sm flex items-center gap-2">
                <span>⚡</span> {activeAlert.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-black-02 font-medium">
                {activeAlert.details}
              </p>
            </div>
            <button
              onClick={() => setActiveAlert({ ...activeAlert, show: false })}
              className="ml-4 rounded-full border border-black-02 px-1 text-xs hover:bg-black-02 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="mt-3 text-xs font-mono bg-black-02 text-white p-1 rounded-sm text-center">
            LINE: {activeAlert.lineRef} (src/app/page.tsx)
          </div>
        </div>
      )}

      {/* Main Grid Wrapper */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <header className="flex flex-col items-center justify-between gap-4 border-2 border-black-02 bg-white p-4 shadow-retro sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black-02 bg-google-blue-500 font-bold text-white shadow-retro">
              GDG
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-google-blue-500">CAMPUS PUP MANILA</span>
              <h1 className="text-lg font-bold leading-none tracking-tight">SPARKFEST &apos;26</h1>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-3">
            <a href="#about" className="px-3 py-1.5 text-sm font-semibold hover:underline">About</a>
            <a href="#timeline" className="px-3 py-1.5 text-sm font-semibold hover:underline">Timeline</a>
            <a href="#engagement" className="px-3 py-1.5 text-sm font-semibold hover:underline">Tools</a>
            <a
              href="https://forms.gle/RvTz12mqGWmVX9mn8"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black-02 bg-google-blue-500 px-4 py-1.5 text-sm font-bold text-white shadow-retro hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-retro-hover transition-all"
            >
              Register Now ↗
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="mt-8 grid gap-8 md:grid-cols-12">
          {/* Main Hero Card */}
          <div className="border-2 border-black-02 bg-white p-6 shadow-retro md:col-span-8 flex flex-col justify-between">
            <div>
              <div className="inline-block border-2 border-black-02 bg-pastel-blue px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-black-02">
                🚀 Flagship Startup Hackathon
              </div>
              <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl leading-tight">
                Igniting Innovation.<br />
                Building Impact.<br />
                <span className="bg-halftone-yellow px-1 underline decoration-google-blue-500 decoration-wavy">Empowering Communities.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-zinc-600">
                SparkFest 2026 bridges the gap between technology and community impact. Join PUP’s flagship hackathon, collaborate in interdisciplinary teams, and build solutions that matter.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="https://forms.gle/RvTz12mqGWmVX9mn8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center border-2 border-black-02 bg-google-blue-500 font-extrabold text-white shadow-retro hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-retro-hover transition-all"
              >
                SECURE YOUR SLOT ↗
              </a>
              <a
                href="#about"
                className="flex h-12 items-center justify-center border-2 border-black-02 bg-white font-extrabold text-black-02 shadow-retro hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-retro-hover transition-all"
              >
                LEARN MORE ↓
              </a>
            </div>
          </div>

          {/* Countdown Side Card */}
          <div className="border-2 border-black-02 bg-pastel-yellow p-6 shadow-retro md:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-black-02 border-b-2 border-black-02 pb-2">
                Countdown to Launch
              </h3>
              <p className="mt-2 text-xs font-semibold text-google-red-500 uppercase tracking-widest">
                KICK-OFF PROGRAM — JUNE 25, 2026
              </p>

              {isHydrated ? (
                timeLeft.isExpired ? (
                  <div className="mt-8 text-center border-2 border-black-02 bg-white p-4 font-bold shadow-retro">
                    🚀 HACKATHON IN PROGRESS!
                  </div>
                ) : (
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="border-2 border-black-02 bg-white p-3 text-center shadow-retro">
                      <span className="block text-3xl font-extrabold leading-none tracking-tight">
                        {timeLeft.days}
                      </span>
                      <span className="mt-1 block text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        Days
                      </span>
                    </div>
                    <div className="border-2 border-black-02 bg-white p-3 text-center shadow-retro">
                      <span className="block text-3xl font-extrabold leading-none tracking-tight">
                        {timeLeft.hours}
                      </span>
                      <span className="mt-1 block text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        Hours
                      </span>
                    </div>
                    <div className="border-2 border-black-02 bg-white p-3 text-center shadow-retro">
                      <span className="block text-3xl font-extrabold leading-none tracking-tight">
                        {timeLeft.minutes}
                      </span>
                      <span className="mt-1 block text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        Min
                      </span>
                    </div>
                    <div className="border-2 border-black-02 bg-white p-3 text-center shadow-retro">
                      <span className="block text-3xl font-extrabold leading-none tracking-tight">
                        {timeLeft.seconds}
                      </span>
                      <span className="mt-1 block text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        Sec
                      </span>
                    </div>
                  </div>
                )
              ) : (
                <div className="mt-8 text-center text-sm font-semibold animate-pulse text-zinc-500">
                  Loading event timer...
                </div>
              )}
            </div>

            <div className="mt-8 border-t-2 border-black-02 pt-4">
              <div className="flex justify-between text-xs font-bold">
                <span>Registration Date:</span>
                <span className="text-google-blue-500">June 19, 2026</span>
              </div>
              <div className="mt-2 flex justify-between text-xs font-bold">
                <span>Location:</span>
                <span className="text-google-green-500">Bulwagang Bonifacio, PUP</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: About, Rationale, and Objectives */}
        <section id="about" className="mt-12 grid gap-8 md:grid-cols-2">
          {/* About Event Description */}
          <div className="border-2 border-black-02 bg-white p-6 shadow-retro flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">About the Event</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                SparkFest 2026 is organized by **Google Developer Groups on Campus Polytechnic University of the Philippines (GDG PUP)**. This innovation challenge replicates professional startup workflows. We bring together developers, designers, and project organizers to spark fresh solutions.
              </p>
              
              <h4 className="mt-6 text-lg font-bold border-l-4 border-google-yellow-500 pl-3">Rationale</h4>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                We bridge the gap between abstract technology and community relevance. Beyond coding, GDG PUP drives outreach campaigns that support transport drivers, campus guards, and local vendors. Winning project directions shape our community outreach targets.
              </p>
            </div>

            {/* Venue and Participation Badges */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 border-t-2 border-black-02 pt-6">
              <div className="bg-pastel-green p-3 border-2 border-black-02 shadow-retro">
                <span className="text-xs font-bold uppercase tracking-widest text-google-green-500">📍 Venue Location</span>
                <p className="mt-1 text-xs font-extrabold text-black-02">Bulwagang Bonifacio, PUP Manila</p>
              </div>
              <div className="bg-pastel-red p-3 border-2 border-black-02 shadow-retro">
                <span className="text-xs font-bold uppercase tracking-widest text-google-red-500">👥 Eligibility</span>
                <p className="mt-1 text-xs font-extrabold text-black-02">PUP & External College Students</p>
              </div>
            </div>
          </div>

          {/* Objectives Grid */}
          <div className="border-2 border-black-02 bg-pastel-blue p-6 shadow-retro">
            <h3 className="text-2xl font-bold tracking-tight text-black-02">Our Core Objectives</h3>
            <p className="mt-2 text-xs font-bold text-google-blue-500 tracking-wider">GUIDING THE SPARKFEST EXPERIENCE</p>
            
            <div className="mt-6 grid gap-4">
              {objectives.map((obj, idx) => (
                <div key={idx} className="border-2 border-black-02 bg-white p-4 shadow-retro hover:scale-[1.01] transition-transform">
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-black-02 flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-google-blue-500 text-[10px] text-white">
                      {idx + 1}
                    </span>
                    {obj.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600 font-medium">
                    {obj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Interactive Timeline */}
        <section id="timeline" className="mt-12 border-2 border-black-02 bg-white p-6 shadow-retro">
          <div className="text-center md:text-left">
            <div className="inline-block border-2 border-black-02 bg-pastel-yellow px-3 py-1 text-xs font-extrabold uppercase tracking-widest">
              📆 Event Roadmap
            </div>
            <h3 className="mt-4 text-3xl font-extrabold tracking-tight">Timeline & Milestones</h3>
            <p className="mt-2 text-sm text-zinc-500">Follow the journey from pre-promotions to final awards night.</p>
          </div>

          {/* Timeline Nodes */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {timelineData.map((item, idx) => {
              const borderColors = {
                red: "hover:border-google-red-500",
                yellow: "hover:border-google-yellow-500",
                green: "hover:border-google-green-500",
                blue: "hover:border-google-blue-500",
              };
              const bgColors = {
                red: "bg-pastel-red",
                yellow: "bg-pastel-yellow",
                green: "bg-pastel-green",
                blue: "bg-pastel-blue",
              };
              
              return (
                <div
                  key={idx}
                  className={`border-2 border-black-02 p-5 bg-white shadow-retro transition-all hover:-translate-y-1 ${borderColors[item.color]}`}
                >
                  <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                    <span className={`px-2 py-0.5 text-xs font-bold border border-black-02 shadow-retro ${bgColors[item.color]}`}>
                      {item.date}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">Phase 0{idx + 1}</span>
                  </div>
                  <h4 className="mt-3 text-base font-extrabold text-black-02">
                    {item.activity}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500 font-medium">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: Secondary Engagement Tools (Redirections) */}
        <section id="engagement" className="mt-12 border-2 border-black-02 bg-pastel-red p-6 shadow-retro text-center">
          <h3 className="text-2xl font-extrabold tracking-tight">Participant Engagement Hub</h3>
          <p className="mt-2 text-sm text-zinc-700 max-w-lg mx-auto font-medium">
            Generate your personalized event avatar profiles and record memorable captures at the virtual booths.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
            {/* CTA 1: Photobooth */}
            <div className="border-2 border-black-02 bg-white p-6 shadow-retro flex flex-col justify-between items-center">
              <div>
                <span className="text-[2.5rem]">📸</span>
                <h4 className="mt-3 text-lg font-bold">GDG Virtual Photobooth</h4>
                <p className="mt-2 text-xs text-zinc-500 leading-relaxed font-medium">
                  Capture custom branded event frames to showcase your developer group credentials online.
                </p>
              </div>
              <button
                onClick={() => handlePlaceholderClick("GDG Photobooth", "327")}
                className="mt-6 w-full py-2.5 border-2 border-black-02 bg-google-red-500 text-white font-extrabold text-xs shadow-retro hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-retro-hover transition-all"
              >
                LAUNCH PHOTOBOOTH
              </button>
            </div>

            {/* CTA 2: DP Blast */}
            <div className="border-2 border-black-02 bg-white p-6 shadow-retro flex flex-col justify-between items-center">
              <div>
                <span className="text-[2.5rem]">🎨</span>
                <h4 className="mt-3 text-lg font-bold">Spark DP Blast Generator</h4>
                <p className="mt-2 text-xs text-zinc-500 leading-relaxed font-medium">
                  Create social media display profile borders integrated with SparkFest 2026 innovation theme lines.
                </p>
              </div>
              <button
                onClick={() => handlePlaceholderClick("DP Blast", "340")}
                className="mt-6 w-full py-2.5 border-2 border-black-02 bg-google-green-500 text-white font-extrabold text-xs shadow-retro hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-retro-hover transition-all"
              >
                GENERATE DP FRAME
              </button>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <footer className="mt-16 border-t-2 border-zinc-200 pt-8 text-center text-xs font-semibold text-zinc-400">
          <p>© 2026 Google Developer Groups on Campus - Polytechnic University of the Philippines</p>
          <p className="mt-1 text-[10px]">Built for innovators and social impact creators in Manila</p>
        </footer>

      </div>
    </div>
  );
}

// References for CTA lines to fulfill developer feedback rules:
// Line 327: Photobooth placeholder (triggers click handle Alert display)
// Line 340: DP Blast placeholder (triggers click handle Alert display)
