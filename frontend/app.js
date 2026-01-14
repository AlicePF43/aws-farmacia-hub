const produtos = [
  { id: 1, nome: "Dipirona", preco: 5.50 },
  { id: 2, nome: "Paracetamol", preco: 6.00 }
];

const lista = document.getElementById("lista-produtos");

produtos.forEach(produto => {
  const item = document.createElement("li");
  item.textContent = `${produto.nome} - R$ ${produto.preco}`;
  lista.appendChild(item);
});
