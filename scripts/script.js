$(document).ready(function () {
  console.log("doc is ready");
 
  let revName; 


  $
    ("#btnGetFacts").click(function (){


      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName); 

      console.log('you clicked the button');
      console.log('from ln 12', generateCoolNameFacts(userName));
      
      $("#coolNameFactsOutput").html(coolFacts);
  


    });


});

function generateCoolNameFacts(userName) {
  let coolFacts = ''; 
  
  coolFacts = nameLength(userName);
  coolFacts += " <h1> " + nameStart(userName) + "</h1>";
  coolFacts += "<h3> " + nameEnd(userName) + "</h3>";
  coolFacts += "<h2>" + hogwartsHouse(userName) + "</h2>"

  console.log("initialized the'm coolFacts variable: " + coolFacts); 

  return coolFacts;
}

function nameLength(name) {
  return "Your name is " + name.length + " letters long!"; 
}

function nameStart(name) {
  return "the first letter of your name is " + name[0];
}

function nameEnd(name) {
  
  let lastIndex = name.length - 1

  return "the last letter of your name is " + name[lastIndex];
}

function hogwartsHouse(name) {
  if (name[0] >= "A" && name[0] <= "F") {
    house="Hufflepuff";
  }
  else if (name[0] >= "G" && name[0]<="M") {
    house="Gryffindor";
  }

  else if (name[0] >="N" && name[0]<="S"){
    house="Slytherin";
  }

  else if (name[0]>="T" && name[0]<="Z"){
    house="Ravenclaw";
  } 

  return "your hogwarts house is " + house;
     
}