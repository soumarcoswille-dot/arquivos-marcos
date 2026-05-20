# 📐 Style System Design — Máquina de Quilowatts 2.0

> Documento de referência para geração de imagens com AI.
> Qualquer pessoa ou agente AI deve conseguir produzir artes consistentes seguindo este guia.

---

## 1. Visão Geral

### Projeto
**Máquina de Quilowatts 2.0** — Kit de Marketing Digital para consultores e licenciados da iGreen Energy (vendedores de energia solar por assinatura).

### Objetivo Visual
Transformar o Instagram de consultores amadores em um perfil com **autoridade profissional e conversão alta**. As artes devem transmitir confiança, inovação acessível e institucionalidade — nunca amadoras, genéricas, ou agressivas.

### Público-Alvo das Imagens
- **Primário:** Consumidores brasileiros de classe média (25-55 anos) que pagam conta de luz
- **Secundário:** Consultores iGreen que usarão as artes no Instagram

### Formato Padrão
- **Proporção:** 4:5 vertical (Instagram Feed / Carrossel)
- **Resolução:** Alta resolução (mínimo 1080×1350px)
- **Espaço para texto:** Topo e base da imagem livres para sobreposição de copy

---

## 2. Regras Universais

Estas regras se aplicam a **TODOS** os sub-estilos, sem exceção.

### 🌐 Idioma
| Elemento | Idioma |
|---|---|
| Prompt para a IA | **Inglês** |
| Textos visíveis NA imagem (telas, hologramas, cards, placas) | **Português brasileiro (pt-BR)** |

**Como especificar no prompt:**
```
...displaying text in Brazilian Portuguese such as "Economia: R$ 85,00" and "Perfil Aprovado"...
```

### 📐 Composição
- Formato **4:5 vertical** (`--ar 4:5`)
- Espaço vazio na **parte superior** (≈15-20%) para headline
- Espaço vazio na **parte inferior** (≈10-15%) para CTA ou rodapé
- Protagonista(s) **centralizado(s)** no terço médio

### 🎨 Identidade Cromática Global

| Função | Cor | Hex | Uso |
|---|---|---|---|
| Energia / Destaque | Verde iGreen | `#00C853` | Glows, LEDs, ícones, checks |
| Tech / Conexão | Cyan | `#00D4FF` | Linhas holográficas, overlays |
| Natureza / Confiança | Verde-água | `#00E5A0` | Hologramas, ícones secundários |
| Base Quente | Bege / Creme | `#F5F0E8` | Mobília, roupas, tons de pele |
| Base Exterior | Dourado Golden Hour | `#FFD54F` | Luz solar, atmosfera externa |
| Proibido | Vermelho, Roxo, Laranja neon | — | Nunca usar como cor dominante |

### 🚫 Proibições Universais

| Proibido | Justificativa |
|---|---|
| Texto em inglês visível na imagem | Público é brasileiro |
| Logotipos ou marcas reais | Problemas legais |
| Estética cyberpunk, sci-fi, ou Matrix | Afasta o público popular |
| Neon agressivo ou laser beams | Parece amador/gamer |
| Sombras dramáticas ou iluminação de terror | Gera desconfiança |
| Pessoas com expressão triste, preocupada ou agressiva | O tom é sempre positivo |
| Roupas formais (terno, gravata) ou uniformes | Gera distância do público |
| Casas de luxo ou mansões | Não representa o público-alvo |
| Cenários sujos, degradados ou mal conservados | Transmite descuido |

---

## 3. Tipologia de Pessoas

### Perfil Demográfico
- **Etnia:** Brasileiros diversos (pretos, pardos, brancos) — representação real do Brasil
- **Faixa etária:** 25-55 anos (predominante 30-45)
- **Gênero:** Alternado entre posts — 50/50 homens e mulheres
- **Família:** Quando incluída, 3-4 membros (pai, mãe, filho, avô/avó)

### Vestuário por Sub-estilo

| Sub-estilo | Roupa | Tons |
|---|---|---|
| ☀️ A — Externo | Casual livre (camiseta, bermuda, vestido) | Coloridos naturais |
| 💼 B — Tech-Clean | Camisa social casual (manga curta ou dobrada) | Azul-claro, branco, cinza-claro |
| 🔮 C — Holográfico | Casual premium (camiseta, blusa, calça) | Tons terra: oliva, sage, bege, marrom |

