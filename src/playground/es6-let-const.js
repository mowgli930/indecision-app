var nameVar = 'Rodrigo';
console.log('nameVar', nameVar);

nameVar = 'Not rodrigo';
console.log('nameVar', nameVar);

var nameVar = 'Still not rodrigo';
console.log('nameVar', nameVar);

let nameLet = 'Denisse';
console.log('nameLet', nameLet);

nameLet = 'Not denisse';
console.log('nameLet', nameLet);

const nameConst = 'Leandro';
console.log('nameConst', nameConst);

console.log('petName', getPetName());

function getPetName() {
    var petName = 'tula';
    return petName;
}