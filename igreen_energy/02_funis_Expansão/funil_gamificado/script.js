const questions = [
    {
        question: "Na grande corrida do ouro de 1848, na Califórnia, qual papel você preferiria jogar para garantir sua riqueza?",
        why: "Na febre do ouro, quem ficou rico de verdade não foi quem cavou a terra, mas quem controlou a infraestrutura comercial.",
        options: [
            { text: "O Garimpeiro (Arriscar tudo cavando a terra, sob sol e chuva, atrás de uma pepita de ouro).", score: 0 },
            { text: "O Vendedor de Pás (Lucrar de forma garantida e recorrente fornecendo a infraestrutura para todos os garimpeiros).", score: 2 }
        ]
    },
    {
        question: "Trazendo essa lógica para hoje: quem você prefere ser na 'Nova Corrida do Ouro' da transição energética?",
        why: "Com a tecnologia da China barateando as placas em 85%, a infraestrutura já está pronta. O jogo mudou.",
        options: [
            { text: "O Garimpeiro Moderno (Gastar R$ 30.000+ comprando e instalando placas pesadas no telhado, assumindo a manutenção).", score: 0 },
            { text: "O Vendedor de Pás Moderno (Apenas conectar clientes à energia mais barata, faturando comissões recorrentes direto do celular).", score: 3 }
        ]
    },
    {
        question: "Para entendermos se esse modelo faz sentido para você, em qual momento profissional você está hoje?",
        why: "A clareza sobre o seu momento atual define a velocidade do seu treinamento comercial.",
        options: [
            { text: "CLT, buscando uma transição de carreira segura e inteligente.", score: 1 },
            { text: "Autônomo/Vendedor, cansado de vendas isoladas e de começar do zero todo mês.", score: 2 },
            { text: "Empresário/Empreendedor, buscando diversificar receita com alta recorrência.", score: 3 }
        ]
    },
    {
        question: "Qual é a sua meta de renda mensal de recorrência comercial que te traria liberdade financeira?",
        why: "Metas claras criam caminhos claros. Precisamos de um alvo real de construção.",
        options: [
            { text: "R$ 3.000 a R$ 5.000 (Uma excelente segunda fonte de renda recorrente).", score: 1 },
            { text: "R$ 5.000 a R$ 10.000 (Para atingir minha independência profissional com consistência).", score: 2 },
            { text: "Acima de R$ 10.000 (Construir um império comercial duradouro e sólido).", score: 3 }
        ]
    },
    {
        question: "Seu tempo é seu maior ativo. Quantas horas você consegue dedicar por dia para se qualificar e gerir seu negócio?",
        why: "O sucesso não exige tempo integral inicial, mas exige constância diária focada.",
        options: [
            { text: "1 a 2 horas (Perfeito para começar em paralelo sem largar o que faz hoje).", score: 1 },
            { text: "3 a 4 horas (Tenho foco e disciplina diária para acelerar meus ganhos).", score: 2 },
            { text: "Mais de 4 horas (Pronto para mergulhar de cabeça e focar 100% no crescimento).", score: 3 }
        ]
    },
    {
        question: "Nós não buscamos aventureiros. Qual é o seu nível de comprometimento em aplicar o método e buscar resultados?",
        why: "O mercado de energia paga milhões em comissões todos os meses, mas apenas para quem executa com seriedade.",
        options: [
            { text: "Quero apenas testar e olhar se é fácil.", score: -5 },
            { text: "Entendo que é um trabalho comercial sério e estou pronto para ser treinado e executar.", score: 3 }
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

// Ícones Business por pergunta
const questionIcons = [
    'fa-chess-rook',      // Estratégia
    'fa-bolt',            // Energia / Transição
    'fa-briefcase',       // Profissional
    'fa-bullseye',        // Meta
    'fa-clock',           // Tempo
    'fa-handshake'        // Comprometimento
];

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
            // Delay curto antes de avançar
            setTimeout(() => handleAnswer(opt.score), 400);
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
        "Avaliando seu perfil histórico...",
        "Verificando mentalidade de infraestrutura...",
        "Processando alinhamento com perfil Samuel Brannan...",
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
        // Aprovado - Perfil Samuel Brannan
        icon.innerHTML = `<div class="result-icon-badge"><i class="fas fa-trophy"></i></div>`;
        title.innerHTML = "Perfil Aprovado:<br><span class='text-neon'>Vendedor de Pás</span>";
        desc.innerText = "Suas respostas mostram que você pensa como quem constrói riqueza de verdade: controlando a infraestrutura, não o garimpo.";
        ctaText.innerText = "Toque no botão abaixo e converse diretamente com nosso time para iniciar seu credenciamento.";
        ctaText.classList.remove('hidden');
        
        // WhatsApp Direct Link
        wppBtn.href = "https://wa.me/5547997838464?text=Ol%C3%A1%21%20Fiz%20o%20diagn%C3%B3stico%20e%20fui%20aprovado%20como%20Vendedor%20de%20P%C3%A1s.";
        wppBtn.classList.remove('hidden');
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
