import React from "react";
import FilledButton from "./FilledButton";

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
  extraClasses?: string;
  htmlFor?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  extraClasses = "",
  htmlFor,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={htmlFor}
          className="mb-2 block text-sm font-medium text-gray-900 "
        >
          {label}
        </label>
      )}

      <textarea
        {...props}
        id={htmlFor}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
      ></textarea>
    </div>
  );
};

export default TextArea;
