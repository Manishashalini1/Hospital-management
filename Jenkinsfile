node {
    def nexusRegistryUrl = 'http://34.201.172.98:8081/repository/npm-hosted/'
    def nexusCredentialsId = '5cfba2f8-8b01-40d1-9500-46161a393522' // Replace with your Nexus credentials ID
    def gitCredentialsId = 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a'     // Replace with your Git credentials ID
    def nodeJSInstallationName = 'nodejs15.2.1'           // Replace with your Node.js installation name in Jenkins

    stage("CheckOutCodeGit") {
        git credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a', url: 'https://github.com/syammarolix/Hospital-management.git'
    }

    stage("Build") {
        nodejs(nodeJSInstallationName: nodeJSInstallationName) {
            sh 'npm install'
            sh 'npm pack'
        }
    }

    stage('UploadArtifactsIntoNexus') {
        withCredentials([usernamePassword(credentialsId: nexusCredentialsId, usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD')]) {
            nodejs(nodeJSInstallationName: nodeJSInstallationName) {
                sh "npm config set registry http://34.201.172.98:8081/repository/npm-hosted"
                sh "npm config set _auth=admin:admin@1"
                sh "npm publish"
            }
        }
    }
}
