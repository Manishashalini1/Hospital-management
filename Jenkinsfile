node {
    stage('Checkout Code') {
        checkout([
            $class: 'GitSCM',
            branches: [[name: '*/master']],
            doGenerateSubmoduleConfigurations: false,
            extensions: [],
            submoduleCfg: [],
            userRemoteConfigs: [[
                credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a',
                url: 'https://github.com/syammarolix/Hospital-management.git'
            ]]
        ])
    }

    stage('Build and Publish') {
        nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
            sh 'npm publish'
        }
    }

    stage('SonarQube Analysis') {
        steps {
            script {
                def scannerHome = tool 'SonarQubeScanner'
                withSonarQubeEnv('My SonarQube Server') {
                    sh """
                    ${scannerHome}/bin/sonar-scanner \\
                    -Dsonar.projectDescription='This is a Node JS application' \\
                    -Dsonar.projectName='Hospital-management-nodejs' \\
                    -Dsonar.projectKey='NodeJsMithunTechnologies' \\
                    -Dsonar.login=admin \\
                    -Dsonar.password=admin@1 \\
                    -Dsonar.projectVersion=1.0 \\
                    -Dsonar.language=js \\
                    -Dsonar.sourceEncoding=UTF-8 \\
                    -Dsonar.sources=.
                    """
                }
            }
        }
    }
}
