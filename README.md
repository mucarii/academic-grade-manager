# Gerenciamento Escolar

Um sistema de gerenciamento escolar para gerenciar alunos, disciplinas e notas, desenvolvido com Node.js, Express, Sequelize e SQLite.

## Funcionalidades

- **Gerenciamento de Alunos**: Adicionar, listar, atualizar e deletar informações de alunos.
- **Gerenciamento de Disciplinas**: Adicionar, listar, atualizar e deletar disciplinas.
- **Gerenciamento de Notas**: Adicionar, listar, atualizar e deletar notas associadas a alunos e disciplinas.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para Node.js, utilizado para interação com o banco de dados.
- **SQLite**: Banco de dados leve e de fácil configuração.

## Estrutura do Projeto

academic-grade-manager/
│
├── bin/
│   └── app.pl                  # Script principal para iniciar a aplicação
│
├── lib/
│   ├── AcademicGradeManager/
│   │   ├── Config.pm           # Configuração do banco de dados
│   │   ├── Controller/
│   │   │   ├── Grade.pm        # Controlador para operações de notas
│   │   │   ├── Student.pm      # Controlador para operações de alunos
│   │   │   └── Subject.pm      # Controlador para operações de disciplinas
│   │   ├── Model/
│   │   │   ├── Grade.pm        # Modelo de notas
│   │   │   ├── Student.pm      # Modelo de alunos
│   │   │   └── Subject.pm      # Modelo de disciplinas
│   │   ├── Route/
│   │   │   ├── Grade.pm        # Rotas para operações de notas
│   │   │   ├── Student.pm      # Rotas para operações de alunos
│   │   │   └── Subject.pm      # Rotas para operações de disciplinas
│   │   ├── Middleware/
│   │   │   └── ErrorHandler.pm # Middleware para tratamento de erros
│   │   └── Service/
│   │       └── Logger.pm       # Serviço de logging
│
├── t/
│   └── test_*.pl               # Testes para a aplicação
│
├── .gitignore                  # Arquivos e diretórios a serem ignorados pelo Git
├── Makefile                    # Arquivo para automação de tarefas (opcional)
└── README.md                   # Documentação do projeto

## Configuração

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/academic-grade-manager.git
   cd academic-grade-manager
2. Instale as dependências
   ```bash
   npm install
3. Configure o banco de dados

O projeto usa SQLite e o arquivo do banco de dados será criado automaticamente quando você iniciar o servidor.

4. Inicie o servidor
    ```bash
   npm start
O servidor estará disponível em http://localhost:3000

Endpoints da API
Alunos
GET /students: Lista todos os alunos.
POST /students: Adiciona um novo aluno.
GET /students/
: Obtém detalhes de um aluno específico.
PUT /students/
: Atualiza um aluno específico.
DELETE /students/
: Remove um aluno específico.
Disciplinas
GET /subjects: Lista todas as disciplinas.
POST /subjects: Adiciona uma nova disciplina.
GET /subjects/
: Obtém detalhes de uma disciplina específica.
PUT /subjects/
: Atualiza uma disciplina específica.
DELETE /subjects/
: Remove uma disciplina específica.
Notas
GET /grades: Lista todas as notas.
POST /grades: Adiciona uma nova nota.
GET /grades/
: Obtém detalhes de uma nota específica.
PUT /grades/
: Atualiza uma nota específica.
DELETE /grades/
: Remove uma nota específica.
