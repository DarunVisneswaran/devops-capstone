# ☁️ DEVOPS CAPSTONE PROJECT 🚀

## 🌐 End-to-End DevOps Pipeline for a Node.js Web Application

<p align="center">

🚀 <strong>BUILD • TEST • CONTAINERIZE • DEPLOY • MONITOR • AUTOMATE</strong>

</p>

---

# 📌 PROJECT OVERVIEW

This project demonstrates an end-to-end DevOps workflow for a Node.js web application.

The application is developed locally and maintained using Git and GitHub. Jenkins automates the CI/CD pipeline by installing dependencies, validating the application, building the Docker image, pushing the image to Docker Hub, and deploying the application to AWS EC2.

The deployed application is monitored using Prometheus, Grafana, and Node Exporter. Bash scripting and Cron are used to automate application log backups.

---

# 🎯 PROJECT OBJECTIVES

The main objectives of this project are:

- ✨ Implement Git and GitHub for source code management
- 🔄 Create an automated CI/CD pipeline using Jenkins
- 🐳 Containerize the Node.js application using Docker
- 📦 Store Docker images in Docker Hub
- ☁️ Deploy the application on AWS EC2
- 📊 Monitor infrastructure using Prometheus and Grafana
- 📡 Collect system metrics using Node Exporter
- 🐚 Automate application log backups using Bash
- ⏰ Schedule backups using Cron

---

# 🏗️ PROJECT ARCHITECTURE

```text
                    👨‍💻 DEVELOPER
                         |
                         v
                  🐙 GITHUB REPOSITORY
                         |
                         | Webhook / Trigger
                         v
                  🔧 JENKINS CI/CD
                         |
             +-----------+-----------+
             |           |           |
             v           v           v
          📥 CHECKOUT  🧪 TEST    🐳 DOCKER BUILD
                                     |
                                     v
                              📦 DOCKER HUB
                                     |
                                     v
                              ☁️ AWS EC2
                                     |
                                     v
                            🚀 NODE.JS APP
                                     |
                    +----------------+----------------+
                    |                                 |
                    v                                 v
             📡 NODE EXPORTER                   📝 APP LOGS
                    |                                 |
                    v                                 v
              🔍 PROMETHEUS                    🛠️ BASH SCRIPT
                    |                                 |
                    v                                 v
              📊 GRAFANA                         ⏰ CRON


```

🛠️ TECHNOLOGY STACK

💻 APPLICATION

Node.js

Used to develop and run the web application.

📝 PROGRAMMING LANGUAGE

JavaScript

Used for developing the Node.js application.

🌿 VERSION CONTROL

Git

Used to track source code changes.

🐙 SOURCE CODE REPOSITORY

GitHub

Repository: https://github.com/DarunVisneswaran/devops-capstone

🔧 CI/CD

Jenkins

Used to automate:
Source code checkout
Dependency installation
Application validation
Docker image build
Docker Hub push
AWS EC2 deployment

🐳 CONTAINERIZATION

Docker

Used to package the Node.js application into a portable container.

📦 CONTAINER REGISTRY

Docker Hub

Docker image:

darundoc/devops-capstone:latest

☁️ CLOUD PLATFORM

AWS EC2 - Used to host the Jenkins environment and deploy the Node.js application.

🔍 MONITORING

Prometheus

Used to collect system metrics.

📊 VISUALIZATION

Grafana

Used to visualize monitoring metrics through dashboards.

📡 SYSTEM METRICS

Node Exporter

Used to expose system-level metrics including:
CPU
Memory
Disk
Network

🐚 AUTOMATION

Bash Shell Script

Used to automate Docker application log backups.

⏰ SCHEDULING

Cron

Used to execute the backup script automatically every day at 2:00 AM.

🐧 OPERATING SYSTEM

Ubuntu Linux

Used for the AWS EC2 environments.

🌐 APPLICATION

The project contains a professional Cloud and DevOps themed Node.js web application.

