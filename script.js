function tambah(a,b){
    console.log("angka 1 : " + a)
    console.log("angka 2 : " + b)
    return a + b;
}
function kurang(a,b){
    console.log("angka 1 : " + a)
    console.log("angka 2 : " + b)
    return a - b;
}
function kali(a,b){
    console.log("angka 1 : " + a)
    console.log("angka 2 : " + b)
    return a * b;
}
function bagi(a,b){
    console.log("angka 1 : " + a)
    console.log("angka 2 : " + b)
    return a / b;
}

let operator = prompt("Masukan Operator : + - * /")
let a= parseInt(prompt("masukan nilai1:"))
let b= parseInt(prompt("masukan nilai2:"))

if(operator == '+'){
    var hasil = tambah(a,b)
    console.log(hasil)
}
if(operator == '-'){
    var hasil = kurang(a,b)
   console.log(hasil)
}
if(operator == '*'){
    var hasil = kali(a,b)
    console.log(hasil)
}
if(operator == '/'){
    var hasil = bagi(a,b)
    console.log(hasil)
}


