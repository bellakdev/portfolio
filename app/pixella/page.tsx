import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixella — Photo & Video Editor",
  description: "Pixella is an on-device photo and video editor for iPhone: AI enhance, beauty retouch, background removal, filters, effects, text, stickers, collage and video editing.",
};

const features = [
  ["AI Studio", "One-tap enhance, 2× HD upscale, auto beauty, subject cutout, portrait blur and seven art styles."],
  ["Beauty", "Smooth skin, glow, slim face, bigger eyes, whiter teeth, blush and lip colour — faces are found automatically."],
  ["Background", "Remove the background for a transparent PNG, or replace it with blur, a colour or a gradient."],
  ["Edit", "Crop and rotate, 15 adjustments, 22 filters and 16 effects including glitch, VHS, light leak and bokeh."],
  ["Create", "Text with outlines and labels, emoji stickers and shapes, neon and marker brushes, mosaic and blur brushes, frames."],
  ["Video", "Trim, change speed from 0.25× to 4×, apply filters and effects, add captions, stickers and background music."],
  ["Collage", "Combine 2–9 photos with adjustable layouts, spacing, corners and background colour."],
];

export default function PixellaPage() {
  return (
    <main className="min-h-screen bg-th-bg text-th-body">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <a href="/" className="text-sm font-medium text-th-accent hover:text-th-heading transition">← Bella Kim</a>

        <div className="mt-10 flex items-center gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/pixella/icon.png" alt="Pixella app icon" width={88} height={88} className="rounded-[22px] shadow-sm" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-th-heading">Pixella</h1>
            <p className="mt-1 text-th-prose">Photo &amp; video editor for iPhone</p>
          </div>
        </div>

        <p className="mt-8 leading-relaxed text-th-prose">
          Pixella is a SwiftUI photo and video editor. Every edit — including face retouching and background removal — runs
          on your iPhone with Core Image, Vision and AVFoundation. There is no account, no server and no tracking.
        </p>

        <h2 className="mt-12 text-sm font-semibold uppercase tracking-widest text-th-heading">Features</h2>
        <ul className="mt-4 space-y-4">
          {features.map(([title, body]) => (
            <li key={title} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-th-accent" />
              <p className="text-sm leading-relaxed text-th-prose"><span className="font-medium text-th-heading">{title}.</span> {body}</p>
            </li>
          ))}
        </ul>

        <h2 id="support" className="mt-12 text-sm font-semibold uppercase tracking-widest text-th-heading">Support</h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-th-prose">
          <p>Questions, bug reports or feature requests? Email <a className="text-th-accent hover:text-th-heading" href="mailto:b37kim@uwaterloo.ca?subject=Pixella%20support">b37kim@uwaterloo.ca</a> and include your iPhone model and iOS version.</p>
          <p><span className="font-medium text-th-heading">Saving fails?</span> Allow Pixella to add photos in Settings → Privacy &amp; Security → Photos → Pixella.</p>
          <p><span className="font-medium text-th-heading">Beauty tools do nothing?</span> They need a clearly visible face; the panel shows how many faces were found.</p>
          <p><span className="font-medium text-th-heading">Background removal can&apos;t find a subject?</span> Try a photo where the person, pet or object stands out from the background.</p>
        </div>

        <p className="mt-12 text-sm text-th-prose">
          <a className="text-th-accent hover:text-th-heading" href="/pixella/privacy">Privacy policy</a>
        </p>
      </div>
    </main>
  );
}
