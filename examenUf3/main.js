import { main } from '@popperjs/core'
import header from './src/componentes/header'
import home from './src/vistas/home'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css' // Importa el archivo CSS de Bootstrap
import formPedido from './src/componentes/formPedido'
import tablaPedidos from './src/componentes/tablaPedidos'

document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = formPedido.template
document.querySelector('#tabla').innerHTML = tablaPedidos.template
tablaPedidos.script()
formPedido.script()
