import React from "react";
import { createClasses } from "../utils/layout";

interface FilledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  extraClasses?: string;
}

const FilledButton: React.FC<FilledButtonProps> = ({
  buttonText,
  extraClasses = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={createClasses(
        "mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 ",
        extraClasses
      )}
    >
      {buttonText}
    </button>
  );
};

export default FilledButton;
