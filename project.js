const form= document.getElementById("film-form");
const titleElement= document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");  
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");


 
eventListener();

function eventListener(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);



    });
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);



}



function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    

    if(title === "" || url === "" || director ==="" ){
        UI.displayMessages("Bos input olmaz","danger");
        


    }
    else{

        const newFilm = new Film(title,director,url);
        UI.addFilmToUI(newFilm);
        UI.clearInputs(titleElement,directorElement,urlElement);
        Storage.addFilmToStorage(newFilm);
        UI.displayMessages("Film elave olundu...","success");

         


    }
    
    
    e.preventDefault();


    
}


function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
    }
}

function clearAllFilms(){
    UI.clearAllFilmsFromUi();
    Storage.clearAllFilmsFromStorage();
}