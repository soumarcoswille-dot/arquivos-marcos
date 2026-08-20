import { Wallet, Home, Zap, Award } from "lucide-react";

export function FinancialLogic() {
    const steps = [
        {
            icon: <Wallet className="h-8 w-8 text-white" />,
            title: "Zero Entrada",
            description: "Comece sua economia sem desembolsar nenhum valor inicial. Seu investimento é zero.",
            bg: "bg-primary",
            colSpan: "md:col-span-2",
        },
        {
            icon: <Home className="h-8 w-8 text-primary" />,
            title: "Instalação Flexível",
            description: "Painéis na sua casa ou em usina remota da iGreen.",
            bg: "bg-white",
            colSpan: "md:col-span-1",
        },
        {
            icon: <Zap className="h-8 w-8 text-secondary" />,
            title: "Pague com a Economia",
            description: "O valor da parcela é menor que sua conta de luz atual. Você economiza desde o mês 1.",
            bg: "bg-secondary/10",
            colSpan: "md:col-span-1",
        },
        {
            icon: <Award className="h-8 w-8 text-white" />,
            title: "O Ativo é Seu",
            description: "Ao final do contrato, o sistema solar é 100% seu. Energia grátis por mais de 20 anos.",
            bg: "bg-secondary",
            colSpan: "md:col-span-2",
        },
    ];

    return (
        <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Como Funciona a Lógica Financeira
                    </h2>
                    <p className="mt-4 text-xl text-muted-foreground">
                        Simples, Transparente e Lucrativo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`${step.colSpan} ${step.bg} p-8 rounded-3xl shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between min-h-[220px]`}
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${step.bg === 'bg-white' ? 'bg-primary/10' : 'bg-white/20'}`}>
                                {step.icon}
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold mb-2 ${step.bg === 'bg-white' || step.bg === 'bg-secondary/10' ? 'text-foreground' : 'text-white'}`}>
                                    {step.title}
                                </h3>
                                <p className={`${step.bg === 'bg-white' || step.bg === 'bg-secondary/10' ? 'text-muted-foreground' : 'text-white/90'}`}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
