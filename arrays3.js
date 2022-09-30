const toDo = ['pet the cat', 'feed the cat'];

function printtoDo(toDoArray){
    const howMany = toDoArray.length;
    if (howMany === 0) {
        console.log('All Done!!!');
    } else if (howMany === 1) { 
        console.log(`You have ${howMany} thing left to do!`);
    } else {
    console.log(`You have ${howMany} things left to do!!`);
   
    }
}
