/// <reference types="react" />
interface FallbackProps {
    isLoading: boolean;
    children: JSX.Element | JSX.Element[];
    fallbackOnStaticContent?: boolean;
}
export default function Fallback({ isLoading, children, fallbackOnStaticContent }: FallbackProps): JSX.Element;
export {};
