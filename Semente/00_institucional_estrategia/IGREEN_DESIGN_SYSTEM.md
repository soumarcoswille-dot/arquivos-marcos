# 🌿 Design System & Brand Guidelines: iGreen Energy

Este documento consolida o **Design System e o Guia de Voz** da marca **iGreen Energy**, estruturado para ser utilizado na criação de novas interfaces, aplicativos (como o App Coletor de Leads) e materiais de marketing. A estrutura foi inspirada em diretrizes de marcas de alta performance.

---

## 1. Identidade Visual (Design System)

Com base nos logotipos fornecidos, a identidade da iGreen Energy é moderna, enérgica e focada em sustentabilidade e tecnologia.

### Paleta de Cores

*   **Verde Principal (Neon/Elétrico):** A cor predominante e de maior destaque.
    *   *Hex (aprox):* `#00D200` a `#0CEE0C`
    *   *Uso:* Botões principais (CTAs), ícones de destaque, elementos interativos e o símbolo da folha/lâmpada. Em Dark Mode, é a cor de sotaque ideal.
*   **Laranja iGreen (Secundário):** Presente no "G" e na palavra "energy" em algumas variações da marca.
    *   *Hex (aprox):* `#F57C00` ou `#FF8C00`
    *   *Uso:* Alertas, notificações, badges promocionais e elementos de atenção que precisam se diferenciar do verde.
*   **Limão / Verde Claro:** Usado no pingo do "i".
    *   *Hex (aprox):* `#A4EB34`
    *   *Uso:* Gradientes, fundos de destaque suave ou hover states de botões.
*   **Tons Neutros:**
    *   *Preto / Grafite (#1A1A1A):* Para textos fortes e fundos no modo escuro (conforme a variação do logo com fundo preto).
    *   *Branco (#FFFFFF):* Para letreiros invertidos, cards e fundos no modo claro.

### Tipografia

A tipografia deve ser amigável, limpa e digital-first para combinar com a grafia de "iGreen energy".
*   **Fonte Primária Sugerida:** `Montserrat` ou `Poppins` (devido à geometria circular e moderna parecida com o arredondamento do "G" e das formas do logo).
*   **Fonte Secundária (UI e Dados):** `Inter` ou `Roboto` (para alta legibilidade em formulários, painéis do CRM e do APP Coletor de Leads).
*   **Estilo:** Títulos em pesos maiores (SemiBold/Bold) e frequentemente em minúsculas (lowercase) para logotipos ou brand names (ex: *igreen energy*). Títulos das telas devem usar **Sentence case** ou **Title Case**.

### Formas (Shapes)

O logo utiliza formatos que misturam a natureza (folhas com curvas fluidas) com a tecnologia (a rosca da lâmpada, o formato da letra 'G').
*   **Bordas:** Arredondadas (border-radius alto, ex: `8px` para cards, `9999px` para botões do tipo "pill") para transmitir acessibilidade e inovação amigável.
*   **Ícones:** Devem seguir o estilo "Outline" ou "Filled" de linha grossa, com cantos arredondados, lembrando o formato arredondado da lâmpada do logo.

---

## 2. Voz e Tom (Brand Guidelines)

Siga estas diretrizes para escrever os textos dos novos aplicativos e plataformas, dividindo entre **Plain Speech (Linguagem Direta)** e **Voz iGreen (Personalidade)**.

### Quando Usar Cada Tom

| Usar Linguagem Direta (Plain Speech) | Usar Voz iGreen (Personalidade) |
| :--- | :--- |
| Interface do App (Botões, abas, menus) | Onboarding do App (Boas-vindas) |
| Formulários (ex: Coleta de UC e CEP) | Estados Vazios (Zero states / Empty states) |
| Mensagens de erro e Validações | Confirmações de Sucesso (ex: Contrato Fechado) |
| Relatórios do Semente Hub | Comunicação de Marketing e Engajamento |

### Linguagem Direta (Padrão para UI)

A linguagem direta deve ser clara, concisa e orientada para a ação. O licenciado está na rua e precisa de agilidade.

1.  **Seja conciso:** Use o mínimo de palavras necessário.
2.  **Seja direto:** Use voz ativa ("Salvar os dados", não "Os dados foram salvos").
3.  **Evite jargões técnicos não-naturais:** Fale a língua do licenciado.
4.  **Seja específico.**

**Exemplos para o UI:**
*   *Em vez de:* "Clique aqui para escanear a conta de luz do seu cliente"
*   *Use:* "Escanear Fatura" ou "Ler Fatura"
*   *Em vez de:* "Ocorreu um erro ao enviar os dados para a plataforma"
*   *Use:* "Falha na conexão. Os dados foram salvos offline para envio posterior."

### Voz iGreen (A Personalidade da Marca)

A voz iGreen deve transparecer Sustentabilidade, Inovação, Empoderamento Financeiro e Energia. É um tom encorajador, que motiva os licenciados (Máquina de Quilowatts).

**Princípios:**
1.  **Empoderamento:** Celebre o progresso do licenciado.
2.  **Dinâmica e Energética:** Use palavras ligadas a movimento, tração e escala.
3.  **Acessível e Humana:** Sustentabilidade simplificada, sem pedantismo ambiental.

**Exemplos de Aplicação da Voz iGreen:**

*   **Telas de Sucesso (Convertido):**
    > "Mais energia verde na rede! Parabéns, o contrato foi ativado com sucesso."
*   **Estados Vazios (Dashboard):**
    > "Sua usina de contatos está vazia. Cadastre o primeiro cliente e comece a gerar quilowatts de resultados!"
*   **Devolutivas (Ajuste Necessário):**
    > "Quase lá! Faltou apenas um detalhe para aprovarmos este cliente. Corrija o campo abaixo."
*   **Loading States:**
    > "Conectando à rede iGreen..."
    > "Gerando a proposta sustentável..."

---

## 3. Diretrizes de Elementos de Interface (UI)

*   **Botões:** Verbos de ação diretos e no infinitivo ("Cadastrar", "Enviar", "Editar").
*   **Mensagens de Erro:**
    1. Diga o que ocorreu.
    2. Diga como resolver.
    *(Ex: "CPF inválido. Verifique os números digitados e tente novamente.")*
*   **Confirmações Destrutivas:** O botão de exclusão de um lead não deve ser verde. Use uma cor neutra ou vermelho suave, e sempre pergunte: "Excluir contato?".

---

## Como Utilizar Este Documento?

Este *Design System* atua como base para o desenvolvimento do **App Coletor de Leads** e outras ferramentas do *Semente Hub*. Ao configurar o CSS, o *Tailwind* ou construir componentes, puxe as variáveis de cor e as regras de tipografia estabelecidas acima para garantir total coerência com os logotipos e o posicionamento de impacto da Máquina de Quilowatts.
