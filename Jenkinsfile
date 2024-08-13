pipeline {
    agent any
    stages {
        stage('Instalar dependencias') {
            agent {
                docker {
                    image 'node:20.11.1-alpine3.19' 
                }
            }
            stages {
               stage('Instalar dependencias') {
                   steps {
                       sh 'npm install'
                   }
               } 
            }
            stages {
               stage('ejecucion de test') {
                   steps {
                       sh 'npm run test'
                   }
               } 
            }
        }
    }
}