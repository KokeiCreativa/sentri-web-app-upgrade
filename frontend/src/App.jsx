import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Edukasi from './pages/Edukasi'
import Deteksi from './pages/Deteksi'
import Notifikasi from './pages/Notifikasi'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edukasi" element={<Edukasi />} />
            <Route path="/deteksi" element={<Deteksi />} />
            <Route path="/notifikasi" element={<Notifikasi />} />
        </Routes>
    )
}

export default App
