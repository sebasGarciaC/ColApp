const textarea = document.querySelector("textarea")
textarea.addEventListener('keyup', (event) =>{
    textarea.style.height='20px'
    let scHeight = event.target.scrollHeight;
    textarea.style.height= `${scHeight}px`

})

// -------------------------------------------------------Formulario

    const form = document.getElementById('materiaPrima')
    const form2 = document.getElementById('procesos')

    form.addEventListener('submit', function(event){
        event.preventDefault();
       // let mpForm = new  FormData(document.getElementById('materiaPrima'))
        let mpForm = new FormData(form)
        insertRowInTablaResumen(mpForm)
     })


    form2.addEventListener('submit', function (event){
        event.preventDefault();
        let mpForm2 = new FormData(form2)
        insertRowLaser(mpForm2)
    })

    function insertRowInTablaResumen(mpForm){
        let tablaResumenRef = document.getElementById('tablaResumen')   // --------Tabla Resumen
        var newRowRef = tablaResumenRef.insertRow(-1);

        let newCell = newRowRef.insertCell(0);
        newCell.textContent = mpForm.get('referencia')

        newCell = newRowRef.insertCell(1);
        newCell.textContent =  mpForm.get('material')
        newCell = newRowRef.insertCell(2);
        newCell.textContent =  mpForm.get('cantidadPiezas')
        newCell = newRowRef.insertCell(3);
        newCell.textContent =  mpForm.get('margenMp')
        newCell = newRowRef.insertCell(4);
        newCell.textContent =  mpForm.get('precioVentaMp1')
        // newCell = newRowRef.insertCell(5);      
        // newCell.textContent =  mpForm.get('y')
        // newCell = newRowRef.insertCell(6);
        // newCell.textContent =  mpForm.get('x')

    }

    function insertRowLaser(mpForm2){
        let tablaResumenLaser = document.getElementById('tablaResumenLaser')
        newRowRef2 = tablaResumenLaser.insertRow(-1)

        let newCell2 = newRowRef2.insertCell(0);
        newCell2.textContent = mpForm2.get('minutosLamina')
        
        
    }