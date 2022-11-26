pipeline{
    agent any
        stages{
            stage('git checkout'){
                steps{
                   git branch: 'main', credentialsId: 'darkstone', url:'https://github.com/SalmaneKHERCHOUCH/Todolist'
                }
            }
            
            stage('Build docker image') {
                steps{
                    bat 'docker build -t todolist/triang7:1.0.0 .'
                }
                
            }    
        }
    }