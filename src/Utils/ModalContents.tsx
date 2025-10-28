import { useState } from "react";
import type { FormDataType } from "./Modal";

type ModalContentsProps = {
  onClose: () => void;
  onSubmit: (data: FormDataType) => void;
};

export const ModalContents = (props: ModalContentsProps) => {
  const [companyName, setCompanyName] = useState("");
  const [remote, setRemote] = useState("");
  const [income, setIncome] = useState("500~600");
  const [rating, setRating] = useState("3");

  const handleSubmit = () => {
    props.onSubmit({ companyName, remote, income, rating });
    props.onClose();
  };

  return (
    <div>
      <h1 style={{ fontSize: "Medium" }}>企業名</h1>
      <textarea
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      ></textarea>
      <h2 style={{ fontSize: "Medium" }}>リモートワーク</h2>
      <button onClick={() => setRemote("あり")}>あり</button>
      <button onClick={() => setRemote("なし")}>なし</button>
      <h2 style={{ fontSize: "Medium" }}>平均年収（万）</h2>
      <select value={income} onChange={(e) => setIncome(e.target.value)}>
        <option value="~400">~400</option>
        <option value="400~500">400~500</option>
        <option value="500~600" selected>
          500~600
        </option>
        <option value="600~700">600~700</option>
        <option value="700~">700~</option>
      </select>
      <h2 style={{ fontSize: "Medium" }}>評価</h2>
      <div style={{ margin: "2vh" }}>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="1">★</option>
          <option value="2">★★</option>
          <option value="3" selected>
            ★★★
          </option>
          <option value="4">★★★★</option>
          <option value="5">★★★★★</option>
        </select>
      </div>
      <button onClick={props.onClose}>キャンセル</button>
      <button onClick={handleSubmit}>送信</button>
    </div>
  );
};
