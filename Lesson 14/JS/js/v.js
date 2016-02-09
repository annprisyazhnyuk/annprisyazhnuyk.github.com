function showResult(name) {
    var field = document.calc.display.value;
    if (field > 0) {
        var showValue = field.toString() + name.toString();
        document.calc.display.value = showValue;
    } else {
        document.calc.display.value = name;
    }
}

function reset() {
    document.calc.display.value = 0;
    document.calc.operation.value = 0;
    document.calc.memory.value = 0;
}


function sign(sig) {
    var result = Number(document.getElementById('memory').value);

    if (document.calc.operation.value == 0) {
        document.getElementById('memory').value = document.calc.display.value;
    } else {
        if (document.getElementById('operation').value == '+') {
            document.getElementById('memory').value = result + Number(document.calc.display.value);
        }
        if (document.getElementById('operation').value == '-') {
            document.getElementById('memory').value = result - Number(document.calc.display.value);
        }
        if (document.getElementById('operation').value == '*') {
            document.getElementById('memory').value = result * Number(document.calc.display.value);
        }
        if (document.getElementById('operation').value == '/') {
            document.getElementById('memory').value = result / Number(document.calc.display.value);
        }
    }
    var memoryOperation = sig.toString();
    document.getElementById('operation').value = memoryOperation;
    document.calc.display.value = 0;
}


function equally() {
    if (document.calc.operation.value == 0) {
        var field = document.calc.display.value;
    } else {
        if (document.getElementById('operation').value == '+') {
            field = Number(document.getElementById('memory').value) + Number(document.calc.display.value);
        }
        if (document.getElementById('operation').value == '-') {
            field = Number(document.getElementById('memory').value) - Number(document.calc.display.value);
        }
        if (document.getElementById('operation').value == '*') {
            field = Number(document.getElementById('memory').value) * Number(document.calc.display.value);
        }
        if (document.getElementById('operation').value == '/') {
            field = Number(document.getElementById('memory').value) / Number(document.calc.display.value);
        }
    }
    document.calc.display.value = field;
    document.getElementById('operation').value = 0;
    document.getElementById('memory').value = 0;
}