const scanner = require('sonarqube-scanner');

scanner({
  serverUrl: 'http://13.36.240.46:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Hospital-management-nodejs',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': 'admin',
	    'sonar.password': 'admin1',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
