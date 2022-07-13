import {GOODS_DATA_SHORTNAMES} from '@/constants'

export type INamesRes = {
  [key: number]: {
    [GOODS_DATA_SHORTNAMES.GOODS]: {
      [key: number]: {
        [GOODS_DATA_SHORTNAMES.GOOD_TITLE]: string
        [GOODS_DATA_SHORTNAMES.GOOD_QTY]: number
      }
    }
    [GOODS_DATA_SHORTNAMES.GROUP_TITLE]: string
  }
}

export type IGoodsDataRes = {
  Error: string
  Id: number
  Success: boolean
  Value: {
    Goods: IGoodDataList
  }
}

type IGoodDataItem = {
  [GOODS_DATA_SHORTNAMES.GOODS]: boolean
  [GOODS_DATA_SHORTNAMES.PRICE]: number
  CV: null
  [GOODS_DATA_SHORTNAMES.GROUP_ID]: number
  P: number
  Pl: null
  [GOODS_DATA_SHORTNAMES.GOOD_QTY]: number
}

export type IGoodDataList = IGoodDataItem[]

export type IGoodsNamesRes = {
  goods: IGoodDataList
  names: INamesRes
} | null