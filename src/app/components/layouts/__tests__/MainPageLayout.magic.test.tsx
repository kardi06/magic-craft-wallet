/**
 * @jest-environment jsdom
 */
import React from "react";
import ReactDOMServer from "react-dom/server";

jest.mock("app/components/blocks/Sidebar", () => () => <div />);
jest.mock("app/components/blocks/Menu", () => () => <div />);
jest.mock("app/components/layouts/PreloadBaseAndSync", () => ({ children }: any) => <>{children}</>);

// mock hooks that might touch window or ESM-only libs
jest.mock("app/hooks", () => ({}));

import MainPageLayout from "app/components/layouts/MainPageLayout";

const Dummy = () => <div>content</div>;

describe("MainPageLayout magic theme", () => {
  it("applies magic-page and magic-card classes", () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <MainPageLayout>
        <Dummy />
      </MainPageLayout>,
    );
    expect(html).toContain("magic-page");
    expect(html).toContain("magic-card");
  });
}); 