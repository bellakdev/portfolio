import type { Metadata } from "next";
import { Brand, Footer } from "../Brand";

export const metadata: Metadata = {
  title: "Pixella Privacy Policy",
  description: "Privacy policy for the Pixella photo and video editor.",
};

export default function PixellaPrivacyPage() {
  return (
    <main>
      <Brand />
      <h1>Privacy policy</h1>
      <p className="muted">Last updated November 24, 2026</p>
        <div>
          <p>Pixella (&ldquo;the app&rdquo;) is a photo and video editor made by Bella Kim. This policy explains what happens to your data when you use it.</p>

          <section>
            <h2>Data we collect</h2>
            <p>None. Pixella does not collect, store, transmit or sell any personal data. It has no accounts, analytics, advertising or tracking, and it does not connect to any server operated by us.</p>
          </section>

          <section>
            <h2>Your photos and videos</h2>
            <p>Photos and videos you open are processed entirely on your device using Apple&apos;s Core Image, Vision and AVFoundation frameworks. Face detection and background removal also run on-device. Your media is never uploaded anywhere.</p>
          </section>

          <section>
            <h2>Permissions</h2>
            <ul>
              <li><strong>Photo library</strong> — to open the photos and videos you choose, and to save your edits when you tap Save.</li>
              <li><strong>Camera</strong> — only if you choose to take a new photo to edit.</li>
              <li><strong>Files</strong> — only if you choose an audio file to add as background music to a video.</li>
            </ul>
            <p>You can change these permissions at any time in the iOS Settings app.</p>
          </section>

          <section>
            <h2>Sharing</h2>
            <p>If you use the Share button, your edited image or video is passed to the app or service you pick, under that service&apos;s own privacy policy.</p>
          </section>

          <section>
            <h2>Children</h2>
            <p>Pixella does not knowingly collect information from anyone, including children under 13.</p>
          </section>

          <section>
            <h2>Changes and contact</h2>
            <p>If this policy changes, the updated version will be posted on this page. Questions: <a href="mailto:b37kim@uwaterloo.ca?subject=Pixella%20privacy">b37kim@uwaterloo.ca</a>.</p>
          </section>
        </div>
      <Footer />
    </main>
  );
}
