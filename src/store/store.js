import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: [
            { name: "马云", price: 200 },
            { name: "马冬梅", price: 100 },
            { name: "马化腾", price: 40 },
            { name: "沈腾", price: 10 }
        ]
    },
    getters: {
        saleProducts: (state) => {
            // 写在store里引入state里的数据不需要加this.$store
            // const saleProducts = this.$store.state.products.map(product => {
            const saleProducts = state.products.map(product => {
                return {
                    name: `** ${product.name}**`,
                    price: product.price - 1
                }
            })
            return saleProducts
        }
    }
})