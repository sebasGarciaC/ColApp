


//--------------------------------------------------------------------------------------------------------------------------
//---------------------Cantidad de Laminas----------------------------


// const cantidadLaminas = document.getElementById('largoPieza1')

// cantidadLaminas.addEventListener('input',function laminasQty (){

//     let piezaLargo = parseInt(document.getElementById('largoPieza1').value)
//     let piezaAncho = parseInt( document.getElementById('anchoPieza1').value)
//     let laminaFormato = parseInt(document.getElementById('formatoLamina1').value)
//     let piezaCantidad = parseInt(document.getElementById('cantidadPiezas1').value)

//     let operacion1 = piezaAncho*piezaLargo*piezaCantidad
//     let operacion2 = operacion1/laminaFormato
//     operacion2 = Number(operacion2.toFixed(2))
//     let laminasCantidad = document.getElementById('cantidadLaminas')
//     laminasCantidad.innerHTML=operacion2
    
//     return operacion2

// })

function laminasQty(){
    let piezaLargo = parseInt(document.getElementById('largoPieza1').value)
    let piezaAncho = parseInt( document.getElementById('anchoPieza1').value)
    let laminaFormato = parseInt(document.getElementById('formatoLamina1').value)
    let piezaCantidad = parseInt(document.getElementById('cantidadPiezas1').value)

    let operacion1 = piezaAncho*piezaLargo*piezaCantidad
    let operacion2 = operacion1/laminaFormato
    operacion2 = Number(operacion2.toFixed(2))
    let laminasCantidad = document.getElementById('cantidadLaminas')
    laminasCantidad.innerHTML=operacion2
    
    return operacion2
}
var cantidadLaminas = document.getElementById('largoPieza1')
cantidadLaminas.addEventListener('input',laminasQty)

var WidthPieza = document.getElementById('anchoPieza1')
WidthPieza.addEventListener('input',laminasQty)

var sheetFormat = document.getElementById('formatoLamina1')
sheetFormat.addEventListener('input',laminasQty)

var piecesQty = document.getElementById('cantidadPiezas1')
piecesQty.addEventListener('input',laminasQty)

//---------------------Cantidad de Laminas-----------------------------
//--------------------------------------------------------------------------------------------------------------------------
//-----------------------Costo Materia Prima--------------------------

// const mPcosto = document.getElementById('costoLamina')

// mPcosto.addEventListener('input',function costoMpInner(){
//     let costo = parseInt(document.getElementById('costoLamina').value)
//     let cantidadL = document.getElementById('cantidadLaminas').innerHTML
//     let cantidadP = parseInt(document.getElementById('cantidadPiezas1').value)

//     let costoT = costo*cantidadL
//     let unitario = costoT/cantidadP

//     unitario = Number(unitario.toFixed(2))
//     let costoUnitario = document.getElementById('costoMp')
//     costoUnitario.innerHTML = unitario    

// })

function costoMateriaPrima(){
    let costo = parseInt(document.getElementById('costoLamina').value)
    let cantidadL = document.getElementById('cantidadLaminas').textContent
    let cantidadP = parseInt(document.getElementById('cantidadPiezas1').value)

    let costoT = costo*cantidadL
    let unitario = costoT/cantidadP

    unitario = Number(unitario.toFixed(0))
    unitario = unitario.toLocaleString()
    let costoUnitario = document.getElementById('costoMp')
    costoUnitario.textContent = unitario 
    
}

var ref2 = document.getElementById('referencia')
ref2.addEventListener('input',costoMateriaPrima)

var qtyPiezas1 = document.getElementById('cantidadPiezas1')
qtyPiezas1.addEventListener('input',costoMateriaPrima)

var formatLamina1 = document.getElementById('formatoLamina1')
formatLamina1.addEventListener('input',costoMateriaPrima)

var formatLamina2 = document.getElementById('formatoLamina1')
formatLamina2.addEventListener('delete',costoMateriaPrima)  

var piezaWidth1 = document.getElementById('anchoPieza1')
piezaWidth1.addEventListener('input', costoMateriaPrima)

var piezaLarge1 = document.getElementById('largoPieza1')
piezaLarge1.addEventListener('input',costoMateriaPrima)

var costoLaminaInput1 = document.getElementById('costoLamina');
costoLaminaInput1.addEventListener('input', costoMateriaPrima);

var margenMpInput1 = document.getElementById('margenMp1');
margenMpInput1.addEventListener('input', costoMateriaPrima);

//-----------------------Costo Materia Prima--------------------------
//--------------------------------------------------------------------------------------------------------------------------
//------------------------Precio venta Materia Prima----------------------

// const precioMpVenta = document.getElementById('costoLamina')

// function ventaUnitario(){
//     precioMpVenta.addEventListener('input',function precioVenta(){
//         let costo = parseFloat( document.getElementById('costoMp').textContent)
//         let margen = parseFloat( document.getElementById('margenMp1').value)
    
