pipeline {
    agent any
    
    tools {nodejs "nodejs"}
    
    stages {
        stage('Build') {
            steps {
                git 'https://github.com/Fernandapr98/DOOT.git'
                bat 'npm install'
            }
        }
    }
}
