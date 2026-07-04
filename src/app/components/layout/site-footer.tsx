import Image from "next/image";

const socialLinks = [
  {
    label: "Facebook",
    icon: "/icons/ic_sharp-facebook.png",
  },
  {
    label: "WhatsApp",
    icon: "/icons/basil_whatsapp-solid.png",
  },
  {
    label: "LinkedIn",
    icon: "/icons/uil_linkedin.png",
  },
  {
    label: "Instagram",
    icon: "/icons/formkit_instagram.png",
  },
  {
    label: "X",
    icon: "/icons/prime_twitter.png",
  },
];

const companyLinks = ["About Us", "Blog", "Contact Us", "About Career"];

const customerServiceLinks = [
  "My Account",
  "Track Your Order",
  "Refund",
  "FAQs",
];

const informationLinks = [
  "Privacy",
  "User Terms and Conditions",
  "Refund policy",
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-[#FFFDED] bg-[#072720]">
      <Image
        src="/images/00f6582fec1c26394bd9471f0ceea02903f75006.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center opacity-[0.09]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-[23px] pb-7 pt-[42px] min-[640px]:px-[clamp(2rem,4vw,5rem)] min-[640px]:pb-5 min-[640px]:pt-[clamp(2.4rem,4vw,3.75rem)]">
        <div className="grid grid-cols-[1.4fr_0.8fr] gap-x-[clamp(2rem,12vw,4rem)] gap-y-[40px] min-[640px]:grid-cols-[1.65fr_0.82fr_1.18fr_1.4fr_1.35fr] min-[640px]:gap-x-[clamp(1.35rem,3vw,4.5rem)] min-[640px]:gap-y-0">
          {/* Brand */}
          <div className="order-1">
            <Image
              src="/logo/logo.png"
              alt="Manna"
              width={180}
              height={52}
              className="h-auto w-[136px] object-contain min-[640px]:w-[clamp(8.5rem,10vw,11rem)]"
            />

            <p className="mt-4 max-w-[220px] text-[13px] leading-[1.45] text-[#FFFDED] min-[640px]:mt-4 min-[640px]:max-w-[260px] min-[640px]:text-[15px] min-[640px]:leading-[1.45]">
              <span className="min-[640px]:hidden">
                Manna connects local farmers to you, delivering fresh Nigerian
                produce straight to your door. Support local, eat fresh!
              </span>

              <span className="hidden min-[640px]:inline">
                Manna connects local farmers
                <br />
                to you, delivering fresh Nigerian
                <br />
                produce straight to your door.
                <br />
                Support local, eat fresh!
              </span>
            </p>

            <div className="mt-5 flex items-center gap-5 min-[640px]:mt-5 min-[640px]:gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="h-[16px] w-[16px] object-contain min-[640px]:h-[19px] min-[640px]:w-[19px]"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="order-2">
            <h3 className="text-[17px] font-semibold leading-none text-[#DFFBCB] min-[640px]:text-[clamp(1rem,1.55vw,1.35rem)]">
              Company
            </h3>

            <nav className="mt-3 flex flex-col gap-[17px] min-[640px]:mt-5 min-[640px]:gap-[20px]">
              {companyLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[12px] font-normal leading-none text-[#FFFDED] transition-colors hover:text-[#E0EE29] min-[640px]:text-[clamp(0.875rem,1.45vw,1.1rem)]"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Our Information */}
          <div className="order-3 min-[640px]:order-4">
            <h3 className="text-[17px] font-semibold leading-none text-[#DFFBCB] min-[640px]:text-[clamp(1rem,1.55vw,1.35rem)]">
              Our Information
            </h3>

            <nav className="mt-3 flex flex-col gap-[17px] min-[640px]:mt-5 min-[640px]:gap-[20px]">
              {informationLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="whitespace-nowrap text-[12px] font-normal leading-none text-[#FFFDED] transition-colors hover:text-[#E0EE29] min-[640px]:text-[clamp(0.875rem,1.45vw,1.1rem)]"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="order-4 min-[640px]:order-5">
            <h3 className="text-[17px] font-semibold leading-none text-[#DFFBCB] min-[640px]:text-[clamp(1rem,1.55vw,1.35rem)]">
              Contact Info
            </h3>

            <address className="mt-3 flex not-italic flex-col gap-[17px] min-[640px]:mt-5 min-[640px]:gap-[20px]">
              <a
                href="tel:+2349063657802"
                className="whitespace-nowrap text-[12px] font-normal leading-none text-[#FFFDED] transition-colors hover:text-[#E0EE29] min-[640px]:text-[clamp(0.875rem,1.45vw,1.1rem)]"
              >
                +234 906 365 7802
              </a>

              <a
                href="mailto:mannahub.ng@gmail.com"
                className="whitespace-nowrap text-[12px] font-normal leading-none text-[#FFFDED] transition-colors hover:text-[#E0EE29] min-[640px]:text-[clamp(0.875rem,1.45vw,1.1rem)]"
              >
                mannahub.ng@gmail.com
              </a>

              <p className="whitespace-nowrap text-[12px] font-normal leading-none text-[#FFFDED] min-[640px]:text-[clamp(0.875rem,1.45vw,1.1rem)]">
                Lagos, Nigeria
              </p>
            </address>
          </div>

          {/* Customer Services */}
          <div className="order-5 col-span-2 min-[640px]:order-3 min-[640px]:col-span-1">
            <h3 className="text-[17px] font-semibold leading-none text-[#DFFBCB] min-[640px]:text-[clamp(1rem,1.55vw,1.35rem)]">
              Customer Services
            </h3>

            <nav className="mt-3 flex flex-col gap-[17px] min-[640px]:mt-5 min-[640px]:gap-[20px]">
              {customerServiceLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[12px] font-normal leading-none text-[#FFFDED] transition-colors hover:text-[#E0EE29] min-[640px]:text-[clamp(0.875rem,1.45vw,1.1rem)]"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <p className="mt-[46px] text-[14px] leading-none text-[#FFFDED] min-[640px]:mt-[clamp(3.75rem,5.5vw,5.5rem)] min-[640px]:text-[clamp(0.9rem,1.2vw,1.05rem)]">
          Copyright <span className="mx-1 text-[1.25em]">©</span> 2025.{" "}
          <span className="text-[#E0EE29]">Align.</span> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}