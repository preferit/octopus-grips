export const countItems = (cart) => {
    let nbrOfItems = 0
    if (cart && cart.length) {
        for (let i = 0; i < cart.length; i++) {
            nbrOfItems += cart[i].qty
        }
    }
    return nbrOfItems
}

export const countItemsSum = (cart, items) => {
   let total = 0
    if (cart && cart.length) {
        for (let i = 0; i < cart.length; i++) {
            for (let j = 0; j < items.length; j++) {
                if (items[j].id === cart[i].id) {
                    total += items[j].price * items[j].qty
                }
            }
        }
    }
    return total
}
