import { useState } from "react";
import "./style.css";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        color: "#FFFFFF",
        fontSize: "50px",
      }}
    >
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percent={percentage1} onSelect={setPercentage1}>
        How Did you like sevice?
      </SelectPercentage>
      <SelectPercentage percent={percentage2} onSelect={setPercentage2}>
        {" "}
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} per1={percentage1} per2={percentage2} />
          <Reset handler={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div style={{ display: "block" }}>
      <lable> How Much was the Bill ?</lable>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => {
          onSetBill(Number(e.target.value));
        }}
      />
    </div>
  );
}
function SelectPercentage({ percent, onSelect, children }) {
  return (
    <div style={{ display: "block" }}>
      <label>{children}</label>
      <select
        value={percent}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatified (0%)</option>
        <option value="5">It was ok(5%)</option>
        <option value="10">It was Good(10%)</option>
        <option value="20">Absolutely Amazing(20%)</option>
      </select>
      {percent === 0
        ? "🤮"
        : percent === 5
        ? "😐"
        : percent === 10
        ? "🥹"
        : "🤤"}
    </div>
  );
}
function Output({ bill, tip, per1, per2 }) {
  let total = bill + tip;
  return (
    <div>
      <h3> {`you have to pay $${total} ($${bill}+$${tip} tip)`} </h3>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {per1 === 20 && per2 === 20 ? "Have A Good day🥰" : ""}
      </h3>
    </div>
  );
}
function Reset({ handler }) {
  return (
    <div className="reset">
      <button onClick={handler}>Reset</button>
    </div>
  );
}
