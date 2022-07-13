<template>
  <div v-if="cart.items.length" class="cart">
    <h1>Корзина</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Название</th>
          <th scope="col">Кол-во</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart.items" :key="item.id">
          <td>{{item.title}}</td>
          <td>{{item.qty}}</td>
          <td>{{Math.floor(item.price * exchangeRate)}} ₽</td>
          <td>
            <button class="btn btn-danger" type="button" @click.prevent="$emit(`removeFromCart`, item.id)">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p class="total">
      <b>
        Total: {{Math.floor(total * exchangeRate)}} ₽
      </b>
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type { PropType } from 'vue'

import {ICart} from '@/types/cart'

export default defineComponent({
  name: `Cart`,

  components: {},

  emits: [`removeFromCart`],

  props: {
    cart: {
      type: Object as PropType<ICart>,
      required: true
    },

    exchangeRate: {
      type: Number,
      required: true
    }
  },

  data() {
    return {}
  },

  computed: {
    total() {
      return this.cart.items.reduce((acc, val) => acc + val.price * val.qty, 0)
    }
  },
  
  methods: {},
})
</script>
