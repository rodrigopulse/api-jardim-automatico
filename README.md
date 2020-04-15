# API Mais Clorofila
Api para catalogar plantas

## .env
Configure o arquivo .env com os dados para conexão com o mongodb
```
DB_HOST=ENDEREÇO DO HOST
DB_USUARIO=USUARIO DO BD
DB_SENHA=SENHA
PORTA=PORTA QUE SERÁ USADA
```

## Instalação
```
npm install
```

## Desenvolvimento
A aplicação usa nodemon e babel. Para rodar a api em dev, use
```
npm start
```

## Contribuições
Pull requests são bem vindos :)

## Rotas
| Rotas                                 | Descrição                                                       |
|:--------------------------------------|:----------------------------------------------------------------|
| \plantas?limite={limite}&pular{pular} | Retorna um json com todas as plantas, com limite e páginação    |

## Versões
- Alpha

## Autor
- Rodrigo Godoy | [Linkedin](rodrigogodoy.com.br/linkedin)
## Licença
Esse software está sob licença [MIT](/LICENSE.txt)
