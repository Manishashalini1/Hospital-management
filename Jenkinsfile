node {
    stage('CheckoutCode') {
       git credentialsId: 'df7e0d2d-d6b8-4494-82b1-e2b7a20a528a', url: 'https://github.com/syammarolix/Hospital-management.git'
    }

     stage('InstallPackages') {
        def packageJson = readFile('package.json')
        def packageJsonWithoutRegistry = packageJson.replaceAll(/"publishConfig":\s*{[^}]+},/, '')

        writeFile file: 'package.json', text: packageJsonWithoutRegistry

        sh 'npm install'
        
        // Restore the original package.json
        writeFile file: 'package.json', text: packageJson
    }
    
    stage('SonarQube') {
        // Run SonarQube analysis
        nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
            sh 'npm run sonar'
        }
    }
    
    stage('Publish') {
        // Publish to the custom registry
        nodejs(nodeJSInstallationName: 'nodejs16.13.0') {
            sh 'npm publish'
        }
    }
}
