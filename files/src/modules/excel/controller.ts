import { Request, Response, Router } from "express";
import { AppDataSource } from "../../data-source";
import { CategoryEntity, ProductEntity } from "./entity";
const XlsxPopulate = require('xlsx-populate');

interface Product {
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

const router = Router();

router.post('/', async (_req: Request, res: Response) => {
  try {
    const workbook = await XlsxPopulate.fromFileAsync('./Productos prueba técnica.xlsx');
    const excelData = await workbook.sheet("Hoja1").usedRange().value();
    const filterProducts: [(string)[]] = excelData.filter((e: [[]]) => e.filter(Boolean).length === 10);
    const incomplete: [(string)[]] = excelData.filter((e: [[]]) => e.filter(Boolean).length > 0 && e.filter(Boolean).length < 10);

    const result = filterProducts.slice(1).map(entry => {
      const obj: any = {};
      filterProducts[0].forEach((key, index) => {
        obj[key] = entry[index];
      });
      return obj;
    }) as Product[];

    const categoryRepository = AppDataSource.getRepository(CategoryEntity);
    const productRepository = AppDataSource.getRepository(ProductEntity);

    for (const { handle, product, category, description, sku, grams, stock, price, listPrice, barcode } of result) {
      try {
        let existingCategory = await categoryRepository.findOne({ where: { category } });
        if (!existingCategory) {
          existingCategory = new CategoryEntity();
          existingCategory.category = category;
          await categoryRepository.save(existingCategory);
        }

        const newProduct = new ProductEntity();
        newProduct.product = product;
        newProduct.description = description;
        newProduct.price = price;
        newProduct.listPrice = listPrice;
        newProduct.stock = stock;
        newProduct.handle = handle;
        newProduct.barcode = barcode;
        newProduct.sku = sku;
        newProduct.grams = grams;
        newProduct.breadcrumb = []
        newProduct.category = existingCategory;
        await productRepository.save(newProduct);
      } catch (error) {
        console.error("Error saving product:", error);
      }
    }

    res.json({ fiter: result, incomplete: incomplete.length });
  } catch (error) {
    console.error("Error processing Excel file:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export { router };
