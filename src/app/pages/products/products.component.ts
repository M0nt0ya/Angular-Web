import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductModelDto } from 'src/app/models/product.model';
import { ProductHttpService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  products: ProductModel[] = [];
  selectedProduct: UpdateProductModelDto={}

  constructor(private productHttpService: ProductHttpService) {}

  ngOnInit(): void {
    this.getProduct();
   // this.getProduct();
    //this.updateProduct();
    //this.createProduct();
    //this.deleteProduct();
  }
 getProducts(){
   this.productHttpService.getAll().subscribe(
    response=>{
       this.products= response
      console.log(response)}
      )
 }
 getProduct(){
   this.productHttpService.getOne(2).subscribe(
    response=>{
      console.log(response)})
 }
 createProduct(){
  const data = {
    title: 'Computadora  Andres',
    price: 50,
    description: 'Electrodomesticos /  Andres',
    images: [
      'https://m.media-amazon.com/images/I/51A+xXT0yiL._AC_SY580_.jpg',
    ],
    categoryId: 1,
  };
  this.productHttpService.store(data).subscribe(
    response=>{
      console.log(response)})
 }
 editProduct(product: ProductModel){
  this.selectedProduct = product
 }
 updateProduct(){
  const data = {
    title: 'Computadora',
    price: 150,
    description: 'Electrodomesticos / Andres',
  };
  this.productHttpService.update(1,data).subscribe(
    response => {
      console.log(response)})
 }
 deleteProduct(id:ProductModel['id']){
  this.productHttpService.destroy(id).subscribe(
    response => {
      this.products= this.products.filter(product => product.id != id);
      console.log(response)})
 }

}