### Expressões Faciais Permitidas
- ✅ Sorriso genuíno e relaxado
- ✅ Expressão de confiança serena
- ✅ Surpresa positiva (descoberta)
- ✅ Curiosidade interessada
- ❌ Sorriso exagerado/forçado
- ❌ Expressão neutra/fria
- ❌ Preocupação ou dúvida

---

## 4. Os 3 Sub-estilos

### Resumo Comparativo

| | ☀️ A — Externo Popular | 💼 B — Tech-Clean | 🔮 C — Smart Home Holográfico |
|---|---|---|---|
| **Cenário** | Exterior, bairro residencial | Interior corporativo/showroom | Interior doméstico moderno |
| **Protagonista** | Família / vizinhança | Pessoa individual (retrato) | Pessoa + overlays AR flutuantes |
| **Elemento especial** | Fios com glow verde, poste | Bokeh, LEDs sutis | Hologramas, circles, dados, linhas |
| **Iluminação** | Golden hour, natural, quente | Suave frontal, ambiente clean | Luz natural de janelão + glow holográfico |
| **Tom** | Calor, comunidade, lar | Confiança, profissionalismo | Inovação acessível, smart home |
| **Ideal para** | Posts residenciais, comunidade | Posts CPF/CNPJ, prova social | Posts explicativos, dados, app |

---

### ☀️ SUB-ESTILO A — Popular Institucional Externo

**Referência visual:** Campanhas da Caixa Econômica Federal, programas sociais do Governo Federal, clínicas de saúde populares.

**DNA:** Fotografia publicitária brasileira com calor humano. Clara, natural, sem drama. Profissional porém acessível.

#### Bloco Fixo (copiar sempre)

```
Warm bright lifestyle photograph in 4:5 vertical format. Brazilian middle-class residential setting at golden hour late afternoon. Clear blue sky with warm golden sunlight, palm trees, neat sidewalks. Natural warm color tones, no dramatic shadows. The overall mood is bright, optimistic, trustworthy, and accessible. Clean professional photography with space at top and bottom for text overlay. High resolution.
```

#### Fórmula da Cena

```
[BLOCO FIXO] + [QUEM — família/pessoa] + [ONDE — frente da casa, rua, quintal] + [FAZENDO O QUÊ] + [ELEMENTO ENERGIA — fios com glow verde] + [EMOÇÃO]
```

#### Elementos Obrigatórios
- [ ] Cenário EXTERNO, bairro residencial brasileiro
- [ ] Iluminação GOLDEN HOUR natural
- [ ] Céu LIMPO e claro
- [ ] Pessoas SORRINDO e relaxadas
- [ ] SEM hologramas ou overlays AR
- [ ] Formato 4:5 com espaço para texto

#### Palavras-chave

| Usar ✅ | Evitar ❌ |
|---|---|
| `golden hour`, `warm sunlight` | `holographic`, `AR`, `floating` |
| `residential`, `neighborhood` | `office`, `corporate`, `showroom` |
| `family`, `neighbors` | `alone`, `executive` |
| `bright`, `optimistic` | `dramatic`, `moody`, `futuristic` |
| `palm trees`, `neat sidewalks` | `luxury`, `mansion`, `penthouse` |

---

### 💼 SUB-ESTILO B — Comercial Tech-Clean

**Referência visual:** Campanhas de bancos digitais (Nubank, Inter), fintechs, planos de saúde premium.

**DNA:** Retrato profissional limpo. Profundidade de campo rasa (bokeh). LEDs verdes sutis. Confiança e modernidade sem frieza.

#### Bloco Fixo (copiar sempre)

```
Professional commercial photograph in 4:5 vertical format. Medium shot portrait of a confident Brazilian person in a light blue casual button-down shirt. Modern clean corporate environment in the softly blurred background with subtle green LED accent lighting on panels and displays. Shallow depth of field with beautiful bokeh. Soft frontal lighting on the face, professional and flattering. The overall mood is trustworthy, modern, confident, and accessible. Clean composition with space at top and bottom for text overlay. High resolution.
```

