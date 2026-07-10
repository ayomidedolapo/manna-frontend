import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconVerifiedBadge(props: SVGProps<SVGSVGElement>) {
  const lobes = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 45 * Math.PI) / 180;
    const cx = 12 + 6 * Math.cos(angle);
    const cy = 12 + 6 * Math.sin(angle);
    return { cx: Number(cx.toFixed(2)), cy: Number(cy.toFixed(2)) };
  });

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="7.4" fill="#00A14B" />
      {lobes.map((lobe) => (
        <circle
          key={`${lobe.cx}-${lobe.cy}`}
          cx={lobe.cx}
          cy={lobe.cy}
          r="5.6"
          fill="#00A14B"
        />
      ))}
      <path
        fill="none"
        stroke="#FFFDED"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7.7 12.3 3 3 5.6-6.2"
      />
    </svg>
  );
}

export function IconUtensils(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 2v8M4 2v5a2 2 0 0 0 4 0V2M8 2v20M16 2c-1.5 0-2.5 2-2.5 5s.7 4.5 2 5v10" />
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4c-9 0-16 7-16 16 9 0 16-7 16-16Z" />
      <path d="M8 16c3-3 6-6 12-12" />
    </svg>
  );
}

export function IconClipboard(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 11h6M9 15h6" />
    </svg>
  );
}

export function IconHandshake(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12l4-4 5 3 3-3 4 4" />
      <path d="M6 8l6 6 3-3" />
      <path d="M2 12l4 6h3l2-2" />
      <path d="M22 12l-4 6h-3l-2-2" />
    </svg>
  );
}

export function IconWallet(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <circle cx="16" cy="14" r="1" />
    </svg>
  );
}

export function IconTruck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="7" width="12" height="9" rx="1" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="6.5" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function IconStore(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8l1.5-4h15L21 8" />
      <path d="M4 8v11h16V8" />
      <path d="M4 8a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0" />
    </svg>
  );
}

export function IconBuilding(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1" />
      <path d="M10 21v-4h4v4" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2 16 16 0 0 1-15-15 2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function IconReceipt(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 2h12v20l-2-1-2 1-2-1-2 1-2-1-2 1V2Z" />
      <path d="M9 7h6M9 11h6M9 15h4" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

export function IconTag(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20.5 12.5 12.5 20.5a2 2 0 0 1-2.83 0L3 13.83V3h10.83l6.67 6.67a2 2 0 0 1 0 2.83Z" />
      <circle cx="8" cy="8" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTrash(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16" />
      <path d="M9 7V4h6v3" />
      <path d="M6 7l1 13h10l1-13" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  );
}

export function IconMessageCircle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.38 8.38 0 0 1 12.5 3 8.5 8.5 0 0 1 21 11.5Z" />
    </svg>
  );
}

export function IconOfficeColor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="6" y="2" width="10" height="20" rx="1" fill="#086453" />
      <rect x="8" y="4.5" width="6" height="2.6" rx="0.6" fill="#FFFDED" />
      <rect x="8" y="8.5" width="6" height="2.6" rx="0.6" fill="#FFFDED" />
      <rect x="8" y="12.5" width="6" height="2.6" rx="0.6" fill="#FFFDED" />
      <rect x="8" y="16.5" width="6" height="2.6" rx="0.6" fill="#FFFDED" />
      <rect x="13" y="9" width="8.5" height="13" rx="1" fill="#00A14B" />
      <rect x="15" y="11.2" width="2" height="2" rx="0.4" fill="#FFFDED" />
      <rect x="18.5" y="11.2" width="2" height="2" rx="0.4" fill="#FFFDED" />
      <rect x="15" y="14.7" width="2" height="2" rx="0.4" fill="#FFFDED" />
      <rect x="18.5" y="14.7" width="2" height="2" rx="0.4" fill="#FFFDED" />
      <rect x="15.7" y="18.2" width="3.4" height="3.8" rx="0.5" fill="#E0EE29" />
      <rect x="2" y="21" width="20" height="2" rx="1" fill="#E0EE29" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M16 14.2c2.7.5 4 2 4 5.8" />
    </svg>
  );
}