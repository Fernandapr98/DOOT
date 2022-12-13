pipeline {
  agent any
  stages {
    stage ('version') {
      steps {
        sh 'node --version'
      }
    }
    stage ('hello') {
      steps {
        sh 'PruebaDeBuild.sh'
      }
    }
  }
}
