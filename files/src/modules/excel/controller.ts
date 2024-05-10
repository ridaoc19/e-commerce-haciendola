import { Request, Response, Router } from "express";
const XlsxPopulate = require('xlsx-populate');

const router = Router();

router.post('/', async (_req: Request, res: Response)=>{
  const workbook = await  XlsxPopulate.fromFileAsync('./Productos prueba técnica.xlsx')
  const value = await workbook.sheet("Hoja1").usedRange().value();


  // XlsxPopulate.fromFileAsync('./Productos prueba técnica.xlsx')
  //   .then((workbook: any) => {
  //       // Modify the workbook.
  //       const value = workbook.sheet("Hoja1").cell("A1").value();
 
  //       // Log the value.
  //       console.log(value);
  //   });

  res.json({excel: value})

});

export { router };

