import Link from "next/link";
import { siteConfig } from "@/siteConfig";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-subtle py-12 text-sm text-text-secondary">
      <Container className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 text-lg font-semibold text-text-primary">{siteConfig.name}</div>
          <p className="max-w-xs text-text-tertiary">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-text-primary">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-text-primary">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-text-primary">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-text-primary">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services" className="hover:text-text-primary">Services</Link>
            </li>
            <li>
              <Link href="/payments" className="hover:text-text-primary">Payments</Link>
            </li>
             <li>
              <Link href="/process" className="hover:text-text-primary">Process</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-text-primary">Legal</h3>
          <ul className="space-y-2">
             <li>
              <Link href="/privacy" className="hover:text-text-primary">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="mt-12 border-t border-border-default pt-8 text-center text-text-tertiary">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </Container>
    </footer>
  );
}
