function onClick(){
let r=document.getElementById("result");
r.innerHTML='';
let f1 = document.getElementById("kol").value;
let f2 = document.getElementById("price").value;
    if((/\D/.test(f1))|(/\D/.test(f2)))
        {
        alert("!!!Допускаются только цифры: 0-9!!!")
        return ;
        }
r.innerHTML=f1*f2;
}

document.addEventListener('DOMContentLoaded',function(event){
let b = document.getElementById("btn");
b.addEventListener("click", onClick);
});
