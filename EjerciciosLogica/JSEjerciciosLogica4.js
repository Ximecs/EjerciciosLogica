let cantidadNotas  = prompt ("que cantidad de notas ")
let sectionForm = document.querySelector("#sectionFormJS")
for (let contador = 1; contador <= cantiadDeFormularios; contador++) {
    sectionForm.innerHTML += `
    <form>
    <h1> Triangulo ${contador}</h1>
    <div class="form-group">
      <label for="alturaTR${contador}">Altura del triangulo</label>
      <input type="number" class="form-control" id="alturaTR1 ${contador}">
    </div>
    <div class="form-group">
      <label for="baseTR${contador}">Base del Triangulo ${contador}</label>
      <input type="number" class="form-control" id="baseTR${contador}" >
    </div>
    
    <button type="button" onclick="calculate(${contador})"class="btn btn-primary">Submit</button>
  </form>`

}
function calculate(formTriangle) {
    let altura = document.querySelector(`#alturaTR${formTriangle}`)
    let base = document.querySelector(`#baseTR${formTriangle}`)
    let calculo = (base * altura) / 2;
    alert(`El área del traingulo es: ${calculo}`);
}