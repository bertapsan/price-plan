const modal = document.getElementById("open-modal");

const buttons = document.querySelectorAll(".modal-open");

const close = document.querySelector(".modal-close");

const form = document.getElementById("form1");

const nombre = document.getElementById("nombre");

const email = document.getElementById("email");

const descPlan = document.getElementById("description-plan");

const imgPlan = document.getElementById("image-plan");

[...buttons].forEach(function(el){
    el.addEventListener("click", function(ev){
        let currentid = ev.target.dataset.id;
        descPlan.innerHTML = mydata[currentid].titulo;
        imgPlan.setAttribute("src", mydata[currentid].imagen.path);
        imgPlan.setAttribute("alt", mydata[currentid].imagen.alt);
        // imgPlan.insertAdjacentHTML("beforeend",`<img src=${mydata[currentid].imagen}>`);
        modal.classList.add("show");
    });
});

close.addEventListener("click", function(ev){
    modal.classList.remove("show");
    modal.classList.remove("response");
    nombre.value = "";
    email.value = "";
});



form.addEventListener("submit", function(ev){
    ev.preventDefault();
    modal.classList.add("response");
    return false;
});

