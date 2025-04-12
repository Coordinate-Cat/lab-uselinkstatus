import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import Indicator from "./LoadingIndicator";

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
}
export function Link({ children, ...props }: LinkProps) {
  return (
    <NextLink {...props}>
      {children}
      <Indicator />
    </NextLink>
  );
}