const vr1 = document.getElementById("vr-box-1");
const vr2 = document.getElementById("vr-box-2");
const pv1 = document.getElementById("pv-box-1");
const pv2 = document.getElementById("pv-box-2");
if(window.outerWidth <= 991){
    vr1.classList.add("u-palette-1-dark-1");
    vr2.classList.add("u-palette-1-dark-1");
    if(pv1.classList.contains("u-palette-1-dark-1")){
        pv1.classList.remove("u-palette-1-dark-1")
    }
    if(pv2.classList.contains("u-palette-1-dark-1")){
        pv2.classList.remove("u-palette-1-dark-1")
    }
}else{
    pv1.classList.add("u-palette-1-dark-1");
    pv2.classList.add("u-palette-1-dark-1");
    if(vr1.classList.contains("u-palette-1-dark-1")){
        vr1.classList.remove("u-palette-1-dark-1")
    }
    if(vr2.classList.contains("u-palette-1-dark-1")){
        vr2.classList.remove("u-palette-1-dark-1")
    }
}