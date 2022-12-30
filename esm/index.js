import { jsx as _jsx } from "react/jsx-runtime";
import useFallback from './useFallback';
/**
 * A component that wraps your JSX to render adaptive skeletons
 * that adjust to the shape of UI layouts while data is being fetched
 * @param isLoading - a boolean flag representing if data has been fetched yet
 * @param children - child nodes of the Fallback wrapper
 * @param fallbackOnStaticContent - a flag that determines if you want to
 * skeleton-ize content that is already loaded or not
 */
export default function Fallback({ isLoading, children, fallbackOnStaticContent }) {
    const { withFallback } = useFallback({ isLoading, fallbackOnStaticContent });
    return withFallback(_jsx("div", { children: children }));
}
//# sourceMappingURL=index.js.map