/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TextForm(props) {
  let myStyle = {
    backgroundColor: props.toggle == "light" ? "red" : "#042743",
  };
  const [text, setText] = useState("");
  const handleToUpper = () => {
    if (text == "") {
      return false;
    }
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert to uppercase", "success");
  };
  const handleToLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("convert to lowercase", "success");
  };
  const handleToClear = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div
      className={`wrapper ${
        props.toggle === "light" ? "text-dark" : "text-light"
      }`}
    >
      <h1 className="text-2xl font-medium">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.toggle == "light" ? "white" : "#13466e",
          }}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-2 my-4"
          onClick={handleToUpper}
        >
          click to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm  mx-2 my-4"
          onClick={handleToLower}
        >
          click to lowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={handleToClear}
        >
          clear text
        </button>
      </div>
      <div className="container my-2">
        <h1 className="text-2xl font-medium">your text summery</h1>
        <p>
          words
          {
            text.split(" ").filter((elm) => {
              return elm.length !== 0;
            }).length
          }
          and characters {text.length}
          <p>
            {0.008 *
              text.split(" ").filter((elm) => {
                return elm.length !== 0;
              }).length +
              " time to read"}
          </p>
          <h1>preview</h1>
          <p>{text}</p>
        </p>
      </div>
    </div>
  );
}
