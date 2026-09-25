# ☁️ DevOps Capstone Project

<p align="center">
  <img src="https://img.shields.io/badge/DevOps-Capstone-blue?style=for-the-badge&logo=linux" alt="DevOps">
  <img src="https://img.shields.io/badge/Node.js-Application-green?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Docker-Container-blue?style=for-the-badge&logo=docker" alt="Docker">
  <img src="https://img.shields.io/badge/Jenkins-CI%2FCD-red?style=for-the-badge&logo=jenkins" alt="Jenkins">
  <img src="https://img.shields.io/badge/AWS-Cloud-orange?style=for-the-badge&logo=amazonaws" alt="AWS">
</p>

<h1 align="center">🚀 End-to-End DevOps Pipeline for a Node.js Web Application</h1>

<p align="center">
  <strong>BUILD • TEST • CONTAINERIZE • DEPLOY • MONITOR • AUTOMATE</strong>
</p>

<p align="center">
  A complete DevOps implementation using GitHub, Jenkins, Docker, Docker Hub, AWS EC2, Prometheus, Grafana, Node Exporter, Bash and Cron.
</p>

---

<h2>📌 Project Overview</h2>

<p>
This project demonstrates an end-to-end DevOps workflow for a Node.js web application.
The application is developed locally and maintained using Git and GitHub.
Jenkins automates the CI/CD pipeline by installing dependencies, validating the application,
building the Docker image, pushing the image to Docker Hub, and deploying the application to AWS EC2.
</p>

<p>
The deployed application is monitored using Prometheus, Grafana and Node Exporter.
Bash scripting and Cron are used to automate application log backups.
</p>

---

<h2>🎯 Project Objectives</h2>

<ul>
  <li>✨ Implement Git and GitHub for source code management</li>
  <li>🔄 Create an automated CI/CD pipeline using Jenkins</li>
  <li>🐳 Containerize the Node.js application using Docker</li>
  <li>📦 Store Docker images in Docker Hub</li>
  <li>☁️ Deploy the application on AWS EC2</li>
  <li>📊 Monitor infrastructure using Prometheus and Grafana</li>
  <li>📡 Collect system metrics using Node Exporter</li>
  <li>🐚 Automate application log backups using Bash</li>
  <li>⏰ Schedule backups using Cron</li>
</ul>

---

<h2>🏗️ Project Architecture</h2>

<p align="center">

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

</p>

---

<h2>🛠️ Technology Stack</h2>

<table>
<tr>
<th>Technology</th>
<th>Purpose</th>
</tr>

<tr>
<td>🟢 Node.js</td>
<td>Web application runtime</td>
</tr>

<tr>
<td>🟨 JavaScript</td>
<td>Application development</td>
</tr>

<tr>
<td>🌿 Git</td>
<td>Version control</td>
</tr>

<tr>
<td>🐙 GitHub</td>
<td>Source code repository</td>
</tr>

<tr>
<td>🔧 Jenkins</td>
<td>CI/CD automation</td>
</tr>

<tr>
<td>🐳 Docker</td>
<td>Application containerization</td>
</tr>

<tr>
<td>📦 Docker Hub</td>
<td>Docker image registry</td>
</tr>

<tr>
<td>☁️ AWS EC2</td>
<td>Cloud infrastructure and deployment</td>
</tr>

<tr>
<td>🔍 Prometheus</td>
<td>Metrics collection and monitoring</td>
</tr>

<tr>
<td>📊 Grafana</td>
<td>Monitoring visualization</td>
</tr>

<tr>
<td>📡 Node Exporter</td>
<td>System metrics collection</td>
</tr>

<tr>
<td>🐚 Bash</td>
<td>Automation and backup scripting</td>
</tr>

<tr>
<td>⏰ Cron</td>
<td>Scheduled automation</td>
</tr>

<tr>
<td>🐧 Ubuntu</td>
<td>Server operating system</td>
</tr>
</table>

---

<h2>🌐 Application</h2>

<p>
The project contains a professional Cloud and DevOps themed Node.js web application.
The application presents the major technologies used throughout the project.
</p>

<p align="center">

☁️ AWS &nbsp; • &nbsp;
🐙 GitHub &nbsp; • &nbsp;
🔧 Jenkins &nbsp; • &nbsp;
🐳 Docker &nbsp; • &nbsp;
🔍 Prometheus &nbsp; • &nbsp;
📊 Grafana

</p>

---

<h2>📂 Project Structure</h2>

```text
devops-capstone/
│
├── 📄 app.js
├── 📦 package.json
├── 🔒 package-lock.json
├── 🐳 Dockerfile
├── 🔧 Jenkinsfile
├── 🚫 .gitignore
└── 📘 README.md
```

---

<h2>💻 Local Application Setup</h2>

<h3>1️⃣ Clone the Repository</h3>

```bash
git clone https://github.com/DarunVisneswaran/devops-capstone.git
```

<h3>2️⃣ Navigate to the Project</h3>

```bash
cd devops-capstone
```

<h3>3️⃣ Install Dependencies</h3>

```bash
npm install
```

