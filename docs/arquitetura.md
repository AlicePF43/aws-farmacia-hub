# Arquitetura do Projeto – AWS Farmácia Hub

## Visão Geral
Este projeto apresenta uma arquitetura conceitual em nuvem para uma farmácia fictícia,
utilizando serviços da AWS com foco em redução de custos, escalabilidade e simplicidade.

A solução foi pensada para substituir servidores físicos por serviços gerenciados e
serverless, pagando apenas pelo uso.

## Componentes da Arquitetura

### Frontend – Amazon S3
- Hospedagem de site estático (HTML, CSS e JavaScript)
- Baixo custo e alta disponibilidade
- Distribuição do catálogo de produtos e interface do cliente

### Backend – AWS Lambda
- Funções responsáveis pelo processamento das requisições
- Criação de pedidos
- Atualização de status
- Integração com o banco de dados
- Modelo serverless, sem necessidade de gerenciar servidores

### Banco de Dados – Amazon RDS
- Banco de dados relacional gerenciado
- Armazenamento de produtos, clientes e pedidos
- Backups automáticos e alta confiabilidade

### Integração – API Gateway
- Responsável por receber as requisições do frontend
- Encaminha as chamadas para as funções Lambda
- Centraliza e organiza as rotas da aplicação

## Fluxo Simplificado da Aplicação

Usuário  
→ Frontend (S3)  
→ API Gateway  
→ AWS Lambda  
→ Amazon RDS  

## Observação
Esta arquitetura é conceitual e foi utilizada apenas para fins educacionais,
não havendo integração real com a AWS neste protótipo local.
