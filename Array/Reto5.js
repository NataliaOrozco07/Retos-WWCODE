let miembrosFamilia=[
    {nombre: 'Elena', edad: 62, consanguinidad:'Mama'},
    {nombre: 'Manuel', edad: 63, consanguinidad:'Papa'},
    {nombre: 'Tatiana', edad: 30, consanguinidad:'Hermana'},
    {nombre: 'Emmanuel', edad: 16, consanguinidad:'Hermano'},
    {nombre: 'Santiago', edad: 10, consanguinidad:'Sobrino'},
    {nombre: 'Julieta', edad: 5, consanguinidad:'Sobrina'},
    {nombre: 'Carlos', edad: 50, consanguinidad:'Tio'},
    {nombre: 'Gloria', edad: 45, consanguinidad:'Tia'},
    {nombre: 'Maruja', edad: 80, consanguinidad:'Abuela'},
    {nombre: 'Rafael', edad: 89, consanguinidad:'Abuelo'},
];

let mayoresEdad = miembrosFamilia.filter(integrante => integrante.edad >= 18);
let menoresEdad = miembrosFamilia.filter(integrante => integrante.edad < 18);
let primerGrado = miembrosFamilia.filter(integrante => integrante.consanguinidad === 'Mama' || integrante.consanguinidad === 'Papa' || integrante.consanguinidad === 'Hermana' || integrante.consanguinidad === 'Hermano' || integrante.consanguinidad === 'Sobrino' || integrante.consanguinidad === 'Sobrina' || integrante.consanguinidad === 'Tio' || integrante.consanguinidad === 'Tia' || integrante.consanguinidad === 'Abuelo'|| integrante.consanguinidad === 'Abuela');

console.log(mayoresEdad);
console.log(menoresEdad);
console.log(primerGrado);
