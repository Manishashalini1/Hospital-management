node {
    stage("CheckOutCodeGit") {
        git credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a', url: 'https://github.com/syammarolix/Hospital-management.git'
    }

    stage("Build") {
        nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
            sh 'npm install'
            sh 'npm i sonarqube'
            sh 'npm pack'
        }
    }

   stage('UploadArtifactsIntoNexus') {
    withCredentials([usernamePassword(credentialsId: '2fa39b4e-712f-4248-9ceb-5a4b6a5a56a2', usernameVariable: 'admin', passwordVariable: 'admin@1')]) {
        withNPM(npmrcConfig: 'customNpmrc') {
            nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
                sh "npm config set _auth=$admin:$admin@1"
                sh 'npm publish'
            }
        }
    }
}

