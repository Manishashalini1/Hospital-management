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
            // ... other steps ...

            nexusArtifactUploader artifacts: [[artifactId: 'nhs-app', classifier: '', file: 'app.tar.gz', type: 'tar.gz']],
                credentialsId: '5f12eb92-4021-4983-bcbe-eae8882cc878', 
                groupId: 'in.nhs-app',
                nexusUrl: 'http://34.201.172.98:8081',
                nexusVersion: 'nexus3',
                protocol: 'http',
                repository: 'hospital-repo',
                version: '1.0',
                allowSnapshots: allowRepublish

        }
    }
}
