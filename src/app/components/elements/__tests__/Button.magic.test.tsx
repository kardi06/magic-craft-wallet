/**
 * @jest-environment jsdom
 */
import React from "react";
import ReactDOMServer from "react-dom/server";
import Button from "app/components/elements/Button";

describe("Button theme=magic", () => {
  it("renders with magic classes", () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <Button theme="magic">Action</Button>,
    );
    expect(html).toContain("btn-magic");
    expect(html).toMatchSnapshot();
  });
}); 