const lagringNokkel = "enkel-teller";

let teller = 0;

function hentTeller() {
    const lagretTeller = Number.parseInt(localStorage.getItem(lagringNokkel), 10);
    return Number.isFinite(lagretTeller) ? lagretTeller : 0;
}

function oppdaterTeller() {
    const tellerElement = document.getElementById("teller");
    if (tellerElement) {
        tellerElement.textContent = String(teller);
    }
}

function visLagretTeller() {
    const lagretElement = document.getElementById("lagret");
    const lagretVerdi = localStorage.getItem(lagringNokkel);

    if (lagretElement) {
        lagretElement.textContent = lagretVerdi !== null ? `Lagret verdi: ${lagretVerdi}` : "Lagret verdi: ingen";
    }
}

function endreTeller(endring) {
    teller += endring;
    oppdaterTeller();
}

function nullstillTeller() {
    teller = 0;
    oppdaterTeller();
}

function load() {
    teller = hentTeller();
    oppdaterTeller();
    visLagretTeller();
}

function save() {
    localStorage.setItem(lagringNokkel, String(teller));
    visLagretTeller();
}

load();
