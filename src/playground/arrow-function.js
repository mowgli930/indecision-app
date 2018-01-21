const square = function(x) {
    return x * x;
};

const squareArrow = (x) => x * x;

console.log(squareArrow(9));


const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
};

const fullName = 'Mike Ehrmantraut';
console.log('full name: ', fullName);
console.log('first name: ', getFirstName(fullName));