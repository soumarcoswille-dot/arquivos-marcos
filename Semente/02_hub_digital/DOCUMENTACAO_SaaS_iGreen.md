# 🏛️ Semente Hub Digital (iGreen Auto-Engine)
**Documentação de Arquitetura e Escopo do Projeto**

---

## 1. Visão Geral Executiva
O **Semente Hub Digital** é um ecossistema SaaS (Software as a Service) projetado para potencializar a operação de licenciados iGreen Energy. 

O objetivo principal é substituir o trabalho manual, burocrático e transacional por um motor automatizado que gerencia duas frentes essenciais:
1. **Aquisição de Clientes (B2C):** Leitura automatizada de faturas de energia via IA e envio de propostas.
2. **Expansão da Rede (B2B):** Gestão de funil de novos sócios e afiliados (Business Architects).

---

## 2. Pilares Tecnológicos (Stack)
*   **Orquestração e Automação:** n8n (Gerenciamento de workflows e comunicação com WhatsApp).
*   **Inteligência Artificial (OCR):** Gemini Pro Vision / OpenAI Vision API (Extração de dados de PDFs e imagens de contas de luz).
*   **Banco de Dados (CRM):** Supabase (PostgreSQL) para armazenamento seguro e relacional de leads, afiliados e faturas.
*   **Frontend (Dashboard):** Next.js com Tailwind CSS (Estética premium: dark mode, neon, glassmorphism).

---

## 3. Arquitetura de Módulos

### 🧠 Módulo 1: O Leitor de Ouro (IA OCR)
O motor responsável por eliminar o trabalho manual de cálculo de economia.
*   **Entrada:** Usuário (ou lead) faz upload da fatura via Landing Page ou WhatsApp.
*   **Processamento (IA):** A IA lê o documento e extrai: `Nome`, `Distribuidora`, `Consumo Médio (kWh)`, `Valor Atual`.
*   **Saída:** Cálculo instantâneo da economia projetada (ex: 15% de desconto garantido) e geração de payload JSON para o n8n.

### ⚙️ Módulo 2: O Motor de Conversão (Automação n8n + WhatsApp)
O cérebro logístico que garante que nenhum lead esfrie.
*   **Integração Webhook:** Recebe os dados do módulo OCR.
*   **Comunicação:** Dispara mensagens no WhatsApp com a proposta gerada.
*   **Follow-up Automático:** Se o lead não responder ou não avançar no funil em 48h, o n8n dispara uma mensagem estratégica de reengajamento.
*   **Rastreamento (Tracking):** Identifica a origem do lead (URL parametrizada) para atribuir a venda ao afiliado correto.

### 📊 Módulo 3: Gestão de Funil (CRM Kanban)
A interface de comando onde a operação é gerida visualmente. Dividida em dois fluxos paralelos:

#### 🟢 Funil B2C (Conversão de Energia)
1. **Lead Capturado:** Fatura recebida no sistema.
2. **Fatura em Análise:** Processamento do OCR em andamento.
3. **Proposta Pronta:** IA calculou a economia e preparou o pitch.
4. **Proposta Enviada:** n8n enviou a mensagem pelo WhatsApp.
5. **Em Negociação:** Contato humano/tirando dúvidas.
6. **Conexão Efetivada:** Contrato assinado com a iGreen.
7. **Comissionamento:** Ciclo fechado.

#### 🔵 Funil B2B (Recrutamento de Licenciados)
1. **Prospect Qualificado:** Captação via Landing Page / Instagram.
2. **Apresentação Agendada:** Reunião marcada.
3. **Pitch Realizado:** Reunião de apresentação do modelo de negócio concluída.
4. **Licenciamento Ativo:** Pagamento efetuado na iGreen.
5. **Onboarding:** Treinamento inicial concluído.
6. **Primeira Fenda (Ativação):** Afiliado prospectou a primeira conta.

---

## 4. Roadmap de Execução (Fases)

### Fase 1: Fundação (Backend e Automação Core)
- [ ] Setup do n8n (via MCP/Docker).
- [ ] Configuração da API de Visão (Gemini/OpenAI) para leitura de Faturas de Energia.
- [ ] Construção do Workflow 1: Receber imagem -> Extrair kWh -> Retornar JSON de economia.
- [ ] Modelagem do Banco de Dados no Supabase (Tabelas: `leads`, `faturas`, `afiliados`).

### Fase 2: Interface B2C (Landing Page e Interação)
- [ ] Conectar a Landing Page atual (HTML/CSS) com o Webhook do n8n para envio de arquivos.
- [ ] Criar a resposta visual para o cliente após envio da conta (Tela de Sucesso).
- [ ] Configurar os disparos automatizados de WhatsApp para o lead.

### Fase 3: Visão do Mestre (Dashboard SaaS e CRM)
- [ ] Inicializar projeto em Next.js para o Dashboard do Administrador.
- [ ] Criar sistema de Autenticação (Login seguro).
- [ ] Construir o painel Kanban consumindo os dados do Supabase.
- [ ] Implementar sistema de links únicos para rastreamento de afiliados.

---
*Documento gerado como ponto de partida estratégico. Sujeito a refinamentos durante a fase de codificação e testes.*
