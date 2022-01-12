## react-fallback

A POC component library for rendering adaptive loading states that adjust to the shape of your UI while data is being fetched

Try it live in a sandbox by reloading the in-window browser: https://codesandbox.io/s/github/steviecs/react-fallback

## Why?

Because
```
return (
  <Fallback isLoading={data}>
    <div>
      <h1>{props.heading}</h1>
      <h2>{props.subheading}</h2>
      <p>S{props.body}</p>
    </div>
  </Fallback>
);
```
dunks on
```
  return (
    <>
      {isLoading ? (
        <div>
          <h1><Skeleton {...styles}/></h1>
          <h2><Skeleton {...styles}/></h2>
          <p><Skeleton {...styles}/></p>
        </div>
      ) : (
        <div>
          <h1>{props.heading}</h1>
          <h2>{props.subheading}</h2>
          <p>S{props.body}</p>
        </div>
      )}
    </>
  );
```

## Implementation

At this time, `react-fallback` works by:
- Consuming your JSX as a children inside of a `<Fallback/>` wrapper
- Cloning the component tree
- Iterating through child elements
- Replacing children with a skeleton element that inherits all original style properties (except for the explicitly enforced `background-color` & `animation`)
