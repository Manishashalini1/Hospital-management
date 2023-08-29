node {
    stage("CheckoutCode") {
git credentialsId: 'c0b413fb-c203-4360-9d33-81e7affeb1b0', url: 'https://github.com/Manishashalini1/Hospital-management.git'    }

    stage("Build") {
        nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
            sh 'npm install'
            sh 'npm i sonarqube-scanner'
        }
    }
    
    stage('ExecuteSonarQubeReport') {
        nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
            sh 'node sonar-project.js'
        }
    }
}
