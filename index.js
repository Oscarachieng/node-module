const rect = {
    perimeter: (x,y) => 2*(x + y),
    area: (x,y) => x * y
}

const solvRect = (m,n) => {
    if (m <= 0 || n <= 0) {
        return `${m} and ${n} must be greater than zero`
    } else {
        return `Area is ${rect.area(m,n)} while perimeter is ${rect.perimeter(m,n)}`
    }
}

console.log(solvRect(2,5))
console.log(solvRect(0,5))
console.log(solvRect(300,200))