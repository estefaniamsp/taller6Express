const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send("Landing page - Grupo #3")
})

app.get('/integrantes',(req,res)=>{
    res.json([
        {
            "nombre":"Rob Samuel",
            "apellido":"Cuti Umaquinga",
            "edad":20,
            "peso": 83,
            "altura": 1.74,
            "fecha de nacimiento": "11-10-2003",
            "tipo de sangre": "O+",
            "nacionalidad": "Ecuatoriana",
            "correo": "samcuti.03@gmail.com",
            "telefono": "0984253830",

        },
        {
            "nombres":"John Jairo",
            "apellidos":"Mata Manosalvas",
            "edad":21,
            "peso": 70,
            "altura": 1.87,
            "fecha de nacimiento": "27-04-2003",
            "tipo de sangre": "A+",
            "nacionalidad": "Ecuatoriana",
            "correo": "jhonmT0427@gmail.com",
            "telefono": "0990123317",
        },
        {
            "nombre":"Dustin Joel",
            "apellido":"Marcatoma Saldaña",
            "edad":20,
            "peso": 74,
            "altura": 1.60,
            "fecha de nacimiento": "19-03-2004",
            "tipo de sangre": "O+",
            "nacionalidad": "Ecuatoriana",
            "correo": "dustin.marcatoma@epn.edu.ec",
            "telefono": "0979008923",
        },
        {
            "nombre":"Anthony Alejandro",
            "apellido":"Minga Campoverde",
            "edad":22,
            "peso": 85,
            "altura": 1.75,
            "fecha de nacimiento": "27-03-2002",
            "tipo de sangre": "A+",
            "nacionalidad": "Ecuatoriana",
            "correo": "anthony.minga@epn.edu.ec",
            "telefono": "0968862213",
        },
        {
            "nombre":"Alan Josue",
            "apellido":"Rios Mendoza",
            "edad":21,
            "peso": 65,
            "altura": 1.67,
            "fecha de nacimiento": "02-01-2003",
            "tipo de sangre": "O+",
            "nacionalidad": "Ecuatoriana",
            "correo": "alan.rios@epn.edu.ec",
            "telefono": "0960131442",
        },
        {
            "nombre":"Estefania Melisa",
            "apellido":"Sanchez Parraga",
            "edad":23,
            "peso": 49,
            "altura": 1.59,
            "fecha de nacimiento": "11-12-2000",
            "tipo de sangre": "A+",
            "nacionalidad": "Ecuatoriana",
            "correo": "estefania.sanchez01@epn.edu.ec",
            "telefono": "0992190967",
        }
    ])
})

app.get('/products',(req,res)=>{
    res.send(`
            <h1>Catálogo de productos</h1>
                <p>Bienvenidos</p>
                <div class="catalogo">
                    <h3>Catálogo de productos</h3>
                    <ul>
                        <li>
                        <h4>Tarjeta de memoria Samsung MB-MC64G/CN Evo Plus 64GB</h4>
                        <p> Tarjeta MicroSDXC.
                        Su velocidad de lectura es de 100 MB/s y de escritura 60 MB/s.</p>
                        <b>Precio: $19.99</b>
                        </li>
                        <li>
                        <h4>Cargador Inalámbrico Samsung Carga Rápida 15w S8 S9 S10 Ios</h4>
                        <p>Cuenta con tipo de conector tipo c.
                        El voltaje de entrada es de 110V/220V.</p>
                        <b>Precio: $23.99</b>
                        </li>
                        <li>
                        <h4>Producto 3</h4>
                        <p>Descripción del producto 3</p>
                        <b>Precio: $39.99</b>
                        </li>
                    </ul>
                </div>
    `)
})



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});