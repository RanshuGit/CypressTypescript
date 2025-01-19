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
  }
  post {
    always {
      allure includeProperties: false,
             jdk: '',
             results: [[path: 'build/allure-results']]
    }
  }
}