import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { profile } from "../data/content";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import profilePhoto from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid gap-14 md:grid-cols-[1.15fr_1fr] md:items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl"
          >
            Hello, I'm
            <br />
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {profile.title} building AI-augmented software — conversational systems,
            retrieval pipelines and applied ML tools that hold up in production.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted"
          >
            {profile.objective}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="/Shifa_Imran_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 font-medium text-bg transition-transform hover:-translate-y-0.5 focus-ring"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-border bg-panel px-5 py-2.5 font-medium text-ink transition-transform hover:-translate-y-0.5 focus-ring"
            >
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:text-primary focus-ring"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:text-primary focus-ring"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:text-primary focus-ring"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="aspect-square w-full overflow-hidden rounded-full border border-border bg-panel">
            <img
              src={profilePhoto}
              alt={profile.name}
              className="h-full w-full object-cover"
              style={{ objectPosition: "50% 12%" }}
            />
          </div>

          <div className="absolute bottom-2 right-0 flex items-center gap-2 rounded-full border border-border bg-panel px-4 py-2 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.4)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
            </span>
            <span className="text-[13px] font-medium text-ink">Available for hire</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
