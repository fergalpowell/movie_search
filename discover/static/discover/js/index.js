document.getElementById("filter-genre").addEventListener("click", function(){
    if(this.firstChild.classList.contains("fa-minus")){
        this.firstChild.classList.remove("fa-minus");
        this.firstChild.classList.add("fa-plus");
        document.getElementById("genres").style.display = "none";
    } else {
        this.firstChild.classList.remove("fa-plus");
        this.firstChild.classList.add("fa-minus");
        document.getElementById("genres").style.display = "flex";
    }
});