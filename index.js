const returnFirstTwoDrivers = function () {
     return ['Antonia', 'Nuru'];
}

const returnLastTwoDrivers = function(){
    return ['Amari','Mo'];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
 
}
const fareQuadrupled = createFareMultiplier(2)
console.log(fareQuadrupled)(4);


function createFareMultiplier (multiplier){
    return function (fare) {
        return fare * multiplier;
    };
}
function fareDoubler(fare) {
 const doubler = createFareMultiplier (2);
 return doubler(fare);


}
console.log (doubleFare(10));

function createFareMultiplier (multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}

function fareTripler (fare) {
const tripler = createFareMultiplier(3);
return tripler (fare);
}
console.log(fareTripler(6));


function FirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

function LastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

function selectDifferentDrivers(drivers, returnDriversFunction) {
    return returnDriversFunction(drivers);
}

const drivers = ['Antonia', 'Nuru', 'Amari', 'Moe'];
console.log(selectDifferentDrivers(drivers, FirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, LastTwoDrivers));