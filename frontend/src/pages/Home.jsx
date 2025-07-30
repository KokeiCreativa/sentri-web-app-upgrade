function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl font-bold mb-4 text-blue-700">👮‍♂️ SENTRI</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
                Sistem Deteksi Penipuan Digital dengan bantuan AI. Lindungi dirimu dari penipuan pesan, edukasi diri, dan laporkan kasus dengan mudah.
            </p>
            <a href="/deteksi" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Mulai Deteksi Sekarang
            </a>
        </div>
    );
}

export default Home;
