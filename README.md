# OBJETIVO

Esta aplicación permite al usuario crear y gestionar listas de rutas-direcciones para hacer más fácil sus domicilios.

## VENTANAS

Mis rutas: En esta ventana estaran todas las rutas que el usuario ha creado, pueden ser organizadas de mayor a menor o viceversa, cada ruta puede ser marcada como completada o eliminada y sera enviada a una lista ubicada en su respectiva ventana.

Agregar nueva ruta: El usuario puede crear cada ruta individualmente ingresando diferentes datos como dirección, nombre de cliente, teléfono etc...

Rutas completadas: Aquí se podran ver todas las rutas que hayan sido marcadas como completadas en la ventana "Mis rutas".

Papelera: Aquí se podran ver todas las rutas que hayan sido eliminadas desde la ventana "Mis rutas", cada ruta tiene la opción de recuperarse para ser regresada a "Mis rutas", también se pueden eliminar todas las rutas de la papelera para borrarlas definitivamente

## ORDEN

Se enfoca en separar cada componente en diferentes carpetas para encontrar con mayor facilidad cualquier parte del codigo que se necesite verificar, se usa la palabra "card" para referirse a toda la información individual de cada ruta ( cada ruta ingresada por el usuario puede contar con información adicional como nombre o teléfono).

La carpeta data contiene archivos de imagen( las imagenes que pueden verse debajo de la barra de navegación que sirven para dar más información al usuario sobre en cual ventana se esta ubicado ) y texto( simplemente contiene el codigo HEX se usa a manera de paleta de colores )

La carpeta context se usa para especificar los datos que seran usados en diferentes componentes los cuales son en su mayoria estados, se usa el hook useContext para pasar estos estados a los diferentes componentes 

### NOTA

Este es mi primer proyecto en react, fue creado para practicar los conocimientos que he aprendido hasta el momento y mi objetivo es pulir más y más esta aplicación mientras voy obteniendo nuevos conocimientos.

