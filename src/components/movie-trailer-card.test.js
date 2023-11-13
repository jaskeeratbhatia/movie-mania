import React from "react";
import { screen, render } from "@testing-library/react";
import MovieTrailerCard from "./movie-trailer-card";

const renderView = () => render(<MovieTrailerCard />);

describe("Given MovieCard component", () => {
  it("should the render content", async () => {
    renderView();
    expect(screen.getByTestId("trailer-title")).toBeDefined();
  });
});
