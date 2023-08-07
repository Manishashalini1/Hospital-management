pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
               git credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a', url: 'https://github.com/syammarolix/Hospital-management.git'
            }
        }

        stage('Build') {
            steps {
                // Install dependencies using npm
                sh 'npm install'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                // Run SonarQube analysis using the "sonar" script from package.json
                sh 'npm run sonar'
            }
        }
    }

    post {
        always {
            // Clean up after the build
            cleanWs()
        }
        success {
            echo 'Pipeline succesful!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
