
# Search Languages Api

Projeto construído em Node.js com Express para realizar consumo da Api do github.


## Demonstração

Link da aplicação hospedada: https://fetch-languages-github.herokuapp.com/languages/javascript&desc

 ## Tecnologias ✨
 - [Node.js 💚](https://nodejs.org/en/docs/)
 - [Express 🚂](https://expressjs.com/pt-br/)
 - [Axios ✉](https://github.com/axios/axios)
 - [Cors 🔒](https://www.npmjs.com/package/cors)
 - [Nodemon 🏃🏽‍♂️](https://nodemon.io/)
 
## Instalação de dependências

⚠ Verifique se o gerenciador yarn está instalado em sua máquina.

Abra a terminal e rode o comando:
```bash
$ yarn
```
#

Para iniciar a aplicação:

```bash
$ yarn dev
```
#
A aplicação irá rodar em htps://localhost:5000
#
## Rotas 🚩

#### Retorna todos os itens conforme a linguagem procurada

```http
  GET search/repositories?q=language:${id}&order=${order}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. Para realizar a busca pela linguagem


| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `order`      | `string` | **Obrigatório**. Traz por order crescente ou decrescente dos dados = 'ASC' ou 'DESC'|




## Licença

[Mit](https://opensource.org/licenses/MIT)

## Autor
Feito com 💙 por Gabriel Cavalheiro


