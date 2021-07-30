"use strict";
// TODO: El problema de any
let deliveryAddresses = [
    "Linares 123",
    "Belisario 301",
    "Lago huron 20",
];
function selectDeliveryAddress(addressOrIndex) {
    if (typeof addressOrIndex === "number" &&
        addressOrIndex < deliveryAddresses.length) {
        return deliveryAddresses[addressOrIndex];
    }
    return addressOrIndex;
}
const myFavoriteAddress = selectDeliveryAddress(true);
// retorna true; por eso any es fragil y aumenta la equivocacion; hay que evitar any a toda costa
console.log("🚀 ~ file: example.ts ~ line 19 ~ myFavoriteAddress", myFavoriteAddress);
