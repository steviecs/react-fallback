import React from "react";
import Fallback from "../components/Fallback";
import { render, screen } from "@testing-library/react";

it("does not render a skeleton if data has been fetched", () => {
  render(
    <Fallback isLoading={false}>
      <p>Lorem ipsum</p>
    </Fallback>
  );
  
  expect(screen.getByText("Lorem ipsum")).toBeDefined();
});

it.each(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'img'])
  ("renders a skeleton if data has not yet been fetched", (t) => {
  render(
    <Fallback isLoading fallbackOnStaticContent>
      <p>Lorem ipsum</p>
      <h1>Lorem ipsum</h1>
      <h2>Lorem ipsum</h2>
      <h3>Lorem ipsum</h3>
      <h4>Lorem ipsum</h4>
      <h5>Lorem ipsum</h5>
      <h6>Lorem ipsum</h6>
      <span>Lorem ipsum</span>
      <img/>
    </Fallback>
  );

  const skeleton = document.getElementsByTagName("div")[2];
  const child = document.getElementsByTagName(t)[0];
  const css = window.getComputedStyle(skeleton);

  expect(css.backgroundColor).toBe('rgba(0, 0, 0, 0.11)');
  expect(css.animation).toBe('skeleton 1s linear infinite alternate both');
  expect(child).toBeUndefined();
});

it("does not skeleton-ize static content if specified", () => {
  render(
    <Fallback isLoading fallbackOnStaticContent={false}>
      <p>Lorem ipsum</p>
    </Fallback>
  );

  expect(screen.getByText("Lorem ipsum")).toBeDefined();
});
