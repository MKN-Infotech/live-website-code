pipeline {
    agent any

    environment {
        IMAGE_NAME = 'live-website'
        REGISTRY_URL = 'your.private.registry.com'
        DOCKER_CREDENTIALS_ID = 'docker-creds'
        SSH_CREDENTIALS_ID = 'linux-vm-creds'
        REMOTE_HOST = 'your.linux.vm.ip'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/MKN-Infotech/live-website-code.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $REGISTRY_URL/$IMAGE_NAME:latest ."
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS_ID, usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh "echo $PASSWORD | docker login $REGISTRY_URL -u $USERNAME --password-stdin"
                    sh "docker push $REGISTRY_URL/$IMAGE_NAME:latest"
                }
            }
        }

        stage('Deploy to Linux VM') {
            steps {
                sshagent([SSH_CREDENTIALS_ID]) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no user@$REMOTE_HOST '
                        docker pull $REGISTRY_URL/$IMAGE_NAME:latest &&
                        docker stop live-website || true &&
                        docker rm live-website || true &&
                        docker run -d --name live-website -p 80:80 $REGISTRY_URL/$IMAGE_NAME:latest
                    '
                    '''
                }
            }
        }
    }
}
