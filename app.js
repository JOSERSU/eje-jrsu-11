//Definir variables del servidor 

const express = require('express'); //http
const hbs = require('hbs');//documentos dinamica

const bodyParser = require('body-parser'); //ProcesAR SOLICITUDES    

const port = process.env.PORT || 3000; //Puerto 

const app = express();
app.set('view engine','hbs');

hbs.registerPartials(__dirname+'/view/partials', ()=>{});

//middwlere use

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json())

//Definir rutas

app.post('/dashboard', (req,res)=>{
    /*res.send('Aqui va es dash'); //texto
    res.sendFile('dashboard.html');//archivo*/
    
    res.render('dashboard', {
        nombre: "Jose Refugio Salinas Uribe",
        email: "salin@gmail.com"
    });//vista dinamica- html dinamico
})

app.get('/login', (req,res)=>{
    res.render('login');
})

app.get('/dashboard', (req,res)=>{
    res.render('dashboard');
})

app.get('*',(req,res)=>{
    res.render('404')
})

//esta parte es para el desarrollador

app.listen(port,()=>{
    console.log('El servidor express esta corriendo en el puerto: ',port)
})





