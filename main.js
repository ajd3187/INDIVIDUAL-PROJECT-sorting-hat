const politicalActors = [

  {
    id: 1,
  affiliation: "Dixie-Crat",
  image: "https://images.app.goo.gl/VU1kuSrTUhnRpgMo6",
  name: "O'zeal Gatan",
  position: "City Councilor"
  },

  {
    id: 2,
  affiliation: "New Dealer",
  image: "https://images.app.goo.gl/VU1kuSrTUhnRpgMo6",
  name: "Dennis McGee",
  position: "Fire Chief"
  },

  {
    id: 3,
  affiliation: "Populist",
  image: "https://images.app.goo.gl/VU1kuSrTUhnRpgMo6",
  name: "Joel Tibideaux",
  position: "County Surveyor"
  },
  
  {
    id: 4,
  affiliation: "Old Establishment",
  image: "https://images.app.goo.gl/VU1kuSrTUhnRpgMo6",
  name: "Tom Jones",
  position: "State Senator"
  }


]

//these two arrays will be used to choose an affiliation and position when creating the Cards
const affiliationType = ["Dixie-Crat","New Dealer","Populist","Old Establishment"]
const positionType = ["City Councilor","Fire Chief","County Surveyor","State Senator"]
//this is the render to the DOM function used to put 
//Political Actor cards into the index.html

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}

//this will pass an array to put the code into the html body

const polActOnDom = (array) =>  {
  //This is the variable used to hold the Card HTML to be put on DOM
  let domString = "";

  //the loop to put all cards on DOM
  for (const polAct of array) {
    domString +=  `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${polAct.name}</h5>
      <p class="card-text">${polAct.affiliation}</p>
    </div>
    <div class="card-body">
    <img src = ${polAct.image} class = "pet-img" alt = ${polAct.name}>
    <p class = "card-position">${polAct.position}</p >
    <button class="btn btn-danger" id="delete--${polAct.id}">Patronize</button>
    </div>
  </div>`;
  }

  //variable to target the form div
  const form = document.querySelector('form');

  //this function will create a new Political Actor with values pulled by the forms on Index.HTML

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

  form.addEventListener('submit', createNewPols);

  renderToDom("#app", domString);
  
}//end of polActOnDOm

//Delete an actor

const app = document.querySelector("#app");

app.addEventListener('click', (x) => {

  if (x.target.id.includes("delete")) {
   
    const [, id] = x.target.id.split("--");
    const index = politicalActors.findIndex(x => x.id === Number(id));

    // .splice modifies the original array
    politicalActors.splice(index, 1);

// 5. Repaint the DOM with the updated array
    polActOnDom(politicalActors);

    


  }
});

const startApp = () => {
  polActOnDom(politicalActors);
  // events(); // ALWAYS LAST
}

//"Every Man an Engineer" LETS GOOOO
startApp();