#### Fórmula da Cena

```
[BLOCO FIXO] + [QUEM — homem/mulher, idade] + [SEGURANDO O QUÊ — CPF, celular, documento] + [EXPRESSÃO] + [BACKGROUND — showroom, escritório] + [DETALHE VERDE — LEDs, telas]
```

#### Elementos Obrigatórios
- [ ] Pessoa em MEIO-CORPO (medium shot)
- [ ] Camisa social CLARA (azul-claro, branco)
- [ ] BOKEH no fundo (profundidade rasa)
- [ ] Acentos verdes SUTIS (LEDs, telas)
- [ ] SEM hologramas ou overlays AR
- [ ] Formato 4:5 com espaço para texto

#### Palavras-chave

| Usar ✅ | Evitar ❌ |
|---|---|
| `shallow depth of field`, `bokeh` | `holographic`, `floating circles` |
| `light blue button-down shirt` | `casual t-shirt`, `suit and tie` |
| `subtle green LED accent` | `neon`, `aggressive glow`, `AR overlay` |
| `medium shot`, `portrait` | `full body`, `wide shot` |
| `confident`, `trustworthy` | `cold`, `sterile`, `intimidating` |

---

### 🔮 SUB-ESTILO C — Smart Home Holográfico

**Referência visual:** Campanhas de smart home (Alexa, Google Home), apps de energia (Tesla Energy), fintechs com dashboards visuais.

**DNA:** Fotografia real de interior doméstico moderno + overlays holográficos/AR flutuantes com dados. Inovação que é acessível, futurismo que é acolhedor.

#### Bloco Fixo (copiar sempre)

```
Photorealistic lifestyle photograph with augmented reality holographic overlays in 4:5 vertical format. Interior of a modern bright Brazilian apartment or house with large glass windows showing a green cityscape or vegetation outside. Warm natural daylight streaming through the windows at golden hour. The room has neutral warm-toned furniture, green indoor plants, and a cozy lived-in feeling. Floating translucent holographic UI elements appear in the air around the person — glowing circles containing images, data cards with numbers, and thin connecting lines in cyan and green tones. The holographic elements emit a soft subtle glow but remain semi-transparent. The overall mood is innovative yet accessible, futuristic yet homely, smart yet warm. Clean composition with space for text overlay. High resolution.
```

#### Fórmula da Cena

```
[BLOCO FIXO] + [QUEM — pessoa/família, roupa tons terra] + [ONDE — sala, varanda, cozinha com janelão] + [INTERAGINDO COM — tablet, celular, dashboard] + [OVERLAYS — circles com painéis solares, cards com R$ valores em pt-BR, ícones de energia] + [LINHAS — feixes cyan/verde conectando elementos]
```

#### As 3 Variações Aprovadas

| Variação | Pessoa | Overlays | Uso Ideal |
|---|---|---|---|
| **Tablet de Costas** | Mulher de costas segurando tablet | Circles com paisagens (painéis, turbinas) + dados | "Como funciona" |
| **Celular de Frente** | Mulher de frente mostrando celular | Linhas de conexão + ícones pequenos | "Conheça o app" |
| **Família no Sofá** | Família sentada no sofá | Dashboard flutuante com economia | "Sua família economizando" |

#### Elementos Obrigatórios
- [ ] Interior de APARTAMENTO/CASA moderna com janelão
- [ ] Roupa CASUAL em tons TERRA (oliva, bege, marrom)
- [ ] OVERLAYS HOLOGRÁFICOS flutuantes (circles, cards, linhas)
- [ ] Hologramas são SEMI-TRANSPARENTES com glow sutil
- [ ] Cores dos overlays: CYAN + VERDE (não vermelho, não roxo)
- [ ] Tem TABLET ou CELULAR com tela verde
- [ ] PLANTAS e mobília neutra/quente no cenário
- [ ] Vista de VEGETAÇÃO ou CIDADE pela janela
- [ ] Textos nos hologramas em **PORTUGUÊS BRASILEIRO**
- [ ] Formato 4:5 com espaço para texto

#### Paleta Holográfica

