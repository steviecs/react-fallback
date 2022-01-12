import { useFallback } from "./useFallback";

interface FallbackProps {
  isLoading: boolean;
  children: JSX.Element | JSX.Element[];
  fallbackOnStaticContent?: boolean;
}

export const Fallback = (props: FallbackProps) => {
  const { isLoading, children, fallbackOnStaticContent } = props;
  const { withFallback } = useFallback({ isLoading, fallbackOnStaticContent });
  return withFallback(<div>{children}</div>);
};
