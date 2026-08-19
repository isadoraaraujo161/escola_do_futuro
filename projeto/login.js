const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Permite receber dados dos formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Arquivos HTML e CSS
app.use(express.static(path.join(__dirname, "public")));


/* =========================================
   USUÁRIOS
========================================= */

const usuarios = [
    {
        email: "teste@nexa.com",
        senha: "123456"
    }
];


/* =========================================
   PÁGINA DE LOGIN
========================================= */

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );
});


/* =========================================
   LOGIN
========================================= */

app.post("/login", (req, res) => {

    const { email, senha } = req.body;

    // Verifica se os campos foram preenchidos
    if (!email || !senha) {
        return res.send(`
            <h1>Erro</h1>
            <p>Preencha o e-mail e a senha.</p>
            <a href="/">Voltar</a>
        `);
    }

    // Procura o usuário
    const usuario = usuarios.find(
        user =>
            user.email === email &&
            user.senha === senha
    );

    // Usuário não encontrado
    if (!usuario) {
        return res.send(`
            <h1>Login inválido</h1>
            <p>E-mail ou senha incorretos.</p>
            <a href="/">Tentar novamente</a>
        `);
    }

    // Login realizado
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">

        <head>
            <meta charset="UTF-8">
            <title>NEXA</title>
        </head>

        <body>

            <h1>Bem-vinda à NEXA! 👋</h1>

            <p>
                Login realizado com sucesso.
            </p>

            <p>
                Você entrou como:
                <strong>${usuario.email}</strong>
            </p>

            <a href="/">
                Sair
            </a>

        </body>

        </html>
    `);
});


/* =========================================
   CADASTRO
========================================= */

app.post("/cadastro", (req, res) => {

    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.send(`
            <h1>Erro</h1>
            <p>Preencha todos os campos.</p>
            <a href="/">Voltar</a>
        `);
    }

    // Verifica se já existe
    const existe = usuarios.find(
        user => user.email === email
    );

    if (existe) {
        return res.send(`
            <h1>Usuário já existe</h1>
            <p>Esse e-mail já está cadastrado.</p>
            <a href="/">Voltar</a>
        `);
    }

    // Adiciona usuário
    usuarios.push({
        email,
        senha
    });

    res.send(`
        <h1>Cadastro realizado! 🎉</h1>

        <p>
            Sua conta foi criada com sucesso.
        </p>

        <a href="/">
            Fazer login
        </a>
    `);
});


/* =========================================
   SERVIDOR
========================================= */

app.listen(PORT, () => {

    console.log(
        `NEXA rodando em http://localhost:${PORT}`
    );

});