| Cor | Hex | Uso |
|---|---|---|
| Cyan primário | `#00D4FF` | Linhas de conexão, bordas de circles |
| Verde-água | `#00E5A0` | Ícones, check marks |
| Verde energia | `#00FF66` | Destaques, glow principal |
| Azul-claro | `#4DA6FF` | Preenchimento sutil de circles |
| Âmbar quente | `#FFB74D` | Data cards com valores (variação) |

#### Palavras-chave

| Usar ✅ | Evitar ❌ |
|---|---|
| `holographic overlays`, `augmented reality` | `dark background`, `studio` |
| `floating circles`, `translucent`, `semi-transparent` | `solid`, `opaque`, `heavy` |
| `cyan and green glow`, `connecting lines` | `neon aggressive`, `laser beams` |
| `data cards`, `energy credits`, `savings` | `abstract art`, `random shapes` |
| `modern apartment`, `glass windows` | `outdoor`, `street`, `office` |
| `casual earth tones` (olive, sage, beige, tan) | `formal clothes`, `suit`, `uniform` |
| `tablet`, `smartphone`, `dashboard` | `laptop`, `desktop`, `keyboard` |
| `indoor plants`, `warm neutral furniture` | `minimalist empty`, `industrial` |
| `innovative yet accessible` | `sci-fi`, `cyberpunk`, `matrix` |

---

## 5. Guia de Decisão — Quando Usar Cada Estilo

| Tipo de Post / Conteúdo | Estilo Recomendado | Justificativa |
|---|---|---|
| Família economizando | ☀️ A ou 🔮 C | Exterior acolhedor OU interior com dashboard |
| Como funciona a conexão/energia | 🔮 C | Hologramas explicam o ecossistema visualmente |
| CPF/CNPJ vale desconto | 💼 B | Retrato confiante segurando documento |
| Economia na conta de luz | 🔮 C | Dashboard com valores reais flutuando |
| Conheça o app/plataforma | 🔮 C | Pessoa com celular + overlays de conexão |
| Depoimento/prova social | 💼 B | Retrato confiante, close, bokeh |
| Zero obras / simplicidade | ☀️ A ou 💼 B | Exterior casa intacta OU retrato confiante |
| Autoridade / verdades / dados | 💼 B ou 🔮 C | Profissional autoritário OU dados visuais |
| Benefícios do clube/extras | 🔮 C | App mostrando benefícios + overlays |
| Cancelamento / liberdade | ☀️ A | Exterior, ar livre, céu aberto |
| Energia limpa / sustentável | 🔮 C ou ☀️ A | Circles com painéis solares OU bairro verde |
| Comparativo antes/depois | 🔮 C | Dashboard com dados comparativos |
| CTA para WhatsApp | 💼 B | Pessoa confiante com celular |
| Comercial/empresarial (CNPJ) | 💼 B (escuro) | Versão premium, executiva |
| Vizinhança conectada | ☀️ A | Rua com casas e fios verdes |
| Oferta / preço / promoção | 💼 B | Close profissional, objetivo |
| Carrossel educativo (capa) | 🔮 C | Visual instagramável com circles temáticos |
| Stories / urgência | 💼 B | Direto, contato visual, confiança |

---

## 6. Estrutura do Prompt — Montagem Passo a Passo

### Passo 1: Escolha o Sub-estilo
Use a tabela de decisão acima.

### Passo 2: Copie o Bloco Fixo
Cada sub-estilo tem um bloco fixo. Copie-o integralmente.

### Passo 3: Descreva a Cena
Siga a fórmula do sub-estilo escolhido:
- **Quem** está na cena (pessoa, família, idade, roupa)
- **Onde** está (frente da casa, apartamento, showroom)
- **Fazendo o quê** (segurando celular, braços cruzados, cozinhando)
- **Elementos visuais** (fios verdes, hologramas, bokeh)
- **Emoção** (confiante, livre, surpreso positivamente)

### Passo 4: Adicione textos visíveis em pt-BR (se aplicável)
Se houver telas, dashboards, ou hologramas com texto:
```
...displaying text in Brazilian Portuguese such as "Economia: R$ 85,00"...
```

### Passo 5: Feche com parâmetros técnicos
```
--ar 4:5 --s 250 --style raw
```

### Exemplo de Montagem Completa

