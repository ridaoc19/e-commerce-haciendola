import { AppDataSource } from "../../data-source";
import FilesEntity from "./entity";
import * as fs from 'fs';
import * as fsExtra from 'fs-extra';
import * as multer from "multer";
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

export interface Files {
  file_id: string,
  entity: string,
  location: string,
  name: string,
  typeFile: string,
  url: string,
  selected: boolean
};

export interface Product {
  handle: string;
  product: string;
  category: string;
  description: string;
  sku: string,
  grams: string;
  stock: number,
  price: number,
  listPrice: number,
  barcode: string
}


export const getFiles = async ({ entity, location, name, selected, typeFile }: Omit<Files, 'file_id' | 'url'>): Promise<Files[]> => {
  try {

    let queryBuilder = AppDataSource
      .createQueryBuilder(FilesEntity, 'files')

    if (selected === false) {
      queryBuilder = queryBuilder.where('files.selected IS false')
    }

    if (selected === true) {
      queryBuilder.where('files.selected IS true')
    }

    if (entity) {
      queryBuilder = queryBuilder.andWhere('files.entity = :entity', { entity });
    }
    if (location) {
      queryBuilder = queryBuilder.andWhere('files.location = :location', { location });
    }
    if (name) {
      queryBuilder = queryBuilder.andWhere('files.name = :name', { name });
    }

    if (typeFile) {
      queryBuilder = queryBuilder.andWhere('files.typeFile = :typeFile', { typeFile });
    }

    const files = await queryBuilder.getMany();

    return files
  } catch (error) {
    throw Error
  }
}

export const folderPath = `${__base}/files`;

export async function checkFolderAccess({ folderPath }: { folderPath: string }) {
  fsExtra.access(folderPath, fsExtra.constants.F_OK, (err) => {
    if (err) {
      fsExtra.ensureDir(folderPath, (createErr) => {
        if (createErr) {
          console.error(`Error al crear la carpeta ${folderPath}:`, createErr);
        } else {
          console.log(`Carpeta ${folderPath} creada con éxito.`);
        }
      });
    } else {
      console.log(`La carpeta ${folderPath} ya existe.`);
    }
  });
}

export const uploadImages = () => {
  try {
    const storage = multer.diskStorage({
      destination: async function (_req, _file, cb) {
        cb(null, 'files');
      },
      filename: function (_req, file, cb) {
        const imageName = `${uuidv4()}-${file.originalname}`;
        file.path = `files/${imageName}`
        cb(null, imageName);
      },
    });

    const upload = multer({ storage: storage })
    return { upload }
  } catch (error) {
    console.error('Error configuring multer:', error);
    throw error;
  }
};
export const deleteFiles = (filteredImages: string[]): boolean => {
  try {
    let status = false;

    filteredImages.forEach((url: string) => {
      try {
        const absolutePath = path.resolve(__base, 'files', url);
        if (fs.existsSync(absolutePath)) {
          console.log(`El archivo ${url} sí existe en ${absolutePath}`);
          fs.unlinkSync(absolutePath);
          status = true;
        } else {
          console.log(`El archivo ${url} no existe.`);
          status = false;
        }
      } catch (error) {
        console.error('Error al eliminar archivos:', error);
        status = false;
      }
    });

    return status;
  } catch (error) {
    console.error('Error en la función deleteFiles:', error);
    return false;
  }
};
