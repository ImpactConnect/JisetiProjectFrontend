import { render, screen } from '@testing-library/react'
import About from "../component/About";

test("Displays a details on about of the JISETI page", () => {
    render(<About/>);

    const element = screen.getByRole("about-details");

    expect(element).toBeInTheDocument();
}) 




