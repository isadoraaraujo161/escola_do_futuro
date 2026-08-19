const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Pasta onde estão HTML, CSS e outros arquivos
app.use(express.static(path.join(__dirname, "public")));

// Página inicial
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`NEXA rodando em http://localhost:${PORT}`);
});

/* =========================================
   ROTA PRINCIPAL
========================================= */

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );
});


/* =========================================
   DADOS INICIAIS DA NEXA
========================================= */

let tarefas = [];


let metas = [];


let financeiro = {
    entradas: 0,
    gastos: 0
};


/* =========================================
   API — TAREFAS
========================================= */

// Listar tarefas
app.get("/api/tarefas", (req, res) => {
    res.json(tarefas);
});


// Criar tarefa
app.post("/api/tarefas", (req, res) => {

    const { titulo, data } = req.body;

    if (!titulo) {
        return res.status(400).json({
            erro: "O título da tarefa é obrigatório."
        });
    }

    const novaTarefa = {
        id: tarefas.length + 1,
        titulo,
        data: data || null,
        concluida: false
    };

    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
});


// Concluir tarefa
app.patch("/api/tarefas/:id", (req, res) => {

    const id = Number(req.params.id);

    const tarefa = tarefas.find(
        tarefa => tarefa.id === id
    );

    if (!tarefa) {
        return res.status(404).json({
            erro: "Tarefa não encontrada."
        });
    }

    tarefa.concluida = !tarefa.concluida;

    res.json(tarefa);
});


// Excluir tarefa
app.delete("/api/tarefas/:id", (req, res) => {

    const id = Number(req.params.id);

    const quantidadeAntes = tarefas.length;

    tarefas = tarefas.filter(
        tarefa => tarefa.id !== id
    );

    if (tarefas.length === quantidadeAntes) {
        return res.status(404).json({
            erro: "Tarefa não encontrada."
        });
    }

    res.json({
        mensagem: "Tarefa excluída com sucesso."
    });
});


/* =========================================
   API — METAS
========================================= */

// Listar metas
app.get("/api/metas", (req, res) => {
    res.json(metas);
});


// Atualizar progresso
app.patch("/api/metas/:id", (req, res) => {

    const id = Number(req.params.id);

    const meta = metas.find(
        meta => meta.id === id
    );

    if (!meta) {
        return res.status(404).json({
            erro: "Meta não encontrada."
        });
    }

    const progresso = Number(req.body.progresso);

    if (
        Number.isNaN(progresso) ||
        progresso < 0 ||
        progresso > 100
    ) {
        return res.status(400).json({
            erro: "O progresso deve estar entre 0 e 100."
        });
    }

    meta.progresso = progresso;

    res.json(meta);
});


/* =========================================
   API — FINANCEIRO
========================================= */

// Consultar financeiro
app.get("/api/financeiro", (req, res) => {

    const saldo =
        financeiro.entradas -
        financeiro.gastos;

    res.json({
        entradas: financeiro.entradas,
        gastos: financeiro.gastos,
        saldo
    });
});


// Adicionar entrada
app.post("/api/financeiro/entrada", (req, res) => {

    const valor = Number(req.body.valor);

    if (Number.isNaN(valor) || valor <= 0) {
        return res.status(400).json({
            erro: "Valor inválido."
        });
    }

    financeiro.entradas += valor;

    res.json(financeiro);
});


// Adicionar gasto
app.post("/api/financeiro/gasto", (req, res) => {

    const valor = Number(req.body.valor);

    if (Number.isNaN(valor) || valor <= 0) {
        return res.status(400).json({
            erro: "Valor inválido."
        });
    }

    financeiro.gastos += valor;

    res.json(financeiro);
});


/* =========================================
   API — RESUMO
========================================= */

app.get("/api/resumo", (req, res) => {

    const tarefasConcluidas =
        tarefas.filter(
            tarefa => tarefa.concluida
        ).length;

    const tarefasPendentes =
        tarefas.filter(
            tarefa => !tarefa.concluida
        ).length;

    const saldo =
        financeiro.entradas -
        financeiro.gastos;

    res.json({
        tarefas: {
            total: tarefas.length,
            concluidas: tarefasConcluidas,
            pendentes: tarefasPendentes
        },

        financeiro: {
            entradas: financeiro.entradas,
            gastos: financeiro.gastos,
            saldo
        },

        metas: metas.length
    });
});


/* =========================================
   API — ASSISTENTE NEXA
========================================= */

app.post("/api/nexa", (req, res) => {

    const { mensagem } = req.body;

    if (!mensagem) {
        return res.status(400).json({
            erro: "Envie uma mensagem para a NEXA."
        });
    }

    const texto = mensagem.toLowerCase();

    let resposta =
        "Entendi. Vou organizar isso para você.";

    if (
        texto.includes("tarefa") ||
        texto.includes("estudar") ||
        texto.includes("fazer")
    ) {
        resposta =
            "Posso transformar isso em uma tarefa e organizar na sua agenda.";
    }

    else if (
        texto.includes("gastei") ||
        texto.includes("gasto") ||
        texto.includes("dinheiro")
    ) {
        resposta =
            "Posso registrar esse gasto no seu controle financeiro.";
    }

    else if (
        texto.includes("meta") ||
        texto.includes("objetivo")
    ) {
        resposta =
            "Posso transformar esse objetivo em uma meta acompanhável.";
    }

    res.json({
        resposta
    });
});


/* =========================================
   TRATAMENTO DE ERRO 404
========================================= */

app.use((req, res) => {

    res.status(404).json({
        erro: "Página ou rota não encontrada."
    });
});


/* =========================================
   INICIAR SERVIDOR
========================================= */

app.listen(PORT, () => {

    console.log(
        `NEXA rodando em http://localhost:${PORT}`
    );

});