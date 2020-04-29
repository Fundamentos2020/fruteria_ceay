

//iniciamos la funcion a dar click al boton
function inicio_Fruta(x) {
     const xhr = new XMLHttpRequest();
	//abrimos la conexion
     xhr.open('GET', 'Productos.json', true);
     var a = 1;
     xhr.onload = function() {
     	//estado donde todo esta bien 
          if(this.status === 200) {
                  const f =  JSON.parse( this.responseText );
                    
                  let htmlTemplate = '';                   
                   //selection de tipo de pokemon 
                   f.fruta.forEach(function(p) {
                    if(a == 1){
                         htmlTemplate += `<tr>`;
                    }
                         htmlTemplate+= `<th>
                              <div>
                                   <img class="fruta" src="${p.imagen}">
                                   <br>
                                   <br>
                                   ${p.nombre}.
                                   <br>
                                   <br>
                                   Precio: ${p.precio}.
                                   <br>
                                   <br>
                                   Cantidad:
                                   <input type="number" name="Cantidad" min="1" max="100" value="1">
                                   kg.`;
                                   if(x == 1){
                                        htmlTemplate +=`
                                        <br>
                                        <br>
                                        <input type="submit" style="margin-bottom: 50px" value="Agregar">`;}
                                   htmlTemplate += `
                              </div>
                         </th>`;
                    if(a == 3){
                         htmlTemplate += `</tr>`
                         a = 0;
                    };
                    a += 1;
              })
              document.getElementById('json').innerHTML = htmlTemplate;
                  
          }
     }
     xhr.send();
}

function inicio_Verdura(x) {
     const xhr = new XMLHttpRequest();
	//abrimos la conexion
     xhr.open('GET', 'Productos.json', true);
     var a = 1;
     xhr.onload = function() {
     	//estado donde todo esta bien 
          if(this.status === 200) {
                  const v =  JSON.parse( this.responseText );
                    
                  let htmlTemplate = '';                   
                   //selection de tipo de pokemon 
                   v.verdura.forEach(function(p) {
                    if(a == 1){
                         htmlTemplate += `<tr>`;
                    }
                         htmlTemplate+= `<th>
                              <div>
                                   <img class="fruta" src="${p.imagen}">
                                   <br>
                                   <br>
                                   ${p.nombre}.
                                   <br>
                                   <br>
                                   Precio: ${p.precio}.
                                   <br>
                                   <br>
                                   Cantidad:
                                   <input type="number" name="Cantidad" min="1" max="100" value="1">
                                   kg.`;
                                   if(x == 1){
                                        htmlTemplate +=`
                                        <br>
                                        <br>
                                        <input type="submit" style="margin-bottom: 50px" value="Agregar">`;}
                                   htmlTemplate += `
                              </div>
                         </th>`;
                    if(a == 3){
                         htmlTemplate += `</tr>`
                         a = 0;
                    };
                    a += 1;
              })
              document.getElementById('json').innerHTML = htmlTemplate;
                  
          }
     }
     xhr.send();
}