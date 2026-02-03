1. O que é o Node.js? Explique sua finalidade e por que ele é considerado um ambiente de execução e não uma linguagem de programação.
O Node.js é um ambiente de execução (runtime environment) de código aberto e multiplataforma, construído sobre o motor V8 JavaScript do Google Chrome. A principal finalidade do Node.js é permitir o desenvolvimento de aplicações backend (servidor) rápidas, escaláveis e de alta performance, utilizando JavaScript, uma linguagem tradicionalmente restrita ao frontend.
2. Qual a diferença entre Node.js e JavaScript executado no navegador? Cite pelo menos duas diferenças.
A principal diferença é que o Node.js é um ambiente de execução (runtime) que permite executar JavaScript fora do navegador (no servidor/máquina), enquanto o JavaScript no navegador é focado no front-end e interação com o usuário na página web
3. O que é o V8 Engine e qual sua importância para o funcionamento do Node.js?
O V8 Engine é um motor (engine) de JavaScript de código aberto, de alto desempenho, desenvolvido pelo Google e escrito em C++. Ele é projetado para compilar e executar código JavaScript diretamente em código de máquina que o computador entende, em vez de interpretá-lo linha por linha.

4. Explique o conceito de I/O não bloqueante no Node.js. Por que isso melhora o desempenho de aplicações? 
O I/O (Input/Output) não bloqueante é um dos pilares fundamentais do Node.js, permitindo que a plataforma gerencie operações de entrada e saída (como ler arquivos, fazer consultas ao banco de dados ou requisições HTTP) sem interromper a execução do fluxo principal de código JavaScript. Em vez de esperar que uma operação lenta seja concluída para passar para a próxima linha de código, o Node.js delega essa tarefa ao sistema operacional (via libuv) e continua processando novas requisições
5. O que é o Event Loop? Descreva, de forma resumida, como ele funciona.
O Event Loop (laço de eventos) é um mecanismo fundamental no JavaScript que permite a execução de operações assíncronas e não-bloqueantes, mesmo sendo uma linguagem de thread única (single-threaded). Ele garante que o código síncrono seja executado primeiro e, em seguida, gerencia a execução de tarefas assíncronas (como requisições, timers, cliques) sem travar a thread principal

6. O que são módulos no Node.js? Explique a diferença entre:
Módulos internos
São módulos que já vêm embutidos no Node.js durante a instalação. Eles fornecem funcionalidades essenciais para interagir com o sistema operacional e rede.
Módulos externos
São módulos criados pela comunidade ou outras empresas e disponibilizados através do npm (Node Package Manager). Eles estendem as capacidades do Node.js.  
Módulos criados pelo desenvolvedor
São arquivos JavaScript criados por você dentro da sua própria aplicação para organizar seu código. Eles encapsulam lógicas específicas da sua aplicação. 

7. Para que serve o arquivo package.json em um projeto Node.js? Cite pelo menos três informações que ele pode conter.
O arquivo package.json é fundamental em projetos Node.js, servindo como o manifesto e arquivo de configuração central. Ele gerencia as dependências do projeto (bibliotecas), define scripts de automação, metadados (nome, versão) e configura o ambiente

8. O que é o npm? Explique sua função no desenvolvimento de aplicações Node.js.
O npm (acrônimo de Node Package Manager) é o gerenciador de pacotes padrão para o ambiente de execução Node.js e o maior repositório de software de código aberto do mundo. A principal função do npm é simplificar a gestão de dependências, bibliotecas e ferramentas de terceiros em projetos JavaScript (Node.js, React, Angular, etc.).

9. O que é uma API REST e como o Node.js pode ser usado para desenvolvê-la?
Uma API REST (Representational State Transfer) é um conjunto de regras e diretrizes arquiteturais que permite que sistemas distintos troquem informações pela internet, geralmente utilizando o protocolo HTTP. Ela trata recursos (dados) como URLs, e utiliza métodos HTTP padrões para manipulá-los, sendo o formato JSON o mais comum para a troca de dados. O Node.js é um ambiente de tempo de execução JavaScript no lado do servidor, ideal para desenvolver APIs REST devido à sua arquitetura leve, assíncrona e baseada em eventos

10. Cite duas vantagens e duas desvantagens do uso do Node.js em aplicações web.
Alta Performance e Escalabilidade: Por ser baseado em um modelo de I/O (entrada/saída) assíncrono e não bloqueante, o Node.js é extremamente rápido e eficiente para lidar com múltiplas requisições simultâneas, sendo ideal para aplicações em tempo real.
Uso de JavaScript no Backend e Frontend: Permite que desenvolvedores                                  utilizem a mesma linguagem (JavaScript) tanto no servidor quanto no cliente, facilitando a criação de aplicações full-stack e aumentando a produtividade
