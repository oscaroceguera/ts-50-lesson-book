"use strict";
// TODO: Remplazando any por unknow
let deliveryAddresses2 = [
    "Linares 123",
    "Belisario 301",
    "Lago huron 20",
];
/*
  unknown should make you cautious: we have to provide a proper control flow to ensure type safety.
  Let’s see what happens when we change any to unknown:
*/
// function selectDeliveryAddress2(addressOrIndex2: unknown): string {
//   if (
//     typeof addressOrIndex2 === "number" &&
//     addressOrIndex2 < deliveryAddresses2.length
//   ) {
//     return deliveryAddresses2[addressOrIndex2];
//   }
//   /*
//     Boom! This is exactly what we want: “Type number is not assignable to type string.”
//     We must do type checks and trigger control flow analysis; otherwise,
//     TypeScript will throw an error!
//   */
//   return addressOrIndex2;
// }
function selectDeliveryAddress2(addressOrIndex2) {
    if (typeof addressOrIndex2 === "number" &&
        addressOrIndex2 < deliveryAddresses2.length) {
        return deliveryAddresses2[addressOrIndex2];
    }
    else if (typeof addressOrIndex2 === "string") {
        return addressOrIndex2;
    }
    return "";
}
const myFavoriteAddress2 = selectDeliveryAddress2(true);
// retorna true; por eso any es fragil y aumenta la equivocacion; hay que evitar any a toda costa
console.log("🚀 ~ file: example.ts ~ line 19 ~ myFavoriteAddress", myFavoriteAddress2);
