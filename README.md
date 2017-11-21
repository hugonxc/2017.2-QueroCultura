>## Alunos:
Hugo Neves de Carvalho __Mat.:__ 15/0011792  
Josué Nascimento da Silva __Mat.:__ 15/0038933

>## O Projeto Quero Cultura
[![Build Status](https://travis-ci.org/fga-gpp-mds/2017.2-QueroCultura.svg?branch=master)](https://travis-ci.org/fga-gpp-mds/2017.2-QueroCultura)
[![Code Health](https://landscape.io/github/fga-gpp-mds/2017.2-QueroCultura/devel/landscape.svg?style=flat)](https://landscape.io/github/fga-gpp-mds/2017.2-QueroCultura/devel)
[![Code Climate](https://codeclimate.com/github/fga-gpp-mds/2017.2-QueroCultura/badges/gpa.svg)](https://codeclimate.com/github/fga-gpp-mds/2017.2-QueroCultura)
[![Coverage Status](https://coveralls.io/repos/github/fga-gpp-mds/2017.2-QueroCultura/badge.svg?branch=HEAD)](https://coveralls.io/github/fga-gpp-mds/2017.2-QueroCultura?branch=HEAD)
[![AUR](https://img.shields.io/aur/license/yaourt.svg?colorB=ff69b4)](https://github.com/fga-gpp-mds/2017.2-QueroCultura/blob/devel/LICENSE)

O projeto Quero Cultura surgiu de uma demanda por visualização de dados do Ministério da Cultura (MinC) por meio do [_Mapas Culturais_](http://mapas.cultura.gov.br/). O _Mapas Culturais_ é um software livre para mapeamento colaborativo e gestão da cultura.
O Quero Cultura tem como objetivos a visualização dos dados de eventos, projetos e espaços culturais e o relacionamento dos mesmos por meio de indicadores.

O repositório é mantido e gerenciado por alunos de Engenharia de Software da Universidade de Brasília no campus Gama (UnB/FGA). A equipe de alunos é reponsável pela ordem do repositório e compromente-se a ajudar e orientar a todos que desejam contribuir. Caso possua interesse, consulte nossas [políticas](https://github.com/fga-gpp-mds/2017.2-QueroCultura/wiki/Pol%C3%ADticas-de-Reposit%C3%B3rio). Dúvidas ou sugestões devem ser encaminhada aos [gestores do projeto](https://github.com/fga-gpp-mds/2017.2-QueroCultura/wiki/Contatos).

>## GCS implementado
Para esse projeto foram implantados os seguintes recursos:
- Travis CI
- Docker e Docker compose
- Gulp
- Deploy Contínuo (heroku)
- Empacotamento .egg

>### CI
Tanto o arquivo de configuração quanto as execuções de build da CI se encontram presente no git.

>### Docker e Docker-compose
O Quero Cultura utiliza a plataforma [Docker](https://www.docker.com/what-docker) para isolamento, criação e automação do ambiente de desenvolvimento evitando problemas de compatibilidade. Para isso é necessário a prévia instalação das ferramentas no seu ambiente:

1. Instale o [docker](https://docs.docker.com/engine/installation/)
2. Instale o [docker compose](https://docs.docker.com/compose/install/)
3. Clone o repositório usando o comando:
  ```
  git clone https://github.com/hugonxc/2017.2-QueroCultura.git
  ```
4. Crie e inicie os containers para os serviços:
  ```
  docker-compose up
  ```
5. A aplicação estará disponivél na porta `8000` do seu `localhost`: [http://localhost:8000](http://localhost:8000)

>### Gulp
A task implementada utilizando o gulp funciona automatizando o reload do browser quando se altera arquivos do tipo **.css**, **.js**, **.html**. Esse serviço é executado automaticamente junto com a provisão do docker. Assim o para utilizar desse recurso de atualização do browser você deve acessar a aplicação na porta `3000` do seu `localhost`: [http://localhost:3000](http://localhost:3000) e não mais na porta 8000.

>### Deploy Contínuo (heroku)
O deploy continuo dessa aplicação ocorre utilizando a integração direta entre GitHub e Heroku. Para visualizar a versão atual basta clicar [aqui](https://quero-cultura.herokuapp.com). 
__PS:__ Algumas limitações foram encontradas na completa execução do heroku, pois o código internamente faz chamadas utilizando apenas **http**, porém esse tipo de chamada é bloqueada pelo heroku, assim comprometendo algumas funcionalidades.

>### Empacotamento .egg 
Para esse projeto foi escolhido o empacotamento .egg. Para execução do mesmo existem duas formas, ou executando diretamente 
```bash
$ sudo pip install .
```  
ou através do **.tar.gz** presente na pasta __dist/__ neste mesmo repositório.

Com a instalação feita, é possível executar em seu terminal os comandos:
```bash
$ quero_cultura # Sobe o servidor
$ quero_cultura_stop # Mata a execução do servidor
```  