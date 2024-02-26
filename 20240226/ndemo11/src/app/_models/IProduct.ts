import { z } from "zod";

export default interface IProduct {
  id: number;
  productName: string;
  quantityPerUnit: string;
  unitPrice: number;
}

export const IProductSchema = z.object({
  productName: z.string().min(2).max(32, { message: "Product Name must be between 2 and 32 characters." }),
  unitPrice: z.number().min(1, { message: "Unit Price must be greater than 0." }),
  quantityPerUnit: z.string().min(2, { message: "Quantity Per Unit must be at least 2 characters." }),
});