import { getByText, render, screen, waitFor } from "@testing-library/react";
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

  test("Deve pegar o input corretamente", async () => {
    render(<App />);
    const inputElement = screen.queryByPlaceholderText(/digite seu nome/i);

    userEvent.type(inputElement, "João");

    await waitFor(() => {
      const nameElement = screen.getByText(/João/i);
      expect(nameElement).toBeInTheDocument();
    });
  });

  test("Deve mostrar o nome digitado abaixo do input", async () => {
    render(<App />);
    const inputElement = screen.queryByPlaceholderText(/digite seu nome/i);

    userEvent.type(inputElement, "João");
    
  
    await waitFor(() => {
      
      expect(screen.getByText(/João/i)).toBeInTheDocument();
      expect(screen.getByText(/hello/i)).toBeInTheDocument("Hello, João");
    }
    );
  });
});

    