/* ========================================
   CUBILÔ PRESENTATION — JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initScrollAnimations();
    initCounters();
    initNavigation();
    initCharts();
    initConsolBars();
});

/* ========================================
   PARTICLES
   ======================================== */
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        const size = 1 + Math.random() * 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        container.appendChild(particle);
    }
}

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el, i) => {
        el.dataset.delay = (i % 4) * 100;
        observer.observe(el);
    });
}

/* ========================================
   COUNTERS
   ======================================== */
function initCounters() {
    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                entry.target.dataset.counted = 'true';
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const startTime = performance.now();

    function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutExpo(progress);
        const current = Math.floor(easedProgress * target);

        el.textContent = current.toLocaleString('pt-BR');

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target.toLocaleString('pt-BR');
        }
    }

    requestAnimationFrame(update);
}

/* ========================================
   NAVIGATION
   ======================================== */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link
        const sections = document.querySelectorAll('section[id], footer[id]');
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Mobile toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    // Close on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

/* ========================================
   CONSOLIDATION BARS
   ======================================== */
function initConsolBars() {
    const bars = document.querySelectorAll('.consol-bar-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });

    bars.forEach(bar => observer.observe(bar));
}

/* ========================================
   CHARTS (Chart.js)
   ======================================== */
function initCharts() {
    // Global Chart.js defaults
    Chart.defaults.color = '#9494a8';
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.plugins.legend.labels.usePointStyle = true;
    Chart.defaults.plugins.legend.labels.pointStyleWidth = 10;
    Chart.defaults.plugins.legend.labels.padding = 20;

    initParadasChart();
    initCalderariaChart();
    initManutencaoChart();
    initComparisonChart();
    initPaybackSimulator();
}

/* ========================================
   PAYBACK SIMULATOR
   ======================================== */
function initPaybackSimulator() {
    const slider = document.getElementById('investimentoRange');
    const displayValue = document.getElementById('investimentoText');
    const paybackDisplay = document.getElementById('paybackMonthsText');
    const paybackBar = document.getElementById('paybackProgress');

    if (!slider) return;

    // Constante baseada nos dados analisados (Ganhos operacionais + redução custo manutenção)
    // Impacto total R$ 13.923.911,82 / 12 meses = R$ 1.160.325 por mês de economia potencial
    const GANHO_MENSAL_ESTIMADO = (13923911.82 / 12) * 0.8; // Assumindo ganho de 80% de eficiência

    const updateSimulator = () => {
        const investimento = parseInt(slider.value);
        
        // Atualiza texto do investimento formatado
        displayValue.value = 'R$ ' + (investimento / 1000000).toFixed(1) + ' Milhões';

        // Calcula Payback em meses
        const meses = investimento / GANHO_MENSAL_ESTIMADO;
        
        // Atualiza display do payback
        paybackDisplay.textContent = meses.toFixed(1);

        // Atualiza barra de progresso (Inverso: quanto menor o payback, maior o progresso da "eficiência")
        // Meta de mercado é payback < 12 meses, meta visual 24 meses
        const metaMeses = 24; 
        const percent = Math.max(5, Math.min(100, (1 - (meses / metaMeses)) * 100));
        paybackBar.style.width = percent + '%';
        
        // Muda cor da barra se for extremamente rápido
        if (meses < 6) {
            paybackBar.style.background = 'linear-gradient(90deg, var(--accent), var(--success))';
        } else if (meses < 12) {
            paybackBar.style.background = 'var(--accent)';
        } else {
            paybackBar.style.background = 'var(--text-muted)';
        }
    };

    slider.addEventListener('input', updateSimulator);
    
    // Trigger inicial
    updateSimulator();
}



function initParadasChart() {
    const ctx = document.getElementById('paradasChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Skip (geral)', 'Ponte Rolante', 'Calha do Skip'],
            datasets: [{
                data: [1680, 1125, 360],
                backgroundColor: [
                    '#f97316',
                    '#3b82f6',
                    '#a855f7'
                ],
                borderColor: '#16161f',
                borderWidth: 3,
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 16,
                        font: { size: 12, weight: '500' }
                    }
                },
                tooltip: {
                    backgroundColor: '#1e1e2a',
                    titleColor: '#f0f0f5',
                    bodyColor: '#9494a8',
                    borderColor: 'rgba(255,255,255,0.06)',
                    borderWidth: 1,
                    cornerRadius: 10,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.raw / total) * 100).toFixed(1);
                            return `${context.label}: ${context.raw.toLocaleString('pt-BR')} min (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function initCalderariaChart() {
    const ctx = document.getElementById('calderariaChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Tremonha', 'PT Ímã', 'PT Ímã+Torque', 'Skip 1', 'Skip 2'],
            datasets: [{
                label: 'Custo (R$)',
                data: [361373.16, 12395.20, 216866.32, 12932.24, 456157.67],
                backgroundColor: [
                    'rgba(249, 115, 22, 0.7)',
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(59, 130, 246, 0.5)',
                    'rgba(168, 85, 247, 0.5)',
                    'rgba(168, 85, 247, 0.8)'
                ],
                borderColor: [
                    '#f97316',
                    '#3b82f6',
                    '#3b82f6',
                    '#a855f7',
                    '#a855f7'
                ],
                borderWidth: 1,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e1e2a',
                    titleColor: '#f0f0f5',
                    bodyColor: '#9494a8',
                    borderColor: 'rgba(255,255,255,0.06)',
                    borderWidth: 1,
                    cornerRadius: 10,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return 'R$ ' + context.raw.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false },
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + (value / 1000).toFixed(0) + 'k';
                        }
                    }
                },
                y: {
                    grid: { display: false },
                    ticks: { font: { size: 11 } }
                }
            }
        }
    });
}

function initManutencaoChart() {
    const ctx = document.getElementById('manutencaoChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Skips 1 e 2', 'PT0023', 'PT0028', 'Carro Balanças'],
            datasets: [{
                label: 'Custo (R$)',
                data: [790659.86, 586668.30, 3156629.14, 2443329.93],
                backgroundColor: [
                    'rgba(249, 115, 22, 0.7)',
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(168, 85, 247, 0.7)'
                ],
                borderColor: [
                    '#f97316',
                    '#3b82f6',
                    '#ef4444',
                    '#a855f7'
                ],
                borderWidth: 1,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e1e2a',
                    titleColor: '#f0f0f5',
                    bodyColor: '#9494a8',
                    borderColor: 'rgba(255,255,255,0.06)',
                    borderWidth: 1,
                    cornerRadius: 10,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return 'R$ ' + context.raw.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false },
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + (value / 1000000).toFixed(1) + 'M';
                        }
                    }
                },
                y: {
                    grid: { display: false },
                    ticks: { font: { size: 11 } }
                }
            }
        }
    });
}

function initComparisonChart() {
    const ctx = document.getElementById('comparisonChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Custo de Manutenção', 'Produção Perdida', 'Impacto Combinado'],
            datasets: [{
                label: 'Valor (R$)',
                data: [8037011.82, 5886900, 13923911.82],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(249, 115, 22, 0.8)'
                ],
                borderColor: [
                    '#3b82f6',
                    '#ef4444',
                    '#f97316'
                ],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e1e2a',
                    titleColor: '#f0f0f5',
                    bodyColor: '#9494a8',
                    borderColor: 'rgba(255,255,255,0.06)',
                    borderWidth: 1,
                    cornerRadius: 10,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return 'R$ ' + context.raw.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 11, weight: '500' } }
                },
                y: {
                    grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false },
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + (value / 1000000).toFixed(1) + 'M';
                        }
                    }
                }
            }
        }
    });
}
