# File: backend/fraud_model.py

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
import joblib

# ===== DATA TRAINING SEDERHANA =====
data = [
    ("Saya ingin investasi cepat dan aman", 1),
    ("Dapatkan uang hanya dengan klik link ini", 1),
    ("Main slot gratis sekarang", 1),
    ("Ayo pinjam uang tanpa syarat!", 1),
    ("Transfer ke rekening ini untuk hadiah", 1),
    ("Saya tertarik belajar literasi keuangan", 0),
    ("Bagaimana cara menabung di bank?", 0),
    ("Apa itu pinjaman resmi dari OJK?", 0),
    ("Saya ingin tahu tips aman transaksi online", 0),
    ("Apa perbedaan antara tabungan dan deposito?", 0)
]

# Pisahkan teks dan label
texts, labels = zip(*data)

# ===== TF-IDF + TRAINING MODEL =====
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(texts)

model = MultinomialNB()
model.fit(X, labels)

# ===== SIMPAN MODEL DAN VECTORIZER =====
joblib.dump(model, "fraud_model.pkl")
joblib.dump(vectorizer, "vectorizer.pkl")

print("✅ Model dan vectorizer berhasil disimpan!")
