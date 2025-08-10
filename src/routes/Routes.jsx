import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import PortfolioPage from "../pages/PortfolioPage";

const Router = createBrowserRouter([
    {
        path: "/" , 
        element: <MainLayout /> ,
        errorElement: <ErrorPage /> ,
        children: [
            {
                index: true ,
                element: <HomePage /> 
            },
            {
                path: "about" ,
                element: <AboutPage />
            } ,
            {
                path: "contact" ,
                element: <ContactPage />
            },
            {
                path: "portfolio" ,
                element: <PortfolioPage />
            }
        ]
    }
])

export default Router