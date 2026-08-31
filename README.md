# 💈 Barbelex — Barbearia Premium

Landing page moderna e responsiva desenvolvida para a **Barbelex**, combinando o conceito de barbearia clássica com a sofisticação contemporânea. O projeto utiliza **Tailwind CSS v3** para estilização utilitária e **JavaScript ES6+** orientado a objetos para a renderização dinâmica do catálogo de serviços.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível.
- **Tailwind CSS v3**: Estilização baseada em classes utilitárias responsivas.
- **JavaScript**: Manipulação do DOM e Programação Orientada a Objetos (`class Servico`).
- **Node.js & npm**: Gerenciamento de dependências e execução dos scripts de build do CSS.

---

## ✨ Funcionalidades e Destaques

* **Navbar Flexbox**: Header fixo com alinhamento manual via Flexbox e menu dropdown exclusivo para telas menores.
* **Hero Section com Overlay**: Destaque visual principal com background estilizado através de gradientes e ajuste de opacidade.
* **Grid Responsivo de Serviços**: Renderização dinâmica de cards injetados via JavaScript adaptando-se a diferentes telas (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
* **Mapeamento de Mídia Tailwind**: Configuração do `tailwind.config.js` que monitora arquivos `.html` e `.js` para inclusão automática de estilos utilitários nos cards dinâmicos.
* **Botão Flutuante de Atendimento**: Acesso rápido a suporte fixado no canto inferior direito.

---

## 📁 Estrutura do Projeto

```text
barbelex/
├── src/
│   ├── css/
│   │   ├── input.css      # Diretivas principais do Tailwind CSS
│   │   └── output.css     # CSS final compilado e minificado
│   ├── image/             # Logos e imagens da aplicação
│   └── script/
│       └── script.js      # Menu mobile e criação dinâmica dos cards
├── index.html             # Documento HTML principal
├── package.json           # Dependências e scripts de automação
└── tailwind.config.js     # Arquivo de configuração de escopo do Tailwind
⚙️ Guia de Configuração e Execução
1. Inicialização do Projeto
No terminal, dentro da pasta raiz do projeto, inicialize o ambiente Node e instale o Tailwind CSS v3:

Bash
# Inicializa o package.json
npm init -y

# Instala a versão 3 do Tailwind CSS como dependência de desenvolvimento
npm install -D tailwindcss@3
2. Configuração do tailwind.config.js
Crie ou edite o arquivo tailwind.config.js na raiz do projeto com o escopo dos arquivos a serem monitorados:

JavaScript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
3. Criação do CSS de Entrada (src/css/input.css)
Crie o arquivo src/css/input.css com as três diretivas base do Tailwind:

CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
4. Configuração dos Scripts no package.json
Edite a seção "scripts" do seu package.json para adicionar os comandos de compilação:

JSON
{
  "name": "barbelex",
  "version": "1.0.0",
  "description": "Landing page Barbearia Barbelex",
  "main": "index.html",
  "scripts": {
    "watch": "tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch",
    "build": "tailwindcss -i ./src/css/input.css -o ./src/css/output.css --minify"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0"
  }
}
5. Execução dos Scripts
Modo Desenvolvimento (Watch):
Monitora e compila automaticamente o output.css a cada alteração salva no HTML ou JS:

Bash
npm run watch
Build para Produção:
Gera a versão final do CSS minificada e otimizada:

Bash
npm run build