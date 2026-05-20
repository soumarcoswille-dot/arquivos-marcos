# 🛠️ Stack Tecnológico: Semente Hub Digital

Este documento define as tecnologias padrões utilizadas para o desenvolvimento das soluções do ecossistema Semente Hub.

---

### 1. Backend e Infraestrutura
*   **Plataforma Core:** **Supabase**
    *   **Banco de Dados:** PostgreSQL (Gestão de leads, licenciados e rede).
    *   **Storage:** Bucket de arquivos para armazenamento de faturas e documentos pessoais.
    *   **Autenticação:** Supabase Auth (Login para licenciados).
*   **Automação:** **N8N** (Conexão entre o App de Coleta e o portal iGreen/WhatsApp).

---

### 2. Frontend (Aplicação)
*   **Framework Sugerido:** **Next.js** ou **Vite (React)**
*   **Estilo:** **Tailwind CSS** (Foco em design limpo e mobile-first).
*   **Tipo de App:** **PWA (Progressive Web App)** - Para rodar direto no navegador do celular com atalho na tela inicial.

---

### 3. Integrações de Terceiros
*   **Checkout:** **Hotmart** (Webhook enviando dados para o Supabase/N8N após a compra).
*   **Comunicação:** API do WhatsApp (via N8N/Evolution API) para notificações de devolutivas.

---

### 4. Gestão e Liderança
*   **Sócios:** Marcos Wille & Rodrigo.
*   **Missão:** Transformar tecnologia em resultados práticos para licenciados iGreen.
