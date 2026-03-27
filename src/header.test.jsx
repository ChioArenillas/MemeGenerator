import { test, expect, describe } from "vitest";
import Header from "./header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
    test("displays the app name and imagen", () => {
        render(<Header />)
        expect(screen.getByText("Meme Generator")).toBeInTheDocument()
        expect(screen.getByRole("img").src).toContain("trollFace.png")
    })
})


