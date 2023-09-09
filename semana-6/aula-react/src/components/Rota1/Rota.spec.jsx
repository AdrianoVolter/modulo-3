import { render, screen, fireEvent } from "@testing-library/react";
import Rota1 from "./index.jsx";

describe("Teste do componente Rota1", () => {
  test("Renderize sem problemas", () => {
    render(<Rota1 />);
    const linkElement = screen.getByText("Rota 1");

    expect(linkElement).toBeInTheDocument();
  });

  test("Teste o input no componente Rota1", () => {
    render(<Rota1 />);

    const input = screen.getByLabelText("Nome");

    fireEvent.change(input, { target: { value: "Texto de teste" } });
    expect(input.value).toBe("Texto de teste");
  });
  
});