//         let porcentaje = margen/100
//         let decimal = 1-porcentaje
//         let resultado = costo/decimal
//         resultado = Number(resultado.toFixed(2))
//         let precioVentaMP = document.getElementById('precioVentaMp')
//         precioVentaMP.innerHTML = resultado
//         return resultado
      
    
//     })
// }
// ventaUnitario()


function actualizarPrecioVenta() {
    let costo = document.getElementById('costoMp').textContent.trim()
    costo = parseFloat(costo.replace(/\./g, '').replace(',', '.')) || 0
    let margen = parseFloat(document.getElementById('margenMp1').value);

    let porcentaje = margen / 100;
    let decimal = 1 - porcentaje;
    let resultado = costo / decimal;
    resultado=resultado.toFixed(0)
    resultado=Number(resultado).toLocaleString()

    let precioVentaMp = document.getElementById('precioVentaMp');
    precioVentaMp.textContent = resultado
    console.log(resultado)
   
}
// Event listener para actualizar el precio de venta cuando cambian los valores relevantes
const ref1 = document.getElementById('referencia')
ref1.addEventListener('input',actualizarPrecioVenta)

const qtyPiezas = document.getElementById('cantidadPiezas1')
qtyPiezas.addEventListener('input',actualizarPrecioVenta)

const formatLamina = document.getElementById('formatoLamina1')
formatLamina.addEventListener('input',actualizarPrecioVenta)

const piezaWidth = document.getElementById('anchoPieza1')
piezaWidth.addEventListener('input', actualizarPrecioVenta)

const piezaLarge = document.getElementById('largoPieza1')
piezaLarge.addEventListener('input',actualizarPrecioVenta)

const costoLaminaInput = document.getElementById('costoLamina');
costoLaminaInput.addEventListener('input', actualizarPrecioVenta);

const margenMpInput = document.getElementById('margenMp1');
margenMpInput.addEventListener('input', actualizarPrecioVenta);

//------------------------Precio venta Materia Prima-------------------
//--------------------------------------------------------------------------------------------------------------------------
//----------------------Tiempo total Minuto, Horas, costo unitario, precio venta Laser--------------------------
function tiempoMinutos(){
        let minutos = parseInt(document.getElementById('minutosPieza').value)
        let adicional = parseFloat(document.getElementById('tiempoAdicional').value)
        let piezasQty = document.getElementById('cantidadPiezas1').value
        let valorHora = document.getElementById('valorHora').value


        let adicionalPorcentaje = adicional / 100
        let decimal = 1 + adicionalPorcentaje
        let resultadoMinutos = decimal * minutos
        let totalMinutos = resultadoMinutos*piezasQty
        let totalHoras = totalMinutos / 60
     
       let totalMinutos2 =document.getElementById('totalMinutos')
       totalMinutos2.textContent = Number(totalMinutos.toFixed(2));

       let totalHoras2=document.getElementById('totalHoras')
       totalHoras2.textContent= Number(totalHoras.toFixed(2))


       let costoUnitarioLaser = (totalHoras*180000)/piezasQty
       costoUnitarioLaser = costoUnitarioLaser.toFixed()
       costoUnitarioLaser = Number(costoUnitarioLaser).toLocaleString()
       let costoUnitario = document.getElementById('costoPieza')
       costoUnitario.textContent = costoUnitarioLaser//-----------
       console.log(costoUnitarioLaser)


       let precioVentaUnitarioLaser = (valorHora*totalHoras)/piezasQty  
       precioVentaUnitarioLaser =precioVentaUnitarioLaser.toFixed()
       precioVentaUnitarioLaser= Number(precioVentaUnitarioLaser).toLocaleString() 
       let precioVentaUnitarioLaser2 = document.getElementById('precioVentaLaser') 
       precioVentaUnitarioLaser2.textContent= precioVentaUnitarioLaser
    }
    
    
    const minPieza = document.getElementById('minutosPieza')
    minPieza.addEventListener('input', tiempoMinutos)

    const adicionalTime =document.getElementById('tiempoAdicional')
    adicionalTime.addEventListener('input',tiempoMinutos)

    const precioUnitarioLaser=document.getElementById('valorHora')
    precioUnitarioLaser.addEventListener('input',tiempoMinutos)

//qtyPiezas.addEventListener('input',tiempoMinutos)


//-----------------------Tiempo total Minuto, Horas, costo unitario, precio venta Laser--------------------------
//-------------------------------------------------------------------------------------------------------




//--------------------------------------------------------------------------------------------------------------------------
//------------------------ FORMULARIO ----------------------------------

const form = document.getElementById('formularioCotizacion')

form.addEventListener('submit', function(event){
    event.preventDefault();
    let procesForm = new FormData(form)
    let transactionObjt = convertirFormToObject(procesForm)
    saveObjt(transactionObjt)
    console.log(transactionObjt)
    insertRowInTablaResumen(transactionObjt)
    form.reset()
    document.getElementById('cantidadLaminas').textContent= " "
    document.getElementById('costoMp').textContent= " "
    document.getElementById('precioVentaMp').textContent= " "
})


        //--  de esta manera cargamos lo que hay en el local storage en la tabla