<h3>4️⃣ Start the Application</h3>

```bash
node app.js
```

<p>
The application runs on:
</p>

```text
http://localhost:3000
```

---

<h2>🐳 Docker Configuration</h2>

<p>
The application is containerized using Docker.
</p>

<h3>📄 Dockerfile</h3>

```dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
```

---

<h2>🐳 Docker Image Build</h2>

```bash
docker build -t darundoc/devops-capstone:latest .
```

---

<h2>🚀 Run the Docker Container</h2>

```bash
docker run -d --name devops-app -p 8080:3000 darundoc/devops-capstone:latest
```

<p>
The deployed application can be accessed using:
</p>

```text
http://<EC2-PUBLIC-IP>:8080
```

---

<h2>🔄 Jenkins CI/CD Pipeline</h2>

<p>
Jenkins automates the complete application delivery process from source code checkout
to deployment on AWS EC2.
</p>

<h3>🔹 Pipeline Stages</h3>

<table>
<tr>
<th>Stage</th>
<th>Description</th>
</tr>

<tr>
<td>📥 Checkout</td>
<td>Retrieves application source code from GitHub</td>
</tr>

<tr>
<td>📦 Install Dependencies</td>
<td>Installs Node.js project dependencies</td>
</tr>

<tr>
<td>🧪 Test</td>
<td>Validates JavaScript syntax</td>
</tr>

<tr>
<td>🐳 Build Docker Image</td>
<td>Creates the application Docker image</td>
</tr>

<tr>
<td>🔐 Login to Docker Hub</td>
<td>Authenticates Jenkins with Docker Hub</td>
</tr>

<tr>
<td>📤 Push Docker Image</td>
<td>Uploads the image to Docker Hub</td>
</tr>

<tr>
<td>🚀 Deploy to App EC2</td>
<td>Deploys the latest image to AWS EC2</td>
</tr>
</table>

---

<h2>🧪 Application Validation</h2>

<p>
The application syntax is checked automatically during the Jenkins pipeline.
</p>

```bash
node --check app.js
```

---

<h2>📦 Docker Hub</h2>

<p>
The Docker image generated by Jenkins is pushed to Docker Hub.
</p>

```text
darundoc/devops-capstone:latest
```

---

<h2>🚀 AWS EC2 Deployment</h2>

<p>
Jenkins connects to the application EC2 instance using SSH and performs the deployment.
</p>

```text
Docker Hub
     ↓
docker pull
     ↓
Stop existing container
     ↓
Remove existing container
     ↓
Start latest container
```

---

<h2>🔧 Jenkins Pipeline Workflow</h2>

<p align="center">

```text
🐙 GitHub
   ↓
📥 Checkout
   ↓
📦 npm install
   ↓
🧪 node --check app.js
   ↓
🐳 Docker Build
   ↓
🔐 Docker Hub Login
   ↓
📤 Docker Push
   ↓
🚀 AWS EC2 Deployment
```

</p>

---

<h2>📊 Monitoring & Observability</h2>

<p>
The project uses Prometheus, Grafana and Node Exporter to monitor the infrastructure.
</p>

<p align="center">

📡 <strong>Node Exporter</strong>
<br>
⬇
<br>
🔍 <strong>Prometheus</strong>
<br>
⬇
<br>
📊 <strong>Grafana</strong>

</p>

---

<h2>📡 Node Exporter</h2>

<p>
Node Exporter exposes system-level metrics from the EC2 instance.
</p>

<h3>📈 Monitored Metrics</h3>

<ul>
  <li>🖥️ CPU Usage</li>
  <li>🧠 Memory Usage</li>
  <li>💾 Disk Usage</li>
  <li>🌐 Network Traffic</li>
</ul>

<p>
Node Exporter runs on:
</p>

```text
Port: 9100
```

---

<h2>🔍 Prometheus</h2>

<p>
Prometheus collects metrics exposed by Node Exporter and makes them available for querying and monitoring.
</p>

<h3>⚙️ Prometheus Configuration</h3>

```yaml
scrape_configs:

  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node_exporter'
    static_configs:
      - targets: ['localhost:9100']
```

<p>
Prometheus runs on:
</p>

```text
Port: 9090
```

---

<h2>📊 Grafana Dashboard</h2>

<p>
Grafana is connected to Prometheus as the monitoring data source.
The project dashboard contains four monitoring panels.
</p>

<table>
<tr>
<th>Panel</th>
<th>Metric</th>
</tr>

<tr>
<td>🖥️ CPU Usage</td>
<td>CPU utilization</td>
</tr>

<tr>
<td>🧠 Memory Usage</td>
<td>Memory utilization</td>
</tr>

<tr>
<td>💾 Disk Usage</td>
<td>Disk utilization</td>
</tr>

<tr>
<td>🌐 Network Traffic</td>
<td>Network receive and transmit traffic</td>
</tr>
</table>

<p>
Grafana runs on:
</p>

```text
Port: 3000
```

---

<h2>📈 Grafana PromQL Queries</h2>

<h3>🖥️ CPU Usage</h3>

```promql
100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)
```

---

