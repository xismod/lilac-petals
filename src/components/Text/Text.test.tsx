import { describe, expect, it } from "vitest";
import { render, screen } from "../../__tests__/setup";

import { Text as TextComponent } from "./Text";

describe("[Components]: Text", () => {
  it("renders without crash", () => {
    render(<TextComponent>Hello World</TextComponent>)
    const component = screen.getByText("Hello World");
    expect(component).toBeDefined();
  });
});
