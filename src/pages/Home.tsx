import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>
        <button onClick={() => navigate("/analysis-company")}>企業分析</button>
      </h1>
    </>
  );
}

export default Home;
