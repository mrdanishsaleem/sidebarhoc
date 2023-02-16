import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Layout from "./layouts/Layout";
import About from "./routes/About";
import Contact from "./routes/Contact";

// Layout component is the HOC
// we can pass App as parameters
const AppComponent = Layout(App);

// passing About component to Layout hoc as a parameter
const AboutComponent = Layout(About);

// passing Contact component to Layout hoc as a parameter
const ContactComponent = Layout(Contact);

const router = createBrowserRouter([
  { path: "/", element: <AppComponent /> },
  { path: "/about", element: <AboutComponent /> },
  { path: "/contact", element: <ContactComponent /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
