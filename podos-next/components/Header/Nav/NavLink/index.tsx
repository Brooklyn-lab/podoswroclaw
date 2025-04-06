import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = {
  href: string;
  className?: string;
};

export default function NavLink({
  href,
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
