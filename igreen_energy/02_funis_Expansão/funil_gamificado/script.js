// ============================================
// PERGUNTAS — Filtro de Perfil por Identidade
// Psicologia: Self-selection + Commitment Escalation
// Objetivo: Separar curiosos de candidatos sérios
// ============================================
const questions = [
    {
        question: "O que mais te atrai quando pensa em empreender?",
        why: "A mentalidade define o resultado.",
        options: [
            { text: "Dinheiro rápido, mesmo sem previsibilidade.", score: 0 },
            { text: "Uma renda recorrente que cresce mês a mês, como um aluguel digital.", score: 2 }
        ]
    },
    {
        question: "Como você imagina o seu dia a dia ideal de trabalho?",
        why: "O modelo certo multiplica o seu tempo.",
        options: [
            { text: "Trabalho pesado, no campo, sol e chuva — o que vier.", score: 0 },
            { text: "100% digital, fechando negócios direto do meu celular.", score: 3 }
        ]
    },
    {
        question: "Qual frase combina mais com você?",
        why: "Os primeiros a se posicionar lideram o mercado.",
        options: [
            { text: "Prefiro ir devagar e não arriscar nada por enquanto.", score: 0 },
            { text: "Quando identifico uma oportunidade real, eu entro antes da maioria.", score: 3 }
        ]
    },
    {
        question: "Quanto tempo por dia você investiria para construir sua liberdade financeira?",
        why: "Consistência é o combustível do crescimento.",
        options: [
            { text: "Sinceramente? Hoje não teria tempo para nada novo.", score: -2 },
            { text: "1 a 2 horas focadas — o suficiente para começar sem largar nada.", score: 2 },
            { text: "Mais de 3 horas — estou pronto para acelerar de verdade.", score: 3 }
        ]
    },
    {
        question: "O que te impede hoje de ganhar o que você realmente merece?",
        why: "A barreira certa revela o caminho certo.",
        options: [
            { text: "Não quero arriscar nada. Prefiro a estabilidade que tenho.", score: -3 },
            { text: "Já tentei outras coisas, mas nenhuma tinha estrutura de verdade.", score: 2 },
            { text: "Falta de uma oportunidade séria, com suporte real e recorrência.", score: 3 }
        ]
    },
    {
        question: "Se um especialista te mostrasse um modelo comprovado para faturar com energia solar direto do celular, o que você faria?",
        why: "A decisão separa quem sonha de quem realiza.",
        options: [
            { text: "Parece legal, mas vou pensar com calma depois...", score: -5 },
            { text: "Quero entender os detalhes agora e, se fizer sentido, começar essa semana.", score: 3 }
        ]
    }
];

let currentQuestion = 0;
let totalScore = 0;

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startQuiz() {
    switchScreen('quiz');
    renderQuestion();
}

// Ícones por pergunta (refletem o tema psicológico)
const questionIcons = [
    'fa-compass',              // Direção / Mentalidade
    'fa-mobile-screen-button', // Digital
    'fa-rocket',               // Ambição
    'fa-hourglass-half',       // Tempo
    'fa-lock-open',            // Desbloqueio
    'fa-handshake'             // Decisão / Compromisso
];

// ============================================
// CONFETTI — Efeito sutil de progresso
// Partículas verdes e douradas (brand iGreen)
// ============================================
function celebrateProgress() {
    if (typeof confetti !== 'function') return;

    // Burst principal — partículas verdes e douradas saindo do centro
    confetti({
        particleCount: 45,
        spread: 70,
        startVelocity: 25,
        gravity: 0.8,
        ticks: 60,
        origin: { x: 0.5, y: 0.55 },
        colors: ['#00ff7b', '#00A651', '#FFD700', '#00E5FF'],
        shapes: ['circle'],
        scalar: 0.7,
        drift: 0,
        zIndex: 9999
    });

    // Segundo burst menor e mais disperso (dá profundidade)
    setTimeout(() => {
        confetti({
            particleCount: 20,
            spread: 120,
            startVelocity: 15,
            gravity: 1,
            ticks: 40,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#00ff7b', '#ffffff'],
            shapes: ['circle'],
            scalar: 0.5,
            zIndex: 9999
        });
    }, 100);
}

