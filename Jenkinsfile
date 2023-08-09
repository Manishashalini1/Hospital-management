node {
    // Checkout Code stage
    stage('CheckoutCode') {
        git credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a', url: 'https://github.com/syammarolix/Hospital-management.git'
    }

    // Build
    stage('Build') {
        nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
            sh "npm install"
            sh "npm publish"
        }
     }
    // SonarQube analysis
   stage('SonarQube') {
    nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
        // Make sure your project's package.json includes the necessary SonarQube configurations
        sh 'npm install sonarqube-scanner' // Install from the default npm registry
        sh 'npm run sonar' // Replace with the actual command to run SonarQube analysis
    }
   }
}
