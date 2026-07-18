"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";

const ASSETS = {
  logo: "/logo/logo.png",
  location: "/icons/weui_location-filled.png",
  cart: "/icons/cart.png",
  profile: "/icons/Group%20(1).png",
  search: "/icons/uil_search.png",
  arrow: "/icons/iconamoon_arrow-up-2-light.png",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Sell on Manna", href: "/sell-on-manna" },
  { label: "B2B", href: "/b2b" },
] as const;

type NavLabel = (typeof navItems)[number]["label"];
type PopoverName = "location" | "cart" | "profile" | null;

function getNavLabelForPath(pathname: string): NavLabel {
  if (pathname.startsWith("/about-us")) return "About Us";
  if (pathname.startsWith("/sell-on-manna")) return "Sell on Manna";
  if (pathname.startsWith("/b2b")) return "B2B";
  return "Home";
}

type SearchFormProps = {
  compact?: boolean;
  query: string;
  typingTick: number;
  onQueryChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

function SearchForm({
  compact = false,
  query,
  typingTick,
  onQueryChange,
  onSubmit,
}: SearchFormProps) {
  const shellClassName = compact
    ? "manna-search-shell relative isolate flex h-[38px] w-full items-center overflow-hidden rounded-full bg-[#217362] px-5"
    : "manna-search-shell relative isolate flex h-[48px] w-full items-center overflow-hidden rounded-full bg-[#217362] px-5";

  return (
    <form
      role="search"
      onSubmit={onSubmit}
      className={`${shellClassName} ${
        query ? "manna-search-shell--typing" : ""
      }`}
    >
      <span
        key={typingTick}
        aria-hidden="true"
        className={
          query
            ? "manna-search-ripple manna-search-ripple--active"
            : "manna-search-ripple"
        }
      />

      <input
        aria-label="Search Manna products"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search fresh farm products..."
        className={
          compact
            ? "relative z-10 min-w-0 flex-1 bg-transparent text-[10px] font-normal text-[#fffded] caret-[#e0ee29] outline-none placeholder:text-[#fffded]/85"
            : "relative z-10 min-w-0 flex-1 bg-transparent text-[14px] font-normal text-[#fffded] caret-[#e0ee29] outline-none placeholder:text-[#fffded]/85"
        }
      />

      <button
        type="submit"
        aria-label="Search products"
        className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e0ee29]"
      >
        <Image
          src={ASSETS.search}
          alt=""
          width={22}
          height={22}
          className={
            compact ? "h-5 w-5 object-contain" : "h-[22px] w-[22px] object-contain"
          }
        />
      </button>
    </form>
  );
}

