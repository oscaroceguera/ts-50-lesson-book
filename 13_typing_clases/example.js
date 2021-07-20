class Discount {
    constructor(isPercentage, amount) {
        this.isPercentage = isPercentage;
        this.amount = amount;
    }
    apply(article) {
        if (this.isPercentage) {
            article.price = article.price - article.price * this.amount;
        }
        else {
            article.price = article.price - this.amount;
        }
    }
}
// Adiscount that shaves off 10 EUR
let discount = new Discount(true, 0.2);
discount.apply({
    price: 39,
    vat: 0.2,
    title: "Form Design Patterns",
});
export {};
