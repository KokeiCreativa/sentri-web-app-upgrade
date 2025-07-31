// 📁 frontend/src/pages/Notifikasi.jsx
import { useEffect, useState } from "react";

function Notifikasi() {
  const [notifikasi, setNotifikasi] = useState([]);

  // Contoh: Notifikasi dummy
  useEffect(() => {
    // Notifikasi contoh (nanti bisa diambil dari API kalau mau)
    const contohNotifikasi = [
      {
        id: 1,
        judul: "Peringatan Keamanan",
        isi: "Waspada terhadap pesan yang meminta transfer uang ke rekening tidak dikenal.",
        waktu: "29 Juli 2025, 15:30",
      },
      {
        id: 2,
        judul: "Update Sistem",
        isi: "Sistem pendeteksi penipuan telah diperbarui dengan data terbaru.",
        waktu: "28 Juli 2025, 10:15",
      },
    ];

    setNotifikasi(contohNotifikasi);
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🔔 Notifikasi</h2>

      {notifikasi.length === 0 ? (
        <p className="text-gray-600">Belum ada notifikasi baru.</p>
      ) : (
        <ul className="space-y-4">
          {notifikasi.map((item) => (
            <li key={item.id} className="p-4 border rounded bg-white shadow">
              <h3 className="font-semibold text-lg">{item.judul}</h3>
              <p className="text-gray-700">{item.isi}</p>
              <span className="text-sm text-gray-400">{item.waktu}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notifikasi;