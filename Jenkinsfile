node {
    stage("CheckOutCodeGit") {
        git credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a', url: 'https://github.com/syammarolix/Hospital-management.git'
    }

    stage("Build") {
        nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
            sh 'npm install'
            sh 'npm pack'
        }
    }

   nexusArtifactUploader artifacts: [[artifactId: 'nhs-app', classifier: '', file: '/var/lib/jenkins/workspace/Hospital management/nhs-app-1.0.0.tgz', type: 'tgz']], credentialsId: '5cfba2f8-8b01-40d1-9500-46161a393522', groupId: 'in.nhs-app', nexusUrl: '34.201.172.98:8081', nexusVersion: 'nexus3', protocol: 'http', repository: 'npm-hosted', version: '1.0'
            }
        }
    }
  }
}
