import React, { useRef } from "react";

const tags = ["P", "H1", "H2", "H3", "H4", "H5", "H6", "SPAN", "IMG"];

const getAttributes = (el: Element) => {
  el.textContent = el.textContent || "_";
  const css = window.getComputedStyle(el);
  let styles = "";
  for (var i = 0; i < css.length; i++) {
    if (css[i] === "background-color" || css[i] === "animation") {
      styles += "background-color:rgba(0, 0, 0, 0.11);";
      styles += "animation: skeleton 1s linear infinite alternate both;";
    } else {
      styles += `${css[i]}:${css.getPropertyValue("" + css[i])};`;
    }
  }
  return styles;
};

export const useFallback = (isLoading: boolean) => {
  const ref = useRef<HTMLDivElement>();

  const withFallback = (tree: JSX.Element) => {
    const Fallback = React.forwardRef((props, ref) =>
      React.cloneElement(tree, { ref: ref })
    );

    if (isLoading) {
      return (
        <Fallback
          ref={(el: HTMLDivElement) => {
            ref.current = el;
            ref.current?.querySelectorAll("*").forEach((el) => {
              if (tags.includes(el.tagName) || el.firstChild?.nodeValue) {
                const skeleton = document.createElement("div");
                const styles = getAttributes(el);
                skeleton.style.cssText = styles;
                el.replaceWith(skeleton);
              }
            });
          }}
        />
      );
    } else {
      return tree;
    }
  };

  return { withFallback };
};
