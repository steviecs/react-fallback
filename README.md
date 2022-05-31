<div align="center">
  <img src="https://i.imgur.com/3xjKPvz.png" alt="Logo" width="160" height="160" />
  <h1 align="center">react-fallback</h1>
</div>

[![Node.js CI](https://github.com/steviecs/react-fallback/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/steviecs/react-fallback/actions/workflows/node.js.yml)
[![Npm package version](https://badgen.net/npm/v/@steviecs/react-fallback)](https://npmjs.com/package/@steviecs/react-fallback)
[![Npm package monthly downloads](https://badgen.net/npm/dm/@steviecs/react-fallback)](https://npmjs.com/package/@steviecs/react-fallback)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/steviecs/react-fallback/graphs/commit-activity)
[![GitHub license](https://img.shields.io/github/license/steviecs/react-fallback.svg)](https://github.com/steviecs/react-fallback/blob/main/LICENSE)

A POC React component library for rendering skeleton states that automatically adapt to the shape of your UI layout while data is being fetched.


## Demo

Try it live by reloading the sandbox browser: https://codesandbox.io/s/react-fallback-demo-b36dft?file=/src/App.tsx

![Example](https://cdn.loom.com/sessions/thumbnails/77d6e8d9aa024064a026d405e773225b-1654016529399.gif)

## Installation

```
$ npm i @steviecs/react-fallback
```

## Motivation

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

## Props Reference

### `Fallback` only

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>isLoading: boolean</code></td>
            <td>A flag to determine if component-dependent data is being fetched</td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td><code>fallbackOnStaticContent?: boolean</code></td>
            <td>
                A flag to determine if static content should be skeleton-ized
            </td>
            <td><code>false</code></td>
        </tr>
    </tbody>
</table>

## Implementation

At this time, `react-fallback` works by:

- Consuming your JSX as a children inside of a `<Fallback/>` wrapper
- Cloning the component tree
- Iterating through child elements
- Replacing children with a skeleton element that inherits all original style properties (except for the explicitly enforced `background-color` & `animation`)
