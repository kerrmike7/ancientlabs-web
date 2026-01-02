"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/siteConfig";
import { Container } from "./Container";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

interface HeaderProps {
  calendlyLinks?: {
    readiness?: string;
    architecture?: string;
  };
}

export function Header({ calendlyLinks }: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const readinessUrl = calendlyLinks?.readiness ?? "";
  const architectureUrl = calendlyLinks?.architecture ?? "";
  const isCalendlyConfigured = Boolean(readinessUrl);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = siteConfig.nav;
  const handleCloseMenu = () => setIsMenuOpen(false);

  const renderNavLink = (
    href: string,
    label: string,
    isMobile = false
  ) => {
    const isActive =
      pathname === href ||
      (href !== "/" && pathname?.startsWith(`${href}/`));

    return (
      <Link
        key={`${isMobile ? "mobile" : "desktop"}-${href}`}
        href={href}
        className={cn(
          "text-sm font-medium transition-colors",
          isMobile
            ? cn(
                "rounded-md border border-transparent px-4 py-3 text-base tracking-tight",
                "text-text-primary/90 hover:border-border-default hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
              )
            : "",
          isActive
            ? "text-text-primary"
            : "text-text-secondary hover:text-text-primary"
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
          className="flex items-center gap-2 text-text-primary"
          aria-label="Ancient Labs home"
        >
          <Logo
            className="h-6 w-6 text-text-primary dark:text-white"
            aria-hidden="true"
          />
          <span className="text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => renderNavLink(item.href, item.label))}
        </nav>
        <div className="flex items-center gap-3">
          {isCalendlyConfigured ? (
            <Link href={readinessUrl} className="hidden md:inline-flex">
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
            className="ml-auto flex h-full w-[85%] max-w-xs flex-col border-l border-border-default bg-bg-default p-6 shadow-xl"
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
            <nav className="mt-8 flex flex-col gap-2">
              {navItems.map((item) => renderNavLink(item.href, item.label, true))}
              <Link
                href="/contact"
                className="rounded-md border border-transparent px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:border-border-default hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
                onClick={handleCloseMenu}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-8 border-t border-border-default pt-6">
              <div className="flex flex-col gap-3">
                {isCalendlyConfigured ? (
                  <Link href={readinessUrl} onClick={handleCloseMenu}>
                    <Button size="md" className="w-full">
                      {siteConfig.ctas.readiness.label}
                    </Button>
                  </Link>
                ) : (
                  <Button size="md" disabled className="w-full" title="Calendly not configured">
                    {siteConfig.ctas.readiness.label}
                  </Button>
                )}
                {architectureUrl ? (
                  <Link href={architectureUrl} onClick={handleCloseMenu}>
                    <Button
                      size="md"
                      variant="secondary"
                      className="w-full border-2 border-border-default/80"
                    >
                      {siteConfig.ctas.architecture.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    size="md"
                    variant="secondary"
                    disabled
                    className="w-full"
                    title="Calendly not configured"
                  >
                    {siteConfig.ctas.architecture.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
