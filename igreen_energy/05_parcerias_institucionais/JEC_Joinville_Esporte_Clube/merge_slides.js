const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

const s56_start = content.indexOf('<!-- 5. O Gatilho Regulatório -->');
const s7_start = content.indexOf('<!-- 7. iGreen Energy -->');

const merge1_html = `<!-- 5. Como Funciona -->
        <div class="slide slide-split" id="slide-5">
            <div class="block-content bg-red">
                <span class="subtitle" style="color: white;">O Gatilho Regulatório</span>
                <h2 class="title-lg">A Nova Fonte de<br>Renda Esportiva</h2>
                <p class="mt-md">A Lei 14.300 quebrou o monopólio das concessionárias. O torcedor paga menos, o lucro volta para o JEC, e a energia limpa vence. O dinheiro que ia pra distribuidora agora financia o nosso clube.</p>
                <div class="mt-lg">
                    <h3 class="title-md" style="color: var(--color-igreen-neon);">O lucro muda de mão</h3>
                    <p style="font-size: 1.1rem; line-height: 1.5;">A iGreen injeta a energia na rede pública e o desconto vai direto para o CPF do torcedor. Sem obras, sem custo.</p>
                </div>
            </div>
            <div class="block-content bg-black" style="padding: 40px 60px;">
                <!-- Diagrama Animado -->
                <div class="flow-diagram">
                    <!-- Modelo Antigo -->
                    <div class="subtitle" style="margin-bottom: 0px; color: rgba(255,255,255,0.4);">O Modelo Antigo
                    </div>
                    <div class="flow-row old-model">
                        <div class="node">
                            <span class="node-icon">🏭</span>
                            <span class="node-label">Usina</span>
                        </div>
                        <div class="flow-path">
                            <div class="flow-dot"></div>
                        </div>
                        <div class="node" style="position: relative;">
                            <span class="node-icon">🏢</span>
                            <span class="node-label">Distribuidora</span>
                            <div class="profit-badge red">LUCRO TOTAL</div>
                            <div class="cost-container">
                                <span class="cost-tag active">Fatura Rede</span>
                                <span class="cost-tag active">Fatura Geração</span>
                            </div>
                        </div>
                        <div class="flow-path">
                            <div class="flow-dot"></div>
                        </div>
                        <div class="node">
                            <span class="node-icon">👤</span>
                            <span class="node-label" style="color: #888;">Torcedor<br>(Paga Caro)</span>
                        </div>
                    </div>

                    <!-- Novo Modelo -->
                    <div class="subtitle" style="margin-top: 10px; margin-bottom: 0px; color: var(--color-igreen);">A
                        Nova Matriz (Lei 14.300)</div>
                    <div class="flow-row new-model">
                        <div class="node">
                            <span class="node-icon">☀️</span>
                            <span class="node-label txt-igreen">iGreen</span>
                        </div>
                        <div class="flow-path">
                            <div class="flow-dot" style="animation-duration: 1.5s;"></div>
                        </div>
                        <div class="node" style="position: relative;">
                            <span class="node-icon"><img src="assets/escudo_jec.jpg"
                                    style="height: 40px; border-radius: 50%; border: 2px solid var(--color-igreen);"></span>
                            <span class="node-label" style="color: white;">JEC</span>
                            <div class="profit-badge">NOVA RECEITA</div>
                        </div>
                        <div class="flow-path">
                            <div class="flow-dot" style="animation-duration: 1.5s; animation-delay: 0.75s;"></div>
                        </div>
                        <div class="node" style="position: relative;">
                            <span class="node-icon">🙋‍♂️</span>
                            <span class="node-label" style="color: white;">Torcedor</span>
                            <div class="profit-badge">ECONOMIA</div>
                            <div class="cost-container">
                                <span class="cost-tag">Custo Rede</span>
                                <span class="cost-tag removed">Custo Geração</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        `;

content = content.substring(0, s56_start) + merge1_html + content.substring(s7_start);

const s9_start = content.indexOf('<!-- 9. O Potencial -->');
const s11_start = content.indexOf('<!-- 11. Risco Zero -->');

