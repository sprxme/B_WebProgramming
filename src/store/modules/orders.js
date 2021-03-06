const state = {
    orders : [
        
    ]
}

const getters = {
    allOrders: (state) => state.orders
}

const actions = {
    updateCart({ commit }, { food, quantity }) {
        const orderItem = { ...food, quantity: quantity}

        if (quantity == 0) {
            commit('removeOrder', orderItem)
        } else {
            commit('updateOrders', orderItem)
        }
    },
    updateNote({ commit }, data) {
        commit('updateNote', data)
    }
}

const mutations = {
    updateOrders: (state, orderItem) => {
        if (state.orders.length == 0) {
            state.orders.push(orderItem)
            return
        }

        const isFound = state.orders.find(order => {
            return order._id == orderItem._id
        })

        // If food not found in orders, push new item
        if (!isFound) {
            state.orders.push(orderItem)
        } else {
            // Otherwise if found, just update the existing order
            state.orders = state.orders.map(order => {
                if (order._id == orderItem._id) {
                    return orderItem
                } else {
                    return order
                }
            })
        }
    },
    removeOrder: (state, orderItem) => {
        state.orders = state.orders.filter(order => {
            return order._id != orderItem._id
        })
    },
    updateNote: (state, data) => {
        state.orders = state.orders.map(order => {
            if (order._id === data.food._id) {
                order.note = data.note
            }
            return order
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}