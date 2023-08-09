node {
    // Checkout Code stage
    stage('CheckoutCode') {
                git credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a', url: 'https://github.com/syammarolix/Hospital-management.git'
    }

    // Build
    stage('Build') {
        nodejs(nodeJSInstallationName: 'nodejs16.4.2') {
            sh 'npm install -g npm'
            sh 'npm config fix'
            sh 'npm install'
            sh "npm pack"
            sh "npm publish"
            sh 'npm run sonar'
          

        }
    }
}          c
