import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("ensure trollface image is accesible", () => {
    render(<App />)
    expect(screen.getByAltText("Troll face")).toBeInTheDocument()
})
test("ensure meme image is accesible", () => {
    render(<App />)
    expect(screen.getByAltText("meme image")).toBeInTheDocument()
})

