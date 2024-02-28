var Lp = 0;

function send() {
    // Lp               

    var cell = document.createElement("td");
    cell.id = ("a" + Lp);
    cell.classList.add("lp");
    var tekstKomorki = document.createTextNode(Lp);
    cell.appendChild(tekstKomorki);
    var start = document.getElementById("start");
    start.appendChild(cell);

    let Dzialanie = document.getElementById("Dzialanie").value;


    var cell = document.createElement("td");
    cell.id = ("Dzialanie" + Lp);
    cell.innerHTML = Dzialanie;
    var start = document.getElementById("start");
    start.appendChild(cell);

    let Odpowiedzialny = document.getElementById("Data").value;

    var cell = document.createElement("td");
    cell.id = ("Odpowiedzialny" + Lp);
    var tekstKomorki = document.createTextNode(Odpowiedzialny);
    cell.appendChild(tekstKomorki);
    var start = document.getElementById("start");
    start.appendChild(cell);

    let Data = document.getElementById("Odpowiedzialny").value;


    var cell = document.createElement("td");
    cell.id = ("Data" + Lp);
    var tekstKomorki = document.createTextNode(Data);
    cell.appendChild(tekstKomorki);
    var start = document.getElementById("start");
    start.appendChild(cell);

    let Stan = document.getElementById("Stan").value;



    var cell = document.createElement("td");
    cell.id = ("Stan" + Lp);
    var tekstKomorki = document.createTextNode(Stan);
    cell.appendChild(tekstKomorki);
    var start = document.getElementById("start");
    start.appendChild(cell);


    var cell = document.createElement("button");
    cell.id = ("edit" + Lp);
    cell.innerHTML = "Edit";
    cell.classList.add("customButton");
    cell.onclick = function () {
        editKomorke(this.id);
    }; // dodaj funkcje o parametrze id buttona
    start.appendChild(cell); // total hours wasted here: 4 VICTORY !!!!!!!


    var cell = document.createElement("button");
    cell.id = ("delete" + Lp);
    cell.innerHTML = "Delete";
    cell.classList.add("customButton");
    cell.addEventListener('click', function () {
        usunKomorke(this.id);
    }); // sdgdfgdf
    start.appendChild(cell);



    var cell = document.createElement("tr");
    cell.id = ("tr" + Lp);
    start.appendChild(cell);

    Lp += 1;
}

function edit(i) {
    LpEdit = document.getElementById("LpEdit").value;
    document.getElementById(("Dzialanie" + LpEdit)).innerHTML = document.getElementById("DzialanieEdit").value;
    document.getElementById(("Odpowiedzialny" + (document.getElementById("LpEdit").value))).innerHTML = document
        .getElementById("OdpowiedzialnyEdit").value;
    document.getElementById(("Data" + (document.getElementById("LpEdit").value))).innerHTML = document
        .getElementById("DataEdit").value;
    document.getElementById(("Stan" + (document.getElementById("LpEdit").value))).innerHTML = document
        .getElementById("StanEdit").value;
    if (alerts) {
        alert("Pomyslnie wyedytowano rzad " + LpEdit);
    }
}