const merge2_html = `<!-- 8. Impacto Financeiro (Simulador) -->
        <div class="slide bg-black" id="slide-8">
            <div class="block-content txt-center">
                <span class="subtitle">Apenas 2,5% de adesão</span>
                <h2 class="title-lg">Impacto <span class="txt-igreen">Financeiro</span></h2>

                <div class="calculator-container mt-md">
                    <div class="calc-toggle">
                        <button class="toggle-btn active" onclick="setProduct('energia', this)">Conexão Green
                            (Energia)</button>
                        <button class="toggle-btn" onclick="setProduct('telecom', this)">iGreen Mobile
                            (Telecom)</button>
                    </div>

                    <div class="calc-row">
                        <div class="torcedores-display" id="displayTorcedores">10.000</div>
                        <div class="calc-stat-label" id="calcLabel">Torcedores com Energia</div>
                        <input type="range" min="1000" max="40000" value="10000" step="1000" class="range-slider"
                            id="calcSlider" oninput="updateCalculator(this.value)">
                    </div>

                    <div class="calc-stats-grid">
                        <div class="calc-stat-item">
                            <div class="calc-stat-label">Renda Mensal</div>
                            <div class="calc-stat-value" id="valRecorrencia">R$ 120.000</div>
                            <div class="calc-stat-label" style="font-size: 0.7rem;" id="labelRecorrencia">20% do ganho
                                sobre cada conta</div>
                        </div>
                        <div class="calc-stat-item bonus">
                            <div class="calc-stat-label">Comissão Imediata</div>
                            <div class="calc-stat-value" id="valImediato">R$ 1.200.000</div>
                            <div class="calc-stat-label" style="font-size: 0.7rem;" id="labelImediato">40% de Bônus de
                                Ativação</div>
                        </div>
                    </div>

                    <div class="calc-stat-item"
                        style="margin-top: 20px; border-left-color: white; width: 100%; box-sizing: border-box;">
                        <div class="calc-stat-label">Renda Anual Total (Ano 1)</div>
                        <div class="calc-stat-value" id="valAnual"
                            style="color: var(--color-igreen); font-size: 3.5rem;">R$ 2.640.000</div>
                    </div>

                    <div class="calc-stat-item"
                        style="margin-top: 10px; border-left-color: var(--color-igreen); width: 100%; box-sizing: border-box; background: rgba(0, 217, 108, 0.05);">
                        <div class="calc-stat-label">Média Mensal (Anual ÷ 12)</div>
                        <div class="calc-stat-value" id="valMensal" style="color: white; font-size: 2.5rem;">R$ 220.000
                        </div>
                        <div class="calc-stat-label" style="font-size: 0.7rem;">Inclui recorrência + comissões
                            distribuídas</div>
                    </div>

                    <p style="font-size: 0.8rem; opacity: 0.5; margin-top: 15px;">*Baseado em fatura média de R$ 300,00
                        (Celesc SC) e portabilidade Telecom.</p>
                </div>
            </div>
        </div>

        `;

content = content.substring(0, s9_start) + merge2_html + content.substring(s11_start);

const s12_start = content.indexOf('<!-- 12. Calendário de Execução -->');
const s14_start = content.indexOf('<!-- 14. O Piloto -->');

const merge3_html = `<!-- 10. Execução em 4 Semanas -->
        <div class="slide slide-split" id="slide-10">
            <div class="block-content bg-white" style="color: black;">
                <span class="subtitle" style="color: var(--color-jec-red);">Go-to-Market</span>
                <h2 class="title-lg" style="color: black;">Execução em <span style="color: var(--color-jec-red)">4 Semanas</span></h2>
                <ul style="text-align: left; list-style: none; padding: 0; margin-top: 40px; color: black; font-size: 1.2rem; line-height: 1.8;">
                    <li style="margin-bottom: 25px;"><strong>Semana 1:</strong> Onboarding e Configuração</li>
                    <li style="margin-bottom: 25px;"><strong>Semana 2:</strong> Workshop Força JEC</li>
                    <li style="margin-bottom: 25px;"><strong>Semana 3:</strong> Lançamento para Sócios</li>
                    <li><strong>Semana 4:</strong> Expansão da Comunidade</li>
                </ul>
            </div>
            <div class="block-content bg-black" style="padding: 40px 60px; display: flex; flex-direction: column; justify-content: center;">
                <span class="subtitle">Treinamento</span>
                <h2 class="title-lg" style="font-size: 2.8rem;">Workshop <span class="txt-igreen">Força JEC</span></h2>
                <p class="mt-md" style="font-size: 1.1rem;">Em apenas 4 dias capacitamos a equipe do clube para rodar a operação de forma independente.</p>
                <div class="grid-stats" style="grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 40px;">
                    <div class="stat-card" style="padding: 20px; text-align: center;">
                        <h3 style="font-size: 1.8rem;">D1</h3>
                        <p style="font-size: 1rem;">Mentalidade</p>
                    </div>
                    <div class="stat-card" style="padding: 20px; text-align: center;">
                        <h3 style="font-size: 1.8rem;">D2</h3>
                        <p style="font-size: 1rem;">Técnica</p>
                    </div>
                    <div class="stat-card" style="padding: 20px; text-align: center;">
                        <h3 style="font-size: 1.8rem;">D3</h3>
                        <p style="font-size: 1rem;">Prática</p>
                    </div>
                    <div class="stat-card" style="padding: 20px; text-align: center;">
                        <h3 style="font-size: 1.8rem;">D4</h3>
                        <p style="font-size: 1rem;">Execução</p>
                    </div>
                </div>
            </div>
        </div>

        `;

content = content.substring(0, s12_start) + merge3_html + content.substring(s14_start);

// Renumber remaining slides
content = content.replace('<!-- 7. iGreen Energy -->', '<!-- 6. iGreen Energy -->');
content = content.replace('id="slide-7"', 'id="slide-6"');

content = content.replace('<!-- 8. O que o JEC Ganha -->', '<!-- 7. O que o JEC Ganha -->');
content = content.replace('id="slide-8"', 'id="slide-7"');

content = content.replace('<!-- 11. Risco Zero -->', '<!-- 9. Risco Zero -->');
content = content.replace('id="slide-11"', 'id="slide-9"');

content = content.replace('<!-- 14. O Piloto -->', '<!-- 11. O Piloto -->');
content = content.replace('id="slide-14"', 'id="slide-11"');

content = content.replace('<!-- 15. Legado -->', '<!-- 12. Legado -->');
content = content.replace('id="slide-15"', 'id="slide-12"');

content = content.replace('<!-- 16. Fechamento -->', '<!-- 13. Fechamento -->');
content = content.replace('id="slide-16"', 'id="slide-13"');

// Update JS total slides
content = content.replace('const totalSlides = 16;', 'const totalSlides = 13;');

fs.writeFileSync('index.html', content);
console.log('Merge complete!');
