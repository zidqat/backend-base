pipeline {
    agent any
    stages {
        stage('Instalar dependencias') {
            agent {
                docker {
                    image 'node:20.11.1-alpine3.19' 
                }
            }
            steps {
                sh 'npm install'
            }
        }
    }
}