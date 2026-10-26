import facebookIcon from "../../assets/icons/basil_facebook-solid.png";
import xIcon from "../../assets/icons/Group.png";
import instagramIcon from "../../assets/icons/basil_instagram-solid.png";
import tiktokIcon from "../../assets/icons/ic_round-tiktok.png";

export default function SocialSidebar() {
  const socials = [
    { name: "Facebook", href: "https://facebook.com", icon: facebookIcon },
    { name: "X", href: "https://x.com", icon: xIcon },
    { name: "Instagram", href: "https://instagram.com", icon: instagramIcon },
    { name: "TikTok", href: "https://tiktok.com", icon: tiktokIcon },
  ];

  return (
    <div className="flex flex-col gap-3 md:gap-4 p-2 md:p-6">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className="w-9 h-9 md:w-11 md:h-11 rounded-full border-2 md:border-4 border-white
                     flex items-center justify-center
                     transition-colors hover:bg-white/20" // Added a nice hover effect
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-4 h-4 md:w-5 md:h-5 object-contain"
          />
        </a>
      ))}
    </div>
  );
}