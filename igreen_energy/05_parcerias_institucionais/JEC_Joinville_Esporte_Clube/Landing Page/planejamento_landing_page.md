# Planejamento da Landing Page: iGreen Energy & JEC

Este documento contém o planejamento e as ideias iniciais para a construção da Landing Page da parceria entre a iGreen Energy e o Joinville Esporte Clube (JEC).

## 💡 Ideias para a Landing Page

### 1. Identidade Visual (A Estética é Fundamental)
*   **Cores:** Uma fusão elegante entre as cores do JEC (Preto, Branco e Vermelho) e o verde da iGreen Energy. Utilizaremos um tema escuro (Dark Mode) sofisticado com detalhes em verde neon para destacar a economia e vermelho/branco para o clube, transmitindo uma sensação premium e moderna.
*   **Hero Section (Topo da página):** Uma chamada de impacto (ex: *"Apoie o JEC e Economize na Conta de Luz"*). Uma imagem de fundo dinâmica ou um vídeo curto em loop (micro-interações) mostrando a torcida do JEC e o conceito de energia limpa.

### 2. A Calculadora Interativa (O Coração da Página)
*   **Interface:** Em vez de um campo de texto comum, utilizaremos um **Slider (barra de rolagem)** fluido onde o usuário arrasta para definir o valor médio da sua conta de luz atual.
*   **Resultados Dinâmicos (Tempo Real):**
    *   **Sua Economia (10%):** Mostrar o valor economizado por mês e uma projeção anual em destaque.
    *   **Apoio ao JEC (4%):** Mostrar claramente quanto o JEC vai receber mensalmente com a adesão do torcedor. Utilizar um ícone animado (ex: escudo do JEC) ao lado do valor.
*   **Micro-animações:** Os números realizarão uma contagem animada (crescendo do zero até o valor final) quando o usuário interagir com a barra.

### 3. Seção "Como Funciona"
*   Três passos simples com ícones modernos:
    1. Faça a simulação na calculadora.
    2. Cadastre-se sem custo.
    3. Receba o desconto garantido e ajude o JEC.

### 4. Call to Action (CTA - Chamada para Ação)
*   Botões com efeitos de *hover* vibrantes (ex: "Garantir Meu Desconto e Apoiar o JEC") posicionados estrategicamente.

### 5. Prova Social e Transparência
*   Uma seção de "Perguntas Frequentes" (FAQ) interativa com efeito *accordion* (sanfona) para esclarecer dúvidas e quebrar objeções (ex: "Preciso fazer obras?", "É de graça?").

---

## 🛠️ Melhores "Skills" e Abordagem Técnica

Para garantir uma execução de qualidade premium, o desenvolvimento focará nestas áreas:

### 1. Design de Interface Premium (UI/UX)
*   Foco em tipografia moderna (ex: *Inter* ou *Outfit*), uso de *Glassmorphism* (efeito de vidro fosco para o card da calculadora) e sombras suaves para criar profundidade.

### 2. Desenvolvimento Front-end Dinâmico (Core)
*   **Estrutura e Estilo:** Opções sugeridas incluem HTML5 semântico com Vanilla JavaScript e CSS moderno (para máxima performance e leveza) ou a utilização do framework **Next.js/React** (caso haja intenção de integrar ou expandir para um ecossistema maior no futuro).
*   *A definir com o usuário qual será a stack final.*

### 3. Lógica Matemática e Validação (JavaScript)
*   Cálculos puros em tempo real:
    *   `economia_cliente = valor_conta * 0.10`
    *   `retorno_jec = valor_conta * 0.04`
*   Formatação rigorosa dos valores para a moeda local (BRL - R$).
