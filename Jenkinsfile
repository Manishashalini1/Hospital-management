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

    stage('UploadintoNexus') {
      nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
	// Set Nexus authentication credentials
	      sh 'cd /var/lib/jenkins/workspace/Hospital-management'
sh 'npm config set http://13.38.6.193:8081/repository/Hospital-management/:admin:admin'

// Publish the npm package
sh 'npm publish'
}
    }
}
