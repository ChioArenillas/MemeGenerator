import { userEvent } from "@testing-library/user-event"
import { test, expect, describe } from "vitest"
import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App", () => {
    test("update the top text", async () => {
        const user = userEvent.setup()
        render(<App />)
        const topTextbox = screen.getAllByRole("textbox")[0]

        await user.clear(topTextbox)
        await user.type(topTextbox, "A coder does not simply")

        expect(screen.getByText("A coder does not simply")).toBeInTheDocument()
    })

    test("update bottom text", async () => {
        const user = userEvent.setup()
        render(<App />)
        const bottomText = screen.getAllByRole("textbox")[1]

        await user.clear(bottomText)
        await user.type(bottomText, "Code without coffee")

        expect(screen.getByText("Code without coffee")).toBeInTheDocument()
    })

    test("get new random imagen", async () => {
        //Arrange
        const user = userEvent.setup()
        render(<App />)
        const getMemeImageButton = screen.getByRole("button")

        //Act
        await user.click(getMemeImageButton)

        //Asset
        const images = screen.getAllByRole('img')
        expect(images[1].src).toBe("http://i.imgflip.com/1c1uej.jpg")
    })
})
