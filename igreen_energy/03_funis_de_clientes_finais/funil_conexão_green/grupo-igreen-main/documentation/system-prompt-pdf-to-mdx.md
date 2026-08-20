# System Prompt: Transformador PDF → MDX para Blog iGreen Energy

## 📋 Visão Geral

Este documento documenta o **system prompt** utilizado para transformar artigos em PDF para o formato MDX (Markdown + JSX) utilizado no blog da iGreen Energy. O system prompt funciona como um guia completo para LLMs processarem PDFs e gerarem artigos formatados, prontos para publicação.

## 🎯 Objetivo

Transformar texto extraído de PDFs em arquivos MDX formatados seguindo rigorosamente as especificações de:
- Estrutura de conteúdo
- Metadados (frontmatter YAML)
- Formatação Markdown
- Tom e estilo editorial

## 📁 Localização do System Prompt

**Arquivo Original**: `system_prompt.md`  
**Pasta**: `/Users/rodrigomeurer/.gemini/antigravity/brain/bc3cd0e6-1d59-47e2-aa14-7d11ec39d20e/`

## 🏗️ Estrutura do System Prompt

### 1. Contexto do Projeto

Define o ambiente e público-alvo:

- **Blog**: iGreen Energy (energia solar compartilhada)
- **Público**: Consumidores brasileiros interessados em economia de energia
- **Tom**: Educacional, objetivo, confiável, sem jargões excessivos
- **Formato de saída**: MDX com frontmatter YAML + Markdown

### 2. Etapas de Transformação

O processo segue 3 etapas principais:

#### Etapa 1: Análise do Conteúdo
- Ler todo o texto do PDF
- Identificar tema principal, estrutura lógica e pontos-chave
- Extrair dados estatísticos e conceitos importantes

#### Etapa 2: Geração do Frontmatter

Campos obrigatórios do YAML:

```yaml
---
title: "Título extraído do PDF"
date: "2026-02-16"
excerpt: "Resumo de 150-180 caracteres"
image: "/assets/blog/slug-do-titulo.png"
author: "Marcos Wille"
category: "Economia | Sustentabilidade | Tecnologia | Tendências | Guias"
tags: ["Tag1", "Tag2", "Tag3", ...]
---
```

**Regras Importantes:**

| Campo | Regras |
|-------|--------|
| `title` | Extraído da primeira linha do PDF, claro e atrativo |
| `date` | Sempre usar data atual |
| `excerpt` | 150-180 caracteres, 1-2 frases completas, informativo e atrativo |
| `image` | Formato: `/assets/blog/[slug].png` (slug = título em kebab-case) |
| `category` | **UMA** das 5 categorias disponíveis |
| `tags` | Mínimo 3, máximo 6 tags |

**Tags Disponíveis:**
- Energia Solar
- Economia
- Sustentabilidade
- Energia por Assinatura
- Tendências
- Geração Distribuída
- Conta de Luz
- Energias Renováveis
- Lei 14.300

#### Etapa 3: Formatação do Conteúdo Markdown

##### 3.1. Hierarquia de Títulos

```markdown
# H1 - Apenas para introdução geral (opcional)

## H2 - Seções principais (mudanças de assunto)

### H3 - Subseções (detalhes dentro de H2)
```

**Critérios para Identificar Títulos:**
- Frases curtas (5-10 palavras)
- Funcionam como "chamada" para o conteúdo seguinte
- Marcam mudança de foco na discussão
- ❌ **Não forçar títulos onde não fazem sentido semanticamente**

##### 3.2. Formatação de Parágrafos

- Linha em branco entre parágrafos
- Comprimento: 3-5 linhas (60-120 palavras)
- Cada parágrafo = uma ideia principal

##### 3.3. Listas

**Listas não-ordenadas** (`-`):
```markdown
- Item sem ordem de prioridade
- Características, benefícios, exemplos
```

**Listas ordenadas** (`1.`):
```markdown
1. Primeiro passo
2. Segundo passo
3. Terceiro passo
```

##### 3.4. Ênfases

**Negrito** (`**texto**`):
- Termos técnicos na primeira menção
- Conceitos-chave importantes
- Números e dados estatísticos relevantes
- Conclusões e CTAs

**Itálico** (`*texto*`) - usar com moderação:
- Termos estrangeiros
- Ênfase sutil

##### 3.5. Blockquotes

```markdown
> **Importante:** Informações críticas, dados estatísticos ou alertas.
```

##### 3.6. Chamadas para Ação (CTAs)

**Transformação:**

❌ Original:
```
Clique abaixo para solicitar sua simulação
```

✅ Formatado:
```markdown
**Quer descobrir quanto você pode economizar? [Faça sua simulação gratuita](/conexao-green).**
```

##### 3.7. Links

**Regras:**
- ❌ NÃO adicionar links externos não mencionados no PDF
- ❌ REMOVER referências a "próxima página", "clique aqui"
- ✅ Links de CTA devem apontar para `/conexao-green`
- ✅ Pode adicionar links internos relevantes

##### 3.8. Formatação de Números

- Manter valores originais do PDF
- Usar negrito em dados importantes: "**1 milhão de pessoas**"
- Valores monetários: "R$ 1.000,00" (padrão brasileiro)
- Percentuais: "desconto de até **15%**"

## ✅ Checklist de Validação

Antes de entregar o MDX, confirmar:

