pipeline {
    environment {

        scannerHome = tool 'sonarcloud';

    }
    
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Testingggg') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Sonar') {
            steps {
                echo 'SonarCloud'
                sh ' cd node '
                sh ' pwd '
                withSonarQubeEnv('SonarCloud') {

                    sh '''${scannerHome}/bin/sonar-scanner \

                        -Dsonar.organization=fernandapr98 \

                        -Dsonar.projectKey=Fernandapr98_DOOT \

                        -Dsonar.sources=./node/ \

                        -Dsonar.host.url=https://sonarcloud.io

                    '''

                }

            }

        }
                 /*sh '''withSonarQubeEnv('SonarCloud') {
                    sonar-scanner \
                        -Dsonar.organization=fernandapr98 \
                        -Dsonar.projectKey=Fernandapr98_DOOT \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=https://sonarcloud.io '''*/
                }
            }
        
        stage('Deployingggg') {
            steps {

    }
}
