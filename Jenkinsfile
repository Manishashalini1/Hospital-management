node {
    // Checkout Code stage
    stage('CheckoutCode') {
        git credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a', url: 'https://github.com/syammarolix/Hospital-management.git'
    }

    // Build
    stage("Build") {
        nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
            sh 'npm install'
            sh 'npm i sonarqube-scanner'
            sh 'npm pack'
        }
    }

    // Execute SonarQube Report
    stage('ExecuteSonarQubeReport') {
        nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
            sh 'npm run sonar'
        }
    }

    // Publish Build Artifact
    stage('Publish') {
        nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
            sh "npm publish"
        }
    }
}
