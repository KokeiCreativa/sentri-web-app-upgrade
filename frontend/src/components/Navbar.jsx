import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex gap-6">
            <Link to="/">Beranda</Link>
            <Link to="/deteksi">Deteksi</Link>
            <Link to="/notifikasi">Notifikasi</Link>
            <Link to="/chatbot">Chatbot</Link> {/* opsional */}
        </nav>
    );
}

export default Navbar;