document.addEventListener('DOMContentLoaded', function(){
    let transactionObjt = JSON.parse(localStorage.getItem('transaccionData') || [])
    transactionObjt.forEach(
        function(arrayElement){
        insertRowInTablaResumen(arrayElement)
        console.log(arrayElement)

    }) 
})


function getNewTransactionId(){ // con esta funcion asignamos un ID a fila
    let lastTransactionId   = localStorage.getItem('lastTransactionId') || '-1'
    let newTransactionId =JSON.parse(lastTransactionId) +1
    localStorage.setItem('lastTransactionId',JSON.stringify(newTransactionId))
    return newTransactionId
}


function convertirFormToObject(procesForm){

    let referencia1 =procesForm.get('referencia1')
    let material = procesForm.get('material')
    let cantidadPiezas = procesForm.get('cantidadPiezas')
    let margenMp = procesForm.get('margenMp')     

    let ventaPrecioMp = parseFloat(document.getElementById('precioVentaMp').textContent)
    let precioVentaUnitario = ventaPrecioMp

    let valorHora1 = procesForm.get('valorHora1')

    let precioVentaLaser2 = parseFloat(document.getElementById('precioVentaLaser').textContent)
    let precioVentaLaser1= precioVentaLaser2

    let transactionId = getNewTransactionId()
    return{
        'referencia1' : referencia1,
        'material':material,
        'cantidadPiezas':cantidadPiezas,
        'margenMp':margenMp,
        'precioVentaUnitario':precioVentaUnitario,
        'valorHora1':valorHora1,
        'precioVentaLaser1':precioVentaLaser1,
        'transactionId':transactionId
    }

}

//------------tabla de insercion 
function insertRowInTablaResumen(transactionObjt){
    let tablaRef = document.getElementById('tablaResumen')
    var newRowRef = tablaRef.insertRow(-1)
    // con esta linea setiaos el ID que habiamos creado en cada elemto de la funcion getNewTransactionId()
    newRowRef.setAttribute('data-transaction-id',  transactionObjt['transactionId']) 

    let newCell = newRowRef.insertCell(0);
    newCell.textContent = transactionObjt['referencia1']

    newCell=newRowRef.insertCell(1)
    newCell.textContent = transactionObjt['material']
    newCell=newRowRef.insertCell(2)
    newCell.textContent = transactionObjt['cantidadPiezas']
    newCell=newRowRef.insertCell(3)
    newCell.textContent = transactionObjt['margenMp'] +' %'

    // let ventaPrecioMp1 = parseFloat(document.getElementById('precioVentaMp').textContent)
    newCell=newRowRef.insertCell(4)
    newCell.textContent =transactionObjt['precioVentaUnitario']

    newCell=newRowRef.insertCell(5)
    newCell.textContent=transactionObjt['valorHora1']

    newCell=newRowRef.insertCell(6)
    newCell.textContent=transactionObjt['precioVentaLaser1']

    //------
    let newEditCell = newRowRef.insertCell(-1)
    let editBoton = document.createElement('button')//Boton Editar
    editBoton.textContent='Editar'
    newEditCell.appendChild(editBoton)

    let newDeletCell = newRowRef.insertCell(-1)
    let deleteBoton = document.createElement('button')  //Boton Eliminar 
    deleteBoton.textContent = 'Eliminar'
    newDeletCell.appendChild(deleteBoton)

    deleteBoton.addEventListener('click',(event)=> {
        let transactionRow = event.target.parentNode.parentNode
        let transactionId = transactionRow.getAttribute('data-transaction-id')
        transactionRow.remove()      // Con esta linea BORRAMOS EL HTML
        deleteTransactionObj(transactionId)

    })
}

function deleteTransactionObj(transactionId){    // con esta funcion eliminamos del local storage
    let transactionObjt = JSON.parse(localStorage.getItem('transaccionData'))
    let transactionIndexInArray = transactionObjt.findIndex(element => element.transactionId == transactionId)
    transactionObjt.splice(transactionIndexInArray,1)

    let transactionArrayJSON = JSON.stringify(transactionObjt)
    localStorage.setItem('transaccionData', transactionArrayJSON)
}

function saveObjt(transactionObjt){  

    let myTransactionArray = JSON.parse(localStorage.getItem('transaccionData')) || [];
    myTransactionArray.push(transactionObjt)

    let transactionArrayJSON = JSON.stringify(myTransactionArray)
    localStorage.setItem('transaccionData', transactionArrayJSON)

}

//------------------------Formulario----------------------------------
//-----------------------------------------------------------------------------------------------
//------------------------Range Slide----------------------------------

function rangeSlide(value){
    document.getElementById("rangeValue").innerHTML = value + ' %';
}

function rangeSlide2(value){
    document.getElementById("rangeValue2").innerHTML = value + ' %';
}


//------------------------Range Slide----------------------------------