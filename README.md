# 🔐 AI-Powered KYC Verification System

> **Full-stack identity verification platform for the BFSI sector** — classifies documents, extracts fields via OCR, and detects fraud using Graph Neural Networks. Deployed on AWS (S3 + EC2) with a React frontend, Node.js backend, and a Python-based ML microservice.

<br/>

## 📋 Table of Contents

* [Overview](#overview)
* [Architecture](#architecture)
* [Tech Stack](#tech-stack)
* [ML Pipeline](#ml-pipeline)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Environment Variables](#environment-variables)
* [Deployment](#deployment)
* [API Reference](#api-reference)
* [Key Engineering Decisions](#key-engineering-decisions)
* [Known Limitations](#known-limitations)
* [Team](#team)

<br/>

---

## Overview

This system automates KYC (Know Your Customer) document verification — a process traditionally handled manually in BFSI institutions. A user uploads an identity document and receives a verification decision backed by ML inference.

**Supported documents:** Aadhaar Card · PAN Card · Passport

**End-to-end flow:**

1. Document classification using a TFLite CNN model
2. OCR extraction using EasyOCR
3. Structured parsing via Groq LLM API
4. Fraud detection using Graph Neural Networks (GNN)
5. Verdict generation — **Approved**, **Suspicious**, or **Non-KYC**
6. Result persistence in MongoDB Atlas
7. Visualization via a React dashboard

---

## Architecture

```
[Browser] → [Frontend (S3)] → [Backend API (EC2)] → [ML Service (EC2)] → [MongoDB Atlas]
```

| Layer       | Service           | Hosted On             |
| ----------- | ----------------- | --------------------- |
| Frontend    | React (Vite)      | AWS S3 Static Hosting |
| Backend API | Node.js + Express | AWS EC2               |
| ML Service  | Python Flask      | AWS EC2               |
| Database    | MongoDB Atlas     | Managed Cloud         |

---

## Tech Stack

**Frontend**

* React (Vite)
* React Router

**Backend**

* Node.js + Express
* JWT Authentication
* Multer (file handling)
* MongoDB + Mongoose

**ML Microservice**

* Python + Flask
* TFLite (document classification)
* PyTorch + PyTorch Geometric (GNN)
* EasyOCR
* Sentence Transformers
* Groq API (LLM parsing)

**Infrastructure**

* AWS EC2 (compute)
* AWS S3 (frontend hosting)
* PM2 (process management)
* MongoDB Atlas

---

## ML Pipeline

Each document flows through five stages:

### 1. Document Classification

TFLite CNN classifies input into supported document types or Non-KYC.

---

### 2. OCR Extraction

EasyOCR extracts raw text for all inputs, enabling fallback handling.

---

### 3. Structured Parsing

Groq LLM converts raw OCR output into structured JSON fields.

---

### 4. Anomaly Detection

GNN models compare extracted data against known records to compute anomaly scores.

* Score > 2.0 → Suspicious
* Score ≤ 2.0 → Approved
* Non-KYC → Skipped

---

### 5. Response Generation

System returns a structured JSON response with classification, extracted data, and fraud status.

---

## Project Structure

```
project-root/
├── frontend/
├── backend/
├── ml-service/
└── trained_models/
```

> Pre-trained model artifacts are not included in the repository and must be provided separately for execution.

---

## Getting Started

### Prerequisites

* Node.js v18+
* Python 3.12
* MongoDB Atlas
* Groq API Key
* AWS account (for deployment)

---

### Local Setup

Run services in sequence:

1. ML Service
2. Backend
3. Frontend

Each component is independently runnable and communicates via defined APIs.

---

## Environment Variables

Separate `.env` files are required for each service.

**Backend**

* Database URI
* JWT secret
* ML service endpoint

**Frontend**

* Backend API base URL

**ML Service**

* Groq API key

---

## Deployment

This system was deployed using:

* **Two EC2 instances**

  * Backend service
  * ML microservice
* **S3 static hosting** for frontend

A complete, step-by-step deployment guide is included in this repository, covering:

* Infrastructure setup
* Service configuration
* Environment management
* Process orchestration using PM2

> The infrastructure was provisioned, validated, and used during the internship demonstration.
> Resources were decommissioned after the final presentation to optimize cost usage.
> The repository includes all necessary instructions to reproduce the deployment environment.

---

## API Reference

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### KYC

* `POST /api/kyc/verify`
* `GET /api/kyc/history`
* `GET /api/kyc/verifications`

### ML Service

* `GET /api/ml/health`
* `POST /api/ml/classify`

---

## Key Engineering Decisions

### EC2 over Serverless

* Avoids memory constraints of Lambda
* Eliminates cold-start overhead
* Allows full control over ML dependencies

---

### Separate Backend & ML Services

* Isolates heavy ML workloads
* Improves reliability and scalability
* Enables independent upgrades

---

### Heuristic Fallback Layer

OCR-based fallback improves robustness against model misclassification without requiring retraining.

---

## Known Limitations

* CPU-only inference (no GPU acceleration)
* OCR accuracy degrades on low-quality images
* No automated file cleanup for uploads
* Single-region deployment

---

## 👥 Contributors

Infosys Springboard — BFSI Sector Cloud Architecture Cohort

---

## 🏁 Outcome

A production-style KYC verification system integrating:

* Multi-stage ML inference
* Microservice-based architecture
* Cloud deployment on AWS
* Real-time fraud detection

This project demonstrates practical implementation of **scalable, AI-driven verification systems in a cloud environment**.

---

<div align="center">
  <sub>Built with Node.js · Flask · PyTorch · AWS · MongoDB Atlas</sub>
</div>
