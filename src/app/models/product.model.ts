import { CategoryModel } from "./category.model";

export interface ProductModel{
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: CategoryModel;
}
//Omit: Omite algunos campos
export interface CreateProductModelDto extends Omit<ProductModel,'id' | 'category'>{
  categoryId:number;
  
}
//Partial: toma algunos campos para cambiarlos
// ? opcional 
export interface UpdateProductModelDto extends Partial<ProductModel> {
  categoryId?:number;
  
}