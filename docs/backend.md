# Backend

No âmbito do projeto de gerenciamento de um posto de gasolina, o backend foi construído com a poderosa combinação de tecnologias, com destaque para o framework NestJS, Docker e o banco de dados relacional Postgres.

O NestJS foi escolhido como o principal framework para o backend devido à sua estrutura modular, arquitetura baseada em módulos e a capacidade de integrar facilmente com bibliotecas externas. Seu uso proporciona uma organização clara e eficiente do código, facilitando a manutenção e expansão do sistema.

Para garantir uma implementação consistente e isolada do ambiente de desenvolvimento, produção e testes, optou-se pelo uso do Docker. Com o Docker, foi possível encapsular o ambiente do NestJS, incluindo suas dependências, em contêineres independentes, assegurando consistência entre diferentes ambientes e simplificando o processo de implantação.

O banco de dados escolhido foi o Postgres, um sistema de gerenciamento de banco de dados relacional conhecido por sua confiabilidade e desempenho. Utilizando o Docker Compose, foi possível orquestrar facilmente a configuração do ambiente, garantindo uma integração tranquila entre o NestJS e o Postgres.

A combinação do NestJS, Docker e Postgres proporcionou não apenas uma implementação eficiente e escalável, mas também facilitou a manutenção e colaboração entre desenvolvedores. O NestJS, com seu sistema de injeção de dependências e arquitetura modular, permitiu a construção de endpoints RESTful de forma estruturada e fácil de entender.

Além disso, a utilização do Docker simplificou o processo de implantação, garantindo que a aplicação seja executada de maneira consistente em diferentes ambientes, independentemente das configurações locais. A escolha do Postgres como banco de dados proporcionou uma base sólida para armazenamento de dados, garantindo a integridade e a confiabilidade das informações registradas pelos motoristas.

Em resumo, a escolha do NestJS com Docker e Postgres no backend não apenas atendeu aos requisitos funcionais do projeto, mas também estabeleceu uma base sólida para um sistema robusto, escalável e de fácil manutenção. Essa combinação de tecnologias reflete o compromisso com as melhores práticas de desenvolvimento e a busca por soluções eficientes e confiáveis.