<h3>🧠 Memory Usage</h3>

```promql
100 * (
  1 -
  (
    node_memory_MemAvailable_bytes{job="node_exporter"}
    /
    node_memory_MemTotal_bytes{job="node_exporter"}
  )
)
```

---

<h3>💾 Disk Usage</h3>

```promql
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
```

---

<h3>📥 Network Receive</h3>

```promql
sum by (instance) (
  rate(node_network_receive_bytes_total{job="node_exporter",device!="lo"}[5m])
)
```

---

<h3>📤 Network Transmit</h3>

```promql
sum by (instance) (
  rate(node_network_transmit_bytes_total{job="node_exporter",device!="lo"}[5m])
)
```

---

<h2>🐚 Bash Backup Automation</h2>

<p>
Application logs are automatically backed up using a Bash script.
</p>

<h3>📁 Backup Directory</h3>

```text
/home/ubuntu/backups
```

<h3>📄 Backup Script</h3>

```bash
#!/bin/bash

BACKUP_DIR="/home/ubuntu/backups"
DATE=$(date +"%Y-%m-%d_%H-%M-%S")

docker logs devops-app > "$BACKUP_DIR/devops-app-$DATE.log"

echo "Backup completed: $BACKUP_DIR/devops-app-$DATE.log"
```

---

<h2>⏰ Cron Automation</h2>

<p>
The backup script is scheduled to run automatically every day at 2:00 AM.
</p>

<h3>🕑 Cron Schedule</h3>

```text
0 2 * * * /home/ubuntu/backup.sh
```

<h3>📄 Cron Evidence</h3>

<p>
The configured Cron jobs are exported to:
</p>

```text
mycronjobs.txt
```

---

<h2>🔁 Complete DevOps Workflow</h2>

<p align="center">

```text
👨‍💻 Developer
      ↓
🐙 GitHub
      ↓
🔧 Jenkins
      ↓
📥 Checkout
      ↓
📦 Install Dependencies
      ↓
🧪 Test
      ↓
🐳 Docker Build
      ↓
🔐 Docker Hub Login
      ↓
📤 Docker Push
      ↓
📦 Docker Hub
      ↓
☁️ AWS EC2
      ↓
🚀 Node.js Application
      ↓
📡 Node Exporter
      ↓
🔍 Prometheus
      ↓
📊 Grafana
```

</p>

---

<h2>🛡️ DevOps Practices Demonstrated</h2>

<ul>
  <li>🌿 Git-based version control</li>
  <li>🐙 GitHub source code management</li>
  <li>🔧 Jenkins CI/CD automation</li>
  <li>📦 Automated dependency installation</li>
  <li>🧪 Automated application validation</li>
  <li>🐳 Docker containerization</li>
  <li>📦 Docker Hub image management</li>
  <li>🔐 Secure Jenkins credentials</li>
  <li>🚀 SSH-based deployment</li>
  <li>☁️ AWS EC2 deployment</li>
  <li>🔍 Prometheus monitoring</li>
  <li>📊 Grafana visualization</li>
  <li>📡 Node Exporter metrics collection</li>
  <li>🐚 Bash scripting</li>
  <li>⏰ Cron automation</li>
</ul>

---

<h2>🔗 Project Links</h2>

<h3>🐙 GitHub Repository</h3>

<p>
<a href="https://github.com/DarunVisneswaran/devops-capstone">
https://github.com/DarunVisneswaran/devops-capstone
</a>
</p>

<h3>🐳 Docker Hub Repository</h3>

<p>
<a href="https://hub.docker.com/r/darundoc/devops-capstone">
https://hub.docker.com/r/darundoc/devops-capstone
</a>
</p>

---

<h2>🎓 Learning Outcomes</h2>

<p>
This project provided practical experience in:
</p>

<ul>
  <li>🚀 Continuous Integration</li>
  <li>🔄 Continuous Delivery</li>
  <li>🐳 Docker Containerization</li>
  <li>☁️ AWS Cloud Deployment</li>
  <li>🔧 Jenkins Automation</li>
  <li>📊 Monitoring and Observability</li>
  <li>🔍 Prometheus</li>
  <li>📈 Grafana</li>
  <li>📡 Node Exporter</li>
  <li>🐚 Bash Automation</li>
  <li>⏰ Cron Scheduling</li>
  <li>🔐 Credential Management</li>
</ul>

---

<h2>🏁 Conclusion</h2>

<p>
This project demonstrates an end-to-end DevOps implementation for a Node.js web application.
It integrates source code management, continuous integration, containerization,
cloud deployment, monitoring and automation into a single workflow.
</p>

<p>
The implementation demonstrates how a developer's code can move from GitHub
through Jenkins CI/CD, Docker Hub and AWS EC2, while Prometheus and Grafana
provide monitoring visibility and Bash with Cron provides automated backups.
</p>

---

<p align="center">

<h2 align="center">☁️ BUILD • AUTOMATE • DEPLOY • MONITOR 🚀</h2>

<p align="center">
  <strong>⭐ DEVOPS CAPSTONE PROJECT ⭐</strong>
</p>


</p>
