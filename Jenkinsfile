pipeline {
    agent any

    stages {
        stage('Git') {
            steps {
                git branch: 'test',
                url: 'https://github.com/DiegoBuitrago/test_jenkins.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh './script/test'
            }
        }
    }
    post {
        always {
            sh 'echo hola'
        }
        success {
            sh 'git config --global user.email "alejobq@hotmail.com"'
            sh 'git config --global user.name "DiegoBuitrago"'
            sh 'git status'
            sh 'git branch'
            sh 'git checkout main'
            sh 'git status'
            sh 'git merge test'
            sh 'git remote rm origin'
            sh 'git remote add origin "git@github.com:DiegoBuitrago/test_jenkins.git"'
            sh 'git push origin main'
            sh 'git status'
        }
    }
}
