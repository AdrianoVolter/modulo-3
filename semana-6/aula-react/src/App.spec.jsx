import { getByText, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("tests App.jsx", () => {
  test('should be render the text "Hello"', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should be render the text "enter your name"', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/digite seu nome/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should be render the image", () => {
    render(<App />);
    const imgElement = screen.queryByRole("img");
    expect(imgElement).toBeInTheDocument();
  });
});

test("Should be find the image with correct alt text", () => {
  render(<App />);
  const imgElement = screen.getByAltText(
    "ilustração de uma mulher negra usando o computador e segurando uma xícara"
  );
  expect(imgElement).toBeInTheDocument();
});

test("should be get the input correctly", async () => {
  render(<App />);
  const inputElement = screen.queryByPlaceholderText(/digite seu nome/i);

  userEvent.type(inputElement, "João");

  await waitFor(() => {
    const nameElement = screen.getByText(/João/i);
    expect(nameElement).toBeInTheDocument();
  });
});

test("should be show the name entered below the input", async () => {
  render(<App />);
  const inputElement = screen.queryByPlaceholderText(/digite seu nome/i);

  userEvent.type(inputElement, "João");

  await waitFor(() => {
    expect(screen.getByText(/João/i)).toBeInTheDocument();
    expect(screen.getByText(/hello/i)).toBeInTheDocument("Hello, João");
  });
});
