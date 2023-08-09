node {
    // Checkout Code stage
    stage('CheckoutCode') {
        git credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a', url: 'https://github.com/syammarolix/Hospital-management.git'
    }

    // Build
    stage('Build') {
        nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
            
            sh "npm publish"
        }
     }
     // SonarQube analysis
   stage('sonarqube'){
            def mavenHome = tool name:"maven-3.9.3", type:"maven"
            def mavenCMD = "${mavenHome}/bin/mvn"
            sh "${mavenCMD} sonar:sonar"
  }
}
