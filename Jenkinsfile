pipeline {
    agent any
    environment {
        ALLURE_RESULTS_DIR = 'cypress/allure-results'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }
        stage('Publish Allure Report') {
            steps {
                allure includeProperties: false, jdk: '', reportBuildPolicy: 'ALWAYS', results: [[path: 'cypress/allure-results']]
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'cypress/allure-results/**', allowEmptyArchive: true
        }
    }
}
