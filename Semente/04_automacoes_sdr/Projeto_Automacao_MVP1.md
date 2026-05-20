# 🚀 Projeto: Automação MVP 1 - Semente Hub (SDR Inteligente)

## 1. Visão Geral e Objetivo
Implementar a primeira automação do ecossistema **Semente Hub**, atuando como um **SDR Automático (IA)**. O sistema receberá leads de fontes digitais e aplicará uma abordagem personalizada via WhatsApp.

**⚠️ REGRA DE OURO:** O sistema deve ter como **PADRÃO** a origem `digital`. Isso garante que todas as automações fiquem ativadas naturalmente. Caso um lead seja inserido manualmente, o campo `origem` deve ser alterado para `manual`, o que fará com que o bot **NÃO** envie mensagens.

---

## 2. (Pipeline Conexão Expansão)

A nomenclatura das colunas seguirá o padrão tradicional de vendas:

1.  **Novos Leads:** Entrada bruta de todos os leads digitais. Onde o bot inicia o contato automaticamente.
2.  **Em Qualificação:** Leads que já responderam à IA ou que você inseriu manualmente e está conversando.
3.  **Reunião / Apresentação:** Reunião agendada ou em andamento.
4.  **Em Negociação:** Post-reunião, tirando dúvidas finais.
5.  **Aguardando Pagamento:** Proposta aceita, aguardando compensação da licença.
6.  **Licenciado (Venda):** Sucesso. Inicia Onboarding de 14 dias.
7.  **Perdido:** Venda não concluída.

---

## 3. Arquitetura de Roteamento e Filtro (n8n)

O fluxo no n8n terá uma "Válvula de Segurança" para evitar mensagens automáticas em contatos pessoais:

*   **[ Node 1 ] Webhook / Trigger:** Recebe o lead.
*   **[ Node 2 ] Filtro de Origem (IF):** 
    *   `Se origem == "digital"` (Padrão) ➡️ Segue para o roteamento inteligente.
    *   `Se origem == "manual"` ➡️ **PARAR WORKFLOW.** (O bot não fala nada).
*   **[ Node 3 ] Switch de Contexto:** 
    *   **Rota A (Gamificado):** Lead qualificado. Objetivo: **Agendar Reunião.**
    *   **Rota B (Site):** Lead frio. Objetivo: **Venda Direta no WhatsApp.**
*   **[ Node 4 ] Agent / AI Node:** Gera a mensagem baseada no prompt correto.
*   **[ Node 5 ] WhatsApp API:** Envia a mensagem.

---

## 4. Próximos Passos (Checklist Técnico)

- [ ] **1. Identificação de Origem:** No CRM do Rodrigo, garantir que o campo `origem` venha como "digital" por padrão.
- [ ] **2. Credenciais:** WhatsApp API e OpenAI Key.
- [ ] **3. Implementação do Filtro:** Configurar o nó IF no n8n para barrar leads manuais.
- [ ] **4. Teste de Segurança:** Inserir um lead manual de teste e verificar se o bot fica em silêncio.
