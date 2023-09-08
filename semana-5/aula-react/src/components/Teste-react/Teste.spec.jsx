import { render, screen } from "@testing-library/react";
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
    

});