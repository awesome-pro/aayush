import React from "react";

export interface NavLink{
    title: string;
    href: string;
    icon?: React.ReactNode;
}

export const navLinks: NavLink[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Privacy Policy",
        href: "/privacy",
    },
    {
        title: "Profile",
        href: "/profile",
    }
]

export interface FooterLink{
    title: string;
    href: string;
}

export const footerLinks: FooterLink[] = [
    {
        title: "Privacy",
        href: "/privacy",
    },
    {
        title: "FAQ",
        href: "/faq", 
    },
    {
        title: "Support",
        href: "/support",
    },
]

export interface Company{
    name: string,
    imageUrl: string,
}

export const companies: Company[] = [
    {
        name: "Google",
        imageUrl: "/google.png",
    },
    {
        name: "Netflix",
        imageUrl: "/netflix.png",
    },
    {
        name: "Microsoft",
        imageUrl: "/microsoft.png",
    },
    {
        name: "Amazon",
        imageUrl: "/amazon.svg",
    },
]

export interface Tweet{
    logo?: React.ReactNode;
    username: string;
    post: string;
    content: string;
    imageUrl: string;
}

export const tweets: Tweet[] = [
    {
        username: "Guillermo Rauch",
        post: "CEO of Vercel",
        content: "The best practices built-in to their <SignIn/> and <UserProfile/> components would take months to implement in-house, yet no sacrifice is made in terms of Enterprise extensibility or customization to your brand.",
        imageUrl: "/guillermo-rauch.jpg",
    }
]

export interface SocialLink{
    icon: string;
    href: string;
}

export const socialLinks: SocialLink[] = [
    {
        icon: "/github.svg",
        href: "https://github.com/awesome-pro/getidea",
    },
    {
        icon: "/x.svg",
        href: "https://x.com/abhinandan_v0",
    },
    {
        icon: "/linkedin.svg",
        href: "https://www.linkedin.com/in/abhinandan-verma/",
    },
    {
        icon: "/discord.svg",
        href: "https://discord.gg/",
    },
    {
        icon: "/youtube.svg",
        href: "https://www.youtube.com/@typescriptmastery001",
    }
]

