# Sorting Hat Project

# Overview

My goal for this project was to create a program that could Create cards on the DOM that had a random "sorting" of attributes for each object. I am not a big Harry Potter fan
so to amuse myself I instead chose to use 1930's Louisiana state politics as the theme. Instead of Voldy it was meant to have Huey Long, a popular and wildly corrupt Governor. 

Each "Political Actor" Would have one of four Political Positions and Political Affiliations that would be randomly assigned after creation. When the delete button is to be pressed 
this would have been represented as "Patronizing" meaning that the political actor had been bribed, blackmailed, extorted ... etc into Huey Long's Patron Client network something he was notorius for doing in real Life. 

I was able to finish the following:
1. Can create new cards on DOM from a form that the user enters info into. Each card is then randomly assigned a political position and affiliation. This is my version of the "Sorting" of the sorting hat.
2. Can delete a card off the DOM by removing it from the array and updating the DOM.

# Build Status

Here is what I failed to do:
1. Styling, I simply gave up on all styling until i could have MVP.
2. The delete function works fine but something about the way I set the loop makes the Creation of New Political Actors to make more than one. If I comment out the delete function it works correctly but I ran out of time. 

# The things I have Learned and the Friends I have made along the way.
1. I think I finally understand how functions and Pass By Reference are used in coding to have elegant solutions to CRUD problems. An example of this is how i needed to figure out how to diferentiate the "Houses". I accomplished that by using the Math.Random() method to randomly pick the index of an array containg the four possible Political Affiliations(houses).

//these two arrays will be used to choose an affiliation and position when creating the Cards
const affiliationType = ["Dixie-Crat","New Dealer","Populist","Old Establishment"]
const positionType = ["City Councilor","Fire Chief","County Surveyor","State Senator"]

const createNewPols = (newPol) => {

    newPol.preventDefault();
    //the actual new Card
    const newPolObj = {
      id: politicalActors.length + 1,
      affiliation: affiliationType[Math.floor(Math.random()*4)],
      image: document.querySelector("#image").value,
      name: document.querySelector("#name").value,
      position: positionType[Math.floor(Math.random()*4)]
    }

    politicalActors.push(newPolObj);
    polActOnDom(politicalActors);
    form.reset();

  }

  # Loom Link
  https://www.loom.com/share/d49437470a3d4f59b87f2c3f61668a13?sid=bb9554db-c2c5-412c-90ea-b0a1e6d5cc42
