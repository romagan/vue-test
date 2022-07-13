<template>
  <div v-if="goods.length" class="row">
    <div v-for="(good, i) in goods" class="col col-xl-6" :key="good.id">
      <c-goods
        :item="good"
        :cart="cart"
        :exchangeRate="exchangeRate"
        :previousExchangeRate="previousExchangeRate"
        :previousPrice="previousGoods[i]?.price"
        @addToCart="addToCart"
      />
    </div>
  </div>

  <c-cart
    :cart="cart"
    :exchangeRate="exchangeRate"
    @removeFromCart="removeFromCart"
  />
</template>

<script lang="ts">
import {defineComponent} from 'vue'

import CGoods from '@/components/Goods.vue'
import CCart from '@/components/Cart.vue'
import {mapGoodsData, getRandomNumber} from '@/utils'
import {IGoods} from '@/types/goods'
import {ICart, ICartItem} from '@/types/cart'
import {INamesRes} from '@/types/api'
import api from '@/api/api'

const UPDATE_TIME = 15000

type IData = {
  previousGoods: IGoods
  previousExchangeRate: number
  goods: IGoods
  cart: ICart
  exchangeRate: number
  names: INamesRes
  interval: number | null
}

export default defineComponent({
  name: `Main`,

  components: {
    CGoods,
    CCart,
  },

  data(): IData {
    return {
      previousGoods: [],
      previousExchangeRate: 0,
      goods: [],
      cart: {
        items: [],
        total: 0,
      },
      exchangeRate: getRandomNumber(20, 80),
      names: [],
      interval: null
    }
  },

  computed: {},

  async mounted() {
    await this.getData()

    this.interval = setInterval(this.updateData, UPDATE_TIME)
  },

  beforeUnmount() {
    clearInterval(this.interval as number)
    this.interval = null
  },

  methods: {
    addToCart(data: {groupId: number; id: number}) {
      const {groupId, id} = data

      const group = this.goods.find((g) => g.id === groupId)
      const good = group?.goods.find((g) => g.id === id)

      if (!good || !group) return

      const isAddedIdx = this.cart.items.findIndex((c) => c.id === id && c.groupId === groupId)

      if (isAddedIdx !== -1) {
        this.cart.items[isAddedIdx].qty++
      } else {
        this.cart.items.push({
          title: good.title,
          id: good.id,
          qty: 1,
          price: group.price,
          groupId: group.id
        })
      }
    },

    removeFromCart(id: number) {
      this.cart.items = this.cart.items.filter((c) => c.id !== id)
    },

    async getData() {
      try {
        const res = await api.getGoods()

        if (res) {
          this.names = res.names
          this.goods = mapGoodsData(res)
        }
      } catch (err: any) {
        console.warn(err.message)
      }
    },

    async updateData() {
      try {
        const res = await api.getData()

        if (res) {
          this.previousGoods = this.goods.slice()
          this.goods = mapGoodsData({names: this.names, goods: res.Value.Goods})
          this.cart.items = this.cart.items.map((c) => {
            const item = this.goods.find((g) => g.id === c.groupId)
            const res = {
              ...c
            }

            if (item) {
              res.price = item.price
            }
            
            return res
          })
        }

        this.previousExchangeRate = this.exchangeRate
        this.exchangeRate = getRandomNumber(20, 80)
      } catch (err: any) {
        console.warn(err.message)
      }
    }
  },
})
</script>
