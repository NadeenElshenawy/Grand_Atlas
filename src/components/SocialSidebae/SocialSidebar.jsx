

export default function SocialSidebar() {

    const socials=[
    { name: "Facebook",  href: "https://facebook.com",  icon: "/src/assets/icons/basil_facebook-solid.png"  },
    { name: "X",         href: "https://x.com",         icon: "/src/assets/icons/Group.png"         },
    { name: "Instagram", href: "https://instagram.com", icon: "/src/assets/icons/basil_instagram-solid.png" },
    { name: "TikTok",    href: "https://tiktok.com",    icon: "/src/assets/icons/ic_round-tiktok.png"    },
    ]
  return (
    <div className="flex flex-col gap-4 p-6">
{socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className="w-11 h-11 rounded-full  border-4 border-white
                     flex items-center justify-center
                     "
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-5 h-5 object-contain"
          />
        </a>
      ))}


        </div>
  )
}
