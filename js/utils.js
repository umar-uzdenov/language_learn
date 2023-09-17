function query(selector) {
    return document.querySelector(selector)
}

function  queryAll(selector) {
    return [...document.querySelectorAll(selector)]
}

Node.prototype.query = function(selector) {
    return this.querySelector(selector)
}

Node.prototype.queryAll = function(selector) {
    return this.querySelectorAll(selector)
}

function range(first, last, step = 1) {
    const result = []
    for (let index = first; index <= last; index += step) {
        result.push(index)
    }
    return result
}