const fruits: string[] = ["Apple", "Orange", "Mango", "Quava"];

const getLastValue = (fruits: string[]): string => {
    return fruits[fruits.length - 1];
}

const getFirstValue = (fruits: string[]): string => {
    return fruits[0];
}

const findAnItem = (fruits: string[], item: string) : string | null => {
    for(let index= 0; index < fruits.length; index++) {
        if(fruits[index].toLowerCase() == item.toLowerCase()) return fruits[index];
    }
    return null;
}


for(let fruit in fruits) {
    console.log(fruits[fruit])
}

console.log(getLastValue(fruits))
console.log(getFirstValue(fruits))
const item = findAnItem(fruits, "apple");
console.log(item)