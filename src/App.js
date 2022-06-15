import { useState } from "react";
import "./App.css";
import { ButonArea } from "./components/ButonArea";
import { Display } from "./components/Display";
import a from "./components/a.wav";
const operators = ["+", "-", "*", "/", "%"];

function App() {
  const [str, setStr] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const [isPrank, setIsPrank] = useState(false);
  const [audio] = useState(new Audio(a));

  const handleOnClick = (value) => {
    isPrank && setIsPrank(false);
    //what we shoud do when we click on a specific button
    if (value === "AC") {
      setStr("");
      return;
    }

    if (value === "=") {
      return onTotal();
    }

    if (value === "C") {
      const temStr = str.slice(0, -1);
      setStr(temStr);
      return;
    }

    if (operators.includes(value)) {
      setLastOperator(value);
      const lastChar = str.slice(-1);
      if (operators.includes(lastChar)) {
        // replace the last operator with the new one

        const strWithOutLastChar = str.slice(0, -1);
        setStr(strWithOutLastChar + value);
        return;
      }
    }

    if (value === ".") {
      if (lastOperator) {
        const positionOfLastOperator = str.lastIndexOf(lastOperator);
        // const beforeLastOperator = str.slice(0, positionOfLastOperator + 1);
        const afterLastOperator = str.slice(positionOfLastOperator + 1);
        if (afterLastOperator.includes(".")) {
          return;
        }
      } else {
        if (str.includes(".")) {
          return;
        }
      }
    }

    setStr(str + value);
  };

  const onTotal = () => {
    const prankVal = randomNumber();
    prankVal > 0 && audio.play() && setIsPrank(true);
    const ttl = eval(str) + prankVal;
    setStr(ttl.toFixed(2).toString());
  };
  const randomNumber = () => {
    const num = Math.ceil(Math.random() * 10);
    return num > 3 ? 0 : num;
  };
  return (
    <div className="wrapper">
      <Display str={str} isPrank={isPrank} />
      {/* <!-- correct way is to give different div to input and all the buttons --> */}

      <ButonArea handleOnClick={handleOnClick} />
    </div>
  );
}

export default App;