### Frontmatter
- [ ] 7 campos completos (title, date, excerpt, image, author, category, tags)
- [ ] `title` claro e atrativo
- [ ] `date` = data atual
- [ ] `excerpt` entre 150-180 caracteres
- [ ] `image` no formato `/assets/blog/[slug].png`
- [ ] `author` = "Marcos Wille"
- [ ] `category` é UMA das 5 opções
- [ ] `tags` tem 3-6 itens

### Conteúdo
- [ ] Estrutura de títulos lógica (H1/H2/H3)
- [ ] Parágrafos concisos (3-5 linhas)
- [ ] Listas formatadas corretamente
- [ ] Negrito aplicado em termos-chave
- [ ] CTAs formatados com links
- [ ] Sem referências a "próxima página"
- [ ] Tom educacional, objetivo, confiável

### Fidelidade ao Original
- [ ] Nenhum conteúdo adicionado além do PDF
- [ ] Nenhuma informação importante removida

## 📝 Exemplo de Transformação

### Entrada (PDF):
```
Enquanto muita gente ainda paga energia da mesma forma de sempre, um novo modelo já
começou a ganhar espaço no Brasil.

E já são mais de 1 milhão de pessoas vinculando sua energia a uma fonte limpa e sustentável,
reduzindo o impacto no bolso e no meio ambiente.
```

### Saída (MDX):
```markdown
---
title: "A Nova Era da Energia no Brasil"
date: "2026-02-16"
excerpt: "Descubra como mais de 1 milhão de brasileiros já aderiram à energia solar compartilhada, economizando na conta de luz sem instalar placas solares."
image: "/assets/blog/nova-era-energia-brasil.png"
author: "Marcos Wille"
category: "Tendências"
tags: ["Energia Solar", "Energia por Assinatura", "Sustentabilidade", "Tendências"]
---

## A Nova Era da Energia no Brasil

Enquanto muita gente ainda paga energia da mesma forma de sempre, um novo modelo já começou a ganhar espaço no Brasil.

Já são mais de **1 milhão de pessoas** vinculando sua energia a uma fonte limpa e sustentável, reduzindo o impacto no bolso e no meio ambiente.
```

## 🎯 Boas Práticas

### ✅ O Que Fazer

- Ler o texto completo antes de formatar
- Identificar estrutura lógica
- Aplicar títulos semanticamente corretos
- Manter voz e tom do texto original
- Priorizar clareza e legibilidade
- Preservar todos os dados e fatos

### ❌ O Que NÃO Fazer

- Adicionar conteúdo que não estava no PDF
- Remover informações importantes
- Alterar dados, números ou fatos
- Criar links externos não mencionados
- Mudar drasticamente o tom de escrita
- Forçar títulos onde não fazem sentido
- Adicionar opiniões pessoais

## 🔄 Como Usar Este System Prompt

### 1. Via Interface de Chat (Manual)

Copie o conteúdo do `system_prompt.md` e cole como contexto inicial na conversa com a LLM, seguido do texto do PDF a ser transformado.

### 2. Via Workflow Automatizado

O system prompt está integrado no workflow `.agent/workflows/process-blog-pipeline.md` que automatiza:
1. Extração de texto do PDF
2. Aplicação do system prompt
3. Geração de imagens
4. Salvamento do arquivo MDX

### 3. Via API (Programático)

```javascript
const systemMessage = await fs.readFile('system_prompt.md', 'utf-8');
const pdfText = extractTextFromPDF(pdfPath);

const response = await llm.chat({
  messages: [
    { role: 'system', content: systemMessage },
    { role: 'user', content: pdfText }
  ]
});
```

## 📚 Arquivos Relacionados

| Arquivo | Descrição |
|---------|-----------|
| `system_prompt.md` | System prompt completo (original) |
| `especificacoes_formatacao.md` | Especificações detalhadas de formatação |
| `exemplo_mdx_gerado.mdx` | Exemplo de saída MDX gerada |
| `.agent/workflows/process-blog-pipeline.md` | Workflow de processamento automatizado |

## 🔧 Manutenção e Atualizações

### Quando Atualizar

- Mudanças no design do blog
- Novos campos de metadados
- Alterações nas categorias ou tags
- Feedback sobre qualidade dos artigos gerados

### Como Atualizar

1. Editar `system_prompt.md`
2. Testar com PDFs de exemplo
3. Validar output gerado
4. Atualizar esta documentação
5. Commitar mudanças com mensagem descritiva

## 💡 Dicas de Uso

1. **Teste com PDFs variados**: Valide o system prompt com diferentes tipos de artigos
2. **Revise sempre**: Mesmo com o prompt perfeito, revisão humana é essencial
3. **Itere o prompt**: Ajuste baseado nos erros recorrentes
4. **Documente mudanças**: Mantenha histórico de alterações no system prompt

## 📞 Troubleshooting

### Problema: Titles muito longos
**Solução**: Reforçar no prompt a regra de títulos concisos (5-10 palavras)

### Problema: Excerpts fora do tamanho
**Solução**: Adicionar validação explícita de caracteres no prompt

### Problema: Tags inadequadas
**Solução**: Fornecer mais exemplos de tags corretas no prompt

### Problema: Formatação inconsistente
**Solução**: Adicionar mais exemplos de antes/depois no prompt

---

**Última atualização**: 2026-02-17  
**Versão do System Prompt**: 1.0  
**Autor da Documentação**: Antigravity AI Assistant
