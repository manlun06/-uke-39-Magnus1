let teller = 0;

function oppdaterTeller() {
    const tellerElement = document.getElementById("teller");
    if (tellerElement) {
        tellerElement.textContent = teller;
    }
}

function pluss() {
    teller = teller + 1;
    oppdaterTeller();
}

function minus() {
    teller = teller - 1;
    oppdaterTeller();
}

function nullstill() {
    teller = 0;
    oppdaterTeller();
}

function save() {
    const lagretElement = document.getElementById("lagret");
    if (lagretElement) {
        const tellerString = teller + " - ";
        lagretElement.textContent += (lagretElement.textContent ? " " : "") + tellerString;
    }
    nullstill();
}











