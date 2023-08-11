node {
    stage("CheckoutCode") {
        git credentialsId: '29304340-a9b2-4895-ba99-1f3278397851', url: 'https://github.com/naveen1github/Hospital-management.git'
    }

    stage("Build") {
        nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
            sh 'npm install'
        }
    }
    
    stage('ExecuteSonarQubeReport') {
        nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
            sh 'node sonar-project.js'
        }
    }
}
