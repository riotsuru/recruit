type ModalContentsProps = {
  onClose: () => void;
};

export const ModalContents = (props: ModalContentsProps) => {
  return (
    <div>
      <h1 style={{ fontSize: "Medium" }}>企業名</h1>
      <textarea name="text" id="companyName"></textarea>
      <h2 style={{ fontSize: "Medium" }}>リモートワーク</h2>
      <button>あり</button>
      <button>なし</button>
      <h2 style={{ fontSize: "Medium" }}>平均年収（万）</h2>
      <select id="income">
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
        <select id="rating">
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
      <button>送信</button>
    </div>
  );
};
