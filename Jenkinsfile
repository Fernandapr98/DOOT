pipeline {
    agent any 
    
    tools {
        nodejs "node"
    }

    stages {
        stage('Install') {
          steps {
           dir('node') {
             sh 'npm install'
           }
         }
       }
I
     stage('Build'){
        steps {
         git 'https://github.com/Fernandapr98/DOTT.git' 
         }
       }
     }
}
