// import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import TextForm from "./components/Index";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

function App() {
  const [toggle, setToggle] = useState("light");

  function toggler() {
    if (toggle === "light") {
      setToggle("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Activated", "success");
    } else {
      setToggle("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode Activated", "success");
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  // eslint-disable-next-line react/prop-types
  return (
    <>
      <BrowserRouter>
        <Navbar toggle={toggle} toggler={toggler} />
        <Alert alert={alert} />
        <div className="container">
          <TextForm
            heading="Enter the text to anylize"
            toggle={toggle}
            toggler={toggler}
            alert={alert}
            showAlert={showAlert}
          />
        </div>
        <Routes>
          <Route path="/" element={<Navbar />} />
          {/* <Route path="/" element={<TextForm />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <TextForm />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

// return <RouterProvider router={router} />;
export default App;
