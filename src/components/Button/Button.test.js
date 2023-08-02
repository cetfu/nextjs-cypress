import Button from "@/components/Button/index";
import {fireEvent, render, screen} from "@testing-library/react";

describe('button unit test', () => {
    it('should be render successfully', () => {
        render(<Button />)
    });
    it('should be render correctly', () => {
        const testString = "Hello World"
        render(<Button>{testString}</Button>)
        const element = screen.getByText(testString)
        expect(element).toBeInTheDocument()
    });

    it('should runs correctly when onClick', () => {
        let clicked = false
        const handleClick = () =>{
            clicked = true
        }
        render(<Button onClick={handleClick} />)
        const btn = screen.getByRole("button")
        fireEvent.click(btn)
        expect(clicked).toBe(true)
    });

    it('should be render primary variant correctly', () => {
        const variant = "primary"
        render(<Button variant={variant} />)

        const element = screen.getByRole("button")

        expect(element).toHaveClass("button")
        expect(element).toHaveClass(`button-${variant}`)
    });

    it('should be render warning variant correctly', () => {
        const variant = "warning"
        render(<Button variant={variant} />)

        const element = screen.getByRole("button")

        expect(element).toHaveClass("button")
        expect(element).toHaveClass(`button-${variant}`)
    });
});