function renderQuestion() {
    const q = questions[currentQuestion];

    // Atualizar ícone do quiz
    const iconEl = document.querySelector('.quiz-icon i');
    iconEl.className = `fas ${questionIcons[currentQuestion] || 'fa-briefcase'}`;

    // Atualizar contador de pergunta
    const counter = document.getElementById('question-counter');
    counter.innerHTML = `Pergunta <span class="counter-highlight">${currentQuestion + 1}</span>/${questions.length}`;

    // Renderizar Step Dots
    const dotsContainer = document.getElementById('step-dots');
    dotsContainer.innerHTML = '';
    questions.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'step-dot';
        if (i < currentQuestion) dot.classList.add('completed');
        if (i === currentQuestion) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });

    // Atualizar textos
    const qText = document.getElementById('question-text');
    const qWhy = document.getElementById('question-why');

    qText.innerText = q.question;
    qWhy.innerText = q.why;

    // Reflow para re-ativar animações
    const card = document.querySelector('.quiz-question-card');
    card.classList.remove('fade-in-up');
    void card.offsetWidth;
    card.classList.add('fade-in-up');

    // Renderizar Opções
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn fade-in-up';
        btn.innerText = opt.text;
        btn.style.animationDelay = `${0.15 + (index * 0.08)}s`;
        btn.onclick = () => {
            // Feedback visual de seleção
            btn.classList.add('selected');

            // Efeito de confetti sutil ao responder ✨
            celebrateProgress();

            // Delay curto antes de avançar
            setTimeout(() => handleAnswer(opt.score), 550);
        };
        optionsContainer.appendChild(btn);
    });

    // Atualizar Barra de Progresso
    const progress = (currentQuestion / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function handleAnswer(score) {
    totalScore += score;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        document.getElementById('progress-bar').style.width = `100%`;
        startLoading();
    }
}

function startLoading() {
    switchScreen('loading');
    const loadingText = document.getElementById('loading-text');
    const steps = [
        "Analisando seu perfil de empreendedor...",
        "Verificando alinhamento com o modelo digital...",
        "Cruzando suas respostas com o perfil ideal...",
        "Diagnóstico Finalizado."
    ];

    let step = 0;
    const interval = setInterval(() => {
        if (step < steps.length) {
            loadingText.innerText = steps[step];
            // Retrigger animation
            loadingText.classList.remove('fade-in-up');
            void loadingText.offsetWidth;
            loadingText.classList.add('fade-in-up');
            step++;
        } else {
            clearInterval(interval);
            showResult();
        }
    }, 1800);
}

function showResult() {
    switchScreen('result');
    const title = document.getElementById('result-title');
    const desc = document.getElementById('result-desc');
    const icon = document.getElementById('result-icon');
    const wppBtn = document.getElementById('btn-whatsapp');
    const igBtn = document.getElementById('btn-instagram');
    const ctaText = document.getElementById('result-cta');

    if (totalScore >= 7) {
        // Aprovado - Perfil alinhado
        icon.innerHTML = `<div class="result-icon-badge"><i class="fas fa-trophy"></i></div>`;
        title.innerHTML = "Perfil Aprovado:<br><span class='text-neon'>Vendedor de Pás</span>";
        desc.innerText = "Suas respostas mostram que você pensa como quem constrói riqueza de verdade: controlando a infraestrutura, não o garimpo.";
        ctaText.innerText = "Toque no botão abaixo e converse diretamente com nosso time para iniciar seu credenciamento.";
        ctaText.classList.remove('hidden');
        
        // WhatsApp Direct Link
        wppBtn.href = "https://wa.me/5547997838464?text=Ol%C3%A1%21%20Fiz%20o%20diagn%C3%B3stico%20e%20fui%20aprovado%20como%20Vendedor%20de%20P%C3%A1s.";
        wppBtn.classList.remove('hidden');

        // Celebração final mais intensa
        setTimeout(() => {
            if (typeof confetti === 'function') {
                confetti({ particleCount: 80, spread: 100, origin: { y: 0.6 }, colors: ['#00ff7b', '#00A651', '#FFD700', '#00E5FF'], zIndex: 9999 });
            }
        }, 300);
    } else {
        // Reprovado
        icon.innerHTML = `<div class="result-icon-badge error"><i class="fas fa-circle-exclamation"></i></div>`;
        title.innerText = "Perfil Não Alinhado";
        desc.innerText = "O diagnóstico indica que o seu momento atual talvez não se alinhe com o modelo de infraestrutura comercial recorrente neste momento.";
        ctaText.innerText = "Continue acompanhando nossos conteúdos gratuitos no Instagram.";
        ctaText.classList.remove('hidden');
        igBtn.classList.remove('hidden');
    }
}
