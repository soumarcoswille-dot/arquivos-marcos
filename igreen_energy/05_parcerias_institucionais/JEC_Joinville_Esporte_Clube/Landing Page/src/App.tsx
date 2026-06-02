import { useState } from 'react'
import {
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Heart,
  DollarSign,
  MessageSquare
} from 'lucide-react'

// Assets import
import jecGanhaGanha from './assets/jec_ganha_ganha.png'
import torcedorNoBg from './assets/torcedor_jec_no_bg.png'

interface FAQItem {
  question: string;
  answer: string;
}

function App() {
  const [billValue, setBillValue] = useState<number>(450)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

  // Lead form state
  const [leadName, setLeadName] = useState<string>('')
  const [leadPhone, setLeadPhone] = useState<string>('')

  // Calculate variables
  const discountRate = 0.08 // 8%
  const jecRate = 0.04 // 4%

  const monthlySavings = billValue * discountRate
  const yearlySavings = monthlySavings * 12
  const monthlyJecContribution = billValue * jecRate
  const yearlyJecContribution = monthlyJecContribution * 12

  const faqData: FAQItem[] = [
    {
      question: "Como funciona a economia na conta de luz?",
      answer: "Através da compensação de energia limpa (solar). Usinas parceiras geram energia de fontes renováveis e injetam na rede da concessionária local (Celesc). Como o custo de produção da energia limpa é menor, esse benefício é repassado a você como um desconto fixo de 8% na tarifa de energia, sem necessidade de investimento em painéis solares próprios."
    },
    {
      question: "Vou ter que pagar alguma taxa de adesão ou fidelidade?",
      answer: "Não! A adesão é 100% gratuita. Não há taxas de serviço, mensalidades ou qualquer tipo de multa por cancelamento. Você economiza de verdade, sem pegadinhas."
    },
    {
      question: "Preciso fazer obras ou trocar a fiação da minha casa/empresa?",
      answer: "Absolutamente nada. A energia continua chegando exatamente da mesma forma pela rede da distribuidora local. A única mudança é financeira: você paga menos e ajuda o JEC."
    },
    {
      question: "Como o JEC recebe o repasse de 4%?",
      answer: "Parte do faturamento gerado pela sua conta mensal é repassado diretamente para o Joinville Esporte Clube como patrocínio oficial de sustentabilidade. Esse valor sai da margem de operação e não aumenta em nada a sua conta (pelo contrário, você continua com 8% de desconto garantido)."
    },
    {
      question: "Qualquer pessoa física ou jurídica de Joinville e região pode aderir?",
      answer: "Sim! Se você é atendido pela concessionária de energia da região (Celesc) e tem uma conta média a partir de R$ 150 (residencial ou comercial), você está apto a aderir e começar a economizar."
    }
  ]

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!leadName || !leadPhone) return
    setFormSubmitted(true)
    setTimeout(() => {
      // Redireciona para o link oficial da parceria
      window.open('https://green.igreenenergy.com.br/?id=105658', '_blank')
      setShowModal(false)
      setFormSubmitted(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-jec-black text-jec-white font-sans selection:bg-jec-red selection:text-white pb-12 overflow-x-hidden">

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-jec-black/70 border-b border-white/10 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/img/logo-jec-alta.jpg" alt="Escudo JEC" className="h-10 w-10 object-contain rounded-full border border-white/20" />
            <span className="text-white/20 text-xl font-light">|</span>
            <span className="text-sm font-black uppercase tracking-widest text-white font-heading">JEC Energia</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-jec-red/10 text-jec-red border border-jec-red/20 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Parceria Oficial
            </span>
            <button
              onClick={() => setShowModal(true)}
              className="bg-jec-red hover:bg-jec-red-dark text-white font-bold text-sm px-4 py-2 rounded-lg transition-all duration-300 shadow-lg shadow-jec-red/20 active:scale-95"
            >
              Simular Agora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Animated Background */}
      <section className="relative pt-12 pb-20 px-4 min-h-[85vh] flex items-center">

        {/* Animated JEC Fans Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src="/img/Hero_1_mobile.png"
            alt="Torcida JEC"
            className="w-full h-full object-cover opacity-89 animate-hero-bg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-jec-black/30 via-transparent to-jec-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-jec-black/40 via-transparent to-jec-black/40" />
        </div>

        {/* Decorative glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-jec-red/10 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute top-1/2 right-10 w-60 h-60 bg-white/5 rounded-full blur-[80px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm mb-6 w-fit mx-auto lg:mx-0">
              <span className="w-2.5 h-2.5 rounded-full bg-jec-red animate-pulse" />
              <span className="text-white/80 font-medium text-xs sm:text-sm">Consumo Sustentável Tricolor</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-tight mb-4">
              Apoie o <span className="text-jec-red drop-shadow-[0_2px_10px_rgba(227,6,19,0.3)]">JEC Energy</span> e Economize na sua Conta de Luz
            </h1>

            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Economize <strong>8% na sua conta de luz</strong> sem gastar nada. A adesão é <strong>100% gratuita e digital</strong>, e você ainda destina <strong>4% do valor direto para apoiar o JEC</strong>. <br /> Simule abaixo o impacto da sua economia anual em segundos!
            </p>
          </div>

          {/* Interactive Calculator Card */}
          <div className="lg:col-span-5">
            <div className="bg-dark backdrop-blur-xl border border-jec-red p-6 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-jec-red/20 text-jec-red text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-bl-xl border-l border-b border-white/10 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Simulador Tricolor
              </div>

              <h3 className="text-lg font-heading font-bold text-white mb-6">Quanto você gasta com energia?</h3>

              {/* Slider & Input */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs text-white/50 font-medium">Sua Conta de Luz Média</span>
                  <span className="text-2xl font-black text-white font-heading">
                    R$ {billValue}
                  </span>
                </div>

                <input
                  type="range"
                  min="150"
                  max="10000"
                  step="50"
                  value={billValue}
                  onChange={(e) => setBillValue(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-jec-red transition-all"
                />
                <div className="flex justify-between text-[10px] text-white/30 mt-1">
                  <span>R$ 150</span>
                  <span>R$ 10.000</span>
                </div>
              </div>

              {/* Results Grid */}
              <div className="space-y-4 mb-8">

                {/* Savings Row */}
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-jec-red/10 flex items-center justify-center text-jec-red">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs text-white/60 font-semibold">Sua Economia Estimada</h4>
                      <p className="text-[10px] text-white/50 font-medium">8% de Desconto Garantido</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-extrabold text-white block">R$ {yearlySavings.toFixed(0)}/ano</span>
                    <span className="text-[10px] text-white/40 block">Equivale a R$ {monthlySavings.toFixed(0)}/mês economizados</span>
                  </div>
                </div>

                {/* JEC Contribution Row */}
                <div className="bg-jec-red/5 border border-jec-red/20 p-4 rounded-xl flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-jec-red/10 flex items-center justify-center text-jec-red">
                        <Heart className="w-5 h-5 fill-jec-red/20" />
                      </div>
                      <div>
                        <h4 className="text-xs text-white/60 font-semibold">Apoio Direto ao JEC</h4>
                        <p className="text-[10px] text-jec-red/80 font-medium">4% Patrocinado na Adesão</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-white block">R$ {monthlyJecContribution.toFixed(2)}/mês</span>
                      <span className="text-[10px] text-white/40 block">Equivale a R$ {yearlyJecContribution.toFixed(0)}/ano para o JEC</span>
                    </div>
                  </div>
                  <div className="text-[9px] text-white/40 border-t border-white/5 pt-2 leading-relaxed">
                    *Este valor é pago pela iGreen como patrocínio direto ao JEC por nos apresentar a você. O clube ganha, você economiza e o desconto continua garantido!
                  </div>
                </div>

              </div>

              {/* CTA Button */}
              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-jec-red hover:bg-jec-red-dark text-white font-extrabold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-jec-red/20 text-base"
              >
                Garantir Meu Desconto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-[10px] text-white/40 mt-3 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-jec-red" /> Simulação segura sem compromisso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Torcedor Split Visual Section */}
      <section className="bg-gradient-to-b from-transparent via-white/[0.02] to-transparent py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="relative order-2 md:order-1 flex justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-jec-red/10 rounded-full blur-3xl -z-10 scale-75" />
            <img
              src={torcedorNoBg}
              alt="Torcedor do JEC"
              className="max-h-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <span className="text-xs font-extrabold text-jec-red uppercase tracking-widest px-3 py-1 rounded-full bg-jec-red/10 border border-jec-red/20 w-fit block">
              JEC Energia
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight leading-tight">
              O Único Projeto Onde o Torcedor <span className="text-jec-red">Economiza</span> e o <span className="text-jec-red">Clube</span> Ganha!
            </h2>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base">
              Ao aderir ao programa JEC Energia, você entra em um ciclo de benefícios mútuos. Você ganha desconto mensal fixo na conta de luz e o Joinville Esporte Clube recebe recursos de patrocínio direto.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-jec-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Sem dor de cabeça</h4>
                  <p className="text-xs text-white/50">Não há necessidade de comprar equipamentos ou alterar fiação.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-jec-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Recursos para o JEC</h4>
                  <p className="text-xs text-white/50">Parte do valor apoia a infraestrutura e o futebol do clube.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-black tracking-tight mb-4">Como Funciona em <span className="text-jec-red">3 Passos</span></h2>
          <p className="text-white/60 text-sm sm:text-base">Sua jornada de economia e apoio ao JEC leva menos de 5 minutos, direto do celular.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Step 1 */}
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl relative">
            <div className="w-12 h-12 rounded-xl bg-jec-red/10 text-jec-red font-heading font-black text-xl flex items-center justify-center mb-6">
              01
            </div>
            <h3 className="text-base font-bold text-white mb-2">Simule sua Economia</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Use nossa calculadora no topo da página para estimar seu desconto mensal e o valor repassado ao JEC.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl relative">
            <div className="w-12 h-12 rounded-xl bg-jec-red/15 text-jec-red font-heading font-black text-xl flex items-center justify-center mb-6">
              02
            </div>
            <h3 className="text-base font-bold text-white mb-2">Envie a Conta de Luz</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Clique em simular, preencha os dados e envie uma foto da sua fatura da Celesc pelo celular de forma rápida e segura.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl relative">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-white font-heading font-black text-xl flex items-center justify-center mb-6">
              03
            </div>
            <h3 className="text-base font-bold text-white mb-2">Desconto Ativado</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Pronto! Sua fatura seguinte já virá com o desconto aplicado e o patrocínio tricolor será creditado ao clube.
            </p>
          </div>

        </div>
      </section>

      {/* JEC Ganha-Ganha Section */}
      <section className="py-16 px-4 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="max-w-3xl text-center mb-10">
            <h2 className="text-3xl font-heading font-black tracking-tight mb-4">Parceria Sustentável e Próspera</h2>
            <p className="text-white/60 text-sm">Visualize como a sua economia de energia contribui para a força do JEC.</p>
          </div>
          <div className="w-full max-w-4xl bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden p-4 sm:p-8 flex justify-center">
            <img
              src={jecGanhaGanha}
              alt="Fluxo de Parceria JEC Energia"
              className="max-w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="w-10 h-10 text-jec-red mx-auto mb-3" />
          <h2 className="text-3xl font-heading font-black tracking-tight mb-2">Dúvidas Frequentes</h2>
          <p className="text-white/60 text-sm">Tudo o que você precisa saber sobre a parceria.</p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-sm sm:text-base text-white hover:bg-white/[0.02]"
              >
                <span>{item.question}</span>
                {activeFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-jec-red shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white/50 shrink-0 ml-4" />
                )}
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${activeFaq === index ? 'max-h-60 border-t border-white/5' : 'max-h-0'
                  }`}
              >
                <p className="px-6 py-4 text-xs sm:text-sm text-white/60 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="px-4 py-8 max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-r from-jec-red/40 to-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-jec-red/30 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />

          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight mb-4 relative z-10">
            Apoie o JEC Sem Gastar Nada a Mais por Isso
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base mb-8 relative z-10">
            Cadastre-se agora em menos de 5 minutos, reduza seus gastos com energia elétrica e ajude a fortalecer o Joinville Esporte Clube!
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-jec-black hover:bg-white/90 font-extrabold px-8 py-4 rounded-xl transition-all duration-300 text-base shadow-2xl relative z-10 active:scale-95 inline-flex items-center gap-2"
          >
            Quero Economizar e Apoiar o JEC
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/5 pt-8 px-4 text-center max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <img src="/img/logo-jec-alta.jpg" alt="Escudo JEC" className="h-8 w-8 object-contain rounded-full" />
            <span className="text-white/30 text-lg font-light">|</span>
            <span className="text-xs font-black uppercase tracking-widest text-white/50 font-heading">JEC Energia</span>
          </div>
          <p className="text-[11px] text-white/40">
            © 2026 JEC Energia. Todos os direitos reservados.
          </p>
        </div>
        <p className="text-[9px] text-white/30 text-left max-w-4xl mx-auto leading-relaxed">
          *Desconto de até 8% incidente sobre a tarifa de energia compensada (TE), não aplicável a impostos estaduais, taxas municipais (COSIP) e custos de disponibilidade. O repasse de 4% ao Joinville Esporte Clube é repassado a título de patrocínio oficial do clube.
        </p>
      </footer>

      {/* Lead Form Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-jec-black/90 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <div className="bg-[#121212] border border-white/10 rounded-2xl w-full max-w-md p-6 relative z-10 animate-in fade-in zoom-in duration-200">
            <h3 className="text-xl font-heading font-black text-white mb-2">Simulação Tricolor</h3>
            <p className="text-xs text-white/60 mb-6">Preencha seus dados para receber o desconto e reverter 4% ao JEC.</p>

            {formSubmitted ? (
              <div className="py-10 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-jec-red/10 text-jec-red rounded-full flex items-center justify-center mb-4 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Simulação Enviada!</h4>
                <p className="text-xs text-white/60 max-w-xs mx-auto">Redirecionando para o portal de adesão do JEC Energia...</p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-white/50 tracking-wider mb-1">Nome Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-jec-red focus:bg-white/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-white/50 tracking-wider mb-1">WhatsApp / Telefone</label>
                  <input
                    type="tel"
                    required
                    placeholder="(47) 99999-9999"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-jec-red focus:bg-white/10 transition-all"
                  />
                </div>



                <div className="bg-white/5 p-4 rounded-xl space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/50">Simulação de Gasto:</span>
                    <span className="font-bold text-white">R$ {billValue}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/50">Economia mensal:</span>
                    <span className="font-bold text-white">R$ {monthlySavings.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/50">Repasse para o JEC:</span>
                    <span className="font-bold text-white">R$ {monthlyJecContribution.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="w-1/3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-3 px-4 rounded-xl transition-all text-sm active:scale-95"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 bg-jec-red hover:bg-jec-red-dark text-white font-extrabold py-3 px-4 rounded-xl transition-all text-sm flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    Confirmar Envio
                    <MessageSquare className="w-4 h-4 fill-white" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  )
}

export default App
