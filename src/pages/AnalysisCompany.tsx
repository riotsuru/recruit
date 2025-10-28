import { useState } from "react";
import { Modal } from "../Utils/Modal";
import type { FormDataType } from "../Utils/Modal";

export const AnalysisCompany = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [companies, setCompanies] = useState<FormDataType[]>([]);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleAdd = (data: FormDataType) => {
    setCompanies([...companies, data]);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "10vh" }}>企業分析</h1>
      <button onClick={handleModal}>+</button>
      <Modal isOpen={isOpen} onClose={onClose} onSubmit={handleAdd} />
      <div
        className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2vw",
          margin: "10vh",
        }}
      >
        {companies.map((company, index) => (
          <div
            key={index}
            className="grid-cell"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              backgroundColor: "#c5d7e2ff",
              borderRadius: "10px",
            }}
          >
            <h2>{company.companyName || "企業名未入力"}</h2>
            <h3>評価: {"★".repeat(Number(company.rating)) || "評価なし"}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
