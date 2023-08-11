node {
    // Checkout Code stage
 stage('CheckoutCode') {
git credentialsId: '40ff561e-b824-429f-add4-eb0c02fd8cc5', url: 'https://github.com/naveen1github/Hospital-management.git'    }

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
