function listMaker(dico){
    let list ="";
    for(let i of dico){
        list+= `<li class="list-group-item d-flex align-items-center">${i['prenom']} ${i['nom']} <button type="button" class="btn btn-danger ms-auto">X</button></li>`
    };
    return list
};

function listUp(dico){
    let area = document.getElementById("listUsers");
    area.innerHTML = listMaker(dico)
};

async function loadData() {
  try {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();
    console.log(data)
    listUp(data);
  } catch (err) {
    console.error("Erreur :", err);
  }
}


function init(){
    console.log('JS up ')
    loadData();
};
document.addEventListener("DOMContentLoaded",init);
