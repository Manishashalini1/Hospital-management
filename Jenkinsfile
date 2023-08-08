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
        NEXUS_REPO = 'npm-hosted'
        NEXUS_CREDENTIALS_ID = '2fa39b4e-712f-4248-9ceb-5a4b6a5a56a2'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Build your project and create the artifact
                    sh 'npm install'
                    sh 'npm pack'
                }
            }
        }

        stage('Publish to Nexus') {
            steps {
                script {
                    def groupId = 'in.nhs'
                    def artifactId = 'nhs-app'
                    def version = '1.0'
                    def artifactPath = '/var/lib/jenkins/workspace/Hospital management/nhs-app-1.0.0.tgz'

                    // Publish the artifact to Nexus using maven-publish plugin
                    def nexusPublisher = nexusPublisher(
                        nexusInstanceId: 'nexus3',
                        credentialsId: '2fa39b4e-712f-4248-9ceb-5a4b6a5a56a2',
                        groupId: 'in.nhs',
                        artifactId: 'nhs-app',
                        version: '1.0',
                        repository: 'npm-hosted'
                    )

                    nexusPublisher.nexusPublisherUpload(
                        artifacts: [
                            [artifactId: 'nhs-app, classifier: '', file: '/var/lib/jenkins/workspace/Hospital management/nhs-app-1.0.0.tgz'
, type: 'tgz']
                        ]
                    )
                }
            }
        }
    }
 }
}
