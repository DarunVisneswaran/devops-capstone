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

🛠️ Technology Stack
🧩 Category	🔧 Technology
💻 Application	Node.js
📝 Programming	JavaScript
🌿 Version Control	Git
🐙 Repository	GitHub
🔧 CI/CD	Jenkins
🐳 Containerization	Docker
📦 Image Registry	Docker Hub
☁️ Cloud Platform	AWS EC2
🔍 Monitoring	Prometheus
📊 Visualization	Grafana
📡 System Metrics	Node Exporter
🐚 Automation	Bash Shell Script
⏰ Scheduling	Cron
🐧 Operating System	Ubuntu Linux
🌐 Application

The project includes a professional Cloud & DevOps themed Node.js web application.

The website presents the major DevOps technologies used in the project, including:

☁️ AWS
🐙 GitHub
🔧 Jenkins
🐳 Docker
🔍 Prometheus
📊 Grafana
🔄 CI/CD Pipeline

🚪 Application Port

The Node.js application runs on:

Port: 3000

When deployed through Docker on AWS EC2:

EC2 Port 8080 → Container Port 3000
📂 Project Structure
devops-capstone/
│
├── 📄 app.js
├── 📦 package.json
├── 🔒 package-lock.json
├── 🐳 Dockerfile
├── 🔧 Jenkinsfile
├── 🚫 .gitignore
└── 📘 README.md
💻 Local Setup
1️⃣ Clone the Repository
git clone https://github.com/DarunVisneswaran/devops-capstone.git
2️⃣ Navigate to the Project
cd devops-capstone
3️⃣ Install Dependencies
npm install
4️⃣ Start the Application
node app.js

The application will be available at:

http://localhost:3000
🐳 Docker Setup
🔨 Build Docker Image
docker build -t darundoc/devops-capstone:latest .
🚀 Run Docker Container
docker run -d \
  --name devops-app \
  -p 8080:3000 \
  darundoc/devops-capstone:latest

The deployed application can then be accessed through:

http://<EC2-PUBLIC-IP>:8080
🔄 CI/CD Pipeline

The Jenkins pipeline automates the application delivery process from source code to AWS deployment.

🔹 Pipeline Stages
1️⃣ 📥 Checkout

Jenkins retrieves the latest source code from GitHub.

2️⃣ 📦 Install Dependencies

Node.js dependencies are installed using:

npm install
3️⃣ 🧪 Test

The application JavaScript syntax is validated using:

node --check app.js
4️⃣ 🐳 Build Docker Image

Jenkins builds the application into a Docker image.

5️⃣ 🔐 Login to Docker Hub

Jenkins securely authenticates with Docker Hub using stored credentials.

6️⃣ 📤 Push Docker Image

The Docker image is pushed to:

darundoc/devops-capstone:latest
7️⃣ ☁️ Deploy to AWS EC2

Jenkins connects to the Application EC2 instance using SSH and:

Pulls the latest Docker image
Stops the existing container
Removes the old container
Starts the updated container
📊 Monitoring & Observability

The project uses the following monitoring components:

🔍 Prometheus

Prometheus is used to collect system metrics.

📡 Node Exporter

Node Exporter exposes system-level metrics such as:

🖥️ CPU
🧠 Memory
💾 Disk
🌐 Network
📊 Grafana

Grafana is used to visualize the collected metrics through a monitoring dashboard.

📈 Grafana Dashboard

The dashboard contains four main monitoring panels:

📊 Panel	📌 Metric
🖥️ CPU Usage	CPU utilization
🧠 Memory Usage	Memory utilization
💾 Disk Usage	Disk utilization
🌐 Network Traffic	Network receive/transmit traffic
🛡️ Backup Automation

Application logs are backed up using a Bash shell script.

The backup script collects Docker application logs and stores them in:

/home/ubuntu/backups

Example backup file:

devops-app-YYYY-MM-DD_HH-MM-SS.log
⏰ Cron Automation

The backup script is scheduled to run automatically every day at 2:00 AM.

0 2 * * * /home/ubuntu/backup.sh

This demonstrates how scheduled automation can be integrated into a DevOps workflow.

🔁 Complete DevOps Workflow
👨‍💻 Developer
      │
      ▼
🐙 GitHub
      │
      ▼
🔧 Jenkins
      │
      ├── 📥 Checkout
      │
      ├── 📦 Install Dependencies
      │
      ├── 🧪 Test
      │
      ├── 🐳 Docker Build
      │
      ├── 🔐 Docker Hub Login
      │
      ├── 📤 Docker Push
      │
      ▼
📦 Docker Hub
      │
      ▼
☁️ AWS EC2
      │
      ▼
🚀 Node.js Application
      │
      ├───────────────┐
      ▼               ▼
📡 Node Exporter   📝 Application Logs
      │               │
      ▼               ▼
🔍 Prometheus      🐚 Bash Script
      │               │
      ▼               ▼
📊 Grafana         ⏰ Cron
✨ Key DevOps Practices Demonstrated

✅ Git-based version control
✅ GitHub source management
✅ Jenkins CI/CD automation
✅ Automated dependency installation
✅ Application syntax validation
✅ Docker containerization
✅ Docker Hub image management
✅ SSH-based deployment
✅ AWS EC2 deployment
✅ Prometheus monitoring
✅ Grafana visualization
✅ Node Exporter metrics collection
✅ Bash scripting
✅ Cron-based backup automation
🔗 Project Links
🐙 GitHub Repository

https://github.com/DarunVisneswaran/devops-capstone

🐳 Docker Hub Repository

https://hub.docker.com/r/darundoc/devops-capstone

🎓 Learning Outcomes

Through this project, the following DevOps concepts were implemented:

🚀 Continuous Integration
🔄 Continuous Delivery
🐳 Containerization
☁️ Cloud Deployment
📊 Monitoring & Observability
🐚 Infrastructure Automation
⏰ Scheduled Backup Automation
🔐 Secure Credential Management

🏁 Conclusion

This project demonstrates an end-to-end DevOps implementation for a Node.js web application.

From GitHub source management to Jenkins automation, Docker containerization, Docker Hub, AWS EC2 deployment, Prometheus monitoring, Grafana visualization, and automated backups, the project brings multiple DevOps practices together into a single workflow.

<p align="center">
🚀 Build • Automate • Deploy • Monitor ☁️
⭐ DevOps Capstone Project ⭐
</p> ```
✅ What you need to do now
Open README.md in VS Code.
Delete everything currently inside it.
Copy the entire block above and paste it.
Press Ctrl + S.

That's it for this step. Don't run Git commands yet.

Once you've saved it, tell me “README saved”, Buddy. Then we'll verify it and push it to GitHub. 🚀
