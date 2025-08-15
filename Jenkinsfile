pipeline {
    agent any

    environment {
        APP_NAME = "ggcl-math-service"
        APP_DIR = "/srv/nest-app/ggcl-math-service"  // Thư mục trên VPS chứa app
        GIT_BRANCH = "main"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${GIT_BRANCH}", url: 'git@github.com:hoanghiep4298/ggcl-math-service.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install -f'
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh """
                ssh -o StrictHostKeyChecking=no jenkins@104.154.226.56 \\
                    "cd ${APP_DIR} && \\
                    git pull origin ${GIT_BRANCH} && \\
                    npm install --production && \\
                    npm ci && \\
                    npm run build && \\
                    pm2 restart ${APP_NAME} || pm2 start dist/main.js --name ${APP_NAME}"
                """
            }
        }
    }

    post {
        failure {
            echo "❌ Deploy failed for ${APP_NAME}"
        }
        success {
            echo "✅ Deploy success for ${APP_NAME}"
        }
    }
}
