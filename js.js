function agregarFila() {
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const nota = parseFloat(document.getElementById('nota').value);

  if (!nombre || !apellido || isNaN(nota) || nota < 1 || nota > 7) {
    alert("Por favor, ingresa todos los campos correctamente. Nota entre 1.0 y 7.0.");
    return;
  }

  const tabla = document.getElementById('tablaNotas').getElementsByTagName('tbody')[0];
  const nuevaFila = tabla.insertRow();

  nuevaFila.insertCell(0).textContent = nombre;
  nuevaFila.insertCell(1).textContent = apellido;
  nuevaFila.insertCell(2).textContent = nota.toFixed(1);

  // Limpiar campos
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('nota').value = '';

  actualizarPromedio();
}

function actualizarPromedio() {
  const filas = document.getElementById('tablaNotas').getElementsByTagName('tbody')[0].rows;
  let suma = 0;
  let cantidad = filas.length;

  for (let i = 0; i < cantidad; i++) {
    let nota = parseFloat(filas[i].cells[2].textContent);
    suma += nota;
  }

  const promedio = cantidad > 0 ? (suma / cantidad).toFixed(2) : '-';
  document.getElementById('promedio').textContent = promedio;
}
