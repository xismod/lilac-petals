import { describe, expect, it } from "vitest";
import { render, screen } from "../../__tests__/setup";

import { Button as ButtonComponent } from "./Button";

describe("[Components]: Button", () => {
  it("renders without crash", () => {
    render(<ButtonComponent>Hello World</ButtonComponent>)
    const component = screen.getByText("Hello World");
    expect(component).toBeDefined();
  });
});
