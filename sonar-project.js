const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://54.157.148.238:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - node',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': 'squ_e64cddb0ebf0ec51a64d3754f4f8287f4ec1a1ad',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'sonar',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
