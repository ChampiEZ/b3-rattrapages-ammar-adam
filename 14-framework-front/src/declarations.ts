export interface Product {
  uuid: string

  name: string
  description: string
  price: number
  quantity: number
  rating: number[]
  disponibility: boolean
  illustration: string
  expirationDate: Date
  createdAt: Date

  category: Category
}

export type Category = "food" | "drink" | "other" | "all"

export interface App {
  products: Product[]
}