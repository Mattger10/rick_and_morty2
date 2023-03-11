const app = require('./server');
const { sequelize } = require('../DB_connection');
const saveApiData = require('../controllers/SaveApiData');

sequelize.sync({ force: true }).then(() => {
    console.log('DB conectada');
    saveApiData();
    app.listen(3001, () => {
        console.log('Server on port 3001');
    })
}).catch((error) => {
    console.log(error);
})