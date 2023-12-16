import "@testing-library/jest-dom";
import {render, screen, fireEvent, cleanup} from '@testing-library/react'
import Home from '../component/Home'
import App from "../App";

//test block
test("displays a title for each post", () => {
    render(<Home userIsLoggedIn={userIsLoggedIn} />);
    const userElement = screen.getAllByLabelText(/Image/i)
      expect(userElement).toBeInTheDocument();
    
  });



// test("displays all posts when the 'All' button is clicked", () => {
//     render(<App />);
  
//     const allButton = screen.queryByRole("button", { name: "All" });
  
//     fireEvent.click(allButton);
  
//     expect(screen.queryByText("Bad road in the Dessert")).toBeInTheDocument();
//     expect(screen.queryByText("Dubia City")).toBeInTheDocument();
//   });