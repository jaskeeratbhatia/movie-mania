import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import ErrorPage from "./error-page";
import * as router from "react-router";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

const renderView = () => render(<ErrorPage />);

describe("Given Error page component", () => {
  it("should the render content", async () => {
    renderView();
    expect(screen.getByTestId("page-not-found").innerHTML).toBe(
      "Page not found"
    );
    expect(screen.getByTestId("home-button")).toBeDefined();
  });

  it("should navigate to home when go to home is clicked", async () => {
    renderView();
    const homeBtn = screen.getByTestId("home-button");
    fireEvent.click(homeBtn);
    expect(navigate).toHaveBeenCalledWith("/");
  });
});
