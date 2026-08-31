# 💈 Barbelex — Barbearia Premium

Landing page moderna e responsiva desenvolvida para a **Barbelex**, combinando o conceito de barbearia clássica com a sofisticação contemporânea. O projeto utiliza **Tailwind CSS v3** para estilização utilitária e **JavaScript ES6+** orientado a objetos para a renderização dinâmica do catálogo de serviços.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível.
- **Tailwind CSS v3**: Estilização baseada em classes utilitárias e customização de tema.
- **JavaScript**: Manipulação da DOM e Programação Orientada a Objetos (`class Servico`).
- **Node.js & npm**: Gerenciamento de dependências e execução dos scripts de build do CSS.

---

## ✨ Funcionalidades e Destaques

* **Navbar Flexbox**: Header fixo com layout responsivo via Flexbox manual e menu dropdown exclusivo para telas menores.
* **Hero Section com Overlay**: Destaque visual principal com background estilizado através de gradientes e ajuste de opacidade para máxima legibilidade.
* **Grid Responsivo de Serviços**: Renderização dinâmica de cards injetados via JavaScript a partir de uma classe de modelo, adaptando o layout para telas pequenas, médias e grandes (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
* **Design System Customizado**: Tema estendido no `tailwind.config.js` contendo fontes personalizadas (`Bebas Neue` e `Inter`) e paleta exclusiva de cores (`gold`, `dark`, `support`).
* **Botão Flutuante de Atendimento**: Acesso rápido a suporte/agendamento fixado no canto inferior direito.

---

## 📁 Estrutura do Projeto

```text
barbelex/
├── src/
│   ├── css/
│   │   ├── input.css      # Diretivas principais do Tailwind (@tailwind base...)
│   │   └── output.css     # CSS final compilado e minificado
│   ├── image/             # Logos, ícones e backgrounds da aplicação
│   └── script/
│       └── script.js      # Lógica do menu mobile e criação dinâmica dos cards
├── index.html             # Documento HTML principal
├── package.json           # Scripts de automação e dependências
└── tailwind.config.js     # Mapeamento de arquivos e extensão do tema
⚙️ Como Executar o Projeto
Pré-requisitos
É necessário possuir o Node.js instalado no sistema.

1. Instalar as dependências
Execute no terminal o comando abaixo para instalar o Tailwind CSS v3:

Bash
npm install
2. Modo Desenvolvimento (Watch)
Para compilar o arquivo output.css automaticamente a cada alteração nos arquivos HTML ou JS:

Bash
npm run watch
3. Build para Produção
Para gerar a versão final otimizada e minificada do CSS:

Bash
npm run build