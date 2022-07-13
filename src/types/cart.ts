export type ICart = {
  items: ICartList
  total: number
}
export type ICartItem = {
  id: number
  title: string
  qty: number
  price: number
  groupId: number
}
export type ICartList = ICartItem[]