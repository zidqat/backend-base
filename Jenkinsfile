pipeline {
    agent any
    environment{
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }
    stages {
        stage('etapa de construccion de aplicacion'){
            agent {
                docker {
                    image 'node:alpine3.20'
                    reuseNode true
                }
            }
            stages {
                stage('Install'){
                    steps{
                        sh 'npm install'
                    }
                }
                stage('Test'){
                    steps{
                        sh 'npm run test'
                    }
                }
                stage('Build'){
                    steps{
                        sh 'npm run build'
                    }
                }
            }            
        }
        stage('construccion imagen docker'){
            steps{
                script{
                    sh 'docker build -t backend-base .'
                    sh 'docker tag backend-base us-central1-docker.pkg.dev/expertis-classroom/docker-repository/backend-base:rfc'
                }
            }
        }
    }
}