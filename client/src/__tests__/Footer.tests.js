import { render, screen } from '@testing-library/react'
import Footer from '../component/Footer';

test("Example 1 renders successfully", () => {
    render(<Footer/>);

    const element = screen.getByText(/JISETI/i);

    expect(element).toBeInTheDocument();
})