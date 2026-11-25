/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Footer } from "./Brand";

export const metadata: Metadata = {
  title: "Pixella",
  description: "Pixella: a photo and video editor for iPhone. Natural beauty retouching, makeup, reshaping, filters and effects, all on your phone.",
};

const features: [string, string][] = [
  ["Beauty that looks real", "Smooth skin without the plastic look. Lipstick, blush, brows, liner and lashes follow your face's own light, shade and texture, in shades for every skin tone."],
  ["Reshape any feature", "Slim the face or jaw, resize and tilt the eyes, nose, brows and lips. Each change stays where you put it, and Fix BG keeps the background straight."],
  ["Retouch with a finger", "Heal blemishes, push, slim or enlarge any area with the warp brush, and look taller with one slider."],
  ["Cut out the background", "Remove it for a transparent PNG, or swap it for a blur, a colour or a gradient."],
  ["Filters and effects", "22 filters and 38 effects, from film grain and VHS to snow, glitch and tilt-shift, previewed live as you drag."],
  ["Fine control", "15 adjustments, a per-colour HSL mixer, and crop, rotate and straighten."],
  ["Text, stickers and drawing", "Fonts with outlines and labels, emoji stickers, neon and marker brushes, mosaic and blur brushes, and frames."],
  ["Video and collage", "Trim, change speed from 0.25× to 4×, and add filters, captions and music. Put up to nine photos in one collage."],
];

export default function PixellaPage() {
  return (
    <main>
      <section className="hero">
        <img src="/pixella/icon.svg" alt="" />
        <h1>pixella</h1>
        <p className="lead">Edit photos and videos, beautifully and privately.</p>
        <p>
          Pixella is a photo and video editor for iPhone. Retouch faces, try on makeup, reshape, remove backgrounds,
          and add filters, text and music. Every edit happens on your phone: no account, no uploads, no tracking.
        </p>
      </section>

      <ul className="features">
        {features.map(([title, body]) => (
          <li key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </li>
        ))}
      </ul>

      <div className="card">
        <h2>Pixella for iPhone</h2>
        <p>Coming soon to the App Store.</p>
        <p className="muted">Requires iOS 17 or later.</p>
      </div>

      <Footer />
    </main>
  );
}
