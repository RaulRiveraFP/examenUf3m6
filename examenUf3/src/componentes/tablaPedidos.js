export default {
    template:
    `
    <div id="tablaPedidos" class="container mt-5 mb-5 p-5 border shadow-lg ">
      <div class="row">
        <h1 class="text-center mb-5 ">----- Vista camareros -----</h1>
      <h3>Pedidos</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Grupo</th>
            <th>Mesa</th>
            <th>Cerveza</th>
            <th>Cantidad</th>
            <th>Estado</th>
          </tr>        
        </thead>
        <tbody class="tablaPedidos">
        </tbody>
      </table>
      </div>
      
    </div>
    `,
    script () {
        let pedidos = []


        function pintaPedidos(pedidos){
            let html = ''
            pedidos.forEach(pedido => {
                if(pedido.estado == 'pendiente'){
                    html += `
                    <tr>
                        <td>${pedido.nombreGrupo}</td>
                        <td>${pedido.numeroMesa}</td>
                        <td>${pedido.cervezas}</td>
                        <td>${pedido.cantidad}</td>
                        <td>
                        <div class="d-flex gap-2">
                        <button class="btn btn-outline-warning w-100 btn-sm">Pedido pendiente...</button>
                        <button class="btn btn-outline-danger w-100 btn-sm"> 🗑 Borrar pedido</button>
                        </div>       
                        </td>
                    </tr>
                    `
                }else{
                    html += `
                    <tr>
                        <td>${pedido.nombreGrupo}</td>
                        <td>${pedido.numeroMesa}</td>
                        <td>${pedido.cervezas}</td>
                        <td>${pedido.cantidad}</td>
                        <td>
                        <div class="d-flex gap-2">
                        <button class="btn btn-outline-success w-100 btn-sm">Completado</button>
                        <button class="btn btn-outline-danger w-100 btn-sm"> 🗑 Borrar pedido</button>
                        </div>       
                        </td>
                    </tr>
                    `
                }
               
            });
            document.querySelector('.tablaPedidos').innerHTML = html
        }

        const submit = document.querySelector('.submit')
    
        submit.addEventListener('click', (e) =>{
            e.preventDefault()
            const nombreGrupo = document.querySelector('.nombreGrupo').value
            const numeroMesa = document.querySelector('.numeroMesa').value
            const cervezas = document.querySelector('#cervezas').value
            const cantidad = document.querySelector('.cantidad').value
            let pedido = {
                nombreGrupo: nombreGrupo,
                numeroMesa: numeroMesa,
                cervezas: cervezas,
                cantidad: cantidad,
                estado: 'pendiente'
            }
    
            pedidos.push(pedido)
            
            pintaPedidos(pedidos)
            
            const pendienteButtons = document.querySelectorAll('.btn-outline-warning')

            pendienteButtons.forEach((pendi, index) => {
                pendi.addEventListener('click', () => {
                    pedidos[index].estado = 'completo';
                    pintaPedidos(pedidos);
                })
            });

            const borrar = document.querySelectorAll('.btn-outline-danger')
            borrar.forEach((bo ) => {
                bo.addEventListener('click', () => {
                    const indice = Array.from(borrar).indexOf(bo)
                    console.log(indice)
                    pedidos.splice(indice, 1)
                    console.log(pedidos)
                    pintaPedidos(pedidos)
                });
            });
        })
        
    }
}