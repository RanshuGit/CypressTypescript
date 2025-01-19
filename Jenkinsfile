pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                bat 'npm install'
            }
        }
        stage('Test') { 
            steps {
                bat 'npx cypress run' 
            }
        }
        stage('Generate Allure Report') {
            steps {
                bat 'npx allure generate allure-results --clean -o allure-report'
            }
        }
        stage('Publish Allure Report') {
            steps {
                allure([
                    includeProperties: true,
                    jdk: '',
                    results: [[path: 'allure-report']]
                ])
            }
        }
    }
}
