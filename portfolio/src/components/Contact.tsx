import { useState, type FormEvent } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/content";
import { Mail, Phone, Link2, CheckCircle2 } from "lucide-react";
import GithubIcon from "./GithubIcon";

// Replace with your own Formspree endpoint: https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="// contact" title="Let's build something" />

      <div className="mt-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-lg leading-relaxed text-ink-soft">
            Have a role, project, or idea in mind? My inbox is open — reach out directly or use
            the form.
          </p>
          <div className="mt-6 space-y-3 font-mono text-[14px] text-ink-soft">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-primary transition-colors w-fit focus-ring rounded">
              <Mail size={16} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors w-fit focus-ring rounded">
              <Phone size={16} /> {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors w-fit focus-ring rounded">
              <Link2 size={16} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors w-fit focus-ring rounded">
              <GithubIcon size={16} /> GitHub
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-panel p-6">
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
              <CheckCircle2 className="text-signal" size={36} />
              <p className="font-medium text-ink">Message sent.</p>
              <p className="text-[14px] text-ink-soft">Thanks for reaching out — I'll reply soon.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-mono text-[12px] text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-[14px] text-ink focus-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-[12px] text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-[14px] text-ink focus-ring"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block font-mono text-[12px] text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-border bg-bg px-3 py-2 text-[14px] text-ink focus-ring"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white transition-transform hover:-translate-y-0.5 focus-ring disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "error" && (
                <p className="text-[13px] text-red-600">
                  Something went wrong — try emailing directly instead.
                </p>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
