function eleven(e) {
    if (e.key == "Enter") {
        const n = document.querySelector('.input-number').value;
        for (let i = 1; i <= 8; i++) {
            // alert(`ingrese la note ${i}`);
            document.querySelector(".message").innerHTML = `ingrese la nota ${i}`;
        }
        // let tr = "<tr>";
        // let result = "";
        // for (let i = 1; i <= n; i++) {
        //     // result +=  " " + i*11;
        //     result = result + `<td>${i * 11}</td>`;
        // }

        // let tableContent = `<tr> ${result} </tr>`;
        // document.querySelector('.tbody').innerHTML = tableContent;
    }
}
firstAlert();
let cont = 0;
function notes(e) {
    if (e.key == "Enter") {
        const n = document.querySelector('.input-number').value;

        if (cont <= 8) {
            cont++;
            alert(`ingrese la note ${cont}`);
        } else {
            alert(`no se permiten más notas`);
        }
    }
}
function firstAlert() {
    alert("ingrese la nota 1");
}