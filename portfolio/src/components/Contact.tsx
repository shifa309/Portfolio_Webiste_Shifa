import { useState, type FormEvent } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/content";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";

// Replace with your own Formspree endpoint: https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

type Status = "idle" | "sending" | "sent" | "error";

const contactCards = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
  { icon: GithubIcon, label: "GitHub", value: "github.com/shifa309", href: profile.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedin },
];

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
      <SectionHeading
        title="Let's Work Together"
        subtitle="Ready to bring your next project to life? Let's discuss how my experience in Generative AI and Agentic AI can help achieve your goals."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {contactCards.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-panel p-5 transition-colors hover:border-primary/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-medium text-ink">{label}</p>
                  <p className="text-[14px] text-ink-soft">{value}</p>
                </div>
              </div>
            );
            const isExternal = href?.startsWith("http");
            return href ? (
              <a
                key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="block focus-ring rounded-2xl"
              >
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-panel p-6"
        >
          {status === "sent" ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
              <CheckCircle2 className="text-signal" size={36} />
              <p className="font-medium text-ink">Message sent.</p>
              <p className="text-[14px] text-ink-soft">Thanks for reaching out — I'll reply soon.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              <h3 className="font-display text-lg font-semibold text-ink">Send a Message</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-lg border border-border bg-bg px-3.5 py-2.5 text-[14px] text-ink placeholder:text-muted focus-ring"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-lg border border-border bg-bg px-3.5 py-2.5 text-[14px] text-ink placeholder:text-muted focus-ring"
                />
              </div>
              <input
                name="subject"
                placeholder="Subject"
                className="w-full rounded-lg border border-border bg-bg px-3.5 py-2.5 text-[14px] text-ink placeholder:text-muted focus-ring"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full resize-none rounded-lg border border-border bg-bg px-3.5 py-2.5 text-[14px] text-ink placeholder:text-muted focus-ring"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-2.5 font-medium text-bg transition-transform hover:-translate-y-0.5 focus-ring disabled:opacity-60"
              >
                <Send size={16} />
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
              {status === "error" && (
                <p className="text-[13px] text-red-500">
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
