const response=[
    {
        key1:{
            test:1,
            id:001,
            name:"test",
        },
        demo1:[1,2,3,4,5],
        demo2:[
            {
                id:11,
                name:"a",
            },
            {
                id:12,
                name:"b",
            },
        ],
        demo3:{
            id:100,
            name:"am",
        },
        total:20,
        company:"dumeel",
        partner:"nan than",
    },
];
//console.log(response);
let st; 
response.forEach((ele) => {
  st = ele;
});
console.log(st);

response.forEach((element) => {
    element.demo2.forEach((item) => {
      console.log(item.id);
    });
  });

  //callback function
  function greet(callback,name) {
    console.log(`Hello, ${name}!`);
    callback(); 
  }
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  greet(sayGoodbye,"Swe");
  

  function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); 
  }
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  greet("John", sayGoodbye);
  