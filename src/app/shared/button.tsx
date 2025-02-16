import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
};

export const Button = ({ children, className, size = "medium" }: Props) => {
  const sizeClassNames = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-5 py-3",
    large: "text-base px-8 py-4",
  };

  return (
    <button
      className={twMerge(
        "bg-white text-textBlack rounded-full",
        className,
        sizeClassNames[size]
      )}
    >
      {children}
    </button>
  );
};
