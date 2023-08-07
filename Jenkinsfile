node
{
 
  stage("CheckOutCodeGit")
  {
   git credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a', url: 'https://github.com/syammarolix/Hospital-management.git'
 }
 
  stage('Build') {
            steps {
                script {
                    // Install dependencies using npm
                    sh 'npm install'
                }
            }
        }

	 stage('SonarQube Analysis') {
            steps {
                script {
                    // Run SonarQube analysis using the "sonar" script from package.json
                    sh 'npm run sonar'
                }
            }
        }
    }

    post {
        always {
            // Clean up after the build
            cleanWs()
        }
        success {
            echo 'Pipeline successful!'
        }
        failure {
            echo 'Pipeline failed!'
        }
} 
