"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/siteConfig";
import { Container } from "./Container";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  calendlyUrl?: string;
}

export function Header({ calendlyUrl }: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = siteConfig.nav;
  const handleCloseMenu = () => setIsMenuOpen(false);

  const renderNavLink = (href: string, label: string, isMobile = false) => {
    const isActive =
      pathname === href ||
      (href !== "/" && pathname?.startsWith(`${href}/`));

    return (
      <Link
        key={`${isMobile ? "mobile" : "desktop"}-${href}`}
        href={href}
        className={cn(
          "text-sm font-medium transition-colors",
          isMobile ? "text-lg" : "",
          isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
        )}
        onClick={isMobile ? handleCloseMenu : undefined}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-bg-default/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-text-primary"
        >
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => renderNavLink(item.href, item.label))}
        </nav>
        <div className="flex items-center gap-3">
          {calendlyUrl ? (
            <Link href={calendlyUrl} className="hidden md:inline-flex">
              <Button variant="secondary" size="sm">
                {siteConfig.ctas.readiness.label}
              </Button>
            </Link>
          ) : (
            <span className="hidden md:inline-flex">
              <Button
                variant="secondary"
                size="sm"
                disabled
                title="Calendly not configured"
              >
                {siteConfig.ctas.readiness.label}
              </Button>
            </span>
          )}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm border border-border-default p-2 text-text-primary transition-colors hover:bg-bg-subtle md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation"
            aria-expanded={isMenuOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={handleCloseMenu}
        >
          <div
            className="ml-auto flex h-full w-[85%] max-w-xs flex-col border-l border-border-default bg-bg-default p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-text-primary">
                Menu
              </span>
              <button
                type="button"
                className="rounded-sm border border-border-default p-2 text-text-primary hover:bg-bg-subtle"
                aria-label="Close navigation"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-4">
              {navItems.map((item) => renderNavLink(item.href, item.label, true))}
              <Link
                href="/contact"
                className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
                onClick={handleCloseMenu}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              {calendlyUrl ? (
                <Link href={calendlyUrl}>
                  <Button size="md" className="w-full">
                    {siteConfig.ctas.readiness.label}
                  </Button>
                </Link>
              ) : (
                <Button size="md" disabled className="w-full">
                  {siteConfig.ctas.readiness.label}
                </Button>
              )}
              <Link href={siteConfig.ctas.architecture.href}>
                <Button size="md" variant="secondary" className="w-full">
                  {siteConfig.ctas.architecture.label}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
