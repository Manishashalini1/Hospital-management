pipeline {
    agent any

    stages {
        stage("CheckOutCodeGit") {
            steps {
                script {
                     git credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a', url: 'https://github.com/syammarolix/Hospital-management.git'
                }
            }
        }

        stage("Build") {
            steps {
                script {
                    nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
                        sh 'npm install'
                        sh 'npm i sonarqube-scanner'
                        sh 'npm pack'
                    }
                }
            }
        }

        stage('ExecuteSonarQubeReport') {
            steps {
                script {
                    nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
                        sh 'npm run sonar'
                    }
                }
            }
        }

        stage('Nexus Artifact Upload') {
            environment {
                NEXUS_URL = 'http://34.201.172.98:8081' 
                NEXUS_REPO = 'http://34.201.172.98:8081/repository/npm-hosted/' 
                NEXUS_CREDENTIALS_ID = '2fa39b4e-712f-4248-9ceb-5a4b6a5a56a2'
            }
            steps {
                script {
                    def groupId = 'in.nhs-app'
                    def artifactId = 'nhs-app'
                    def version = '1.0'
                    def file = '/var/lib/jenkins/workspace/Hospital management/nhs-app-1.0.0.tgz'
                    def repository = 'npm-hosted'
                    
                    nexusArtifactUploader artifacts: [
                        [artifactId: 'nhs-app', classifier: '', file: '/var/lib/jenkins/workspace/Hospital management/nhs-app-1.0.0.tgz', type: 'tgz']
                    ],
                    credentialsId: '2fa39b4e-712f-4248-9ceb-5a4b6a5a56a2',
                    groupId: 'in.nhs-app',
                    nexusUrl: '34.201.172.98:8081',
                    nexusVersion: 'nexus3',
                    protocol: 'http', 
                    repository: 'npm-hosted',
                    version: '1.0'
                }
            }
        }
    }
}

