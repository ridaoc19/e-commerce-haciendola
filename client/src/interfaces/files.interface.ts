export namespace IFiles {
  export enum QUERY_KEY_FILES {
    Files = 'files',
    Excel = 'excel',
  }


  export interface Files {
    file_id: string,
    entity: string,
    location: string,
    name: string,
    url: string,
    selected: string | null
  };
}
