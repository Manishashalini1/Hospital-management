node {
    stage("CheckOutCodeGit") {
        git credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a', url: 'https://github.com/syammarolix/Hospital-management.git'
    }

    stage("Build") {
        nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
            // It's recommended to specify the working directory for npm commands.
            dir('path_to_your_project_directory') {
                sh 'npm install'
                sh 'npm pack'
            }
        }
    }

    stage('UploadArtifactsIntoNexus') {
        // Use 'withCredentials' to securely handle the Nexus credentials.
        withCredentials([usernamePassword(credentialsId: '5cfba2f8-8b01-40d1-9500-46161a393522', usernameVariable: 'NEXUS_USER', passwordVariable: 'NEXUS_PASSWORD')]) {
            nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
                // Update the Nexus URL to include 'http://' or 'https://'.
                sh "npm config set registry http://34.201.172.98:8081/repository/npm-hosted/"
                sh "npm config set _auth=${NEXUS_USER}:${NEXUS_PASSWORD}"

                // Use 'npm publish' to publish the package to Nexus.
                sh "npm publish"
            }
        }
    }
}
