var inp = document.getElementById('input');
document.getElementById('%').onclick = function () {
    inp.value += '%';
}

document.getElementById('ac').onclick = function () {
    inp.value = '';
}

document.getElementById('+/-').onclick = function () {
    var k = inp.value;
    if (inp.value[0] != '-') {
        inp.value = '-' + k;
    }
    else {
        inp.value = "";
        for (var key in k) {
            if (key == 0) {
                continue;
            }
            inp.value += k[key];
        }

    }
}

document.getElementById('/').onclick = function () {
    inp.value += '/';
}

document.getElementById('7').onclick = function () {
    inp.value += '7';
}
document.getElementById('8').onclick = function () {
    inp.value += '8';
}
document.getElementById('9').onclick = function () {
    inp.value += '9';
}
document.getElementById('X').onclick = function () {
    inp.value += 'x';
}

document.getElementById('4').onclick = function () {
    inp.value += '4';
}
document.getElementById('5').onclick = function () {
    inp.value += '5';
}
document.getElementById('6').onclick = function () {
    inp.value += '6';
}
document.getElementById('-').onclick = function () {
    inp.value += '-';
}

document.getElementById('1').onclick = function () {
    inp.value += '1';
}
document.getElementById('2').onclick = function () {
    inp.value += '2';
}
document.getElementById('3').onclick = function () {
    inp.value += '3';
}
document.getElementById('+').onclick = function () {
    inp.value += '+';
}

document.getElementById('0').onclick = function () {
    inp.value += '0';
}
document.getElementById('.').onclick = function () {
    inp.value += '.';
}
document.getElementById('=').onclick = function () {
    var k = inp.value, k1 = inp.value;
    var N;
    k = k.split(/[-,+,x,/]/);
    k1 = inp.value.split(/[0-9]/);
    var mas = [];
    var b = 0;
    for (var key in k1) {
        if (k1[key] == '-') {
            mas[b] = '-';
            b++
        }
        else if (k1[key] == '+') {
            mas[b] = '+';
            b++
        }
        else if (k1[key] == '/') {
            mas[b] = '/';
            b++
        }
        else if (k1[key] == 'x') {
            mas[b] = 'x';
            b++
        }
    }
    b = 0;
    if (mas[0] == '-')
        N = Number(k[0] - k[1]);
    else if (mas[0] == 'x')
        N = Number(k[0] * k[1]);
    else if (mas[0] == '/')
        N = Number(k[0] / k[1]);
    else if (mas[0] == '+')
        N = Number(k[0]) + Number(k[1]);
    b = 1
    for (key in k) {
        if (key == 0 || key == 1) {
            continue;
        }
        if (mas[b] == '-')
            N -= Number(k[key]);
        else if (mas[b] == '+')
            N = Number(N)+Number(k[key]);
        else if (mas[b] == 'x')
            N *= Number(k[key]);
        else if (mas[b] == '/')
            N /= Number(k[key]);
    }
    console.log(k);
    console.log(mas);
    inp.value = N;
}
