// 📁 frontend/src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-blue-700 mb-2">
                    <i className="fas fa-robot"></i> SENTRI
                </h1>
                <p className="text-gray-700 text-lg">
                    Solusi Edukasi dan Deteksi Risiko Keuangan Berbasis AI
                </p>
            </header>

            <section className="grid gap-4 w-full max-w-md">
                <Link to="/edukasi" className="menu-item">
                    <i className="fas fa-book-open"></i> Edukasi Keuangan Interaktif
                </Link>
                <Link to="/deteksi" className="menu-item">
                    <i className="fas fa-search"></i> Deteksi Kata Kunci Penipuan
                </Link>
                <Link to="/notifikasi" className="menu-item">
                    <i className="fas fa-bell"></i> Notifikasi Waspada Risiko
                </Link>
                <a href="https://wa.me/6281344121216" className="menu-item">
                    <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
                <a href="https://t.me/username" className="menu-item">
                    <i className="fab fa-telegram"></i> Telegram
                </a>
            </section>

            <div className="chatbot-toggle fixed bottom-4 right-4" onClick={() => {
                const bot = document.getElementById("chatbot");
                if (bot) bot.style.display = bot.style.display === "none" ? "flex" : "none";
            }}>
                <i className="fas fa-comments"></i>
            </div>

            <div id="chatbot" className="chatbot-container" style={{ display: "none" }}>
                <div className="chatbot-header">Asisten SENTRI</div>
                <div className="chatbot-body" id="chat-content">
                    <p><strong>SENTRI:</strong> Halo! Ada yang bisa saya bantu?</p>
                </div>
                <div className="chatbot-input">
                    <input type="text" id="chat-input" placeholder="Ketik pesan..." className="flex-1 border px-2 py-1" />
                    <button className="bg-blue-600 text-white px-3" onClick={() => {
                        const input = document.getElementById("chat-input");
                        const chat = document.getElementById("chat-content");
                        if (input && chat && input.value.trim()) {
                            chat.innerHTML += `<p><strong>Anda:</strong> ${input.value}</p>`;
                            input.value = "";
                        }
                    }}>Kirim</button>
                </div>
            </div>
        </div>
    );
}

export default Home;