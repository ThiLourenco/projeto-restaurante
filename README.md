## Projeto Web Restaurante Saboroso com Dashboard


#### Tecnologias utilizadas

- Javascript
- Nodejs
- Mysql
- AdminLTE (template)
- Bower

---

Projeto desenvolvido no curso de javascript da [Hcode Treinamentos](https://www.hcode.com.br)

---
### Pré-requisitos

É necessário ter instalado na sua máquina para execução desse projeto:
- NodeJS
- Banco de dados Mysql
- Gerenciador de pacotes (Npm ou Yarn)
- Bower

### Instalação das dependências

No diretório do projeto execute no terminal:
```bash
#ou $ yarn
$ npm install 
```
Dentro da pasta public/admin
```bash
#caso não tenha o bower instalado execute: $ npm install -g bower
$ bower install
```
---

### Configuração

<strong>Configurando conexão com banco de dados:</strong>

No diretório do projeto, na pasta inc/ <br />
-> Editar arquivo "db.js" com os dados da sua conexão mysql <br />
<i> user </i> e <i> password </i>

---
<strong>Executar a query para criação das tabelas no banco de dados:</strong>

No diretório raiz do projeto, ir na pasta public/db <br />
-> executar o arquivo do "mysql.sql" no Mysql

---

### Execução

Servidor porta: 8080

Para executar o servidor: <br />

```bash
# no diretório do projeto raiz do projeto execute
$ npm run start
```
---
<strong>Página do site:</strong> <br />
http://localhost:8080

<strong>Dashboard (Admin):</strong> <br />
http://localhost:8080/admin/login

<i>login:</i> user@teste.com.br <br />
<i>senha:</i> 123

---

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE.md) para mais detalhes.