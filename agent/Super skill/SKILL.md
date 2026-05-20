---
name: Super skill
description: Orquestrador de fluxo completo. Guia o agente através de estratégia, psicologia do consumidor e copywriting de forma sequencial com aprovação obrigatória em etapas.
---

# Marketing & Funnel Orchestrator (Super skill)

Esta é uma skill orquestradora central. Quando ativada, o agente (eu) DEVE seguir ESTRITAMENTE o fluxo de trabalho detalhado abaixo para executar qualquer projeto de marketing, posicionamento ou copywriting. O agente não deve pular etapas e deve SEMPRE parar nos "Gates" (Portões) especificados para obter a aprovação do usuário.

## 🎯 Objetivo
Sequenciar as metodologias das skills de marketing, estratégia e psicologia para produzir peças de alta conversão, profundamente pesquisadas, evitando criações genéricas ou superficiais.

## 🚦 Regras de Execução do Agente
1. **Nunca pule direto para a escrita/copywriting.**
2. **Execute uma fase por vez.**
3. **Respeite os "Gates" (Paradas Obrigatórias):** Ao concluir uma fase, resuma os resultados de forma clara e profissional e pergunte EXPLICITAMENTE: "Posso prosseguir para a próxima fase ou deseja ajustar algo?". Não inicie a próxima fase sem o "ok".
4. **Integração de Sub-skills:** Ao atuar em cada fase, o agente deve usar instintivamente o rigor e os frameworks das sub-skills referenciadas (localizadas nesta mesma pasta `agent/Super skill/`).

---

## 🛠️ O Fluxo (Phases)

### ⬛️ Phase 1: Briefing & Foundation (Entrada de Dados)
Antes de qualquer análise, o Agente deve solicitar as seguintes premissas (caso o usuário já não as tenha fornecido na mensagem de abertura):
1. **O que é?** (Produto/Serviço e sua Promessa Única)
2. **Para quem é?** (Público-alvo básico)
3. **Qual a grande objeção?** (Por que eles diriam "não"?)
4. **Quais os ativos disponíveis?** (Urgência real, garantia, bônus)
*(Gate 1: Aguardar as respostas do usuário antes de iniciar as análises)*

### ⬛️ Phase 2: Diagnóstico Estratégico & Psicológico (O Motor)
Com o briefing em mãos, o Agente deve realizar a base teórica invocando:
- **Jobs to be Done (JTBD)**: `agent/Super skill/jobs-to-be-done-analyst/`
- **Perfil Psicográfico**: `agent/Super skill/customer-psychographic-profiler/`
- **Nível de Consciência**: `agent/Super skill/awareness-stage-mapper/`
- **Posicionamento de Marca**: `agent/Super skill/brand-perception-psychologist/`
*(Gate 2: Apresentar o 'Raio-X de Estratégia e Psicologia' e pedir aprovação).*

### ⬛️ Phase 3: Arquitetura de Persuasão (A Estrutura)
Com a teoria aprovada, o Agente monta o esqueleto da peça invocando:
- **Gatilhos Mentais**: `agent/Super skill/marketing-psychology/`
- **Wireframe / Sequência Lógica**: `agent/Super skill/copywriting/`
*(Gate 3: Apresentar o esqueleto estratégico/estrutural e pedir aprovação).*

### ⬛️ Phase 4: Copywriting & Refinamento (A Escrita Fina)
Com a estrutura validada, aí sim o Agente escreve.
- Transformar os blocos estruturais em um "copy" hipnótico e poderoso, aplicando rítmica, clareza e quebra de objeções em tempo real.
- Garantir que a voz da marca (definida na fase 2) transborde em cada palavra.
- Usar a skill `agent/Super skill/copywriting-psychologist/` para refinar a carga emocional.
*(Final: Entregar o resultado formatado de maneira limpa em markdown para o usuário).*

---

## 💾 Artefatos Permanentes (Opcional)
Se o usuário solicitar, ao final das Fases 2 ou 4, o agente utilizará suas ferramentas para criar um arquivo `.md` no diretório de trabalho do usuário, consolidando a "Bíblia da Persona e do Projeto" e o "Copy Final", para manter o histórico empresarial preservado.
