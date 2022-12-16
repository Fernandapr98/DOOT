pipeline {
    agent any
    
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

    stage('test') {
      steps {
        git branch: 'master', url: 'https://github.com/mendozaGabo/DOTT-Gabriel.git'
        dir('node') {
          sh 'npm run test'
        }
      }
    }
    }
}