The application presents the major technologies used in the project:

☁️ AWS
🐙 GitHub
🔧 Jenkins
🐳 Docker
🔍 Prometheus
📊 Grafana
🔄 CI/CD
📂 PROJECT STRUCTURE
devops-capstone/
│
├── 📄 app.js
├── 📦 package.json
├── 🔒 package-lock.json
├── 🐳 Dockerfile
├── 🔧 Jenkinsfile
├── 🚫 .gitignore
└── 📘 README.md

💻 LOCAL APPLICATION SETUP

1️⃣ CLONE THE REPOSITORY
git clone https://github.com/DarunVisneswaran/devops-capstone.git

2️⃣ NAVIGATE TO THE PROJECT
cd devops-capstone

3️⃣ INSTALL DEPENDENCIES
npm install

4️⃣ START THE APPLICATION
node app.js

The application runs on:

http://localhost:3000
🐳 DOCKER CONFIGURATION

The project uses the following Dockerfile:

FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]

🐳 BUILD THE DOCKER IMAGE
docker build -t darundoc/devops-capstone:latest .

🚀 RUN THE DOCKER CONTAINER
docker run -d --name devops-app -p 8080:3000 darundoc/devops-capstone:latest

The deployed application can be accessed using:

http://<EC2-PUBLIC-IP>:8080

🔄 JENKINS CI/CD PIPELINE

The Jenkins pipeline automates the complete application delivery process.

🔹 PIPELINE STAGES

1️⃣ CHECKOUT

Jenkins retrieves the application source code from GitHub.

2️⃣ INSTALL DEPENDENCIES

Jenkins installs Node.js dependencies:

npm install

3️⃣ TEST

The JavaScript syntax is validated using:

node --check app.js

4️⃣ BUILD DOCKER IMAGE

Jenkins builds the Docker image:

darundoc/devops-capstone:latest

5️⃣ LOGIN TO DOCKER HUB

Jenkins authenticates with Docker Hub using securely stored Jenkins credentials.

6️⃣ PUSH DOCKER IMAGE

The Docker image is pushed to Docker Hub.

darundoc/devops-capstone:latest

7️⃣ DEPLOY TO AWS EC2

Jenkins connects to the application EC2 instance through SSH.

The deployment process:

Pull latest Docker image
        ↓
Stop existing container
        ↓
Remove existing container
        ↓
Start new container
🔧 JENKINSFILE

The Jenkins pipeline follows this workflow:

Checkout
   ↓
Install Dependencies
   ↓
Test
   ↓
Build Docker Image
   ↓
Login to Docker Hub
   ↓
Push Docker Image
   ↓
Deploy to App EC2

The Jenkins pipeline uses:

Docker Hub Credential
        +
App EC2 SSH Credential

to securely perform the deployment.

📊 MONITORING AND OBSERVABILITY

The project uses:

Node Exporter
      ↓
Prometheus
      ↓
Grafana

📡 NODE EXPORTER

Node Exporter exposes system-level metrics.

The monitored metrics include:

🖥️ CPU Usage
🧠 Memory Usage
💾 Disk Usage
🌐 Network Traffic

Node Exporter runs on port:

9100

🔍 PROMETHEUS

Prometheus collects the metrics exposed by Node Exporter.

Example Prometheus configuration:

scrape_configs:

  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node_exporter'
    static_configs:
      - targets: ['localhost:9100']

Prometheus runs on:

Port: 9090

📊 GRAFANA

Grafana is connected to Prometheus as the monitoring data source.

The project dashboard contains four main panels:

🖥️ CPU USAGE

Displays CPU utilization.

🧠 MEMORY USAGE

Displays memory utilization.

💾 DISK USAGE

Displays disk utilization.

🌐 NETWORK TRAFFIC

Displays network receive and transmit traffic.

Grafana runs on:

Port: 3000

