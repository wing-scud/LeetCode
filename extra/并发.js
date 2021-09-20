

const array = [];
const limitNumber = 3;
let i = 3;
function getPromise(index) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { console.log("pop", index); console.log("array", array.length); resolve(true) }, 1000 * Math.random() * 2)
    }).then(() => { limit(index) })
}
function limit(index) {
    if (i < 10) {
        array.splice(index, 1)
        array.push(getPromise(i++))
    } else {
        Promise.allSettled(array).then(() => {
            console.log("over")
        })
    }
}
array.push(getPromise(0), getPromise(1), getPromise(2))