function editKomorke(i) {

    for (var tmpedit = -1; !isNaN(i.slice(tmpedit)); tmpedit--) {}
    LpEdit = i.slice(tmpedit + 1);


    //Dzialanie
    tmp = (document.getElementById(("Dzialanie" + LpEdit)).innerHTML);
    tmpObject = document.getElementById(("Dzialanie" + LpEdit)).parentNode;
    tmpObject.removeChild(document.getElementById("Dzialanie" + LpEdit));

    var insertcell = document.createElement("td");

    var insertObjectTD = document.createElement("td");
    var insertObject = document.createElement("input");

    insertObject.classList.add("tdInputClass");
    insertObjectTD.appendChild(insertObject)
    insertcell.appendChild(insertObjectTD);

    insertcell.id = ("Dzialanie" + parseInt(LpEdit));
    insertObject.value = tmp;
    insertObject.id = ("DzialanieInput" + LpEdit);

    // dodaje element tekstowy w miejsce komorki
    insertcell = tmpObject.insertBefore(insertcell, document.getElementById("Odpowiedzialny" + LpEdit));


    //Odpowiedzialny
    tmp = (document.getElementById(("Odpowiedzialny" + LpEdit)).innerHTML);
    tmpObject = document.getElementById(("Odpowiedzialny" + LpEdit)).parentNode;
    tmpObject.removeChild(document.getElementById("Odpowiedzialny" + LpEdit));

    var insertcell = document.createElement("td");

    var insertObject = document.createElement("input");
    insertcell.appendChild(insertObject);

    insertcell.id = ("Odpowiedzialny" + (LpEdit));
    insertObject.value = tmp;
    insertObject.id = ("OdpowiedzialnyInput" + LpEdit);

    insertcell = tmpObject.insertBefore(insertcell, document.getElementById("Data" + LpEdit));

    //Data
    tmp = (document.getElementById(("Data" + LpEdit)).innerHTML);
    tmpObject = document.getElementById(("Data" + LpEdit)).parentNode;
    tmpObject.removeChild(document.getElementById("Data" + LpEdit));

    var insertcell = document.createElement("td");

    var insertObject = document.createElement("input");
    insertcell.appendChild(insertObject);

    insertcell.id = ("Data" + LpEdit);
    insertObject.value = tmp;
    insertObject.id = ("DataInput" + LpEdit);

    insertcell = tmpObject.insertBefore(insertcell, document.getElementById("Stan" + LpEdit));


    // STAN
    tmp = (document.getElementById(("Stan" + LpEdit)).innerHTML);
    tmpObject = document.getElementById(("Stan" + LpEdit)).parentNode;
    tmpObject.removeChild(document.getElementById("Stan" + LpEdit));

    var insertcell = document.createElement("td");

    var insertObject = document.createElement("input");
    insertcell.appendChild(insertObject);

    insertcell.id = ("Stan" + LpEdit);
    insertObject.value = tmp;
    insertObject.id = ("StanInput" + LpEdit);

    insertcell = tmpObject.insertBefore(insertcell, document.getElementById("tr" + LpEdit));
    ////////////////////////////////////////////////////////////////////////////


    // Dodaje button do comfirmenia

    var insertObject = document.createElement("input");
    insertObject.type = "button";
    insertObject.id = ("comfirm" + LpEdit);
    insertObject.classList.add("customButton");
    insertObject.value = "Comfirm";
    insertObject.style.width = "100%";
    insertObject.onclick = function () {
        comfirm(this.id);
    };

    insertObject = tmpObject.insertBefore(insertObject, document.getElementById("tr" + parseInt(LpEdit)));


    tmpObject.removeChild(document.getElementById("edit" + LpEdit));
    tmpObject.removeChild(document.getElementById("delete" + LpEdit));
}


function comfirm(i) {
    //Dzialanie
    var LpComfirm;

    for (var tmpedit = -1; !isNaN(i.slice(tmpedit)); tmpedit--) {}

    LpComfirm = i.slice(tmpedit + 1);

    tmp = (document.getElementById(("DzialanieInput" + LpComfirm)).value);
    tmpObject = document.getElementById(("Dzialanie" + LpComfirm)).parentNode;
    document.getElementById("Dzialanie" + LpComfirm).remove();

    var insertObject = document.createElement("td");
    insertObject.id = ("Dzialanie" + LpComfirm);
    insertObject.innerHTML = tmp;
    insertObject = tmpObject.insertBefore(insertObject, document.getElementById("Odpowiedzialny" + LpComfirm));

    //Odpowiedzialny

    tmp = (document.getElementById(("OdpowiedzialnyInput" + LpComfirm)).value);
    tmpObject = document.getElementById(("Odpowiedzialny" + LpComfirm)).parentNode;
    document.getElementById("Odpowiedzialny" + LpComfirm).remove();

    var insertObject = document.createElement("td");
    insertObject.id = ("Odpowiedzialny" + LpComfirm);
    insertObject.innerHTML = tmp;
    insertObject = tmpObject.insertBefore(insertObject, document.getElementById("Data" + LpComfirm));
    //Data

    tmp = (document.getElementById(("DataInput" + LpComfirm)).value);
    tmpObject = document.getElementById(("Data" + LpComfirm)).parentNode;
    document.getElementById("Data" + LpComfirm).remove();

    var insertObject = document.createElement("td");
    insertObject.id = ("Data" + LpComfirm);
    insertObject.innerHTML = tmp;
    insertObject = tmpObject.insertBefore(insertObject, document.getElementById("Stan" + LpComfirm));

    //Stan

    tmp = (document.getElementById(("StanInput" + LpComfirm)).value);
    tmpObject = document.getElementById(("Stan" + LpComfirm)).parentNode;
    document.getElementById("Stan" + LpComfirm).remove();

    var insertObject = document.createElement("td");
    insertObject.id = ("Stan" + LpComfirm);
    insertObject.innerHTML = tmp;
    insertObject = tmpObject.insertBefore(insertObject, document.getElementById("tr" + LpComfirm));

    // Button reverse
    tmpObject.removeChild(document.getElementById("comfirm" + LpComfirm));

    var cell = document.createElement("button");
    cell.id = ("edit" + LpComfirm);
    cell.classList.add("customButton");
    cell.innerHTML = "edit";
    cell.addEventListener('click', function () {
        editKomorke(this.id);
    });
    cell = tmpObject.insertBefore(cell, document.getElementById("tr" + LpComfirm));

    var cell = document.createElement("button");
    cell.id = ("delete" + LpComfirm);
    cell.classList.add("customButton");
    cell.innerHTML = "Usun";
    cell.addEventListener('click', function () {
        usunKomorke(this.id);
    });
    cell = tmpObject.insertBefore(cell, document.getElementById("tr" + LpComfirm));
}

