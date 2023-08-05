const fulimgbox = document.getElementById("fulimgbox"),
fulimg = document.getElementById("fulimg");

function closeImg(){
    fulimgbox.style.display = "none";
}

function openfulimg(reference){
    fulimgbox.style.display = "flex";
    fulimg.src = reference
}