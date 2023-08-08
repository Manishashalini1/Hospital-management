node {
    def gitCredentials = 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a'
    def nexusCredentials = '2fa39b4e-712f-4248-9ceb-5a4b6a5a56a2'
    def artifactPath = '/var/lib/jenkins/workspace/Hospital management/nhs-app-1.0.0.tgz'
    
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

    stage('Nexus Artifact Upload') {
        def groupId = 'com.nhs-app'
        def artifactId = 'nhs-app'
        def version = '1.0.0'
        def repository = 'hospital-repository'
        
        def nexusUrl = 'http://34.201.172.98:8081'
        def nexusVersion = 'nexus3'
        def protocol = 'http'

        withCredentials([string(credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528', variable: 'nexusCredentials')]) {
            script {
                def nexusArtifactUploader = Artifactory.newNexusArtifactory server: [
                    id: 'nexus3',
                    url: nexusUrl,
                    credentialsId: nexusCredentials,
                    releaseRepository: repository,
                    snapshotRepository: repository
                ]

                def uploadedArtifact = nexusArtifactUploader.uploadSpec(uploadSpec: [
                    files: [
                        [
                            pattern: http://34.201.172.98:8081/repository/hospital-repository/,
                            target: "in/nhs-app/${artifactId}/${version}/${artifactId}-${version}.tgz"
                        ]
                    ]
                ])

                if (uploadedArtifact.getResponseCode() != 201) {
                    error "Failed to upload artifact to Nexus"
                }
            }
        }
    }
}
