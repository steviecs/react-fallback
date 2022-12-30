/// <reference types="react" />
interface FallbackProps {
  isLoading: boolean
  children: JSX.Element | JSX.Element[]
  fallbackOnStaticContent?: boolean
}
/**
 * A component that wraps your JSX to render adaptive skeletons
 * that adjust to the shape of layout while data is being fetched
 * @param isLoading a boolean flag representing if data has been fetched yet
 * @param children child nodes of the Fallback wrapper
 * @param fallbackOnStaticContent a flag that determines if you want to
 * skeleton-ize content that is already loaded or not
 */
export default function Fallback({
  isLoading,
  children,
  fallbackOnStaticContent,
}: FallbackProps): JSX.Element
export {}
