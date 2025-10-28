import { useState } from "react";
import { Modal } from "../Utils/Modal";

export const AnalysisCompany = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "10vh" }}>企業分析</h1>
      <button onClick={handleModal}>+</button>
      <Modal isOpen={isOpen} onClose={onClose} />
      <div
        className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2vw",
          margin: "10vh",
        }}
      >
        <div
          className="grid-cell"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#c5d7e2ff",
            borderRadius: "10px",
          }}
        >
          <h2>企業名</h2>
          <h3>評価</h3>
        </div>
        <div
          className="grid-cell"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#c5d7e2ff",
            borderRadius: "10px",
          }}
        >
          <h2>企業名</h2>
          <h3>評価</h3>
        </div>
        <div
          className="grid-cell"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#c5d7e2ff",
            borderRadius: "10px",
          }}
        >
          <h2>企業名</h2>
          <h3>評価</h3>
        </div>
        <div
          className="grid-cell"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#c5d7e2ff",
            borderRadius: "10px",
          }}
        >
          <h2>企業名</h2>
          <h3>評価</h3>
        </div>
        <div
          className="grid-cell"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#c5d7e2ff",
            borderRadius: "10px",
          }}
        >
          <h2>企業名</h2>
          <h3>評価</h3>
        </div>
        <div
          className="grid-cell"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#c5d7e2ff",
            borderRadius: "10px",
          }}
        >
          <h2>企業名</h2>
          <h3>評価</h3>
        </div>
        <div
          className="grid-cell"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#c5d7e2ff",
            borderRadius: "10px",
          }}
        >
          <h2>企業名</h2>
          <h3>評価</h3>
        </div>
        <div
          className="grid-cell"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#c5d7e2ff",
            borderRadius: "10px",
          }}
        >
          <h2>企業名</h2>
          <h3>評価</h3>
        </div>
        <div
          className="grid-cell"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#c5d7e2ff",
            borderRadius: "10px",
          }}
        >
          <h2>企業名</h2>
          <h3>評価</h3>
        </div>
        <div
          className="grid-cell"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#c5d7e2ff",
            borderRadius: "10px",
          }}
        >
          <h2>企業名</h2>
          <h3>評価</h3>
        </div>
        <div
          className="grid-cell"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#c5d7e2ff",
            borderRadius: "10px",
          }}
        >
          <h2>企業名</h2>
          <h3>評価</h3>
        </div>
        <div
          className="grid-cell"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#c5d7e2ff",
            borderRadius: "10px",
          }}
        >
          <h2>企業名</h2>
          <h3>評価</h3>
        </div>
      </div>
    </div>
  );
};
