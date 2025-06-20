# winsystems-app
Challenge para WinSystems
Realizar una app:
En Ionic que utilice
Preferentemente versión 5 con Capacitor.  OK
Angular   OK 
Typescript  OK
SCSS. OK
  Que consuma la Api de superhéroes de Marvel OK
  tenga 2 pantallas. OK
    Una que liste los superhéroes de la API ok

    Pantalla de Listado:
        Para la pantalla de listado se deben mostrar los siguientes datos:
        Name OK
        Thumbnail OK
        La api de Marvel se encuentra en este sitio:
          https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0
          (Es de tipo free, solo hace falta registrarse para poder consumirla)
          USE LA DE SUPERHEROES LIMITADA A 20 RESULTADOS      /characters?limit=20      OK
          
        Trabajar únicamente con los primeros 20 elementos que retorna la Api.           OK
        No aplicar paginado OK

    Otra que muestre el detalle de un superhéroe seleccionado desde la lista anterior.
      Pantalla de Detalle:
        Para la pantalla de detalle se deben mostrar los siguientes datos:
        Nombre OK
        Imagen en miniatura OK
        Cantidad de Comics disponibles OK
        Cantidad de Series disponibles OK
        Cantidad de Stories disponibles OK
        Los datos deben ser enviados desde la pantalla de Listado OK 
        Esta pantalla debe permitir retornar a la anterior con un back button en la toolbar OK

        Otras consideraciones:
          Se valorará la arquitectura usada
          Se valorará la forma de implementar los stylos para la pantallas a través de scss
          No es importante el diseño, no se espera que el desarrollador tenga conocimientos de Visual Designer e implemente un diseño espectacular.
          La app debe funcionar tanto en Ingles como en Español de acuerdo al idioma del device.  OK

