---
name: design-system-maquina-de-quilowatts
description: Guideline visual oficial para criação de imagens para Instagram da Máquina de Quilowatts.
---

# 🎨 Design System: Máquina de Quilowatts 2.0 (Instagram)

> **Status:** `OFICIAL`
> **Objetivo:** Criação de imagens de alta conversão para o Instagram
> **Estilo Principal:** Cinematic Dark Mode, Neon Accents, Modern Glow

---

## 1. Identidade Visual e Atmosfera

O design deve transmitir **escassez, autoridade tecnológica e alta conversão**. O visual é focado no universo digital premium ("Cinematic Dark Mode"), utilizando contrastes fortes para direcionar a atenção do usuário aos pontos de conversão. 

*   **Vibe Geral:** Profissional, Tecnológica, Premium, Estratégica (foco em vendas).
*   **Contraste:** Alto contraste. Fundo muito escuro (deep space) com elementos textuais e de interface brilhando em destaque.
*   **Formas:** Cards, caixas com cantos arredondados, bordas finas acesas (glow), elementos centralizados e diagramação limpa.

---

## 2. Paleta de Cores (Tokens Essenciais)

A paleta de cores é inspirada em dashboards de performance, matrizes energéticas e tecnologia de ponta.

| Token Visual | Cor / Estilo | Uso e Aplicação |
| :--- | :--- | :--- |
| **Background Dark** | Deep Space (`#080A0F` a `#000000`) | Fundo predominante de todas as artes. Serve como "lona infinita" para destacar o neon. |
| **Primary Accent** | Verde Neon (`#00E53B` a `#22C55E`) | Botões, bordas ativas, textos de destaque de benefícios (ex: "vende", "atraem"), checkmarks e gráficos. |
| **Warning/Pain Accent**| Vermelho Neon (`#FF3344`) | Usado **estritamente** para destacar "dores" do cliente ou alertas (ex.: "ainda não gera vendas?", "Zero Estratégia"). |
| **Card Surface** | Dark Blue/Grey (`#10151C`) | Fundo e preenchimento de modais/cards de informação para contrastar suavemente com o fundo predominante. |
| **Text Primary** | Branco Puro (`#FFFFFF`) | Textos principais, títulos de impacto (H1/H2) e cópias descritivas curtas. |
| **Text Secondary**| Cinza Claro (`#8E98A5`) | Textos de apoio, letreiros secundários menores e legendas explicativas. |

### 2.1 Efeitos, Sombras e Profundidade
*   **Neon / Glow Effect:** Elementos acentuados (em verde e vermelho) devem conter um *Outer Glow* ou sombreamento (box-shadow) sutil.
*   **Stroke Bounding / Bordas Glass:** Bordas finas (1px a 2px) e precisas delimitando modais, muitas vezes recebendo a cor de Accent e mesclando com o fundo num gradiente.
*   **Background Gradients:** Transições muito suaves (radiais) de roxo profundo ou azul muito escuro para o preto absoluto, criando centros de luz atrás do elemento que se deseja destacar.

---

## 3. Tipografia (Geométrica e Alto Impacto)

A tipografia precisa ser impactante mas modular; hiper-legível até na mais reduzida tela dos smartphones.

*   **Família Principal:** **Montserrat** ou equivalente geométrica e contemporânea (ex: Inter, Poppins).

| Hierarquia | Padrão e Case | Peso (Weight) | Aplicação |
| :--- | :--- | :--- | :--- |
| **H1 (Mega Títulos)** | Caixa Mista / Foco Gigante | **Black / ExtraBold** (800/900) | Títulos principais das artes (Headers e Hooks). Usa espaçamento apertado (tracking negativo). |
| **H2 (Subtítulos)**| Caixa mista, Tamanha Médio| **Bold** (700) | Perguntas instigantes na sub-head ou blocos divisores. |
| **Body (Corpo)** | Sentence Case, Letra limpa | **Regular / Medium** (400/500) | Parágrafos muito curtos de explicação técnica ou argumentação de venda. |
| **Tags / Labels UI** | ALL CAPS, Tracking Positivo | **Bold** (700) | Identificadores pequenos nas artes (ex: "NÍVEL DE ESCASSEZ", "SOLAR"). |

> 💡 **Dica de Aplicação (Highlighting):** Dentro do mesmo título, alterne as cores para gerar subtextos. Exemplo: Deixe a frase inteira em branco (`#FFFFFF`) e apenas as **[Palavras Fortes]** em verde neon. 

---

## 4. Componentes Constantes e Layout

### 4.1 "Glass e UI Flutuante" (Dispositivos)
*   **Mockups:** Apresente sempre os kits rodando materialmente em Celulares em perspectiva 3D isométrica flutuando no espaço escuro.
*   **Micro-UIs Complementares:** Além do celular, espalhe tags soltas com interface translúcida.

### 4.2 Calls to Action (O Botão de Comprar)
*   **Fundo:** Verde Neon sólido em gradiente suave brilho.
*   **Tipografia do Botão:** Texto vazado para o fundo Escuro (Preto), em ALL CAPS, e letras extra grossas (Bold/Black).
*   **Geometria:** Botão com formato Pílula (Pill shape) - `border-radius` alto (100px).
*   Obrigatório constar setas minimalistas ao lado do texto do botão.

### 4.3 Cards Estilizados e Fluxogramas
*   Construa fluxos cognitivos dentro da imagem indicando causa e consequência (ex: Triângulos invertidos / funis de vendas direcionando o olhar do usuário pra o final).
*   Ícones devem ter contornos vivos (Neon Red para 'Doenças', Neon Green para 'A Cura').

---

## 5. Regras de Engenharia Visual (Práticas para Canva/PS)

Para facilitar e padronizar o Workflow da produção das 60 Artes para os parceiros (Instagram Feed e Stories):

1.  **Zonas de Respiro e Áreas Negativas:** Deixe de 30% a 40% da arte coberta apenas de fundo preto fosco/gradual. Este espaço negativo impõe uma imagem mais cara ("luxuosa") ao criativo e ajuda a destacar exclusivamente onde a visualização deve estar. 
2.  **Hierarquia Z (Reading Pattern):** Guiar o olho de cima para baixo: `Problema (Heading)` ➔ `Elaboração (Funil/Gráfico no meio)` ➔ `Solução (Botão/Decisão)` na zona inferior.
3.  **Segurança das Margens (Zone Safe):** Não posicione elementos de alta importância, como Botão de CTA ou Logo nos últimos 40 pixels das bordas laterais ou inferiores do canvas. 

## 6. Proibições Absolutas (Anti-Patterns)
*   **❌ ZERO Fundo Branco/Claro:** Destrói por completo a autoridade dark mode e estética iGreen. 
*   **❌ Abuso de Matizes:** É estritamente proibido criar miscelânea de cores (azuis extravagantes, amarelos ouro ou arco-íris). O poder e o posicionamento estão em manter exclusivamente Verde e Preto (e o Vermelho pra ancorar dores).
*   **❌ Excesso de Texto:** "Máquina" e postagens profissionais não usam blocos longos de texto nas imagens. A legibilidade macro é a regra n° 1 para Feed.

--- 
*Fim do Guideline. Este documento pode ser alimentado diretamente como prompt para geração visual via código.*
