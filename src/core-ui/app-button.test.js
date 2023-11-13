import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import AppButton from "./app-button";

const mockClick = jest.fn();
const mockProps = {
  onClick: mockClick,
  children: "Sample text",
  dataTestid: "mock-btn",
};
const renderView = () => render(<AppButton {...mockProps} />);

describe("Given App Button component", () => {
  it("should the render content", async () => {
    renderView();
    expect(screen.getByTestId(mockProps.dataTestid)).toBeDefined();
    expect(screen.getByText(mockProps.children)).toBeDefined();
  });

  it("should fire onClick event as passed from props", async () => {
    renderView();
    expect(mockProps.onClick).toHaveBeenCalledTimes(0);
    const mockBtn = screen.getByTestId(mockProps.dataTestid);
    fireEvent.click(mockBtn);
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
