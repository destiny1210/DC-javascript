const toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]

const numberOfChores = toDoList.length;

for (var i=0; i <  numberOfChores; i++) {
    toDoList.pop();
}

console.log(toDoList)