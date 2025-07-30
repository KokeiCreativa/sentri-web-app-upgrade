from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import os

app = FastAPI()

# ✅ Izinkan akses dari frontend React (http://localhost:5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Load model dan vectorizer
model_path = "fraud_model.pkl"
vectorizer_path = "vectorizer.pkl"

if os.path.exists(model_path) and os.path.exists(vectorizer_path):
    model = joblib.load(model_path)
    vectorizer = joblib.load(vectorizer_path)
else:
    model = None
    vectorizer = None

class ChatInput(BaseModel):
    text: str

# ✅ Endpoint Deteksi Penipuan
@app.post("/detect")
def detect_text(input_data: ChatInput):
    if not model or not vectorizer:
        return {"result": "❌ Model belum siap"}

    text = input_data.text
    X = vectorizer.transform([text])
    prediction = model.predict(X)[0]
    hasil = "Penipuan" if prediction == 1 else "Bukan Penipuan"
    return {"result": hasil}

# ✅ (Opsional) Endpoint Chatbot
@app.post("/chatbot")
def chatbot_response(input_data: ChatInput):
    return {"response": f"Chatbot belum aktif. Anda mengirim: {input_data.text}"}
