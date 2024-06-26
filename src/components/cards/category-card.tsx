import type { ReactNode } from "react";

type Props = {
  title?: string;
  description?: string;
  children?: ReactNode;
  href?: string;
};

export const CategoryCard: React.FC<Props> = ({
  children,
  description,
  href,
  title,
}) => {
  return (
    <>
      <a
        href={href}
        className="bg-background-200 hover:ring-2 hover:ring-primary transition-all even:md:max-w-64 min-w-44 md:max-w-72 flex-1 p-8 md:p-6 rounded-xl"
      >
        {children}
        <p className="font-heading text-2xl mt-4">{title}</p>
        <p className="text-sm text-neutral-400">{description}</p>
      </a>
    </>
  );
};