📈 GRAFANA QUERIES
🖥️ CPU USAGE
100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)
🧠 MEMORY USAGE
100 * (
  1 -
  (
    node_memory_MemAvailable_bytes{job="node_exporter"}
    /
    node_memory_MemTotal_bytes{job="node_exporter"}
  )
)

💾 DISK USAGE
100 * (
  1 -
  (
    max by (instance, mountpoint) (
      node_filesystem_avail_bytes{fstype!~"tmpfs|overlay",mountpoint="/"}
    )
    /
    max by (instance, mountpoint) (
      node_filesystem_size_bytes{fstype!~"tmpfs|overlay",mountpoint="/"}
    )
  )
)

🌐 NETWORK RECEIVE
sum by (instance) (
  rate(node_network_receive_bytes_total{job="node_exporter",device!="lo"}[5m])
)

🌐 NETWORK TRANSMIT
sum by (instance) (
  rate(node_network_transmit_bytes_total{job="node_exporter",device!="lo"}[5m])
)

🛡️ BACKUP AUTOMATION

Application logs are backed up using a Bash script.

The backup directory is:

/home/ubuntu/backups
🐚 BACKUP SCRIPT

The project uses the following Bash script:

#!/bin/bash

BACKUP_DIR="/home/ubuntu/backups"
DATE=$(date +"%Y-%m-%d_%H-%M-%S")

docker logs devops-app > "$BACKUP_DIR/devops-app-$DATE.log"

echo "Backup completed: $BACKUP_DIR/devops-app-$DATE.log"

⏰ CRON AUTOMATION

The backup script is scheduled to run every day at 2:00 AM.

Cron configuration:

0 2 * * * /home/ubuntu/backup.sh

The Cron configuration was saved as:

mycronjobs.txt

🔁 COMPLETE DEVOPS WORKFLOW
👨‍💻 Developer
      |
      v
🐙 GitHub
      |
      v
🔧 Jenkins
      |
      +-- 📥 Checkout
      |
      +-- 📦 Install Dependencies
      |
      +-- 🧪 Test
      |
      +-- 🐳 Docker Build
      |
      +-- 🔐 Docker Hub Login
      |
      +-- 📤 Docker Push
      |
      v
📦 Docker Hub
      |
      v
☁️ AWS EC2
      |
      v
🚀 Node.js Application
      |
      +----------------------+
      |                      |
      v                      v
📡 Node Exporter        📝 Application Logs
      |                      |
      v                      v
🔍 Prometheus           🐚 Bash Script
      |                      |
      v                      v
📊 Grafana              ⏰ Cron

✨ KEY DEVOPS PRACTICES DEMONSTRATED

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


🔗 PROJECT LINKS
🐙 GitHub Repository

https://github.com/DarunVisneswaran/devops-capstone

🐳 Docker Hub Repository

https://hub.docker.com/r/darundoc/devops-capstone

🎓 LEARNING OUTCOMES

This project provided practical experience in:

🚀 Continuous Integration

🔄 Continuous Delivery

🐳 Docker Containerization

☁️ AWS Cloud Deployment

🔧 Jenkins Automation

📊 Monitoring and Observability

🔍 Prometheus

📈 Grafana

📡 Node Exporter

🐚 Bash Automation

⏰ Cron Scheduling

🔐 Secure Credential Management

🏁 CONCLUSION

This project demonstrates an end-to-end DevOps implementation for a Node.js web application.

The workflow covers:

GitHub
   ↓
Jenkins
   ↓
Docker
   ↓
Docker Hub
   ↓
AWS EC2
   ↓
Node.js Application
   ↓
Prometheus
   ↓
Grafana

In addition, Bash scripting and Cron provide automated application log backups.

<p align="center">

🚀 <strong>BUILD • AUTOMATE • DEPLOY • MONITOR</strong> ☁️

<br><br>

⭐ <strong>DEVOPS CAPSTONE PROJECT</strong> ⭐

</p> ```
