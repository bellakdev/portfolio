import type { Metadata } from "next";
import { Brand, Footer } from "../Brand";

export const metadata: Metadata = {
  title: "Pixella Support",
  description: "Help with the Pixella photo and video editor.",
};

export default function PixellaSupportPage() {
  return (
    <main>
      <Brand />
      <h1>Support</h1>
      <p>
        Questions, bug reports or ideas? Email{" "}
        <a href="mailto:b37kim@uwaterloo.ca?subject=Pixella%20support">b37kim@uwaterloo.ca</a> with your iPhone model and
        iOS version.
      </p>

      <h2>Common questions</h2>
      <dl>
        <dt>Saving doesn&apos;t work</dt>
        <dd>Allow Pixella to add photos in Settings → Privacy &amp; Security → Photos → Pixella.</dd>
        <dt>Beauty and makeup do nothing</dt>
        <dd>They need a clearly visible face. The panel shows how many faces Pixella found.</dd>
        <dt>Reshaping bends the background</dt>
        <dd>Turn on Fix BG in Beauty or Retouch. It keeps walls, doors and horizons straight while you reshape.</dd>
        <dt>Background removal can&apos;t find a subject</dt>
        <dd>Try a photo where the person, pet or object stands out clearly from what&apos;s behind it.</dd>
        <dt>Is my photo uploaded anywhere?</dt>
        <dd>No. Every edit, including face detection and background removal, runs on your iPhone. See the <a href="/pixella/privacy">privacy policy</a>.</dd>
      </dl>

      <Footer />
    </main>
  );
}
