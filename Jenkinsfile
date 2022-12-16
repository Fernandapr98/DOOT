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
I
     stage('build'){
        steps {
         git 'https://github.com/Fernandapr98/DOTT.git' 
         dir('node')
         }
       }
     }
}
