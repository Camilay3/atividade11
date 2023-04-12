const express = require('express');
const router = express.Router();
const app = express();

// definindo routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'hbs');


app.listen(3010, (req, res) => {
    console.log("Servidor ligado")
})

// rotas

app.get('/singin/:userid/:passwd', (req, res) => {
    res.render(`singin`, {
        message: `This is page singin. Usuário reconhecido com sucesso!`
    })
});

app.get('/singup/:name/:email/:passwd/:confpasswd', (req, res) => {
    res.render(`singup`, {
        message: `This is page singup. Usuário reconhecido com sucesso!`
    })
});

app.post('/singin/:userid/:passwd', (req, res) => {
    res.render(`singin`, {
        message: `This is page singin. Usuário reconhecido com sucesso!`
    })
});

app.post('/singup/:name/:email/:passwd/:confpasswd', (req, res) => {
    res.render(`singup`, {
        message: `This is page singup. Usuário reconhecido com sucesso!`
    })
});

function rotas(rota, page) {
    app.get(rota, (req, res) => {
        let a = `This is page ${page}`;
        if (page == 'singin' || page == 'singup') {
            a = `Parâmetros insuficientes para ${page}`
        }
        res.render(`${page}`, {
            message: a
        });
    });

    app.post(rota, (req, res) => {
        let a = `This is page ${page}`;
        if (page == 'singin' || page == 'singup') {
            a = `Parâmetros insuficientes para ${page}`
        }
        res.render(`${page}`, {
            message: a
        });
    });
}

rotas('/', 'index');
rotas('/about', 'about');
rotas('/breaking', 'breaking');
rotas('/donations', 'donations');
rotas('/downloads', 'downloads');
rotas('/login', 'login');
rotas('/news', 'news');
rotas('/singin', 'singin');
rotas('/singup', 'singup');

module.exports = router;