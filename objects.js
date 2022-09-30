const superhero ={
    name: "Wonder Woman",
    alias: "Diana Prince",
    bracelets: 2,
    lassos:1
}

hero_name = superhero["name"]
number_of_lassos = superhero.lassos

//updating an existing vaiue
superhero.alias = "Princess Diana of Themyscira"

//equivalent
//superhero["alias"] = "Princess Diana of Themyscira"

//adding a new value
superhero.hometown = "Themyscira"

//console.log(superhero)

delete superhero.lassos;
console.log(superhero.lassos);
//undefined because youre asking the computer to call something that has been deleted