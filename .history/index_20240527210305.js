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
            "fecha de nacimiento": "11-10-200",
            "tipo de sangre": "O+",
            "nacionalidad": "Ecuatoriana",
            "correo": "",
            "telefono": "",

        },
        {
            "nombre":"Juan",
            "apellido":"Álvear",
            "edad":38
        },
        {
            "nombre":"Ximena",
            "apellido":"Salazar",
            "edad":33
        }
    ])
})

app.get('/products',(req,res)=>{
    res.send(`
            <h1>Catálogo de productos</h1>
                <p>Bienvenidos</p>
    `)
})



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});