//querySelectors
const tabla = document.querySelector('#dataTable tbody');
const forms = document.querySelector('#formulario');
let matricula = document.querySelector('#matricula').value




//Variables
//coche
let nombre;
let 

arrayCoches = [
    { id: 1, matricula: '2385HYN', estado: 'alta' },
    { id: 2, matricula: '1403MAR', estado: 'baja' },
    { id: 3, matricula: '0921TER', estado: 'alta' },
    { id: 4, matricula: '7458HEL', estado: 'alta' },
    { id: 5, matricula: '1331PUF', estado: 'alta' },
    { id: 6, matricula: '7654SAD', estado: 'alta' },
    { id: 7, matricula: '9713FIN', estado: 'alta' },
    { id: 8, matricula: '5478IMO', estado: 'baja' }
]
//propietarios
const arrayPropietarios = [
    { id: 1, modelo: 'Kia', direccion: 'Calle San Ambrosio 12', telefono: '666666666', nombre: 'Alvaro' },
    { id: 3, modelo: 'Ford', direccion: 'Calle San Astio 12', telefono: '666666666', nombre: 'Jose' },
    { id: 4, modelo: 'Hyundai', direccion: 'Calle San Bolsillo 12', telefono: '666666666', nombre: 'Juan' },
    { id: 5, modelo: 'Volkswagen', direccion: 'Calle San Amigo 12', telefono: '666666666', nombre: 'Ana' },
    //el seis esta dado de alta pero no tenemos datos del conductor
    { id: 7, modelo: 'Audi', direccion: 'Calle San Antonio 12', telefono: '666666666', nombre: 'Alfredo' }
]
//multas
const arrayMultas = [
    { id: 5, multas: 2 },
    { id: 4, multas: 5 },
    { id: 7, multas: 10 },
]

//dato recogido por el input:

//almacen de Datos
const almacenDatos = [];
//Evento submit
forms.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const coche = arrayCoches.find((item) => item.matricula === matricula)
    let id = coche.id;
    validar(id);
})

//validar los datos con promesas
const getCoche = async (id) => {
    const coche = arrayCoches.find((item) => item.id === id)
    if (!coche) {
        throw (`El coche de matricula ${matricula} e ${id} no esta en nuestra base de datos`)
    } else {
        console.log(coche);//objeto {id: , matricula:, estado:}
        return (coche);
    }
}

const getPropietario = async(id, matricula, estado) => {
    const propietario = arrayPropietarios.find((item)=>item.id === id)
    if(!propietario){
        throw(`El propietario del coche de matrícula ${matricula} está dado de ${estado}, no tenemos sus datos`)
    }else{
        console.log(propietario);
        return (propietario);
    }
}

const getMultas = async(id, matricula, nombre)=>{
    const multasObj = arrayMultas.find((item)=>item.id===id);
    if(!multasObj){
        throw(`El propietario ${nombre} del coche de matrícula ${matricula} tiene ${multas}`);
    }
}

const getDatos = async(id) =>{
    try{
        const {matricula} = await getCoche(id)
        const {estado} = await getCoche(id) 
        console.log(matricula);
        const {nombre} = await getPropietario (id, matricula, estado)
        console.log(nombre);
    }catch(error){
        console.log(error);
    }
}
getDatos(id);
//Funciones pintar
//pintar errores
const pintarErrores = () => {

}
//pintar tabla
const pintarTabla = () => {

}