# 💼 SENTRI — Sistem Deteksi Penipuan Digital

SENTRI adalah aplikasi berbasis AI untuk mendeteksi penipuan dalam bentuk pesan teks. Sistem ini juga memberikan edukasi dan notifikasi bagi pengguna agar lebih waspada terhadap praktik penipuan online.

## 🔧 Teknologi
- Frontend: React + Vite
- Backend: FastAPI
- ML: scikit-learn
- AI Chatbot: OpenAI GPT-3.5 Turbo

## 🚀 Fitur Utama
- 🕵️ Deteksi teks penipuan menggunakan ML
- 💬 Chatbot AI penjelas pesan mencurigakan
- 🔔 Notifikasi update keamanan
- 📘 Halaman edukasi digital anti-scam

## 📦 Cara Menjalankan

### 1. Backend (FastAPI)
```bash
cd backend
pip install -r requirements.txt
python fraud_model.py   # sekali saja
uvicorn main:app --reload
