import Link from "next/link";
import React from "react";
import { createClasses } from "../utils/layout";

const ForwardButton: React.FC<{
  href: string;
  text: string;
  extraClasses?: string;
}> = ({ href, text, extraClasses = "" }) => {
  return (
    <Link
      href={href}
      className={createClasses(
        "flex items-center gap-1 hover:text-gray-600 ",
        extraClasses
      )}
    >
      {text}
    </Link>
  );
};

export default ForwardButton;
