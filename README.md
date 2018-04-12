# Heroku

    create-react-app $APP_NAME
    cd $APP_NAME
    git init
    heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
    git add .
    git commit -m "Start with create-react-app"
    git push heroku master
    heroku open

# Storybook

    npm run storybook
