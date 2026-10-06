document.getElementById('formularioUsuario').addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const sexo = document.getElementById('sexo').value;
    const divResultado = document.getElementById('resultado');

    let urlImagen = '';
    let descripcion = '';

    if (edad < 18) {
        if (sexo === 'H') {
            urlImagen = 'https://images.unsplash.com/photo-1626278664285-f796b9ee7806?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2ZW5nZXJzfGVufDB8fDB8fHww';
            descripcion = 'Avengers';
        } else {
            urlImagen = 'https://images.unsplash.com/photo-1734034898083-ee06576f0597?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyYmllfGVufDB8fDB8fHww';
            descripcion = 'Una muñeca';
        }
    } 
    else if (edad >= 18 && edad <= 30) {
        if (sexo === 'H') {
            urlImagen = 'https://plus.unsplash.com/premium_photo-1683129651802-1c7ba429a137?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFudHJvfGVufDB8fDB8fHww'; 
            descripcion = 'antro';
        } else {
            urlImagen = 'https://plus.unsplash.com/premium_photo-1683134294916-473fc738750b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BhfGVufDB8fDB8fHww'; 
            descripcion = 'spa';
        }
    } 

    else {
        if (sexo === 'H') {
            urlImagen = 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2ltbmFzaW98ZW58MHx8MHx8fDA%3D'; 
            descripcion = 'Gimnasio';
        } else {
            urlImagen = 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D'; 
            descripcion = 'coffe shop';
        }
    }

    divResultado.innerHTML = `
        <h3>¡Hola, ${nombre}!</h3>
        <p>Tienes ${edad} años.</p>
        <img src="${urlImagen}" alt="${descripcion}">
    `;
});