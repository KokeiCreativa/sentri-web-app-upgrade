function Edukasi() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📘 Edukasi: Waspada Penipuan Digital</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">1. Ciri-Ciri Pesan Penipuan</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Mengandung kata “menang undian”, “transfer sekarang”, atau “klaim hadiah”.</li>
          <li>Berisi tautan mencurigakan (misalnya bit.ly/xxx atau wa.me/xxx).</li>
          <li>Meminta data pribadi seperti OTP, PIN, atau nomor rekening.</li>
          <li>Mengaku sebagai pejabat, polisi, atau layanan resmi tanpa bukti valid.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">2. Tips Menghindari Penipuan</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Jangan langsung percaya jika diminta uang secara mendadak.</li>
          <li>Selalu verifikasi ke pihak resmi atau orang terdekat Anda.</li>
          <li>Laporkan pesan mencurigakan ke layanan pengaduan.</li>
          <li>Gunakan sistem deteksi seperti SENTRI untuk memeriksa pesan.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">3. Kontak Darurat</h2>
        <p className="text-gray-700 mt-2">
          Jika Anda merasa telah menjadi korban penipuan, segera hubungi:
        </p>
        <ul className="list-inside mt-2 text-gray-800">
          <li>📞 Polisi: 081344121216</li>
          <li>📧 Email Pengaduan Kominfo: aduansentri@kominfo.go.id</li>
          <li>🌐 Lapor ke: <a href="https://patrolisiber.id" target="_blank" className="text-blue-600 underline">sentrisiber.id</a></li>
        </ul>
      </section>
    </div>
  );
}

export default Edukasi;
