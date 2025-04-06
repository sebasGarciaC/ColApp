
const form = document.getElementById('formularios')


form.addEventListener('submit',function(event){
    event.preventDefault();
    let procesForm = new FormData(form)
    let transactionObj = convertFormData(procesForm)
    insertRowInTablaResumen(transactionObj)
}) 

function ventaMpValor(){                                                                 
    let valor1 = document.getElementById('cantidadPiezas1').value
    let valor2 = document.getElementById('minutosLamina1').value
    return valor1 * valor2
}

function ventaExt1(){
    let valor3 = parseInt( document.getElementById('costoExt2').value)
    let valor4 = parseInt(document.getElementById('margenExt2').value)
    let valor5 = valor4/100
    let valor6 = (1 -valor5)
    console.log(valor4)
    return Math.round( valor3/valor6)
}

function ventaExt2(){
    let valor3 = parseInt( document.getElementById('costoExt3').value)
    let valor4 = parseInt(document.getElementById('margenExt3').value)
    let valor5 = valor4/100
    let valor6 = (1 -valor5)
    console.log(valor4)
    return Math.round( valor3/valor6)
}

function ventaExt3(){
    let valor3 = parseInt( document.getElementById('costoExt4').value)
    let valor4 = parseInt(document.getElementById('margenExt4').value)
    let valor5 = valor4/100
    let valor6 = (1 -valor5)
    console.log(valor4)
    return Math.round( valor3/valor6)
}



function convertFormData(procesForm){
   let referencia = procesForm.get('referencia')
   let material =  procesForm.get('material')
   let cantidadPiezas = procesForm.get('cantidadPiezas')
   let margenMP = procesForm.get('margenMp') + (' %')
   let precioVentaMp1 = procesForm.get('precioVentaMp1') 
   let minutosLamina = procesForm.get('minutosLamina')
   let ventaMpValor =  ventaMpValor() 
   let incrementoHora = procesForm.get('incrementoHora')
   let PrecioventaLaser = procesForm.get('precioVentaLaser')  
   let cantidadDobleces = procesForm.get('cantidadDobleces')
   let totalDobleces = procesForm.get('totalDobleces')
   let precioPlegado1 = procesForm.get('precioPlegado1') 
   let descripcionExterna = procesForm.get('descripcionExterna')
   let margenExterno = procesForm.get('margenExterno') + (' %')
   let ventaExt1= ventaExt1() 
   let descripcionExterna2 = procesForm.get('descripcionExterna2')
   let margenExterno1 = procesForm.get('margenExterno1') + (' %')
   let ventaExt2 = ventaExt2()
   let descripcionExterna3 = procesForm.get('descripcionExterna3')
   let margenExterno2 = procesForm.get('margenExterno2') + (' %')
   let ventaExt3 = ventaExt3()

   return{
    "referencia" :referencia,
    "material" :material,
    "cantidadPiezas":cantidadPiezas,
    "margenMP" :margenMP,
    "precioVentaMp1" :precioVentaMp1,
    "minutosLamina" :minutosLamina, 
    "ventaMpValor":ventaMpValor,
    "incrementoHora" :incrementoHora,
    "PrecioventaLaser" :PrecioventaLaser,
    "cantidadDobleces" :cantidadDobleces,
    "totalDobleces" :totalDobleces,
    "precioPlegado1" :precioPlegado1,
    "descripcionExterna" :descripcionExterna,
    "margenExterno" :margenExterno, 
    "ventaExt1" :ventaExt1,
    "descripcionExterna2" :descripcionExterna2,
    "margenExterno1" :margenExterno1,
    "ventaExt2" :ventaExt2,
    "descripcionExterna3" :descripcionExterna3,
    "margenExterno2":margenExterno2,
    "ventaExt3" :ventaExt3,
   }    
}

 
function insertRowInTablaResumen(transactionObj){
    let tablaRef = document.getElementById('tablaResumen')
    var newRowRef = tablaRef.insertRow(-1)
    

    let newCell = newRowRef.insertCell(0);
    newCell.textContent = transactionObj['referencia'];

    newCell = newRowRef.insertCell(1)
    newCell.textContent = transactionObj['material']
    newCell = newRowRef.insertCell(2)
    newCell.textContent = transactionObj['cantidadPiezas']
    newCell = newRowRef.insertCell(3)
    newCell.textContent = transactionObj['margenMp'] + (' %')
    newCell = newRowRef.insertCell(4)
    newCell.textContent = transactionObj['precioVentaMp1']                      //---------------------------procesFrm.get('precioVentaMp1')
    newCell = newRowRef.insertCell(5)
    newCell.textContent = transactionObj['minutosLamina']
    newCell = newRowRef.insertCell(6)
    newCell.textContent = transactionObj['ventaMpValor']                       //----------------------------procesFrm.get('minutosLamina')
    newCell = newRowRef.insertCell(7)
    newCell.textContent = transactionObj['incrementoHora'] 
    newCell = newRowRef.insertCell(8)
    newCell.textContent = transactionObj['precioVentaLaser']     //procesFrm.get('')
    newCell = newRowRef.insertCell(9)
    newCell.textContent = transactionObj['cantidadDobleces']
    newCell = newRowRef.insertCell(10)
    newCell.textContent = transactionObj['totalDobleces']
    newCell = newRowRef.insertCell(11)
    newCell.textContent = transactionObj['precioPlegado1']                          //procesorm.get('')    
    newCell = newRowRef.insertCell(12)
    newCell.textContent = transactionObj['descripcionExterna']
    newCell = newRowRef.insertCell(13)
    newCell.textContent = transactionObj['margenExterno'] + (' %')
    newCell = newRowRef.insertCell(14)
    newCell.textContent =transactionObj['ventaExt1']                             
    newCell = newRowRef.insertCell(15)
    newCell.textContent = transactionObj['descripcionExterna2']
    newCell = newRowRef.insertCell(16)
    newCell.textContent = transactionObj['margenExterno1'] + (' %')
    newCell = newRowRef.insertCell(17)
    newCell.textContent = transactionObj['ventaExt2']
    newCell = newRowRef.insertCell(18)
    newCell.textContent = transactionObj['descripcionExterna3']
    newCell = newRowRef.insertCell(19)
    newCell.textContent = transactionObj['margenExterno2'] + (' %')
    newCell = newRowRef.insertCell(20)
    newCell.textContent = transactionObj['ventaExt3']
}



