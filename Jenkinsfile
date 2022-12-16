pipeline {
    agent any
    
    tools {
      nodejs "node"
    }
    
    stages {
        stage("Install") {
          steps{
            git 'https://github.com/Fernandapr98/DOTT.git'
                bat 'npm install'
            }
        }
    }
}
