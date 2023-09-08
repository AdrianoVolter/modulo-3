import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("Counter Component", () => {
  test("deve iniciar o titulo com o valor 0", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).toBeInTheDocument();
  });

  test("deve conter a classe counter__title no titulo", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).toHaveClass("counter__title");
  });

  test("não deve iniciar o titulo com as classes counter__title--increment e counter__title--decrement", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).not.toHaveClass("counter__title--increment");
    expect(counterTitle).not.toHaveClass("counter__title--decrement");
  });

  test("Deve ter um botão incrementar", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(buttonIncrement).toBeInTheDocument();
  });

  test("conter um botao incrementar com a classe button--incremente", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(buttonIncrement).toHaveClass("button");
    expect(buttonIncrement).toHaveClass("button--increment");
  });

  test("Deve ter um botão decrementar", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(buttonDecrement).toBeInTheDocument();
  });

  test("deve conter um botao decrementar com a classe button--decrement", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(buttonDecrement).toHaveClass("button");
    expect(buttonDecrement).toHaveClass("button--decrement");
  });

  test("deve incrementar + 1 ao clicar no botão incrementar", async () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(screen.queryByText("1")).toBeNull();

    userEvent.click(buttonIncrement);
    // Adiciona um delay de 1 segundo para o teste
    await waitFor(() => {
      // espera o componente ser renderizado para fazer o teste
      expect(screen.getByText("1")).toBeInTheDocument();
    });
  });

  test("deve decrementar - 1 ao clicar no botão decrementar", async () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(screen.queryByText("-1")).toBeNull();

    userEvent.click(buttonDecrement);
    // Adiciona um delay de 1 segundo para o teste
    await waitFor(() => {
      // espera o componente ser renderizado para fazer o teste
      expect(screen.getByText("-1")).toBeInTheDocument();
    });
  });

  test("deve adicionar a classe counter__title--increment no titulo , quando o valor for maior que 0", async () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--increment"
    );
    userEvent.click(buttonIncrement);
    await waitFor(() => {
      expect(screen.getByText("1")).toHaveClass("counter__title--increment");
    });
  });

 
});
