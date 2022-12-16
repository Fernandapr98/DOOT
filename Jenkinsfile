pipeline {
    environment {

        scannerHome = tool 'sonarcloud';

    }
    
    agent any

    stage('Build'){
            steps{
                sh '''
                    echo '*******BUILD*********'
                    cd node
                    pwd
                    whoami
                    docker build . -t fernandadott
                    docker tag fernanda-dott fernandadott/fernanda-dott
                    docker push fernandadott/fernanda-dott

                 '''
            }
        }
    }
