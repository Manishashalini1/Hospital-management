node {
    stage("CheckOutCodeGit") {
   
            git credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a', url: 'https://github.com/syammarolix/Hospital-management.git'

    }

    stage("Build") {
  
            nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
                sh 'npm install'
                sh 'npm i sonarqube-scanner'
                sh 'npm pack'

        }
    }

    stage('ExecuteSonarQubeReport') {
   
            nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
                sh 'npm run sonar'
       
        }
    }

   stage('UploadArtifcatsintoNexus')
    {
      sh "npm publish"
     }
}
