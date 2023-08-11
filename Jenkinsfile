node {
    // Checkout Code stage
 stage('CheckoutCode') {
git credentialsId: '29304340-a9b2-4895-ba99-1f3278397851', url: 'https://github.com/naveen1github/Hospital-management.git'
 }

stage("Build") {
        nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
            dir('/var/lib/jenkins/workspace/hosp') { // Specify the path to your project's directory
                sh 'npm install'
            }
        }
    }

    stage('ExecuteSonarQubeReport') {
        nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
            dir('/var/lib/jenkins/workspace/hosp') { // Specify the path to your project's directory
                sh 'npm run sonar'
            }
        }
    }
}
