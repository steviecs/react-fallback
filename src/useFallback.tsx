import React, {useRef} from 'react'

const tags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'IMG', 'TD']

function assignFallbackAttributes(el: Element) {
  let styles = ''
  el.textContent = el.textContent || '_'
  const css = window.getComputedStyle(el)

  for (var i = 0; i < css.length; i++) {
    styles += `background-color:#d8d6d6;animation: skeleton 1s linear infinite alternate both;${
      css[i]
    }:${css.getPropertyValue('' + css[i])};`
  }

  return styles
  //   let styles = "";
  //   el.textContent = el.textContent || "_";
  // const css = window.getComputedStyle(el);
  // for (var i = 0; i < css.length; i++) {
  //   if (css[i] === "background-color" || css[i] === "animation") {
  //     styles += "background-color:rgba(0, 0, 0, 0.11);";
  //     styles += "animation: skeleton 1s linear infinite alternate both;";
  //   } else {
  //     styles += `${css[i]}:${css.getPropertyValue("" + css[i])};`;
  //   }
  // }
  // return styles;
}

interface UseFallbackProps {
  isLoading: boolean
  fallbackOnStaticContent?: boolean
}

export default function useFallback({isLoading, fallbackOnStaticContent}: UseFallbackProps) {
  const ref = useRef<HTMLDivElement>()

  function withFallback(tree: JSX.Element) {
    const Fallback = React.forwardRef((_, ref) => React.cloneElement(tree, {ref}))

    if (isLoading) {
      return (
        <Fallback
          ref={(el: HTMLDivElement) => {
            ref.current = el
            ref.current?.querySelectorAll('*').forEach((el) => {
              if (tags.includes(el.tagName) || el.firstChild?.nodeValue) {
                const skeleton = document.createElement('div')
                if (fallbackOnStaticContent || !el.textContent) {
                  skeleton.style.cssText = assignFallbackAttributes(el)
                  el.replaceWith(skeleton)
                }
              }
            })
          }}
        />
      )
    } else {
      return tree
    }
  }

  return {withFallback}
}