```
[BLOCO FIXO DO SUB-ESTILO C]

A confident Brazilian woman in her 30s wearing a sage-green casual blouse, 
standing in her bright apartment holding a smartphone.

The phone screen shows a green energy app with text in Brazilian Portuguese 
reading "Sua Economia: R$ 127,00".

Floating around her are three translucent holographic circles — 
one showing solar panels, one showing a wind turbine, 
and one showing the text "Créditos Ativos" with a green check mark.

Thin glowing cyan and green lines connect the circles.

--ar 4:5 --s 250 --style raw
```

---

## 7. Anti-padrões — O Que NÃO Fazer

| Anti-padrão | Problema | Solução |
|---|---|---|
| Usar texto em inglês nas telas/hologramas | Público é brasileiro, quebra imersão | Sempre especificar textos em pt-BR |
| Misturar sub-estilos na mesma imagem | Perde consistência visual | Uma imagem = um sub-estilo |
| Usar 3+ posts holográficos consecutivos no feed | Feed fica repetitivo | Alternar A → C → B → A → C |
| Cenário de luxo (mansão, penthouse) | Aliena o público classe média | Usar casa/apartamento classe média |
| Hologramas opacos ou sólidos | Parece render 3D barato | Sempre `semi-transparent`, `translucent` |
| Iluminação dramática com sombras duras | Transmite tensão/medo | Usar `warm natural light`, `soft lighting` |
| Pessoa sozinha em cenário vazio | Parece stock photo genérico | Adicionar contexto (móveis, plantas, rua) |
| Neon agressivo ou cores vibrantes demais | Estética gamer, não profissional | `subtle glow`, `soft accent` |
| Prompt vago como "a person with energy" | Resultado imprevisível | Ser específico: idade, roupa, gesto, cenário |

---

## 8. Ritmo Visual do Feed

Para manter o Instagram visualmente diverso e profissional, alterne os sub-estilos:

### Padrão Recomendado (a cada 6 posts)

```
💼 B → ☀️ A → 🔮 C → 💼 B → 🔮 C → ☀️ A
```

### Regras de Alternância
- **Nunca** 3 posts consecutivos do mesmo sub-estilo
- **Máximo** 2 posts holográficos (C) seguidos
- **Sempre** pelo menos 1 externo (A) a cada 4 posts
- **Carrosséis:** capa pode ser C, slides internos podem ser B

---

## 9. Glossário de Termos do Prompt

| Termo | Significado | Quando Usar |
|---|---|---|
| `--ar 4:5` | Proporção 4:5 vertical | Sempre |
| `--s 250` | Stylize alto (mais artístico) | Sempre |
| `--style raw` | Estilo fotorealista sem estilização | Sempre |
| `bokeh` | Desfoque suave do fundo | Sub-estilo B |
| `golden hour` | Luz dourada do entardecer | Sub-estilos A e C |
| `translucent holographic` | Holograma semi-transparente | Sub-estilo C |
| `medium shot` | Enquadramento da cintura para cima | Sub-estilo B |
| `shallow depth of field` | Pouca profundidade de campo | Sub-estilo B |
| `augmented reality overlays` | Sobreposições de realidade aumentada | Sub-estilo C |
| `data cards` | Cards flutuantes com dados | Sub-estilo C |
| `connecting lines` | Linhas que conectam hologramas | Sub-estilo C |

---

## 10. Referências Visuais Aprovadas

### Sub-estilo A — Referência
> Família brasileira na frente de casa classe média, golden hour, fios de energia com glow verde, céu limpo, sorriso natural.

### Sub-estilo B — Referência
> Homem/mulher de camisa azul-claro, meio corpo, bokeh no fundo, LEDs verdes sutis em painéis, expressão confiante.

### Sub-estilo C — Referências (3 variações)
> 1. Mulher de costas com tablet + circles holográficos com painéis solares e dados
> 2. Mulher de frente com celular + linhas de conexão cyan + ícones flutuantes
> 3. Família no sofá + dashboard holográfico flutuante com economia mensal

---

> **Última atualização:** Abril 2026
> **Autor:** Direção de Arte — Máquina de Quilowatts 2.0
> **Versão:** 1.0
