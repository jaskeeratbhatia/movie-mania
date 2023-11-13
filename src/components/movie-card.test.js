import React from "react";
import { screen, render } from "@testing-library/react";
import MovieCard from "./movie-card";
import { BASE_IMG_URL } from "../constants";

const mockProps = {
  movieDetails: {
    id: 12345,
    original_title: "Sample movie title",
    poster_path: "abc.jpg",
    release_date: "2021-02-02",
    vote_average: 8.234,
    overview: "Sample overview",
  },
};
const renderView = () => render(<MovieCard {...mockProps} />);

describe("Given MovieCard component", () => {
  it("should the render content", async () => {
    renderView();
    expect(
      screen.getByText(mockProps.movieDetails.original_title)
    ).toBeDefined();
    expect(screen.getByText("2021")).toBeDefined();
    expect(screen.getByText("8.2/10")).toBeDefined();
    expect(screen.getByText(mockProps.movieDetails.overview)).toBeDefined();
    expect(screen.getByTestId("add-to-favourite-btn")).toBeDefined();
    expect(screen.getByTestId("movie-poster")).toBeDefined();
    expect(screen.getByTestId("movie-poster").getAttribute("src")).toBe(
      `${BASE_IMG_URL}/abc.jpg`
    );
  });
});
