import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('almacen', 'root', 'Amdukia@1258', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
});

export default sequelize;