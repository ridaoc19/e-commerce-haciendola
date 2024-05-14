import * as cors from "cors";
import * as express from "express";
import * as morgan from 'morgan';
import { uploadImages } from "./modules/files/help";
import router from "./routes";
const { upload } = uploadImages()

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors())
app.use('/files', express.static('files'));

app.use(upload.array('files'))

app.use("/", router)

export default app 