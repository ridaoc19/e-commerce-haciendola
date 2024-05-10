import "reflect-metadata"
import { DataSource } from "typeorm"
import '../dotenv'
import AdvertisingEntity from "./modules/advertising/entity"
import FilesEntity from "./modules/developer/entity"
import ProductEntity from "./modules/product/entity"
import UserEntity from "./modules/user/entity"
import CategoryEntity from "./modules/category/entity"
// import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
        UserEntity,
        AdvertisingEntity,
        ProductEntity,
        CategoryEntity,
        FilesEntity,
    ],
    migrations: [],
    subscribers: [],
})
