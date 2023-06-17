import Link from "next/link";
import React from "react";

const ForwardButton: React.FC<{ href: string; text: string }> = ({
  href,
  text,
}) => {
  return (
    <Link href={href} className="flex items-center gap-1 hover:text-gray-600">
      {text}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6 rotate-180"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
    </Link>
  );
};

export default ForwardButton;
