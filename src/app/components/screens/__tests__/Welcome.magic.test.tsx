/**
 * @jest-environment jsdom
 */
import React from "react";
import ReactDOMServer from "react-dom/server";

// Make layout a passthrough to simplify rendering
jest.mock("app/components/layouts/BoardingPageLayout", () => ({ children }: any) => <div>{children}</div>);

// Stub atoms to avoid initializing real jotai atoms
jest.mock("app/atoms", () => ({
  addAccountModalAtom: "ADD",
  profileStateAtom: "PROF",
}));

// Provide minimal implementations of jotai hooks used by Welcome
jest.mock("jotai", () => ({
  useAtomValue: (atom: any) => (atom === "ADD" ? false : { all: [1, 2, 3] }),
  useSetAtom: () => () => {},
}));

// Mock navigation Link used by Button to avoid importing real module with JSX runtime dependencies
jest.mock("lib/navigation", () => ({
  Link: ({ children, ...rest }: any) => <a {...rest}>{children}</a>,
}));

// Mock Button to avoid pulling real navigation implementation details
jest.mock("app/components/elements/Button", () => ({ children, ...rest }: any) => <button {...rest}>{children}</button>);

import Welcome from "app/components/screens/Welcome";

describe("Welcome hero logo", () => {
  it("renders MagicCraft SVG logo with size and glow classes", () => {
    const html = ReactDOMServer.renderToStaticMarkup(<Welcome />);
    expect(html).toContain("alt=\"MagicCraft logo\"");
    expect(html).toContain("logo-magic");
    expect(html).toContain("logo-glow");
  });
}); 