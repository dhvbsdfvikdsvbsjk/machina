let n = document.querySelector('.i');
let e = document.querySelector('.ii');
let a = document.querySelector('.iii');
let iop = document.querySelector('.kalik');
let button = document.querySelector('button');



document.getElementById("vvv").onclick = function () {
    var e1 = n.value;
    var e2 = e.value;
    var e3 = a.value;
    var aaa;
    if(Math.sign(e1) === 1,Math.sign(e2) === 1,Math.sign(e3) === 1){
        aaa = n / 100 
        aaa = aaa * a; 
        alert('Поездка обойдется в ' + (iop.innerHTML =  (e1 / 100) * e3) + ' рублей');
    }else{
        alert("Введите данные");
    }
}
document.getElementById("takeva").onclick = function() {
    document.getElementById("l").value = "";
    document.getElementById("ll").value = "";
    document.getElementById("lll").value = "";

}
