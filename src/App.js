import React, { useEffect, useState } from "react";
import pako from "pako";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompressedJSON = async () => {
      try {
        // 圧縮されたJSONをフェッチ
        const response = await fetch("/json/result.json.gz");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 圧縮データをArrayBufferとして取得
        const compressedData = await response.arrayBuffer();

        // 解凍してJSON文字列を取得
        const decompressedData = pako.inflate(new Uint8Array(compressedData), { to: "string" });

        // JSON文字列をオブジェクトに変換
        const jsonData = JSON.parse(decompressedData);

        // ステートにセット
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCompressedJSON();
  }, []);

  return (
    <div>
      <h1>圧縮JSONデータの読み込み</h1>
      {error && <p style={{ color: "red" }}>エラー: {error}</p>}
      {data ? (
        <div>
          <h2>データ内容</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>読み込み中...</p>
      )}
    </div>
  );
};

export default App;
