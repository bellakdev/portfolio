import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixella — Privacy Policy",
  description: "Privacy policy for the Pixella photo and video editor.",
};

export default function PixellaPrivacyPage() {
  return (
    <main className="min-h-screen bg-th-bg text-th-body">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <a href="/pixella" className="text-sm font-medium text-th-accent hover:text-th-heading transition">← Pixella</a>
        <h1 className="mt-10 text-3xl font-bold tracking-tight text-th-heading">Privacy Policy</h1>
        <p className="mt-2 text-sm text-th-muted">Last updated November 24, 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-th-prose">
          <p>Pixella (&ldquo;the app&rdquo;) is a photo and video editor made by Bella Kim. This policy explains what happens to your data when you use it.</p>

          <section>
            <h2 className="font-semibold text-th-heading">Data we collect</h2>
            <p className="mt-2">None. Pixella does not collect, store, transmit or sell any personal data. It has no accounts, analytics, advertising or tracking, and it does not connect to any server operated by us.</p>
          </section>

          <section>
            <h2 className="font-semibold text-th-heading">Your photos and videos</h2>
            <p className="mt-2">Photos and videos you open are processed entirely on your device using Apple&apos;s Core Image, Vision and AVFoundation frameworks. Face detection and background removal also run on-device. Your media is never uploaded anywhere.</p>
          </section>

          <section>
            <h2 className="font-semibold text-th-heading">Permissions</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><span className="text-th-heading">Photo library</span> — to open the photos and videos you choose, and to save your edits when you tap Save.</li>
              <li><span className="text-th-heading">Camera</span> — only if you choose to take a new photo to edit.</li>
              <li><span className="text-th-heading">Files</span> — only if you choose an audio file to add as background music to a video.</li>
            </ul>
            <p className="mt-2">You can change these permissions at any time in the iOS Settings app.</p>
          </section>

          <section>
            <h2 className="font-semibold text-th-heading">Sharing</h2>
            <p className="mt-2">If you use the Share button, your edited image or video is passed to the app or service you pick, under that service&apos;s own privacy policy.</p>
          </section>

          <section>
            <h2 className="font-semibold text-th-heading">Children</h2>
            <p className="mt-2">Pixella does not knowingly collect information from anyone, including children under 13.</p>
          </section>

          <section>
            <h2 className="font-semibold text-th-heading">Changes and contact</h2>
            <p className="mt-2">If this policy changes, the updated version will be posted on this page. Questions: <a className="text-th-accent hover:text-th-heading" href="mailto:b37kim@uwaterloo.ca?subject=Pixella%20privacy">b37kim@uwaterloo.ca</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
