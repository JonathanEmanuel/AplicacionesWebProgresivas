
// Cada peticion que el index realiza está pasando por el fetch
/*     let fecha = new Date().toLocaleTimeString();
    console.info(fecha); */

/* 
self.addEventListener('fetch', evento => {
    console.log(evento.request.url);
    if( evento.request.url == 'http://127.0.0.1:5500/img/cog.png' ){
        console.log('No encontrado')

        //let logoRequest = fetch('http://127.0.0.1:5500/img/capas.png');
        let logoRequest = fetch('img/capas.png');

        console.log( 'fetc' , logoRequest);
        evento.respondWith(logoRequest);
    } else {
        evento.respondWith(  fetch( evento.request ) )
        console.info(evento.request);
    }
 
})
*/

self.addEventListener('fetch', evento => {

    evento.respondWith( 
        fetch(  evento.request ).then( respuesta => {
            console.log(respuesta)
            if( respuesta.status == 404){
                let alt = fetch('img/capas.png' );
                console.log('Respuesta Creada', alt)
                return alt;
            } else {
            console.info(respuesta);
    
                return respuesta;
            }
        })
    )


})