export const dummySkills = [
    {
      id: 1,
      image: "https://s3-alpha-sig.figma.com/img/6f24/e1db/3aec5da26ceba574fbcd4af774a9fcce?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kTi27BPeq2xvhhXBml-z2f3l9IbUrzKuosbTL2FYh~rp-zKb9GPorePukRaj6xa2NLJD2-Be3U-pH2oc5a3D~cWeTWo1-aGWcGp~~j2o3BrpalDEC9NMi9n3q~mnLBoCOBaVWO904hEIP7soYSjqfzfRO3tUVZsXOfsrHePoFAksRvoyb~08GjhGbW3Q2TxcrNx8YKtIyPyzOdiCJe90vo6iRHc8~fyyPaj07F4sweBH6ZUdgBUT958Yo5G4iYAuy9boGBEyiPkwR4EiqPdrWhPoDajOzdGTFAlJbZkkS~yHhq7hlsw-JG8lTTFhF7I6mxGo5ooX8UNRj1LAftVSzQ__",
    },
    {
      id: 2,
      image: "https://s3-alpha-sig.figma.com/img/6f24/e1db/3aec5da26ceba574fbcd4af774a9fcce?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kTi27BPeq2xvhhXBml-z2f3l9IbUrzKuosbTL2FYh~rp-zKb9GPorePukRaj6xa2NLJD2-Be3U-pH2oc5a3D~cWeTWo1-aGWcGp~~j2o3BrpalDEC9NMi9n3q~mnLBoCOBaVWO904hEIP7soYSjqfzfRO3tUVZsXOfsrHePoFAksRvoyb~08GjhGbW3Q2TxcrNx8YKtIyPyzOdiCJe90vo6iRHc8~fyyPaj07F4sweBH6ZUdgBUT958Yo5G4iYAuy9boGBEyiPkwR4EiqPdrWhPoDajOzdGTFAlJbZkkS~yHhq7hlsw-JG8lTTFhF7I6mxGo5ooX8UNRj1LAftVSzQ__",
    },
    {
      id: 3,
      image: "https://s3-alpha-sig.figma.com/img/6f24/e1db/3aec5da26ceba574fbcd4af774a9fcce?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kTi27BPeq2xvhhXBml-z2f3l9IbUrzKuosbTL2FYh~rp-zKb9GPorePukRaj6xa2NLJD2-Be3U-pH2oc5a3D~cWeTWo1-aGWcGp~~j2o3BrpalDEC9NMi9n3q~mnLBoCOBaVWO904hEIP7soYSjqfzfRO3tUVZsXOfsrHePoFAksRvoyb~08GjhGbW3Q2TxcrNx8YKtIyPyzOdiCJe90vo6iRHc8~fyyPaj07F4sweBH6ZUdgBUT958Yo5G4iYAuy9boGBEyiPkwR4EiqPdrWhPoDajOzdGTFAlJbZkkS~yHhq7hlsw-JG8lTTFhF7I6mxGo5ooX8UNRj1LAftVSzQ__",
    },
    {
      id: 4,
      image: "https://s3-alpha-sig.figma.com/img/6f24/e1db/3aec5da26ceba574fbcd4af774a9fcce?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kTi27BPeq2xvhhXBml-z2f3l9IbUrzKuosbTL2FYh~rp-zKb9GPorePukRaj6xa2NLJD2-Be3U-pH2oc5a3D~cWeTWo1-aGWcGp~~j2o3BrpalDEC9NMi9n3q~mnLBoCOBaVWO904hEIP7soYSjqfzfRO3tUVZsXOfsrHePoFAksRvoyb~08GjhGbW3Q2TxcrNx8YKtIyPyzOdiCJe90vo6iRHc8~fyyPaj07F4sweBH6ZUdgBUT958Yo5G4iYAuy9boGBEyiPkwR4EiqPdrWhPoDajOzdGTFAlJbZkkS~yHhq7hlsw-JG8lTTFhF7I6mxGo5ooX8UNRj1LAftVSzQ__",
    },
    {
      id: 5,
      image: "https://s3-alpha-sig.figma.com/img/6f24/e1db/3aec5da26ceba574fbcd4af774a9fcce?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kTi27BPeq2xvhhXBml-z2f3l9IbUrzKuosbTL2FYh~rp-zKb9GPorePukRaj6xa2NLJD2-Be3U-pH2oc5a3D~cWeTWo1-aGWcGp~~j2o3BrpalDEC9NMi9n3q~mnLBoCOBaVWO904hEIP7soYSjqfzfRO3tUVZsXOfsrHePoFAksRvoyb~08GjhGbW3Q2TxcrNx8YKtIyPyzOdiCJe90vo6iRHc8~fyyPaj07F4sweBH6ZUdgBUT958Yo5G4iYAuy9boGBEyiPkwR4EiqPdrWhPoDajOzdGTFAlJbZkkS~yHhq7hlsw-JG8lTTFhF7I6mxGo5ooX8UNRj1LAftVSzQ__",
    },
    {
      id: 6,
      image: "https://s3-alpha-sig.figma.com/img/6f24/e1db/3aec5da26ceba574fbcd4af774a9fcce?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kTi27BPeq2xvhhXBml-z2f3l9IbUrzKuosbTL2FYh~rp-zKb9GPorePukRaj6xa2NLJD2-Be3U-pH2oc5a3D~cWeTWo1-aGWcGp~~j2o3BrpalDEC9NMi9n3q~mnLBoCOBaVWO904hEIP7soYSjqfzfRO3tUVZsXOfsrHePoFAksRvoyb~08GjhGbW3Q2TxcrNx8YKtIyPyzOdiCJe90vo6iRHc8~fyyPaj07F4sweBH6ZUdgBUT958Yo5G4iYAuy9boGBEyiPkwR4EiqPdrWhPoDajOzdGTFAlJbZkkS~yHhq7hlsw-JG8lTTFhF7I6mxGo5ooX8UNRj1LAftVSzQ__",
    },
  ];
