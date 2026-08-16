"use client";

import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import Magnetic from "@/components/motion/Magnetic";
import ColorWipe from "@/components/motion/ColorWipe";
import Reveal from "@/components/motion/Reveal";

const channels = [
  { key: "email", icon: Mail, value: "abraham_venegaz@hotmail.com", href: "mailto:abraham_venegaz@hotmail.com", external: false },
  { key: "phone", icon: Phone, value: "+52 33 1881 9794", href: "tel:+523318819794", external: false },
  { key: "linkedin", icon: LinkedinIcon, value: "linkedin.com/in/edgar-venegas", href: "https://linkedin.com/in/edgar-venegas", external: true },
  { key: "github", icon: GithubIcon, value: "github.com/EdgarVenegasDev", href: "https://github.com/EdgarVenegasDev", external: true },
];

export default function Contact() {
  return (
    <ColorWipe from="var(--story-navy)">
      <section id="contact" className="relative flex min-h-screen items-center justify-center bg-[var(--paper)] px-6 py-32">
        <Reveal>
          <div className="flex flex-wrap items-start justify-center gap-x-16 gap-y-14 sm:gap-x-20">
            {channels.map((channel) => {
              const Icon = channel.icon;

              return (
                <div key={channel.key} className="flex flex-col items-center text-center">
                  <Magnetic strength={0.35}>
                    {channel.external ? (
                      <a href={channel.href} target="_blank" rel="noopener noreferrer" aria-label={channel.value} className="group flex h-16 w-16 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] transition-all duration-500 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white sm:h-20 sm:w-20">
                        <Icon size={24} />
                      </a>
                    ) : (
                      <a href={channel.href} aria-label={channel.value} className="group flex h-16 w-16 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] transition-all duration-500 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white sm:h-20 sm:w-20">
                        <Icon size={24} />
                      </a>
                    )}
                  </Magnetic>

                  <p className="mt-4 max-w-[10rem] font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
                    {channel.value}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>
    </ColorWipe>
  );
}