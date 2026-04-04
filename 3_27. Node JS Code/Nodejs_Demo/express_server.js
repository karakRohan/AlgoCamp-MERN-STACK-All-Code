const exprees = require('express');

const app = exprees();

app.listen(3000, () => {
    console.log('Express server is running on http://localhost:3000 and server is started successfully now');
});