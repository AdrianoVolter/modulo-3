import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";


const usario = userEvent;

describe("App", () => {
  test("Deveria existir uma logo do React", () => {
    render(<App />);
    const logo = screen.getByAltText(/react logo/i);
    expect(logo).toBeInTheDocument();
  })

  test("Deveria existir um título com o texto Vite + React", () => {
    render(<App />);
    const title = screen.getByRole("heading", { name: /vite \+ react/i });
    expect(title).toBeInTheDocument();
  })

  //usuario clica no botão e o contador deve ser incrementado
    test("Deveria existir um botão com o texto Contador: 0", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /contador: 0/i });
    expect(button).toBeInTheDocument();

    await usario.click(button);

    const contador = screen.getByRole("button", { name: /contador: 1/i });
    expect(contador).toBeInTheDocument();
    })

})
