# Mapa de Centros Comunitários e Hospitais com Soro Antibotrópico

## 📚 Descrição

Este projeto é um mapa interativo que apresenta centros comunitários e hospitais em todo o Brasil onde o **Soro Antibotrópico** está disponível para atendimento.  
O objetivo é oferecer uma ferramenta pública, responsiva e de fácil acesso para localizar rapidamente unidades de saúde que disponibilizam o soro.

A aplicação foi desenvolvida com foco em:
- Visualização intuitiva através de mapa interativo (via Mapbox)
- Filtros dinâmicos por município, estado e tipo de unidade
- Tabela responsiva com os dados correspondentes
- Estrutura modularizada para facilitar expansões futuras

O projeto está pronto para ser hospedado na **Vercel** inicialmente para testes.

---

## 🎯 Objetivos

- Facilitar a busca por centros e hospitais que disponibilizam Soro Antibotrópico.
- Fornecer uma interface acessível tanto em desktops quanto em dispositivos móveis.
- Modularizar o projeto para permitir atualizações e crescimento futuros.
- Utilizar tecnologias web abertas e hospedagem gratuita.

---

## 🏗️ Estrutura de Diretórios

```
├── README.md
├── index.html
└── src
    ├── components
    │   ├── Filtros.html
    │   ├── Header.html
    │   ├── MapaIframe.html
    │   └── Tabela.html
    ├── scripts
    │   ├── filtros.js
    │   └── tabela.js
    └── styles
        └── style.css
```

**Descrição dos diretórios:**
- `index.html`: Arquivo principal que monta a estrutura da página carregando os componentes.
- `src/components/`: Contém os pedaços da interface HTML (Header, Mapa, Filtros, Tabela).
- `src/scripts/`: Contém os arquivos JavaScript para controle de filtros e preenchimento da tabela.
- `src/styles/`: Contém o estilo CSS utilizado em toda a aplicação.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3** (com fontes do Google Fonts)
- **JavaScript Puro**
- **Mapbox GL JS** (embutido via iframe)
- **Hospedagem na Vercel**

---

## 🚀 Como Rodar Localmente

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/mapa-soros.git
    ```

2. Acesse o diretório:
    ```bash
    cd mapa-soros
    ```

3. Abra o arquivo `index.html` diretamente no navegador  
   (para carregamento via `fetch`, o ideal é usar um servidor local como Live Server do VSCode ou hospedar na Vercel).

---

## ✨ Melhorias Futuras

- Integração com bases de dados atualizadas automaticamente (API).
- Adição de mais filtros (por disponibilidade de tipos de soros, especializações médicas, etc).
- Implementar paginação na tabela de dados.
- Tornar o mapa ainda mais interativo usando Mapbox GL JS diretamente.

---

## 👨‍💻 Autor

Desenvolvido por Douglas Felipe, Ruan Silva e Lucas Santos
Contato: dougbiomed@gmail.com

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---
