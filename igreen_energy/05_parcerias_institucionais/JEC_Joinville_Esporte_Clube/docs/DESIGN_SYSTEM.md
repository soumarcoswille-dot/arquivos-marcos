# 📐 Design System & Prompt Guide — Apresentação JEC × iGreen

> Documento de referência para geração de imagens com IA e padronização visual da apresentação comercial para a presidência do Joinville Esporte Clube (JEC).
> Baseado no framework "Máquina de Quilowatts 2.0", adaptado para o contexto esportivo de alto nível.

---

## 1. Visão Geral

### Projeto
**Pitch Presidencial JEC × iGreen** — Apresentação estratégica para fechar o Joinville Esporte Clube como licenciado master da iGreen Energy.

### Objetivo Visual
Unir a **paixão e tradição** do futebol (JEC) com a **inovação tecnológica e rentabilidade** da iGreen Energy. As imagens geradas devem transmitir magnitude, modernidade, profissionalismo executivo e o conceito de "estádio inteligente" (Smart Stadium).

### Público-Alvo das Imagens
- Presidente e Diretoria Executiva do JEC.

### Formato Padrão
- **Proporção:** 16:9 horizontal (Apresentação de Slides)
- **Resolução:** Alta resolução (mínimo 1920×1080px)
- **Espaço para texto:** Áreas escuras ou limpas nas laterais/fundo para acomodar as copys dos slides.

---

## 2. Regras Universais

### 🌐 Idioma nos Prompts
| Elemento | Idioma |
|---|---|
| Prompt estrutural para a IA | **Inglês** |
| Textos visíveis NA imagem (telas, hologramas, placas) | **Português brasileiro (pt-BR)** |

### 🎨 Identidade Cromática Global (O Encontro de Duas Forças)

A paleta deve contrastar as cores do clube com as cores da tecnologia da iGreen.

| Função | Cor | Uso no Prompt |
|---|---|---|
| Paixão / JEC | Vermelho (`#FF002E`) | `subtle red LED accent`, `red stadium lights` |
| Energia / iGreen | Verde iGreen (`#00C853`) | `glowing green energy`, `green LED lines` |
| Tech / Conexão | Cyan (`#00F3FF`) | `cyan holographic interfaces`, `data connecting lines` |
| Base Premium | Preto/Dark (`#08080C`) | `dark premium background`, `black sleek environment` |

### 🚫 Proibições Universais

| Proibido | Justificativa |
|---|---|
| Textos longos em inglês gerados na arte | O pitch é em português |
| Jogadores com camisas de outros clubes | Foco 100% no contexto do JEC |
| Gramados secos ou estádios abandonados | Transmite decadência; o tom é de renovação e lucro |
| Excesso de luz natural/diurna básica | A apresentação tem tema dark premium (modo escuro) |
| Hologramas que pareçam Matrix/Cyberpunk | Deve ser inovação acessível e corporativa, não sci-fi distópico |

---

## 3. Os 3 Sub-estilos para a Apresentação

### Resumo Comparativo

| | 🏟️ A — Arena Inteligente | 💼 B — Executivo Premium | 🔮 C — Holográfico Tech |
|---|---|---|---|
| **Cenário** | Estádio, campo, arquibancadas | Sala de reunião escura, camarote | Dashboard sobre o gramado/clube |
| **Protagonista** | O estádio / A torcida (borrada) | Presidente/Executivo (retrato) | Tecnologias / Hologramas AR |
| **Iluminação** | Refletores dramáticos, neon | Luz suave frontal, fundo dark | Glow verde e cyan, telas brilhantes |
| **Tom** | Paixão, grandiosidade | Fechamento de negócios, confiança | Inovação, lucro, conectividade |

---

### 🏟️ SUB-ESTILO A — Arena Inteligente (Paixão & Energia)

**DNA:** O estádio como um organismo vivo e tecnológico. Refletores, grandiosidade, contraste entre o vermelho e o verde da inovação.

#### Bloco Fixo (copiar sempre)
```text
Photorealistic cinematic wide shot in 16:9 format. A modern soccer stadium at night. Dramatic and premium stadium lighting. Deep black and dark shadows contrasting with vibrant red and neon green light beams. The atmosphere is passionate, grand, and technologically advanced. Clean areas for text placement. 8k resolution, highly detailed.
```

