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
                }
            }
            stages {
                stage('Install'){
                    steps{
                        sh 'npm install'
                    }
                }
            }            
        }
    }
}