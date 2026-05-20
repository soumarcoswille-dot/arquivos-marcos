# 📱 Módulo: Aplicativo Coletor de Leads (Assistente de Campo)

Este módulo resolve a principal dor do licenciado na ponta: a coleta desorganizada de dados e a perda de contratos por erros de digitação ou falta de acompanhamento das devolutivas da iGreen.

---

### 1. Objetivo do Aplicativo
Substituir o "caderninho" de anotações por um fluxo digital que organiza os dados do cliente e rastreia o status de cada envio para a plataforma iGreen Connect.

---

### 2. Fluxo de Dados (Campos Obrigatórios)
O consultor deve preencher os seguintes campos durante a visita:

*   **Dados Pessoais:**
    *   Nome Completo
    *   Data de Nascimento
    *   CPF
*   **Endereço:**
    *   CEP
    *   Rua e Número
    *   Bairro
*   **Contato:**
    *   Telefone (WhatsApp)
    *   E-mail
*   **Dados Técnicos (Energia):**
    *   Número da Unidade Consumidora (UC)
    *   Valor da Última Fatura (R$)
*   **Documentação (Anexos):**
    *   Foto do Documento Pessoal (Frente e Verso)
    *   Foto da Última Fatura (Completa e legível)

---

### 3. Funcionalidades de Gestão (O Diferencial)

#### 3.1. Painel de Devolutivas
Um espaço dedicado para listar leads que foram rejeitados pela iGreen, com o motivo específico (ex: "Assinatura não confere", "Foto da fatura cortada"). O licenciado recebe uma notificação e pode corrigir o dado ou subir nova foto diretamente pelo app.

#### 3.2. Status do Pipeline
*   **Coletado:** Dados salvos no app, mas ainda não submetidos.
*   **Em Processamento:** Submetido ao portal iGreen.
*   **Pendente (Devolutiva):** Aguardando correção do licenciado.
*   **Convertido/Ativo:** Cliente validado e gerando quilowatts.

#### 3.3. Modo Offline
Capacidade de salvar os dados localmente no smartphone quando o sinal estiver instável (comum em bairros afastados) e sincronizar assim que houver conexão.

---

### 4. Integração com Semente Hub
Este app alimenta diretamente o **Módulo de Inteligência Comercial (CRM)**, permitindo que o líder da rede veja o volume de "leads em campo" da sua equipe em tempo real.

---

### 5. Roadmap de Implementação
1.  **MVP (Nível 1):** Formulário digital simples com salvamento local.
2.  **Versão 1.1 (Nível 2):** Integração com câmera para OCR (leitura automática da UC na fatura).
3.  **Versão 1.2 (Nível 3):** Dashboard de conversão e gestão de pendências.
