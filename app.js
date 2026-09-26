// Webhook automatic build test 3
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>CloudOps DevOps Platform</title>

    <!-- Font Awesome Icons -->
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            background: #06111f;
            color: white;
            overflow-x: hidden;
        }

        /* CLOUD BACKGROUND */

        .cloud-bg {
            position: fixed;
            inset: 0;
            overflow: hidden;
            z-index: -1;
        }

        .cloud {
            position: absolute;
            color: rgba(80, 180, 255, 0.08);
            font-size: 180px;
        }

        .cloud.one {
            top: 50px;
            left: 5%;
        }

        .cloud.two {
            top: 250px;
            right: 5%;
            font-size: 220px;
        }

        .cloud.three {
            bottom: 50px;
            left: 35%;
            font-size: 250px;
        }

        /* NAVBAR */

        nav {
            width: 100%;
            padding: 20px 8%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(5, 20, 35, 0.85);
            border-bottom: 1px solid rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #55c8ff;
        }

        .logo i {
            margin-right: 8px;
        }

        nav span {
            color: #9bb7cc;
            font-size: 14px;
        }

        /* HERO */

        .hero {
            min-height: 520px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 80px 20px;
            background:
                radial-gradient(circle at center,
                rgba(0, 150, 255, 0.18),
                transparent 55%);
        }

        .hero-content {
            max-width: 900px;
        }

        .cloud-icon {
            font-size: 90px;
            color: #54c7ff;
            margin-bottom: 25px;
            filter: drop-shadow(0 0 25px rgba(84,199,255,0.6));
        }

        .hero h1 {
            font-size: 56px;
            margin-bottom: 20px;
        }

        .hero h1 span {
            color: #54c7ff;
        }

        .hero p {
            color: #a9bfd1;
            font-size: 19px;
            line-height: 1.7;
        }

        .badge {
            display: inline-block;
            margin-top: 30px;
            padding: 10px 20px;
            border-radius: 30px;
            background: rgba(84,199,255,0.1);
            border: 1px solid rgba(84,199,255,0.4);
            color: #54c7ff;
        }

        /* SECTION */

        .section {
            padding: 70px 8%;
            max-width: 1300px;
            margin: auto;
        }

        .section-title {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-title h2 {
            font-size: 35px;
            margin-bottom: 12px;
        }

        .section-title p {
            color: #91aabd;
        }

        /* TECHNOLOGY CARDS */

        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }

        .card {
            padding: 30px 20px;
            text-align: center;
            background: rgba(15, 35, 55, 0.75);
            border: 1px solid rgba(100,180,230,0.15);
            border-radius: 18px;
            transition: 0.3s;
            backdrop-filter: blur(10px);
        }

        .card:hover {
            transform: translateY(-8px);
            border-color: #54c7ff;
            box-shadow: 0 10px 35px rgba(0,160,255,0.15);
        }

        .card i {
            font-size: 42px;
            color: #54c7ff;
            margin-bottom: 18px;
        }

        .card h3 {
            margin-bottom: 10px;
        }

        .card p {
            color: #8fa8ba;
            font-size: 14px;
        }

        /* PIPELINE */

        .pipeline {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
        }

        .pipeline-box {
            width: 150px;
            padding: 25px 10px;
            text-align: center;
            background: #0d2236;
            border: 1px solid #214966;
            border-radius: 15px;
        }

        .pipeline-box i {
            font-size: 35px;
            color: #54c7ff;
            margin-bottom: 12px;
        }

        .arrow {
            color: #54c7ff;
            font-size: 25px;
        }

        /* MONITORING */

        .monitor {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }

        .monitor-box {
            padding: 35px;
            border-radius: 20px;
            background: linear-gradient(
                135deg,
                rgba(20,55,80,0.9),
                rgba(7,25,42,0.9)
            );
            border: 1px solid rgba(84,199,255,0.2);
        }

        .monitor-box i {
            font-size: 45px;
            color: #54c7ff;
            margin-bottom: 20px;
        }

        .monitor-box h3 {
            font-size: 25px;
            margin-bottom: 12px;
        }

        .monitor-box p {
            color: #9ab1c2;
            line-height: 1.6;
        }

        /* FOOTER */

        footer {
            text-align: center;
            padding: 35px;
            margin-top: 50px;
            border-top: 1px solid rgba(255,255,255,0.1);
            color: #7892a5;
        }

        footer i {
            color: #54c7ff;
        }

        /* MOBILE */

        @media(max-width: 700px) {

            .hero h1 {
                font-size: 38px;
            }

            .hero p {
                font-size: 16px;
            }

            .monitor {
                grid-template-columns: 1fr;
            }

            .pipeline {
                flex-direction: column;
            }

            .arrow {
                transform: rotate(90deg);
            }
        }

    </style>
