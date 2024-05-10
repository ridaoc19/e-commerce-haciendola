import "reflect-metadata"
import { DataSource } from "typeorm"
import '../dotenv'
import AdvertisingEntity from "./modules/advertising/entity"
import CategoryEntity from "./modules/category/entity"
import DepartmentEntity from "./modules/department/entity"
import FilesEntity from "./modules/developer/entity"
import NavigationEntity from "./modules/navigation/entity"
import ProductEntity from "./modules/product/entity"
import SubcategoryEntity from "./modules/subcategory/entity"
import UserEntity from "./modules/user/entity"
import VariantEntity from "./modules/variant/entity"
import CartEntity from "./modules/cart/entity"
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
        DepartmentEntity,
        CategoryEntity,
        SubcategoryEntity,
        ProductEntity,
        VariantEntity,
        NavigationEntity,
        FilesEntity,
        CartEntity
    ],
    migrations: [],
    subscribers: [],
})
