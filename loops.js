let toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]
function VideoGames(chores){
    let numberOfChores = chores.length;

    if (numberOfChores < 3){
        console.log("You can go play some video video games!");
     } else {
        console.log("No games! Do some chores")
     }

 }

 VideoGames(toDoList)