</head>

<body>

    <!-- CLOUD BACKGROUND -->

    <div class="cloud-bg">
        <i class="fa-solid fa-cloud cloud one"></i>
        <i class="fa-solid fa-cloud cloud two"></i>
        <i class="fa-solid fa-cloud cloud three"></i>
    </div>


    <!-- NAVIGATION -->

    <nav>

        <div class="logo">
            <i class="fa-solid fa-cloud"></i>
            CloudOps
        </div>

        <span>
            DevOps Capstone Project
        </span>

    </nav>


    <!-- HERO -->

    <section class="hero">

        <div class="hero-content">

            <div class="cloud-icon">
                <i class="fa-solid fa-cloud-arrow-up"></i>
            </div>

            <h1>
                End-to-End
                <span>Cloud DevOps</span>
            </h1>

            <p>
                A modern Node.js application powered by
                CI/CD automation, Docker containers,
                AWS infrastructure and real-time monitoring.
            </p>

            <div class="badge">
                <i class="fa-solid fa-circle-check"></i>
                Deployment Ready
            </div>

        </div>

    </section>


    <!-- TECHNOLOGIES -->

    <section class="section">

        <div class="section-title">

            <h2>Cloud & DevOps Stack</h2>

            <p>
                Technologies used in the complete DevOps pipeline
            </p>

        </div>


        <div class="cards">

            <div class="card">
                <i class="fa-brands fa-github"></i>
                <h3>GitHub</h3>
                <p>Source code management</p>
            </div>


            <div class="card">
                <i class="fa-solid fa-gears"></i>
                <h3>Jenkins</h3>
                <p>Continuous Integration & Deployment</p>
            </div>


            <div class="card">
                <i class="fa-brands fa-docker"></i>
                <h3>Docker</h3>
                <p>Application containerization</p>
            </div>


            <div class="card">
                <i class="fa-solid fa-cloud"></i>
                <h3>AWS</h3>
                <p>Cloud infrastructure</p>
            </div>


            <div class="card">
                <i class="fa-solid fa-chart-line"></i>
                <h3>Prometheus</h3>
                <p>Infrastructure monitoring</p>
            </div>


            <div class="card">
                <i class="fa-solid fa-chart-area"></i>
                <h3>Grafana</h3>
                <p>Monitoring visualization</p>
            </div>

        </div>

    </section>


    <!-- CI/CD PIPELINE -->

    <section class="section">

        <div class="section-title">

            <h2>CI/CD Pipeline</h2>

            <p>
                From source code to cloud deployment
            </p>

        </div>


        <div class="pipeline">

            <div class="pipeline-box">
                <i class="fa-brands fa-github"></i>
                <h3>GitHub</h3>
            </div>

            <div class="arrow">
                <i class="fa-solid fa-arrow-right"></i>
            </div>

            <div class="pipeline-box">
                <i class="fa-solid fa-gears"></i>
                <h3>Jenkins</h3>
            </div>

            <div class="arrow">
                <i class="fa-solid fa-arrow-right"></i>
            </div>

            <div class="pipeline-box">
                <i class="fa-brands fa-docker"></i>
                <h3>Docker</h3>
            </div>

            <div class="arrow">
                <i class="fa-solid fa-arrow-right"></i>
            </div>

            <div class="pipeline-box">
                <i class="fa-solid fa-cloud"></i>
                <h3>AWS EC2</h3>
            </div>

        </div>

    </section>


    <!-- MONITORING -->

    <section class="section">

        <div class="section-title">

            <h2>Cloud Monitoring</h2>

            <p>
                Observe infrastructure performance in real time
            </p>

        </div>


        <div class="monitor">

            <div class="monitor-box">

                <i class="fa-solid fa-chart-line"></i>

                <h3>Prometheus</h3>

                <p>
                    Collects system and infrastructure
                    metrics from the application environment.
                </p>

            </div>


            <div class="monitor-box">

                <i class="fa-solid fa-chart-area"></i>

                <h3>Grafana</h3>

                <p>
                    Provides dashboards and visualizations
                    for CPU, memory, disk and network metrics.
                </p>

            </div>

        </div>

    </section>


    <!-- FOOTER -->

    <footer>

        <p>
            <i class="fa-solid fa-cloud"></i>
            CloudOps DevOps Capstone Project
        </p>

        <p>
            GitHub • Jenkins • Docker • AWS • Prometheus • Grafana
        </p>

    </footer>

</body>

</html>
    `);
});


app.listen(PORT, () => {
console.log(`Application running on port ${PORT}`);
});
