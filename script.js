
function qtosdias() {
    let dias = document.getElementById("a").value;
    let passport = document.getElementById("b").value;
    let mochil = document.getElementById("c").value;
    let passag = document.getElementById("d").value;

    if(passport == 'não'){
        passport = 253;
    }
    else {
        passport = 0;
    }

    if(mochil == 'não'){
        mochil = 200;
    }else {
        mochil = 0;
    }

    if(passag == 'sim'){
        passag = 2000;
    }else {
        passag = 3000;
    }

    let total = ((dias * 100) + (dias * 60) + passport + mochil + passag);

    if (document.getElementById("dot-1").checked){
        total = total * 0.8;
    }

    if (document.getElementById("dot-2").checked){
        total = total * 1.1;
    }

    if (document.getElementById("dot-3").checked){
        total = total * 1.4;
    }

    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('A viagem vai custar: ' + total);
    h1.setAttribute('id', 'qtosdias');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
