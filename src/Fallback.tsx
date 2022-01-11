import { useFallback } from "./useFallback";

interface Props {
  isLoading: boolean;
  children: JSX.Element;
}

export const Fallback = (props: Props) => {
  const { withFallback } = useFallback(props.isLoading);
  return withFallback(<div>{props.children}</div>);
};
