pipeline{
    agent any

    environment {
        utilisateur = 'salmane'
        couleur = 'noir'
    }
        stages{
            stage('git checkout'){
                steps{
                   git branch: 'main', credentialsId: 'darkstone', url:'https://github.com/SalmaneKHERCHOUCH/Todolist'
                }
            }

            stage('Lister les variables'){               
                steps{
                    echo "Le nom de l'utilisateur est ${utilisateur}"
                    echo "Ca couleur preferer est  ${couleur}"
                }
            }
            
            stage(' Utilisation des variables') {
                environment { 
                    loisir = 'football'
                    couleur = "rouge"
                }

                steps{
                    echo "Le nom de l'utilisateur est ${utilisateur}"
                    echo "Ca couleur preferer est  ${couleur}"
                    echo "Et son loisir prefere est  ${loisir}"
                }
                
            }    
        }
    }