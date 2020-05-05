function writeInReverse(str) {
    const reverse = str.split('').reverse().join('');
    console.log(reverse);
}


function add(a, b) {
    return a + b;
}

function writeWithStars(str) {
    console.log(`***${str}***`);
}

export default writeWithStars;

export { writeInReverse, add };