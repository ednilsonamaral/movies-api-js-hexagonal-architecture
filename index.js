import App from './src/app.js';

const app = new App();

app.loadSetup()
    .then(() => {
        app.start();
    })
    .catch((error) => {
        console.error(error.stack);
        process.exit(1);
    });