function usunKomorke(i) {
    var LpDelete;
    for (var tmpedit = -1; !isNaN(i.slice(tmpedit)); tmpedit--) {}
    LpDelete = i.slice(tmpedit + 1);

    document.getElementById("a" + LpDelete).remove();
    document.getElementById("Dzialanie" + LpDelete).remove();
    document.getElementById("Odpowiedzialny" + LpDelete).remove();
    document.getElementById("Data" + LpDelete).remove();
    document.getElementById("Stan" + LpDelete).remove();
    document.getElementById("edit" + LpDelete).remove();
    document.getElementById("delete" + LpDelete).remove();
    document.getElementById("tr" + LpDelete).remove();
    Lp -= 1;
    let moreToChange = parseInt(LpDelete) + 1;
    while (moreToChange <= Lp) {
        document.getElementById("a" + (parseInt(moreToChange))).id = "a" + String(moreToChange - 1);
        document.getElementById("Dzialanie" + (parseInt(moreToChange))).id = "Dzialanie" + String(moreToChange -
            1);
        document.getElementById("Odpowiedzialny" + (parseInt(moreToChange))).id = "Odpowiedzialny" + String(
            moreToChange - 1);
        document.getElementById("Data" + (parseInt(moreToChange))).id = "Data" + String(moreToChange - 1);
        document.getElementById("Stan" + (parseInt(moreToChange))).id = "Stan" + String(moreToChange - 1);

        if (document.getElementById("DzialanieInput" + (parseInt(moreToChange))) != null) {

            document.getElementById("DzialanieInput" + (parseInt(moreToChange))).id = "DzialanieInput" + String(
                moreToChange - 1);
            document.getElementById("OdpowiedzialnyInput" + (parseInt(moreToChange))).id =
                "OdpowiedzialnyInput" + String(
                    moreToChange - 1);
            document.getElementById("DataInput" + (parseInt(moreToChange))).id = "DataInput" + String(
                moreToChange - 1);
            document.getElementById("StanInput" + (parseInt(moreToChange))).id = "StanInput" + String(
                moreToChange - 1);
            document.getElementById("comfirm" + (parseInt(moreToChange))).id = "comfirm" + String(
                moreToChange - 1);
        } else {
            document.getElementById("edit" + (parseInt(moreToChange))).id = "edit" + String(moreToChange - 1);
            document.getElementById("delete" + (parseInt(moreToChange))).id = "delete" + String(moreToChange -
                1);

        }



        document.getElementById("tr" + (parseInt(moreToChange))).id = "tr" + String(moreToChange - 1);
        document.getElementById("a" + String(moreToChange - 1)).innerHTML = String(moreToChange - 1);

        moreToChange += 1;
    }





}