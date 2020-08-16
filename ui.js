class UI{
    static addFilmToUI(newFilm){

    const filmList = document.getElementById("films");
    filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
    
    `;



        
    }
    static clearInputs(el1,el2,el3){
        el1.value="";
        el2.value="";
        el3.value="";
    }
    static displayMessages(message,type){
        const cardBody = document.querySelector(".card-body");
        const div = document.createElement("div");
        div.setAttribute("class",`alert alert-${type}`);
        div.innerHTML = message;
        cardBody.appendChild(div);

        setTimeout(function(){
            div.remove();

        },1000); 

    }

    static loadAllFilms(films){
        let filmList = document.querySelector("#films");
        films.forEach(function(film){
            filmList.innerHTML += `
            <tr>
                <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr> 
        
        `;

        });
    }

    static deleteFilmFromUI(element){
        element.parentElement.parentElement.remove();
    }
    static clearAllFilmsFromUi(){
        const filmList = document.querySelector("#films");
        // filmList.innerHTML="";

        while (filmList.firstElementChild !== null ) {

            filmList.firstElementChild.remove(); 
            
        }
    }
    
}