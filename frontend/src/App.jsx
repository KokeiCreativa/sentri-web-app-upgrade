import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Deteksi from "./pages/Deteksi";
import Notifikasi from "./pages/Notifikasi";
import Chatbot from "./pages/Chatbot";
import Edukasi from "./pages/Edukasi"; // ✅ Impor halaman Edukasi

function App() {
    return (
        <Router>
            {/* 🔗 Navbar */}
            <nav className="bg-blue-600 text-white p-4 flex gap-6">
                <Link to="/">Beranda</Link>
                <Link to="/deteksi">Deteksi</Link>
                <Link to="/notifikasi">Notifikasi</Link>
                <Link to="/chatbot">Chatbot</Link>
                <Link to="/edukasi">Edukasi</Link> {/* ✅ Tambah Link Edukasi */}
            </nav>

            {/* 📌 Routing */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/deteksi" element={<Deteksi />} />
                <Route path="/notifikasi" element={<Notifikasi />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/edukasi" element={<Edukasi />} /> {/* ✅ Route Edukasi */}
            </Routes>
        </Router>
    );
}

export default App;
