// Our Article type
type Article = {
  title: string;
  price: number;
  vat: number;
  stock?: number;
  description?: string;
};
// Our friend’s ShopItem
interface ShopItem {
  title: string;
  price: number;
  vat: number;
  stock?: number;
  description?: string;
} // And yes, the semicolons are optional

// Implementing Interfaces
class DVD implements ShopItem {
  title: string;
  price: number;
  vat: number;

  constructor(title: string) {
    this.title = title;
    this.price = 9.99;
    this.vat = 0.2;
  }
}

// Implementing Types
class Book implements Article {
  title: string;
  price: number;
  vat: number;
  constructor(title: string) {
    this.title = title;
    this.price = 39;
    this.vat = 0.2;
  }
}
