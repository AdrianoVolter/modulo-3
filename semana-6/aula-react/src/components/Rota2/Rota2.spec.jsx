import { render, screen, act } from "@testing-library/react";
import Joke from "./index.jsx";

const mockData = { value: "O que é, o que é? Cai em pé e corre deitado? R: A chuva." };

global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockData) }));

describe("Joke", () => {
 it("should display a joke", async () => {
   render(<Joke />);
    screen.debug();
   const joke = await screen.findByText(mockData.value);
   expect(joke).toBeInTheDocument();
    screen.debug();
 });

});

