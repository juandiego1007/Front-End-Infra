// Capturar variables y elementos necesarios
const url = ''
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'))
const formArticulo = document.querySelector('form')

const nombre = document.getElementById('recipient-name')
const equipo = document.getElementById('recipient-equipo')
const color = document.getElementById('recipient-color')
const temporada = document.getElementById('recipient-temporada')

let opcion = ''

btncrear.addEventListener('click', () => {
    nombre.value = ""
    equipo.value = ""
    color.value = ""
    temporada.value = ""
    modalArticulo.show()
    opcion = 'crear'
})

// Procedimiento para listar información

const mostrar = (articulos) => {
    articulos.forEach(articulo => {
        resultados += `<tr>
                            <td>${articulo.id}</td>
                            <td>${articulo.nombre}</td>
                            <td>${articulo.equipo}</td>
                            <td>${articulo.color}</td>
                            <td>${articulo.temporada}</td>
                            <td class = "text-center"><a class = "btnEditar btn btn-primary">Editar</a><a class = "btnBorrar btn btn-danger">Borrar</a></td>
                        </tr>`
    });
    contenedor.innerHTML = resultados

}

fetch(url)
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error))