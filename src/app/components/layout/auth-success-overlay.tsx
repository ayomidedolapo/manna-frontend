import Link from "next/link";
import { IconCelebration } from "../ui/icons";

type AuthSuccessOverlayProps = {
  title: string;
  message: string;
  cta?: { label: string; href: string };
};

export default function AuthSuccessOverlay({
  title,
  message,
  cta,
}: AuthSuccessOverlayProps) {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#072720]/10 backdrop-blur-[2px]">
      <div className="mx-5 w-full max-w-[300px] rounded-[20px] bg-[#FFFDED] p-6 text-center shadow-2xl">
        <IconCelebration className="mx-auto h-10 w-10" />
        <h3 className="mt-3 text-[16px] font-semibold text-[#086453]">
          {title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-[1.5] text-[#072720]/80">
          {message}
        </p>

        {cta && (
          <Link
            href={cta.href}
            className="mt-4 flex h-[42px] w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,#00A14B_0%,#086453_100%)] text-[13.5px] font-medium text-white transition-transform duration-300 hover:scale-[1.01]"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </div>
  );
}