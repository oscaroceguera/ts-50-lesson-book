import { Article } from "./article";

class Discount {
  isPercentage: boolean;
  amount: number;

  constructor(isPercentage: boolean, amount: number) {
    this.isPercentage = isPercentage;
    this.amount = amount;
  }

  apply(article: Article) {
    if (this.isPercentage) {
      article.price = article.price - article.price * this.amount;
    } else {
      article.price = article.price - this.amount;
    }
  }
}

type DiscountType = {
  isPercentage: boolean;
  amount: number;
  apply(article: Article): void;
};

// Adiscount that shaves off 10 EUR
let discount: DiscountType = new Discount(true, 0.2);
discount.apply({
  price: 39,
  vat: 0.2,
  title: "Form Design Patterns",
});

// Extending classes
class TwentyPercentDiscount extends Discount {
  // no especial constructor
  constructor() {
    //  but we call the duper constructor of Discount
    super(true, 0.2);
  }

  apply(article: Article) {
    if (this.isValidForDiscount(article)) {
      super.apply(article);
    }
  }

  isValidForDiscount(article: Article) {
    return article.price <= 40;
  }
}

let disco1: Discount = new TwentyPercentDiscount(); // ok

// Error! we miss the `isValidForDiscount` method
let disco2: TwentyPercentDiscount = new Discount(true, 0.3);
