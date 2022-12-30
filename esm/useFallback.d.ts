/// <reference types="react" />
interface UseFallbackProps {
    isLoading: boolean;
    fallbackOnStaticContent?: boolean;
}
export default function useFallback({ isLoading, fallbackOnStaticContent }: UseFallbackProps): {
    withFallback: (tree: JSX.Element) => JSX.Element;
};
export {};
