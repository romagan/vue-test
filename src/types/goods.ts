export type IGood = {
  group: string
  id: number
  price: number
  goods: IGoodItem[]
}

export type IGoods = IGood[]

export type IGoodItem = {
  qty: number
  title: string
  id: number
}