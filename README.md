# ☁️ DevOps Capstone Project 🚀

## 🌐 End-to-End DevOps Pipeline for a Node.js Web Application

<p align="center">

🚀 **Build • Test • Containerize • Deploy • Monitor • Automate**

</p>

---

## 📌 Project Overview

This project demonstrates an **end-to-end DevOps workflow** for a Node.js web application.

The application is developed locally, version-controlled using **Git & GitHub**, automatically built and validated using **Jenkins**, containerized with **Docker**, pushed to **Docker Hub**, and deployed to **AWS EC2**.

The application is monitored using **Prometheus, Grafana, and Node Exporter**, while **Bash scripting and Cron** are used to automate application log backups.

---

## 🎯 Project Goals

The main goal of this project is to demonstrate how a modern DevOps workflow can automate the complete application delivery lifecycle.

✨ **Source Code Management**  
🔄 **Continuous Integration**  
🐳 **Containerization**  
📦 **Container Image Management**  
☁️ **Cloud Deployment**  
📊 **Infrastructure Monitoring**  
🛠️ **Automation & Backup**

---

# 🏗️ Architecture

```text
                    👨‍💻 Developer
                         │
                         ▼
                  🐙 GitHub Repository
                         │
                         │ Webhook / Trigger
                         ▼
                  🔧 Jenkins CI/CD
                         │
             ┌───────────┼───────────┐
             │           │           │
             ▼           ▼           ▼
          📥 Checkout  🧪 Test    🐳 Docker Build
                                     │
                                     ▼
                              📦 Docker Hub
                                     │
                                     ▼
                              ☁️ AWS EC2
                                     │
                                     ▼
                            🚀 Node.js App
                                     │
                    ┌────────────────┴───────────────┐
                    │                                │
                    ▼                                ▼
             📡 Node Exporter                  📝 App Logs
                    │                                │
                    ▼                                ▼
              🔍 Prometheus                  🛠️ Bash Script
                    │                                │
                    ▼                                ▼
              📊 Grafana                       ⏰ Cron