#### Fórmula da Cena
`[BLOCO FIXO] + [FOCO — gramado, arquibancada, refletores] + [ELEMENTO IGREEN — painéis solares no teto, luzes verdes conectando] + [CLIMA — empolgante, moderno]`

---

### 💼 SUB-ESTILO B — Executivo Premium (Negócios & Confiança)

**DNA:** Retratos corporativos escuros, estilo "Succession" ou banco de investimentos. Ideal para slides de ROI e propostas financeiras.

#### Bloco Fixo (copiar sempre)
```text
Professional corporate photography in 16:9 format. Premium dark boardroom or VIP stadium box with sleek black interior. A confident executive in a tailored dark suit. Shallow depth of field with beautiful bokeh. Subtle red and green LED accent lighting in the background. Soft flattering lighting on the face. The overall mood is trustworthy, lucrative, and highly professional. Negative space for presentation text.
```

#### Fórmula da Cena
`[BLOCO FIXO] + [AÇÃO — aperto de mão, analisando tablet, olhando para o campo] + [DETALHE — tela de vidro, reflexos sutis]`

---

### 🔮 SUB-ESTILO C — Holográfico Tech (Inovação & Receita)

**DNA:** Fotografia de base (estádio ou mesa) + overlays holográficos/AR flutuantes demonstrando lucro, energia e a conexão com os torcedores.

#### Bloco Fixo (copiar sempre)
```text
Photorealistic conceptual photography with augmented reality holographic overlays in 16:9 format. Dark premium background. Floating translucent holographic UI elements — glowing circles, data cards with financial graphs, and thin connecting lines in cyan and bright green tones. The holographic elements emit a soft glow but remain semi-transparent, showing the background through them. The mood is highly innovative, showing financial growth and modern technology. Clean composition with empty space for presentation copy.
```

#### Fórmula da Cena
`[BLOCO FIXO] + [BACKGROUND — gramado desfocado, maquete do estádio, smartphone] + [OVERLAYS — gráficos de barra subindo, ícones de energia solar, cartões flutuantes] + [TEXTOS EM PT-BR — se necessário]`

---

## 4. Estrutura do Prompt — Montagem Prática

### Passo 1: Escolha o Sub-estilo
Qual slide você está ilustrando?
- Abertura / Encerramento: **Estilo A (Arena)**
- Dinheiro / Rentabilidade / Proposta: **Estilo B (Executivo)**
- Como Funciona / App / Semente Hub: **Estilo C (Holográfico)**

### Passo 2: Construa o Prompt
Copie o bloco fixo + Adicione sua cena + Parâmetros de proporção.

**Exemplo de Prompt para o Slide "Como Funciona": (Estilo C)**
```text
Photorealistic conceptual photography with augmented reality holographic overlays in 16:9 format. Dark premium background showing a blurred modern soccer stadium. Floating translucent holographic UI elements — glowing circles containing solar panels, data cards with financial graphs rising, and thin connecting lines in cyan and bright green tones. The phone screen shows a green energy app with text in Brazilian Portuguese reading "Lucro JEC". The holographic elements emit a soft glow but remain semi-transparent. The mood is highly innovative, showing financial growth and modern technology. --ar 16:9 --s 250 --style raw
```

---

## 5. Elementos de UI/HTML da Apresentação

Para a construção do `Apresentacao_Presidente.html`, os seguintes tokens CSS complementam este sistema visual:

```css
:root {
    /* Cores JEC */
    --color-jec-red: #FF002E;
    --color-jec-black: #1A1A1A;
    --color-jec-white: #F0F0F0;

    /* Cores iGreen */
    --color-igreen-green: #00FF7F;
    --color-igreen-dark: #002211;

    /* Tech & Base */
    --color-cyan: #00F3FF;
    --bg-deep: #08080C;
    --glass-bg: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.08);

    /* Gradientes */
    --gradient-jec-igreen: linear-gradient(135deg, var(--color-jec-red) 0%, var(--color-igreen-green) 100%);
    --gradient-glow: radial-gradient(circle at 50% 0%, rgba(0, 255, 127, 0.15) 0%, transparent 70%);
}
```

- **Cards:** Glassmorphism escuro (`--glass-bg`) com bordas iluminadas dependendo do contexto (Vermelho para o problema atual, Verde para a solução iGreen).
- **Tipografia:** Moderna (Inter, Roboto ou Outfit), pesos altos para headlines numéricas, transmitindo força e solidez.
