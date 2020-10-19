$('#input-excel').change(function(e){
    var reader = new FileReader();
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = function(e) {
      var data = new Uint8Array(reader.result);
      var wb = XLSX.read(data,{type:'array'});
      var htmlstr = XLSX.write(wb,{sheet:"Hoja1", type:'binary',bookType:'html'});
      $('#wrapper')[0].innerHTML += htmlstr;
      
    }

    
});



function addColumn(tabla,columna,num_colum_a_insertar){
  /** Esta funcion inserta una columna html despues de una columna seleccionada 
   * tabla = la tabla que modificamos
   * columna = es el indice de la columna en donde insertaremos una nueva columna
   * num_colum_a_insertar = cuantas columnas se van a insertar despues de la columna seleccionada
   * Created by gaspardzul on 8/10/15.
   */
  $(tabla).find('tr').each(function(i,row){ // recorremos todas sus rows
      var primer_td= $(row).find('td,th')[columna]; // obtenemos  columna (por que insertaremos despues de esta)
      if(primer_td.tagName=='TH'){
          for(var i=0;i<=num_colum_a_insertar;i++){
              //insertamos una cabecera despues de la primera cabecera
              $('<th></th>').insertAfter(primer_td);
          }
      }else{
          for(var i=0;i<=num_colum_a_insertar;i++){
              //insertamos un valor despues del primer valor de la primera columna
              $('<td class="contenn"><a class="boton" onclick="hola(this.tagName)">Confirmar pago</a></td>').insertAfter(primer_td);
          }
      }
  });
}