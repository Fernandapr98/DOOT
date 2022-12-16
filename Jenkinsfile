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
          sh 'npm test'
        }
      }
    }
    }

