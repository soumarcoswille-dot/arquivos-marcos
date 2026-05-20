# Specification: Semente Hub - SDR Automação MVP 1

**Track ID:** semente-hub-mvp1
**Type:** Feature
**Created:** 2026-05-09
**Status:** Active

## Summary
Implementar o SDR automático que filtra leads digitais e inicia o contato via WhatsApp.

## Acceptance Criteria
- [ ] Criar nó de filtro no n8n (origem == digital).
- [ ] Configurar roteamento para Rota A (Gamificado) e Rota B (Site).
- [ ] Integrar com o CRM do Rodrigo.
- [ ] Validar silêncio do bot para leads manuais.

## Technical Notes
- Usar n8n como orquestrador principal.
- Prompt da IA focado em agendamento (Rota A) e venda direta (Rota B).
