const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="mr-3 mb-3 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FFC837] to-[#FF6108] px-5 py-3 text-base font-semibold text-white transition duration-200 hover:shadow-lg hover:shadow-[#FFC837]/50"
    >
      {text}
    </a>
  );
};

export default TagButton;
