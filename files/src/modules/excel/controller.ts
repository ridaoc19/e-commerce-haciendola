import { Request, Response, Router } from "express";
const XlsxPopulate = require('xlsx-populate');

// interface Product {
//   [key: string]: string | number;
// }

const router = Router();

router.post('/', async (_req: Request, res: Response) => {
  const workbook = await XlsxPopulate.fromFileAsync('./Productos prueba técnica.xlsx')
  const excelData = await workbook.sheet("Hoja1").usedRange().value();
  const filterProducts: [string[], (string | number)[]][] = excelData.filter((e: [[]]) => e.filter(Boolean).length === 9)

  // const products = filterProducts.slice(0, 3).map(e) => {
  //   console.log(headers, data)
  //   // return headers.reduce<Product>((acc, key, index) => {
  //   //   acc[key] = data[index];
  //   //   return acc;
  //   // }, {});
  // });

  res.json({ fiter: filterProducts.length })

});

export { router };

