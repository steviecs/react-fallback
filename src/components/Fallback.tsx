import React from "react";
import useFallback from "../useFallback";

interface FallbackProps {
  isLoading: boolean;
  children: JSX.Element | JSX.Element[];
  fallbackOnStaticContent?: boolean;
}

export default function Fallback({
  isLoading,
  children,
  fallbackOnStaticContent
}: FallbackProps) {
  const { withFallback } = useFallback({ isLoading, fallbackOnStaticContent });
  return withFallback(<div>{children}</div>);
}
