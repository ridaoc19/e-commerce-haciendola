import { IFiles } from "../../interfaces/files.interface";

export enum RouteFiles {
  FilesRequest = 'get|files/request',
  FilesCreateDelete = 'post|files/create-delete',
  FilesCreateExcel = 'post|files/create-excel',
}

export type RequestMapFiles = {
  [RouteFiles.FilesRequest]: {
    route: RouteFiles.FilesRequest;
    extensionRoute: `?entity=${string}&location=${string}&selected=${boolean}&name=${string}&typeFile=${string}`;
    data: {
      data: IFiles.Files[] | [],
      delete: string[] | [],
    };
  },
  [RouteFiles.FilesCreateDelete]: {
    route: RouteFiles.FilesCreateDelete;
    extensionRoute: `?entity=${string}&location=${string}&selected=${boolean}&name=${string}&typeFile=${string}`;
    requestData: {
      toStore: {
        file: File[],
        entity: string,
        location: string,
        typeFile: 'videos' | 'images' | 'excel'
        name: string
        selected: boolean
      },
      toDelete: string[]
    };
    data: {
      data: IFiles.Files[] | [],
      delete: string[] | [],
    };
  },
  [RouteFiles.FilesCreateExcel]: {
    route: RouteFiles.FilesCreateExcel;
    extensionRoute: `?entity=${string}&location=${string}&selected=${boolean}&name=${string}&typeFile=${string}`;
    requestData: {
      toStore: {
        file: File[],
        entity: string,
        location: string,
        typeFile: 'videos' | 'images' | 'excel'
        name: string
        selected: boolean
      },
      toDelete: string[]
    };
    data: {
      data: [],
      delete: [],
    };
  }
};