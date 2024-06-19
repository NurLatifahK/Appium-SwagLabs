
export function isAscendingProduct(data){
    for (let i = 1; i < data.length; i++) {
        if (data[i - 1] > data[i]) {
            return false
        }
    }
    return true
}

export function isDescendingProduct(data){
    for (let i = 1; i < data.length; i++) {
        if (data[i - 1] < data[i]) {
            return false
        }
    }
    return true
}

export function isAscendingPrice(data){
    let number = data.map(y => Number(y.replace('$', '')))
    for (let i = 1; i < number.length; i++) {
        if (number[i - 1] > number[i]) {
            return false
        }
    }
    return true
}

export function isDescendingPrice(data){
    let number = data.map(y => Number(y.replace('$', '')))
            for (let i = 1; i < number.length; i++) {
                if (number[i - 1] < number[i]) {
                    return false
                }
            }
            return true
}
