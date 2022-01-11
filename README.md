## react-fallback

A POC component library for rendering adaptive loading states that adjust to the shape of your components while data is being fetched

Try it live in a sandbox by reloading the in-window browser: https://codesandbox.io/s/github/steviecs/react-fallback

## Implementation

At this time, `react-fallback` works by:
- Consuming your JSX as a children inside of a `<Fallback/>` wrapper
- Cloning the component tree
- Iterating through child elements
- Replacing children with a skeleton element that inherits all original style properties (except for the explicitly enforced `background-color` & `animation`)
