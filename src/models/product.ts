export class Product implements IProduct {
    constructor(
      public prodid: string,
      public productName: string,
      public productDesc: string,
      public prodAddedDate: string,
    ) {}
  }
  
  
  export interface IProduct{
    prodid?: string | null;
    productName?: string;
    productDesc?:string;
    prodAddedDate?:string
  
  }
  