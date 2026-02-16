AI-Powered Identity Verification & Fraud Detection for KYC Compliance

An end-to-end AI system for AADHAR document verification, address validation, and fraud detection for BFSI KYC/AML workflows using Computer Vision, NLP, Graph Analysis, and Azure Cloud.

📌 Problem Statement

Manual KYC verification is slow, error-prone, and expensive. Fraudsters frequently reuse addresses, manipulate identity documents, or submit inconsistent data across documents.

This project automates:

Identity verification from AADHAR and KYC documents

Address extraction and normalization

Detection of fraudulent address patterns

Real-time KYC decision support aligned with AML/KYC compliance

🧠 System Architecture
AADHAR Image
     │
     ▼
OCR (Computer Vision)
     │
     ▼
Azure OpenAI (NLP Address Extraction)
     │
     ▼
Graph Fraud Detection (GNN Concept)
     │
     ▼
KYC Decision API (FastAPI)
     │
     ▼
Frontend + Azure Deployment

🚀 Key Features

📄 OCR extraction from AADHAR / utility documents

🧾 Structured address parsing using Azure OpenAI

🕸️ Graph-based fraud detection using address relationships

⚡ Real-time KYC verification API

🌐 Web interface for document upload and verification

☁️ Deployed on Microsoft Azure (App Service, Storage, OpenAI)

🧩 Modules Implemented
Module 1 — Data Collection & Preprocessing

Collect sample KYC/AADHAR-like documents

OCR text extraction

Address data preprocessing and structuring

Module 2 — Model Development

NLP prompt engineering with Azure OpenAI for address extraction

Graph-based anomaly detection (GNN concept using NetworkX)

Fraud scoring logic

Module 3 — AML/KYC System Integration

FastAPI decision engine

End-to-end verification pipeline

JSON fraud response

Module 4 — Deployment & Validation

Dockerized API

Azure App Service deployment

Live testing on synthetic AADHAR samples

🛠️ Tech Stack
Layer	Technology
OCR	Tesseract / EasyOCR
NLP	Azure OpenAI
Graph Analysis	NetworkX
Backend API	FastAPI (Python)
Frontend	HTML/CSS/JS
Database	Azure SQL / Cosmos DB
Cloud	Azure App Service, Azure Storage
Containerization	Docker
📂 Project Structure
.
├── data/
│   ├── raw_docs/
│   ├── ocr_output/
│   └── processed_addresses/
│
├── ocr/
│   └── ocr_pipeline.py
│
├── nlp/
│   └── address_extractor.py
│
├── graph/
│   └── fraud_graph.py
│
├── api/
│   └── main.py
│
├── frontend/
│   └── index.html
│
├── dockerfile
└── README.md

⚙️ API Endpoint
POST /verify_kyc

Input: AADHAR image

Output:

{
  "is_fraud": true,
  "fraud_score": 0.82,
  "reason": "Address reused across multiple identities"
}

🧪 Fraud Detection Logic

Fraud score is generated using graph relationships:

Same address used by many identities

Similar address clusters

Pincode/state inconsistencies

Address mismatch between documents

☁️ Azure Deployment

FastAPI container deployed to Azure App Service

Azure OpenAI for NLP processing

Azure Storage for document images

Azure SQL/Cosmos DB for data storage

📊 Evaluation Metrics

OCR extraction accuracy

Address parsing accuracy

Fraud detection precision on synthetic dataset

End-to-end response time

🧑‍💻 How to Run Locally
# Install dependencies
pip install -r requirements.txt

# Run FastAPI server
uvicorn api.main:app --reload


Visit: http://localhost:8000/docs

🎯 Outcomes

Automated identity verification

Fraudulent address detection

Reduced manual KYC effort

BFSI-grade compliance workflow simulation

📖 Reference

This implementation is based on the project specification provided in the internship brief.
See: 

AI-Powered Identity Verificatio…

👥 Team Contributions

This project was developed collaboratively across:

AI/ML & Deep Learning

Python & Backend Engineering

Frontend/UI Development

Azure Cloud Deployment

📌 Future Improvements

Real GNN model training instead of rule-based graph logic

Integration with live KYC datasets

Face verification from ID photos

Advanced document forgery detection

This project demonstrates how AI, graph analytics, and cloud deployment combine to solve real BFSI KYC/AML fraud problems.
