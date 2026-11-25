/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/pixella">
      <img src="/pixella/icon.svg" alt="" />
      pixella
    </Link>
  );
}

export function Footer() {
  return (
    <nav>
      <Link href="/pixella">Pixella</Link>
      <Link href="/pixella/support">Support</Link>
      <Link href="/pixella/privacy">Privacy policy</Link>
      <Link href="/">Bella Kim</Link>
    </nav>
  );
}
