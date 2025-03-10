function boton() {

   let a = document.getElementById("activo");
   let b = document.getElementById("inactivo");
  

   if (a.style.display == "none") {
    a.style.display = "grid";
    b.style.display = "none";
   }else {
    a.style.display = "none";
    b.style.display = "grid";
   }

}
