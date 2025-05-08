# Backend do Aplicativo de Ensino de Warao

Este repositório contém o backend do nosso aplicativo de ensino da língua Warao, semelhante ao Duolingo. O objetivo é ensinar o Warao por meio de jogos interativos de tradução, utilizando um banco de dados com palavras e frases traduzidas entre o português e o Warao. Através de questões aleatórias, o usuário é desafiado a traduzir palavras ou frases, com uma opção correta entre quatro alternativas.

## Tecnologias Utilizadas

- **Python** (Linguagem de Programação)
- **Django** (Framework Web)
- **Django Rest Framework (DRF)** (API para comunicação backend)
- **NinjaAPI** (API para criação de endpoints rápidos e eficientes)
- **Banco de Dados**: PostgreSQL (ou outro banco de sua escolha)
- **ORM**: Django ORM
- **Dependências**:
  - `django`
  - `djangorestframework`
  - `ninja`
  - `psycopg2` (para PostgreSQL)
  - `django-environ` (para gerenciamento de variáveis de ambiente)

## Estrutura do Projeto

## Estrutura do Projeto

A lógica de geração de perguntas aleatórias é uma parte essencial do jogo. Ela varia de acordo com a fase do usuário, que pode ser dividida em diferentes estágios de aprendizado. A geração de questões é feita da seguinte maneira:

1. **Seleção de Palavras**: O sistema seleciona palavras do dicionário, onde cada chave é uma palavra em português e o valor correspondente é a tradução em Warao.
   
2. **Fase de Aprendizado**: Conforme o usuário avança nas fases do jogo, as palavras e frases se tornam progressivamente mais complexas. Isso é feito controlando o nível de dificuldade da questão com base no progresso do usuário.

3. **Geração de Questões Aleatórias**: A função de geração de perguntas seleciona uma palavra ou frase aleatória para ser traduzida. A partir disso, são geradas 4 alternativas, sendo uma delas a resposta correta e as outras três palavras aleatórias do banco de dados, que servem como distrações.

4. **Funções de Geração de Questões**:
   - **`question_generator()`**: Seleciona uma palavra aleatória do banco de dados, e escolhe 4 alternativas de resposta (uma correta e três incorretas), embaralhando-as para que a posição da resposta correta seja aleatória.



## Iniciando o Projeto

### Pré-requisitos

- Python 3.8 ou superior
- Django

### Instalação

1. Clone o repositório:
    ```bash
    git clone https://link-do-repositorio.git
    cd backend
    ```

2. Crie um ambiente virtual e ative-o:
    ```bash
    python -m venv venv
    source venv/bin/activate  # No Windows: venv\Scripts\activate
    ```

3. Instale as dependências:
    ```bash
    pip install -r requirements.txt
    ```

4. Configure o banco de dados e as variáveis de ambiente:
    - Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias:
    ```env
    DEBUG=True
    DATABASE_URL=postgres://usuario:senha@localhost:5432/banco_de_dados
    SECRET_KEY=gerar_uma_chave_secreta
    ```

5. Realize as migrações:
    ```bash
    python manage.py migrate
    ```

6. Se necessário, carregue os dados iniciais com comandos customizados:
    ```bash
    python manage.py load_data  # exemplo, se você tiver um comando de carga de dados
    ```

### Rodando o servidor

1. Para iniciar o servidor local:
    ```bash
    python manage.py runserver
    ```

2. O servidor está, no momento, rodando de forma local

### Estrutura do Banco de Dados

O banco de dados contém um dicionário de palavras, onde cada chave é uma palavra em português e o valor é a tradução correspondente para o Warao. O banco é usado para gerar perguntas e respostas aleatórias no jogo de tradução.

