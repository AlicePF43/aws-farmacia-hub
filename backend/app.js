const express = require("express");
const app = express();

app.use(express.json());

// Simulando um banco de dados
let produtos = [
  { id: 1, nome: "Dipirona", preco: 5.50 },
  { id: 2, nome: "Paracetamol", preco: 6.00 }
];

let pedidos = [];

// Rota para listar produtos
app.get("/produtos", (req, res) => {
  res.json(produtos);
});

// Rota para criar pedido
app.post("/pedidos", (req, res) => {
  const pedido = {
    id: pedidos.length + 1,
    itens: req.body.itens,
    status: "Criado"
  };

  pedidos.push(pedido);
  res.status(201).json(pedido);
});

// Servidor local
app.listen(3000, () => {
  console.log("Backend rodando em http://localhost:3000");
});
