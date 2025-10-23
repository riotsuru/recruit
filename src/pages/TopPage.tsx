import { useNavigate } from "react-router-dom";

function TopPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <img
        src={"../../public/piyocarreer.png"}
        alt="ひよこ"
        style={{ width: "200px", marginBottom: "20px" }}
      />
      <br />
      <button
        onClick={() => navigate("/home")}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        スタート！
      </button>
    </div>
  );
}

export default TopPage;
