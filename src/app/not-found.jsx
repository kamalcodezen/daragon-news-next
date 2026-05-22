"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Plane, Sparkles, Telescope } from "lucide-react";

const NotFoundGlobal = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030014] px-4">
      {/* STARS */}

      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => {
          const size = (i % 3) + 1;

          const top = (i * 37) % 100;

          const left = (i * 53) % 100;

          return (
            <motion.span
              key={i}
              animate={{
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 2 + (i % 5),
                repeat: Infinity,
              }}
              className="absolute rounded-full bg-white"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
              }}
            />
          );
        })}
      </div>

      {/* SHOOTING STARS */}

      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: "-20%",
            y: "-20%",
            opacity: 0,
          }}
          animate={{
            x: "120vw",
            y: "120vh",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 2,
            repeat: Infinity,
          }}
          className="absolute h-[2px] w-32 rotate-[-25deg] bg-gradient-to-r from-white to-transparent"
        />
      ))}

      {/* GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* MAIN */}

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center text-center">
        {/* ICON */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative mb-6"
        >
          <div className="absolute inset-[-20px] rounded-full border border-cyan-400/20" />

          <div className="absolute inset-[-40px] rounded-full border border-violet-400/10" />

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 shadow-[0_0_80px_rgba(59,130,246,0.6)]">
            <Plane className="size-14 text-white" />
          </div>
        </motion.div>

        {/* 404 */}

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            type: "spring",
          }}
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-[90px] font-black leading-none text-transparent md:text-[180px]"
        >
          404
        </motion.h1>

        {/* TITLE */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-2 text-3xl font-black tracking-tight text-white md:text-6xl"
        >
          Universe Not Found
        </motion.h2>

        {/* DESC */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
          }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg"
        >
          The page you are searching for disappeared into another dimension.
        </motion.p>

        {/* BUTTONS */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
          }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/">
            <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-8 py-4 font-bold text-white shadow-[0_10px_50px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="size-5" />
                Back To Home
              </span>
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-white/10"
          >
            Go Back
          </button>
        </motion.div>

        {/* ICONS */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="mt-8 flex items-center gap-6"
        >
          <Telescope className="size-7 text-cyan-400/70" />

          <Sparkles className="size-7 text-violet-400/70" />

          <Plane className="size-7 text-blue-400/70" />
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundGlobal;
