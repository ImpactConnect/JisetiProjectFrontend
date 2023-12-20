import { render, screen } from '@testing-library/react'
import Footer from '../component/Footer';

test("Displays a text named JISETI", () => {
    render(<Footer />);

    const element = screen.getByText(/JISETI/i);

    expect(element).toBeInTheDocument();
}) 