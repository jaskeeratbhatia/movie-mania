import React from "react";
import { screen, render } from "@testing-library/react";
import MovieAppBar from "./movie-app-bar";

const mockProps = {
  children: "Sample text",
};
const renderView = () => render(<MovieAppBar {...mockProps} />);

describe("Given MovieAppBar component", () => {
  it("should the render content", async () => {
    renderView();
    expect(screen.getByText(mockProps.children)).toBeDefined();
  });
});
