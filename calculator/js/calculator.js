function init() {
    var num = document.getElementById("num");
    num.value = 0;
    num.disabled = "disabled";

    var oButton = document.getElementsByTagName("input");
    var t = 0;
    var ch = "";
    for (var i = 0; i < oButton.length; i++) {
        oButton[i].onclick = function() {
            var btnValue = this.value;
            if (Number(btnValue) || btnValue == "0") {
                if (isNull(num.value)) {
                    num.value = btnValue;
                } else {
                    num.value += btnValue;
                }
            } else {
                switch (btnValue) {
                    case '+':
                        t = Number(num.value);
                        num.value = 0;
                        ch = "+";
                        break;
                    case '-':
                        t = Number(num.value);
                        num.value = 0;
                        ch = "-";
                        break;
                    case '*':
                        t = Number(num.value);
                        num.value = 0;
                        ch = "*";
                        break;
                    case '/':
                        t = Number(num.value);
                        num.value = 0;
                        ch = "/";
                        break;
                    case 'C':
                        num.value = 0;
                        break;
                    case '⬅':
                        num.value = backOff(num.value);
                        break;
                    case '.':
                        num.value = point(num.value);
                        break;
                    case "+/-":
                        num.value = parseFloat(num.value) * -1;
                        break;
                    case '=':
                        var ans = Number(num.value);
                        switch (ch) {
                            case "+":
                                num.value = t + ans;
                                break;
                            case "-":
                                num.value = t - ans;
                                break;
                            case "*":
                                num.value = t * ans;
                                break;
                            case "/":
                                if (ans == 0) {
                                    alert("除数不能为零");
                                }
                                num.value = t / ans;
                                console.log(num.value);
                                break;
                        }
                        break;
                }
            }
        }
    }

}

function isNull(n) {
    if (n == "0" | n.length == 0) {
        return true;
    } else {
        return false;
    }
}

function backOff(value) {
    if (value.length == 1 || value == "0") {
        value = "0";
    } else {
        value = value.substring(0, value.length - 1);
    }
    return value;
}

function point(value) {
    if (value.indexOf('.') == -1) {
        value += '.';
    }
    console.log(value);
    return value;
}

$('#href').click(function() {
    window.location.href = "https://class.imooc.com/";
})

// $('#n1').click(function() {
//     var num = document.getElementById("num");
//     if (num.value == "0") {
//         num.value = "";
//     }
//     num.value += "1";
// })


//这样做很傻，初学者可以用，开发利用不高
// function num_1_click() {

//     var num = document.getElementById("num");
//     if (num.value == "0") {
//         num.value = "";
//     }
//     num.value += "1