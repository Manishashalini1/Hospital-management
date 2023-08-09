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

    stage('UploadArtifcatsintoNexus') {
        withCredentials([usernamePassword(credentialsId: '2fa39b4e-712f-4248-9ceb-5a4b6a5a56a2', usernameVariable: 'admin', passwordVariable: 'admin@1')]) {
            nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
                sh "npm config set registry http://34.201.172.98:8081/repository/npm-proxy/"
                sh "npm config set _auth=YWRtaW46YWRtaW5AMQ=="
                sh "npm publish"
            }
        }
    }
}
