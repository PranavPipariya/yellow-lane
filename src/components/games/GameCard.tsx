"use client";

import Link from "next/link";
import * as React from "react";

type Props = {
  href?: string;
  title: string;
  description: string;
  cta: string;
  emoji?: string;
  disabled?: boolean;
  bgUrl?: string;
};

export function GameCard({
  href,
  title,
  description,
  cta,
  emoji,
  disabled,
  bgUrl,
}: Props) {
  const content = (
    <div
      className={cn(
        "group relative h-56 sm:h-64 rounded-2xl overflow-hidden",
        "ring-1 ring-white/10 hover:ring-white/20 transition-all",
        disabled ? "opacity-70 cursor-not-allowed" : "cursor-pointer",
      )}
    >
      {/* Background image */}
      <div
        className={cn(
          "absolute inset-0 bg-neutral-900",
          "bg-cover bg-center",
          "transition-transform duration-500 will-change-transform",
          !disabled && "group-hover:scale-105",
        )}
        style={{
          backgroundImage: bgUrl ? `url(${bgUrl})` : undefined,
        }}
      />

      {/* Gradient + blur overlay for readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

      {/* Glow on hover */}
      {!disabled && (
        <div
          className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: "0 0 80px 10px rgba(124, 58, 237, 0.35)" }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-5">
        <div className="flex items-center gap-2 text-white/90">
          {emoji ? <span className="text-xl">{emoji}</span> : null}
          <h4 className="text-lg font-semibold">{title}</h4>
        </div>
        <p className="mt-1 text-sm text-white/80 line-clamp-2">{description}</p>

        <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white/90">
          <span
            className={cn(
              "rounded-full px-3 py-1",
              "bg-white/10 backdrop-blur-sm",
              "border border-white/15",
              !disabled && "group-hover:bg-white/15",
            )}
          >
            {cta}
          </span>
        </div>
      </div>
    </div>
  );

  if (disabled || !href) return content;
  return <Link href={href}>{content}</Link>;
}
