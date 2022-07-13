import {GOODS_DATA_SHORTNAMES} from '@/constants'
import {IGoods} from '@/types/goods'
import {IGoodsNamesRes} from '@/types/api'

export function mapGoodsData(data: IGoodsNamesRes): IGoods {
  if (!data) return []

  const {goods, names} = data
  const mappedRes: IGoods = []

    goods.forEach((g) => {
      const groupId = g[GOODS_DATA_SHORTNAMES.GROUP_ID]
      const group = names[groupId]
      
      if (group) {
        const goods = Object.values(group[GOODS_DATA_SHORTNAMES.GOODS]).map((v, i) => {
          return {
            qty: v[GOODS_DATA_SHORTNAMES.GOOD_QTY],
            title: v[GOODS_DATA_SHORTNAMES.GOOD_TITLE],
            id: i
          }
        })
        const price = g[GOODS_DATA_SHORTNAMES.PRICE]

        mappedRes.push({
          group: group[GOODS_DATA_SHORTNAMES.GROUP_TITLE],
          goods,
          price,
          id: groupId
        })
      }
    })

    return mappedRes
}

export function getRandomNumber(min: number, max: number): number {
  const rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}