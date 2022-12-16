pipeline {
    agent any
    environment {
SCANNER_HOME= tool 'SonarCloud';
    }

    tools {
        nodejs "node"
    }

  stages {
    stage('install') {
      steps {
        dir('node') {
          sh 'npm install'
        }
      }
    }

    stage('Build') {
      steps {
        sh 'echo "Building in process" '
        git branch: 'master', url: 'https://github.com/Fernandapr98/DOTT.git'
        }
      }
      stage('Static Code Analysis') {
            steps {
                 sh '''withSonarQubeEnv('SonarCloud') {
                    sonar-scanner \
                        -Dsonar.organization=fernandapr98 \
                        -Dsonar.projectKey=Fernandapr98_DOOT \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=https://sonarcloud.io '''
                    
                }
        }
    }
}
