# 💰 Projeto Pedagógico: App Minhas Finanças

Este repositório contém um projeto educacional focado no desenvolvimento de uma aplicação de controle financeiro. O objetivo é introduzir conceitos intermediários de manipulação de dados no Front-end, gerenciamento de estado e persistência de informações no navegador.

## 🎯 Objetivos de Aprendizagem

A construção deste aplicativo proporciona o desenvolvimento prático das seguintes habilidades:

### 🧱 HTML5 (Estruturação e Captura de Dados)

**Formulários Dinâmicos:** Uso de diferentes tipos de inputs (`text`, `number`, `radio`) para coleta de dados específicos.

**Controles de Seleção:** Implementação de radio buttons agrupados (atributo `name`) para garantir escolhas exclusivas (Entrada vs. Saída).

**Preparação de Containers:** Estruturação de listas (`<ul>`) vazias que atuam como "âncoras" para o conteúdo gerado de forma dinâmica.

### 🎨 CSS3 (Estilização de Estados e Usabilidade)

**Feedback Visual de Dados:** Aplicação dinâmica de classes utilitárias (`.positivo`, `.negativo`) baseadas nos valores das transações financeiras.

**Indicadores de Estado UI:** Manipulação visual de elementos ativos, como botões de filtro selecionados (classe `.ativo`).

**Acessibilidade de Foco:** Melhoria da usabilidade em formulários utilizando a pseudo-classe `:focus` para destacar campos que estão sendo editados.

**Layout Estrutural:** Uso avançado de Flexbox para centralização do card principal e distribuição inteligente dos botões de interface.

### ⚙️ JavaScript (Lógica de Negócios e Persistência)

**Armazenamento Local (LocalStorage):** Gravação e recuperação de dados de forma persistente diretamente no navegador do usuário.

**Serialização de Dados:** Uso de `JSON.parse()` e `JSON.stringify()` para conversão de texto estruturado em objetos, e vice-versa.

**Manipulação de Arrays:** Aplicação de `.forEach()` para iteração de renderização e cálculo do saldo total, e `.filter()` para as lógicas de exclusão e filtragem de visualização das listas.

**Formatação Nativa (Intl API):** Uso de `Intl.NumberFormat` para padronização automática e confiável de valores monetários no formato Real Brasileiro (BRL).

**Tratamento Matemático:** Utilização de `Math.abs` para higienizar e garantir a integridade dos dados inseridos antes da aplicação das regras de negócio.

**Geração de Identificadores:** Uso do método `Date.now()` para criar chaves únicas indispensáveis para a exclusão precisa de registros.

## 🚀 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript** (Vanilla)

## 📁 Estrutura do Projeto

```text
/
├── index_2.html
├── script_2.js
└── styles_2.css



## 💻 Como Executar e Estudar



1\. Faça o download ou clone este repositório na sua máquina.

2\. Dê um duplo clique no arquivo `index\_2.html` para executá-lo no navegador.

3\. Teste a aplicação inserindo descrições, valores e marcando entradas e saídas.

4\. \*\*Dica de Estudo (LocalStorage):\*\* Aperte `F12` no navegador para abrir as ferramentas de desenvolvedor, acesse a aba \*Application\* (ou \*Aplicativo\*) > \*Local Storage\*, e observe como os dados são gravados em tempo real ao utilizar a aplicação.

