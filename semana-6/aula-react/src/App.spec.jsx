import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("deve redenrizar os componentes", () => {
  test('deve renderizar o o texto "Hello"', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('deve renderizar o o texto "digite seu nome"', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/digite seu nome/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("deve renderizar a imagem", () => {
    render(<App />);
    const imgElement = screen.queryByRole("img");
    expect(imgElement).toBeInTheDocument();
  });

});

describe("deve encontrar a imagem com texto alternativo correto", () => {
  test("deve encontrar a imagem com texto alternativo correto", () => {
    render(<App />);
    const imgElement = screen.getByAltText(
      "ilustração de uma mulher negra usando o computador e segurando uma xícara"
    );
    expect(imgElement).toBeInTheDocument();
  });
}
);