function AuthButtons({ onClick }: { onClick: () => void }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Link
        href="/login"
        onClick={onClick}
        className="flex h-7 items-center justify-center rounded-full bg-[#00a14b] text-[11px] font-normal text-white transition-colors hover:bg-[#086453]"
      >
        Log In
      </Link>

      <Link
        href="/signup"
        onClick={onClick}
        className="flex h-7 items-center justify-center rounded-full border border-[#00a14b] text-[11px] font-normal text-[#00a14b] transition-colors hover:bg-[#00a14b] hover:text-white"
      >
        Sign Up
      </Link>
    </div>
  );
}

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const navLinkRefs = useRef<
    Partial<Record<NavLabel, HTMLAnchorElement | null>>
  >({});

  const pathname = usePathname();

  const [query, setQuery] = useState("");
  const [typingTick, setTypingTick] = useState(0);
  const [activeNav, setActiveNav] = useState<NavLabel>(() =>
    getNavLabelForPath(pathname),
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePopover, setActivePopover] = useState<PopoverName>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const [indicator, setIndicator] = useState({
    center: 0,
    width: 0,
    ready: false,
  });

  const mobileNavItems = navItems.filter((item) => item.label !== "Home");

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setActivePopover(null);
  };

  const showNotice = (message: string) => {
    setNotice(message);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setTypingTick((current) => current + 1);
  };

  const selectNavItem = (label: NavLabel) => {
    setActiveNav(label);
    closeMenus();
  };

  const promptAuth = () => {
    setActivePopover("profile");
    showNotice("Sign in or create an account to search Manna.");
  };

  const updateIndicator = useCallback(() => {
    const nav = navRef.current;
    const activeLink = navLinkRefs.current[activeNav];

    if (!nav || !activeLink) return;

    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    setIndicator({
      center: linkRect.left - navRect.left + linkRect.width / 2,
      width: linkRect.width,
      ready: true,
    });
  }, [activeNav]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(updateIndicator);
    const observer = new ResizeObserver(updateIndicator);
    const navNode = navRef.current;

    if (navNode) {
      observer.observe(navNode);
      navNode.addEventListener("animationend", updateIndicator);
    }

    window.addEventListener("resize", updateIndicator);
    window.addEventListener("load", updateIndicator);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      navNode?.removeEventListener("animationend", updateIndicator);
      window.removeEventListener("resize", updateIndicator);
      window.removeEventListener("load", updateIndicator);
    };
  }, [updateIndicator]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeMenus();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!notice) return;

    const timer = window.setTimeout(() => {
      setNotice(null);
    }, 2800);

    return () => window.clearTimeout(timer);
  }, [notice]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    promptAuth();
  };

  return (
    <header
      ref={headerRef}
      className="manna-header-stage relative z-50 h-[118px] bg-[#086453] font-normal text-[#fffded] max-[374px]:h-[112px] min-[1180px]:h-[180px]"
    >
      {/* Desktop Header */}
      <div className="hidden min-[1180px]:block">
        <div className="relative h-[180px] w-full">
          {/* Logo */}
          <div className="manna-reveal manna-reveal--1 absolute left-12 top-[31px] z-30">
            <Link
              href="/"
              aria-label="Manna home"
              onClick={() => selectNavItem("Home")}
              className="block transition-transform duration-200 hover:scale-[1.02]"
            >
              <Image
                src={ASSETS.logo}
                alt="Manna"
                width={157}
                height={42}
                priority
                className="h-auto w-[157px]"
              />
            </Link>
          </div>

          {/* Location */}
          <div className="manna-reveal manna-reveal--2 absolute left-[237px] top-[27px] z-40">
            <button
              type="button"
              aria-label="Select delivery location"
              aria-expanded={activePopover === "location"}
              onClick={() =>
                setActivePopover((current) =>
                  current === "location" ? null : "location",
                )
              }
              className="flex items-center gap-3 rounded-xl py-1 text-left font-normal transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0ee29]"
            >
              <Image
                src={ASSETS.location}
                alt=""
                width={23}
                height={27}
                className="h-[27px] w-[23px] object-contain"
              />

              <span className="flex flex-col leading-none">
                <span className="text-[16px] text-[#dffbcb]">Location</span>
                <span className="mt-2 text-[20px] text-[#fffded]">
                  Lagos, Nigeria
                </span>
              </span>

              <Image
                src={ASSETS.arrow}
                alt=""
                width={21}
                height={21}
                className={`h-5 w-5 object-contain transition-transform duration-300 ${
                  activePopover === "location" ? "rotate-0" : "rotate-180"
                }`}
              />
            </button>

            {activePopover === "location" && (
              <div className="absolute left-0 top-full z-[80] mt-4 w-[245px] rounded-2xl border border-[#dffbcb]/20 bg-[#072720] p-3 shadow-2xl">
                <p className="px-3 pb-2 text-xs text-[#dffbcb]">
                  Delivery location
                </p>

                <button
                  type="button"
                  onClick={() => {
                    showNotice("Delivery location is set to Lagos, Nigeria.");
                    setActivePopover(null);
                  }}
                  className="flex w-full items-center justify-between rounded-xl bg-[#086453] px-3 py-3 text-left text-sm transition-colors hover:bg-[#217362]"
                >
                  <span>
                    <span className="block">Lagos, Nigeria</span>
                    <span className="mt-1 block text-xs text-[#dffbcb]">
                      Current delivery location
                    </span>
                  </span>

                  <span className="text-xs text-[#e0ee29]">Selected</span>
                </button>
              </div>
            )}
          </div>

          {/* Search */}
          <div
            className="manna-reveal manna-reveal--3 absolute left-[520px] top-[31px] z-10"
            style={{
              width: "min(700px, calc(100vw - 800px))",
            }}
          >
            <SearchForm
              query={query}
              typingTick={typingTick}
              onQueryChange={handleQueryChange}
              onSubmit={handleSearch}
            />
          </div>

          {/* Cart + Profile icons — cart gates to signup, same as search */}
          <div className="manna-reveal manna-reveal--4 absolute right-[94px] top-[41px] z-50 flex items-center gap-5">
            <div className="relative">
              <button
                type="button"
                aria-label="Open shopping cart"
                aria-expanded={activePopover === "cart"}
                onClick={() =>
                  setActivePopover((current) =>
                    current === "cart" ? null : "cart",
                  )
                }
                className="grid h-7 w-7 place-items-center transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0ee29]"
              >
                <Image
                  src={ASSETS.cart}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </button>

              {activePopover === "cart" && (
                <div className="absolute right-0 top-full z-[80] mt-5 w-[260px] rounded-2xl border border-[#dffbcb]/20 bg-[#072720] p-4 shadow-2xl">
                  <p className="text-sm">Your cart is empty</p>

                  <p className="mt-1 text-xs leading-5 text-[#dffbcb]">
                    Sign up or log in to start shopping.
                  </p>

                  <div className="mt-4">
                    <AuthButtons onClick={closeMenus} />
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                aria-label="Log in or sign up"
                aria-expanded={activePopover === "profile"}
                onClick={() =>
                  setActivePopover((current) =>
                    current === "profile" ? null : "profile",
                  )
                }
                className="grid h-7 w-7 place-items-center transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0ee29]"
              >
                <Image
                  src={ASSETS.profile}
                  alt=""
                  width={29}
                  height={29}
                  className="h-[22px] w-[22px] object-contain"
                />
              </button>

              {activePopover === "profile" && (
                <div className="absolute right-0 top-full z-[80] mt-5 w-[255px] rounded-2xl border border-[#dffbcb]/20 bg-[#072720] p-4 shadow-2xl">
                  <p className="text-sm">Welcome to Manna</p>

                  <p className="mt-1 text-xs leading-5 text-[#dffbcb]">
                    Sign in or create an account to continue.
                  </p>

                  <div className="mt-4">
                    <AuthButtons onClick={closeMenus} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Main navigation"
            className="absolute left-1/2 top-[120px] z-20 -translate-x-1/2"
          >
            <div
              ref={navRef}
              className="manna-reveal manna-reveal--5 relative flex items-start gap-[38px]"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  ref={(node) => {
                    navLinkRefs.current[item.label] = node;
                  }}
                  href={item.href}
                  aria-current={activeNav === item.label ? "page" : undefined}
                  onClick={() => selectNavItem(item.label)}
                  className={`relative whitespace-nowrap pb-[10px] text-[15px] leading-6 transition-colors duration-200 ${
                    activeNav === item.label
                      ? "text-[#e0ee29]"
                      : "text-[#fffded] hover:text-[#e0ee29]"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 h-px rounded-full bg-[#e0ee29] shadow-[0_0_12px_rgba(224,238,41,0.6)] will-change-transform transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                style={{
                  width: `${indicator.width}px`,
                  transform: `translate3d(${indicator.center}px, 0, 0) translateX(-50%)`,
                  opacity: indicator.ready ? 1 : 0,
                }}
              />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="h-[118px] px-5 pt-4 max-[374px]:h-[112px] max-[374px]:px-4 max-[374px]:pt-3 min-[1180px]:hidden">
        <div className="manna-reveal manna-reveal--1 relative z-50 flex items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => {
                setMobileMenuOpen(true);
                setActivePopover(null);
              }}
              className="grid h-6 w-6 place-items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0ee29]"
            >
              <span className="flex flex-col gap-[4px]">
                <span className="h-[1.5px] w-[17px] rounded-full bg-[#fffded]" />
                <span className="h-[1.5px] w-[17px] rounded-full bg-[#fffded]" />
                <span className="h-[1.5px] w-[17px] rounded-full bg-[#fffded]" />
              </span>
            </button>

            <Link
              href="/"
              aria-label="Manna home"
              onClick={() => selectNavItem("Home")}
              className="ml-4 transition-transform duration-200 hover:scale-[1.02]"
            >
              <Image
                src={ASSETS.logo}
                alt="Manna"
                width={89}
                height={26}
                priority
                className="h-auto w-[89px]"
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                type="button"
                aria-label="Open shopping cart"
                aria-expanded={activePopover === "cart"}
                onClick={() =>
                  setActivePopover((current) =>
                    current === "cart" ? null : "cart",
                  )
                }
                className="grid h-7 w-7 place-items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0ee29]"
              >
                <Image
                  src={ASSETS.cart}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </button>

              {activePopover === "cart" && (
                <div className="absolute right-0 top-[42px] z-[80] w-[255px] rounded-2xl border border-[#dffbcb]/20 bg-[#072720] p-4 shadow-2xl">
                  <p className="text-sm">Your cart is empty</p>

                  <p className="mt-1 text-xs leading-5 text-[#dffbcb]">
                    Sign up or log in to start shopping.
                  </p>

                  <div className="mt-4">
                    <AuthButtons onClick={closeMenus} />
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
            <button
              type="button"
              aria-label="Log in or sign up"
              aria-expanded={activePopover === "profile"}
              onClick={() =>
                setActivePopover((current) =>
                  current === "profile" ? null : "profile",
                )
              }
              className="grid h-7 w-7 place-items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0ee29]"
            >
              <Image
                src={ASSETS.profile}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </button>

            {activePopover === "profile" && (
              <div className="absolute right-0 top-[42px] z-[80] w-[255px] rounded-2xl border border-[#dffbcb]/20 bg-[#072720] p-4 shadow-2xl">
                <p className="text-sm">Welcome to Manna</p>

                <p className="mt-1 text-xs leading-5 text-[#dffbcb]">
                  Sign in or create an account to continue.
                </p>

                <div className="mt-4">
                  <AuthButtons onClick={closeMenus} />
                </div>
              </div>
            )}
          </div>
          </div>
        </div>

        <div className="manna-reveal manna-reveal--2 relative z-10 mt-4 max-[374px]:mt-3">
          <SearchForm
            compact
            query={query}
            typingTick={typingTick}
            onQueryChange={handleQueryChange}
            onSubmit={handleSearch}
          />
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMenus}
        className={`fixed inset-0 z-[60] bg-[#072720]/35 transition-opacity duration-300 min-[1180px]:hidden ${
          mobileMenuOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        data-lenis-prevent
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 left-0 z-[70] flex w-[254px] max-w-[86vw] flex-col overflow-y-auto border-l-4 border-[#808080] bg-[#fffded] px-4 py-9 text-[#00a14b] shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] min-[1180px]:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenus}
          className="ml-auto grid h-[15px] w-[15px] place-items-center rounded bg-[#086453] text-xs leading-none text-white transition-transform hover:scale-105"
        >
          ×
        </button>

        <div className="mt-4">
          <p className="text-[8px] uppercase tracking-wide text-[#66ab88]">
            General options
          </p>

          <nav className="mt-3 space-y-3" aria-label="Mobile menu links">
            {mobileNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => selectNavItem(item.label)}
                className="block text-[16px] leading-5 transition-transform duration-200 hover:translate-x-1 hover:text-[#086453]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-10 h-px bg-[#d8dfd3]" />

          <p className="mt-4 text-[8px] uppercase tracking-wide text-[#66ab88]">
            Other options
          </p>

          <div className="mt-3 space-y-3">
            <button
              type="button"
              onClick={() => {
                closeMenus();
                showNotice("Settings preview is not available yet.");
              }}
              className="block text-left text-[16px] leading-5 transition-transform duration-200 hover:translate-x-1 hover:text-[#086453]"
            >
              Settings
            </button>

            <button
              type="button"
              onClick={() => {
                closeMenus();
                showNotice("Help Center preview is not available yet.");
              }}
              className="block text-left text-[16px] leading-5 transition-transform duration-200 hover:translate-x-1 hover:text-[#086453]"
            >
              Help Center
            </button>
          </div>

          <div className="mt-4">
            <AuthButtons onClick={closeMenus} />
          </div>
        </div>
      </aside>

      {notice && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-[100] w-[calc(100%-32px)] max-w-[390px] -translate-x-1/2 rounded-full bg-[#072720] px-5 py-3 text-center text-sm text-[#fffded] shadow-2xl"
        >
          {notice}
        </div>
      )}

      <style jsx global>{`
        @keyframes mannaHeaderReveal {
          0% {
            opacity: 0;
            filter: blur(8px);
            transform: perspective(900px) translate3d(0, 12px, -28px)
              rotateX(5deg);
          }

          68% {
            opacity: 0.96;
            filter: blur(1px);
          }

          100% {
            opacity: 1;
            filter: blur(0);
            transform: perspective(900px) translate3d(0, 0, 0) rotateX(0deg);
          }
        }

        .manna-reveal {
          animation: mannaHeaderReveal 700ms
            cubic-bezier(0.22, 1, 0.36, 1) var(--manna-delay, 0ms) both;
          transform-style: preserve-3d;
          will-change: opacity, filter, transform;
        }

        .manna-reveal--1 {
          --manna-delay: 20ms;
        }

        .manna-reveal--2 {
          --manna-delay: 80ms;
        }

        .manna-reveal--3 {
          --manna-delay: 140ms;
        }

        .manna-reveal--4 {
          --manna-delay: 200ms;
        }

        .manna-reveal--5 {
          --manna-delay: 260ms;
        }

        .manna-search-shell {
          transform: translateZ(0);
          transform-style: preserve-3d;
          backface-visibility: hidden;
          transition:
            transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .manna-search-shell:focus-within {
          transform: perspective(900px) translateY(-1px) rotateX(0.75deg);
          box-shadow:
            0 12px 28px rgba(0, 0, 0, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .manna-search-shell--typing {
          box-shadow:
            0 9px 22px rgba(0, 0, 0, 0.13),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .manna-search-ripple {
          pointer-events: none;
          position: absolute;
          top: 50%;
          right: 44px;
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: rgba(224, 238, 41, 0.44);
          opacity: 0;
          transform: translate3d(0, -50%, 0) scale(0.25);
        }

        .manna-search-ripple--active {
          animation: mannaSearchRipple 440ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes mannaSearchRipple {
          0% {
            opacity: 0.48;
            transform: translate3d(0, -50%, 0) scale(0.3);
          }

          100% {
            opacity: 0;
            transform: translate3d(0, -50%, 0) scale(8);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .manna-reveal,
          .manna-search-ripple--active {
            animation: none !important;
          }

          .manna-search-shell {
            transition: none !important;
          }
        }
      `}</style>
    </header>
  );
}