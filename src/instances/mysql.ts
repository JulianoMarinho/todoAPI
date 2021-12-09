//faz a conexao e esporta a conexao
import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config();

export const sequelize = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect: 'mysql',//vou fazer uma conexao com um banco mysql,
        port: parseInt(process.env.MYSQL_PORT as string)
    }
    
);//para fazer conexão com o banco mysql