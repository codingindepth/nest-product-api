import { Injectable, NotFoundException } from '@nestjs/common';

import { Product, IProduct } from '../models/product';
import { of } from 'rxjs';

@Injectable()
export class ProductsService {
  private products: IProduct[] = [];

  addProduct(productName:string,productDesc:string,productAddedDate:string) {
    const prodId = Math.random().toString();
    let product:IProduct = new Product(prodId,productName,productDesc,productAddedDate);
    this.products.push(product);
    return prodId;
  }

  getProducts() {
    return of([...this.products]);
  }

  getProductById(productId: string) {
    console.log(productId);
    let index = this.products.findIndex(p=>p.prodid===productId);
    let searchProduct = index == 0 || index >0 ? this.products[index] : {}
    return of(searchProduct);
  }

  updateProduct(productId: string, productName: string, productDesc: string, prodAddedDate: string) {
    const index = this.products.findIndex(p=>p.prodid===productId);
    var product :IProduct;
    if(index == 0 || index >0)
    {
      product = { productName: productName, productDesc: productDesc,prodAddedDate: prodAddedDate}
      this.products[index]= product;
    }

    return of(product);

  }

  deleteProduct(productId: string) {
      const index = this.products.findIndex(p=>p.prodid===productId);
      return of(this.products.splice(index, 1));
  }
}