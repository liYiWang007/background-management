import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {// 存储数据
        products: [
            { name: "马云", price: 200 },
            { name: "马冬梅", price: 100 },
            { name: "马化腾", price: 40 },
            { name: "沈腾", price: 10 }
        ]
    },
    getters: {// 获取数据
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
    },
    mutations: { // 调用方法 通过store commit
        reducePrice:state=> {//调用getters里的state
            // 写在store里引入state里的数据不需要加this.$store
            state.products.forEach(product => {
                product.price -= 1
            });
        }

    }
})