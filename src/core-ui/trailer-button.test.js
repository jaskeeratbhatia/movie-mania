import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import TrailerButton from "./trailer-button";

const mockClick = jest.fn();
const mockProps = {
  children: "Sample trailer btn text",
  onPlay: mockClick,
  dataTestid: "mock-trailer-btn",
};
const renderView = () => render(<TrailerButton {...mockProps} />);

describe("Given Trailer Button component", () => {
  it("should the render content", async () => {
    renderView();
    expect(screen.getByTestId(mockProps.dataTestid)).toBeDefined();
    expect(screen.getByText(mockProps.children)).toBeDefined();
  });

  it("should fire onPlay callback", async () => {
    renderView();
    expect(mockProps.onPlay).toHaveBeenCalledTimes(0);
    const mockBtn = screen.getByTestId(mockProps.dataTestid);
    fireEvent.click(mockBtn);
    expect(mockProps.onPlay).toHaveBeenCalledTimes(1);
  });
});
