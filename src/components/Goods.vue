<template>
  <div class="goods">
    <details open>
      <summary>{{item.group}}</summary>

      <div class="row" :class="{'_green': hasChangedPrice, '_red': hasChangedPrice === false}">
        <div class="col-10">
          <div v-for="(good) in item.goods" :key="good.id" class="row">
            <div class="col-7">
              <p>
                {{good.title}}
              </p>
            </div>
            <div class="col-4">
              <button
                v-if="good.qty"
                class="btn btn-success"
                type="button"
                :disabled="checkAvailability(good.id, good.qty)"
                @click.prevent="$emit(`addToCart`, {groupId: item.id, id: good.id})"
                >В корзину</button>
            </div>

            <div class="col-1">
              {{good.qty}}
            </div>

            <hr />
          </div>
        </div>
        <div class="col-2">
          <b class="price">
            {{price}} ₽
          </b>
        </div>
      </div>
    </details>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type { PropType } from 'vue'

import {ICart} from '@/types/cart'
import {IGood} from '@/types/goods'

export default defineComponent({
  name: `Goods`,

  components: {},

  emits: [`addToCart`],

  props: {
    cart: {
      type: Object as PropType<ICart>,
      required: true
    },

    item: {
      type: Object as PropType<IGood>,
      required: true
    },

    exchangeRate: {
      type: Number,
      required: true
    },

    previousExchangeRate: {
      type: Number,
      required: false
    },

    previousPrice: {
      type: Number,
      required: false
    }
  },

  data() {
    return {}
  },

  mounted() {
    this.item
    this.exchangeRate
  },

  computed: {
    price() {
      return Math.floor(this.item.price * this.exchangeRate)
    },

    hasChangedPrice() {
      if (!this.previousPrice || !this.previousExchangeRate) return null
      return this.price > Math.floor(this.previousPrice * this.previousExchangeRate)
    }
  },
  
  methods: {
    checkAvailability(id: number, qty: number) {
      const item = this.cart.items.find((c) => c.id === id && c.groupId === this.item.id)
      if (item && item.qty >= qty) {
        return true
      }

      return false
    }
  },
})
</script>

<style>

.goods {
  height: 100%;
}

._red .price {
  background-color: lightcoral
}

._green .price {
  background-color: lightgreen
}
</style>
