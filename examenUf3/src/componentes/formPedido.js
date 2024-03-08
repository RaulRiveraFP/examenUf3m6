import { bd } from "../../bd";

bd
export default {
    template:`
    <div class="container mt-3 p-5 border shadow-lg ">
      <h1 class="text-center mb-5 ">----- Vista usuario -----</h1>
      <div class="row">
        
        <div class="col-6">
          <h3>Grupo</h3>
          <label for="nombreGrupo" class="label-control">Nombre del grupo:</label>
          <input type="text" class="form-control mt-2 nombreGrupo" placeholder ="Borrachos de DAW2" minlength="4" maxlength="10">
          <label for="numeroMesa" class="label-control">Mesa numero</label>
          <input type="number" minlength="1" maxlength="15" class="form-control mt-2 numeroMesa" placeholder ="0">
        
          <h3 class="mt-5">Haz tu pedido</h3>
          <div class="d-flex gap-3 ">
            <select name="cervezas" id="cervezas" class="form-control">
              <option value="">Selecciona qué birra quieres</option>
            </select>
          
            <input type="number" minlength="1" value="1" class="form-control cantidad">
          </div>
          <button class="btn btn-success mt-4 w-100 submit">¡Enviar pedido!</button>
        </div>
        <div class="col-6 border detalleCerveza">
          <div class="p-3 d-flex">
            <div class="w-50">
              <img src="data:image/jpeg;base64,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" alt="" class="w-100">
            </div>
            <div>
              <h4 class="nombreCerveza">Estrella Galicia</h4>
              <p>Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.</p>
            </div>
            
  
          </div>
        </div>
      </div>
      
  
    </div>
      
    </div>
    <div id="tabla"></div>
    `,
    script () {
    
    


    function construirSelect() {
        const selectElement = document.querySelector('#cervezas')
    
        bd.forEach(cerveza => {
        const optionElement = document.createElement('option')
    
        optionElement.value = cerveza.nombre
        optionElement.text = cerveza.nombre
    
        selectElement.appendChild(optionElement)
        })
    }
    function mostrarInformacionCerveza() {
        const selectedValue = document.querySelector('#cervezas')
        selectedValue.addEventListener('change', () => {
            // console.log(selectedValue.value)
            const cervezaSeleccionada = bd.find(cerveza => cerveza.nombre === (selectedValue.value))
            // console.log(cervezaSeleccionada)
            // console.log(bd)
                
            if (cervezaSeleccionada) {
                // console.log('Nombre:', cervezaSeleccionada.nombre)
                // console.log('Descripción:', cervezaSeleccionada.descripcion)
                // console.log('Imagen:', cervezaSeleccionada.imagen)
                document.querySelector('.detalleCerveza').innerHTML = 
                `
                <div class="p-3 d-flex">
                    <div class="w-50">
                        <img src="${cervezaSeleccionada.imagen}" alt="" class="w-100">
                    </div>
                    <div>
                        <h4 class="nombreCerveza">${cervezaSeleccionada.nombre}</h4>
                        <p>${cervezaSeleccionada.descripcion}</p>
                    </div>
                </div>
                `
                } else {
                console.error('Cerveza no encontrada.')
            }
        })
    }
  
    construirSelect()
    mostrarInformacionCerveza()
    }
}