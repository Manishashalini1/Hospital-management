node
{
  stage("CheckOutCodeGit")
  {
    git credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a', url: 'https://github.com/syammarolix/Hospital-management.git'
  }
 
 stage("Build")
 {
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

   stage('Nexus Artifact Upload') {
    steps {
        script {
            // Define variables for various parameters
            def nexusUrl = 'http://34.201.172.98:8081'  // URL of your Nexus instance
            def groupId = 'in.nhs-app'                 // Group ID for the artifact
            def artifactId = 'nhs-app'                // Artifact ID for the artifact
            def version = '1.0'                       // Version of the artifact
            def file = '/var/lib/jenkins/workspace/Hospital management/nhs-app-1.0.0.tgz'  // Path to the artifact file
            def repository = 'hospital-npm-hosted-repository'  // Name of the Nexus repository
            def credentialsId = '2fa39b4e-712f-4248-9ceb-5a4b6a5a56a2'  // ID of the Nexus credentials
            
            // Use the nexusArtifactUploader step to upload the artifact
            nexusArtifactUploader(
                artifacts: [
                    [artifactId: artifactId, classifier: '', file: file, type: 'tgz']
                ],
                credentialsId: credentialsId,
                groupId: groupId,
                nexusUrl: nexusUrl,
                nexusVersion: 'nexus3',
                protocol: 'http',  // Use 'http' or 'https' based on your Nexus configuration
                repository: repository,
                version: version
            )
        }
     }
  }
}

