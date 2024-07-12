import React from "react";
import { FaLinkedin, FaTelegram, FaEnvelope, FaLink } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialShare = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const socialLinks = [
    {
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: <FaXTwitter className="w-5 h-5" />,
      name: "Twitter",
    },
    {
      href: `http://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <FaLinkedin className="w-5 h-5" />,
      name: "LinkedIn",
    },
    {
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <FaTelegram className="w-5 h-5" />,
      name: "Telegram",
    },
    {
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: <FaEnvelope className="w-5 h-5" />,
      name: "Email",
    },
    {
      href: url,
      icon: <FaLink className="w-5 h-5" />,
      name: "Copy Link",
    },
  ];

  return (
    <div className="flex flex-row gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          className="cursor-pointer hover:text-[#5637CD]"
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Share on ${link.name}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialShare;
