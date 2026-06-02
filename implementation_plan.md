# Planejamento: Site e Landing Page (Engenharia Elétrica e Energia Solar)

## Resumo do Entendimento (Understanding)
- **Objetivo:** Criar um site institucional de 5 páginas focado em conversão de leads via Progressive Disclosure, com forte ênfase na Landing Page principal (`index.html`).
- **Público:** Clientes residenciais e comerciais que buscam reduzir a conta de luz, mas que não possuem conhecimento técnico em engenharia elétrica (foco na dor e na oferta "Chave na Mão").
- **Design System:** Rigorosa regra 60-30-10:
  - 60% Claro (Branco e Cinza Claro) para leitura.
  - 30% Azul Marinho Profundo para estrutura e hierarquia.
  - 10% Laranja Solar Vibrante exclusivamente para conversão (CTAs).
- **Abordagem Tecnológica:** Mobile-first, carregamento ultra-rápido, sem distrações.

## Premissas (Assumptions)
- **Performance & Escala:** O site consistirá estritamente em arquivos estáticos (HTML/CSS/JS) sem requisições de backend pesadas, o que garante performance máxima e baixo custo de hospedagem.
- **Manutenção:** Atualizações futuras (como inserção de novas imagens no portfólio) serão feitas via edição manual dos arquivos HTML.
- **Formulários e Contato:** Não teremos processamento de formulários complexos; o engajamento será conduzido integralmente para conversas no WhatsApp.

## Registro de Decisões (Decision Log)
1. **Tecnologia:** Escolhido `HTML/CSS/JS Vanilla` em detrimento de frameworks modernos como React/Next.js. **Motivo:** Evitar complexidade desnecessária para um projeto estático com forte viés de rapidez e SEO de página única.
2. **Arquitetura de Arquivos:** Escolhida a `Arquitetura Centralizada` com apenas um `style.css` global e um `main.js`. **Motivo:** Facilidade de gestão, adesão ao YAGNI (You Aren't Gonna Need It) e edição rápida e centralizada da regra 60-30-10 via Variáveis CSS.

## Open Questions
- Nenhuma no momento. O briefing e o processo de Brainstorming elucidaram todas as questões técnicas e visuais.

## Proposed Changes (Plano de Execução)

Abaixo está o roteiro dos arquivos que serão criados durante a etapa de implementação:

### Estrutura Base
#### [NEW] `index.html`
A página principal da Landing Page, contendo:
- Header fixo com âncoras/links de Progressive Disclosure.
- Hero Section de alto impacto com H1 matador.
- Seção de "Dor x Solução".
- Benefícios em formato Grid.
- Prova Social (Depoimentos).
- Ancoragem (Custos vs Investimento) + FAQ em acordeão.
- Rodapé e CTA final.

#### [NEW] `sobre.html`, `servicos.html`, `portfolio.html`, `contato.html`
Páginas estruturais para absorver o tráfego secundário da página principal, mantendo a identidade visual e abrigando detalhes técnicos para o público que buscar validação da autoridade.

### Estilos e Interação
#### [NEW] `css/style.css`
A folha de estilos contendo:
- Variáveis CSS (CSS Custom Properties) do Design System para gerir as paletas Azul, Laranja e Cinza.
- Tipografia base (Montserrat/Inter).
- Utilities e estilos responsivos (Mobile, Tablet, Desktop).

#### [NEW] `js/main.js`
Script contendo a lógica leve para:
- Efeito de *scroll* do header.
- Abertura/fechamento do acordeão de FAQ.
- Ação de "Menu Hamburger" para o modo Mobile.

### Mídia
#### [NEW] `assets/`
Diretório destinado para receber futuras imagens (`.webp`/`.jpg`) de hero e portfólio, além de ícones/logotipo.

## Verification Plan

### Testes Manuais
- Inspecionar através do Developer Tools o fluxo de cores 60-30-10 para checar aderência restrita.
- Testar a velocidade de carregamento em ambiente simulado de 3G/4G no Chrome DevTools.
- Conferir a fluidez das animações no FAQ.
- Garantir a persistência e visualização do gatilho fixo do WhatsApp em todos os tamanhos de tela.

> [!IMPORTANT]  
> Este plano marca a finalização da fase de Brainstorming. Se o plano e a arquitetura estiverem de acordo, por favor me dê sua aprovação final. Com o seu "OK", a implementação começará imediatamente escrevendo e criando os arquivos listados.
