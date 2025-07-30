import { useState } from "react";

function Chatbot() {
    const [inputText, setInputText] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponse("");

        try {
            const res = await fetch("http://127.0.0.1:8000/chatbot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text: inputText })
            });

            const data = await res.json();
            setResponse(data.response);
        } catch (error) {
            console.error(error);
            setResponse("❌ Gagal menghubungi server chatbot.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">💬 Chatbot AI Penjelas</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="w-full border border-gray-300 p-3 rounded mb-3"
                    rows="4"
                    placeholder="Masukkan kalimat yang ingin dijelaskan..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                    disabled={loading}
                >
                    {loading ? "Memproses..." : "Tanya AI"}
                </button>
            </form>

            {response && (
                <div className="mt-4 p-4 border bg-gray-50 rounded">
                    <strong>Jawaban AI:</strong> <br />
                    <span>{response}</span>
                </div>
            )}
        </div>
    );
}

export default Chatbot;
