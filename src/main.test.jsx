import { describe, test, expect } from "vitest"
import Main from "./main"
import { render, screen } from "@testing-library/react"

describe("main", () => {
    test("display top and bottom text, and meme image", () => {
        render(<Main />)
        expect(screen.getByText("One does not simply")).toBeInTheDocument()
        expect(screen.getByText("Walk into Mordor")).toBeInTheDocument()
        expect(screen.getByRole("img").src).toBe("https://i.imgflip.com/1bij.jpg")
    })
    test("display lables, input texts and button", () => {
        render(<Main />)
        expect(screen.getByText("Top Text")).toBeInTheDocument()
        expect(screen.getByText("Bottom Text")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("One does not simply")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Walk into Mordor")).toBeInTheDocument()
        expect(screen.getByRole("button").textContent).toBe("Get a new meme image 🖼")
    })
})
