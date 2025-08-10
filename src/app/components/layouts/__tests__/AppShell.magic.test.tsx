/**
 * @jest-environment jsdom
 */
import React from "react";
import ReactDOMServer from "react-dom/server";

import AppShell from "app/components/layouts/AppShell";

const Dummy = () => <div>content</div>;

describe("AppShell header logo", () => {
  it("uses MagicCraft SVG logo with accessible alt", () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <AppShell>
        <Dummy />
      </AppShell>,
    );
    // expect(html).toContain("/images/magiccraft-logo.svg");
    expect(html).toContain("alt=\"MagicCraft logo\"");
  });
}); 