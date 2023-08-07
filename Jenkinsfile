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
    }
 }  
 
  stage('ExecuteSonarQubeReport') {
     nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
          sh 'npm run sonar'
    }
      
        } 

   stage('Nexus Artifact Upload') {
            steps {
                // Package Node.js application into a tarball
                sh 'tar -czf app.tar.gz .'

                // Upload the generated tarball to Nexus repository
                nexusArtifactUploader nexusInstanceId: 'NexusServer', protocol: 'http', repositoryName: 'your-nexus-repo', credentialsId: 'your-nexus-credentials', groupId: 'com.example', version: '1.0.0', versionType: 'unique', artifact: 'app.tar.gz'
            }
        }

