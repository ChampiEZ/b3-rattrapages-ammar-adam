import { App } from "./declarations";

export const appMock: App = {
  products: [
    {
      uuid: crypto.randomUUID(),
      name: "string",
      description: "string",
      price: 5,
      quantity: 5,
      rating: [1,2,3],
      disponibility: true,
      illustration: "https://picsum.photos/48/48?a=1",
      expirationDate: new Date(),
      createdAt: new Date(),
      category: "drink"
    },
    {
      uuid: crypto.randomUUID(),
      name: "string",
      description: "string",
      price: 5,
      quantity: 5,
      rating: [0,0,5,5],
      disponibility: true,
      illustration: "https://picsum.photos/48/48?a=2",
      expirationDate: new Date(),
      createdAt: new Date(),
      category: "food"
    },
    {
      uuid: crypto.randomUUID(),
      name: "string",
      description: "string",
      price: 5,
      quantity: 5,
      rating: [1],
      disponibility: true,
      illustration: "https://picsum.photos/48/48?a=3",
      expirationDate: new Date(),
      createdAt: new Date(),
      category: "other"
    }
  ]
}