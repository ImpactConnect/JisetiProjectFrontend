import { render, screen } from '@testing-library/react'
import App from "./App";

test("Renders a loginform component", () => {
    const compenent = render(<App/>);
    const childElement = compenent.getByLabelText("tick");
    expect(childElement).toBeInTheDocument()
    
  });
