import { render, screen } from '@testing-library/react'
import App from "./App";
import {LoginForm} from "../component/LoginForm"
import {RegisterForm} from "../component/RegisterForm"
import {CardPosts} from "../component/CardPosts"
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect"

// jest.mock("../component/CardPosts")
// describe("Tests for App Router", () => {
//   test("Should render CardPosts on default route", ()=>{
//     CardPosts.mockImplementation(() =>
//     <div>CardPostsMock</div>);
//     render(
//       <MemoryRouter>
//         <App />
//       </MemoryRouter>
//   );
//   expect(screen.getByText("CardPostsMock").toBeInTheDocument())
//   })
// })



