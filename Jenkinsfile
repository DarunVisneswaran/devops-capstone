pipeline {
    agent any

    environment {
        IMAGE_NAME = 'darundoc/devops-capstone:latest'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/DarunVisneswaran/devops-capstone.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'node --check app.js'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login \
                        -u "$DOCKER_USERNAME" --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }
    }
    stage('Deploy to App EC2') {
    steps {
        sshagent(['app-ec2-ssh']) {
            sh '''
                ssh -o StrictHostKeyChecking=no ubuntu@13.126.254.144 "
                    docker pull $IMAGE_NAME &&
                    docker stop devops-app || true &&
                    docker rm devops-app || true &&
                    docker run -d \
                        --name devops-app \
                        -p 8080:3000 \
                        $IMAGE_NAME
                "
            '''
        }
    }
}

    post {
        success {
            echo 'Build and Docker Hub push completed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
