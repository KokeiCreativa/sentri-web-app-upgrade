import { useState } from "react";

function Deteksi() {
  const [inputText, setInputText] = useState("");
  const [hasil, setHasil] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputText.trim()) {
      alert("Masukkan kalimat terlebih dahulu.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/detect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: inputText })
      });

      if (!response.ok) {
        throw new Error("Respon tidak valid dari server.");
      }

      const data = await response.json();
      setHasil(data.result || "Tidak ada hasil.");
    } catch (error) {
      console.error("❌ Gagal fetch ke backend:", error);
      setHasil("❌ Gagal menghubungi server.");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Deteksi Penipuan</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border p-3 rounded mb-3"
          rows="4"
          placeholder="Masukkan kalimat mencurigakan..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Deteksi
        </button>
      </form>

      {hasil && (
        <div className="mt-4 p-4 border bg-gray-50 rounded">
          <strong>Hasil Deteksi:</strong> {hasil}
        </div>
      )}
    </div>
  );
}

export default Deteksi;
