pipeline {
    agent any

    tools {
      nodejs "node"
        nodejs "node"
    }

    stages {
        stage("Install") {
          steps{
            git 'https://github.com/Fernandapr98/DOTT.git'
                bat 'npm install'
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
