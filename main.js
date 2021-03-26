
myCafe = [
    {
        name : "Cafe 1",
        city : "city 1"
    },{
        name : "Cafe 2",
        city : "city 2"
    },{
        name : "Cafe 3",
        city : "city 3"
    },{
        name : "Cafe 4",
        city : "city 4"
    },{
        name : "Cafe 5",
        city : "city 5"
    }
]

localStorage.setItem('cafe', JSON.stringify(myCafe));
let cafe =  JSON.parse(localStorage.getItem(myCafe));
console.log(cafe);