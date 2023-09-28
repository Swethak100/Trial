const arr = [2, 3, 5];
console.log(arr.every(eleme => eleme >= 2));
console.log(arr.filter(eleme => eleme >= 2));
const array =arr.concat(6,7);
//console.log(array);
array.forEach(ele=>console.log(ele));
console.log(arr.map(x=>x*2));
array.pop();
console.log(array);
array.push(7);
console.log(array);
console.log(array.slice(1,-1));

const obj={
    id:76,
    name:"swe",
};
console.log(obj);
obj.name="swetha";
console.log(obj);

const object=[
    {
        id:23,
        name:"av",
    },
    {
        id:24,
        name:"bv",
    },
];

console.log(object[1]);
object.forEach(i=>{
    console.log("id:",i.id);
});

const st=object.map(ij=>ij.name);
console.log(st);