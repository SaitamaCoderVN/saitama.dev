const socialLinks = [
  {
    href: "https://t.me/SaitamaCoderVN",
    icon: "💬",
    label: "Telegram",
    className: "bg-primary"
  },
  {
    href: "https://x.com/SaitamaCoder_VN", 
    icon: "🐦",
    label: "X",
    className: "bg-primary"
  },
  {
    href: "mailto:coderhopham@gmail.com",
    icon: "✉️",
    label: "Email", 
    className: "bg-primary"
  },
  {
    href: "https://github.com/SaitamaCoderVN",
    icon: "🐱",
    label: "GitHub",
    className: "bg-secondary"
  },
  {
    href: "https://linkedin.com/in/anhitshare",
    icon: "💼",
    label: "LinkedIn",
    className: "bg-accent text-gray-800"
  }
];

const Contact = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`flex items-center px-4 py-2 ${link.className} text-white rounded-full hover:scale-110 transition-transform duration-300`}
          >
            <span className="mr-2">{link.icon}</span>
            <span className="hidden sm:inline">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;