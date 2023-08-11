node {
    // Checkout Code stage
 stage('CheckoutCode') {
     git credentialsId: '076e3ee4-686c-4a50-a61f-0bc3ab54c16b', url: 'https://github.com/naveen1github/Hospital-management.git'  
    }

  stage("Build")
   {
    nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
        sh 'npm install'
	    sh 'npm i sonarqube-scanner'
       }
    }  
 
   stage('ExecuteSonarQubeReport') {
      nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
           sh 'npm run sonar'
      }
   }
}
