import * as cors from "cors";
import 'dotenv/config';
import * as express from "express";
import * as morgan from 'morgan';
import filesMiddleware from "./core/utils/middleware/files";
import { validatorsMiddlewareGlobal } from "./core/utils/validations/validatorsGlobal/validatorsMiddlewareGlobal";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors())

app.use(validatorsMiddlewareGlobal)
app.use(filesMiddleware)

app.use("/", router)

export default app 