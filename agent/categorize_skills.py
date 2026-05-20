import os

# Define categories and keyword mappings
CATEGORIES = {
    "☁️ Cloud & Infraestrutura": ["aws", "azure", "gcp", "cloud", "terraform", "kubernetes", "k8s", "docker", "helm", "istio", "linkerd", "serverless", "deployment", "infra"],
    "🎨 Frontend & Mobile": ["react", "vue", "angular", "svelte", "nextjs", "expo", "flutter", "mobile", "frontend", "ui", "ux", "design", "tailwind", "shadcn", "icons", "animation", "figma", "css", "html", "expo", "swiftui", "jetpack", "styling"],
    "⚙️ Backend & Bancos de Dados": ["backend", "dotnet", "python", "golang", "rust", "java", "php", "django", "fastapi", "database", "sql", "postgres", "mongodb", "redis", "prisma", "drizzle", "graphql", "nest", "hono"],
    "🤖 Inteligência Artificial & Agentes": ["ai", "assistant", "agent", "llm", "gemini", "openai", "hugging-face", "ml", "rag", "langchain", "prompt", "transformer", "chat", "voice"],
    "📈 Marketing, SEO & Vendas": ["seo", "marketing", "content", "copy", "brand", "social", "email", "sales", "ads", "article", "newsletter", "customer", "funnel", "crm", "instagram", "tiktok"],
    "⚙️ Automação & Ferramentas": ["automation", "n8n", "zapier", "make", "hubspot", "notion", "airtable", "slack", "discord", "workflow", "jira", "asana", "trello", "google", "office", "spreadsheet"],
    "🛡️ Segurança & Auditoria": ["security", "audit", "pentest", "vulnerability", "auth", "clerk", "identity", "privilege", "reverse", "malware"],
    "🛠️ DevTools & Workflow": ["git", "github", "gitlab", "ci", "cd", "test", "debugger", "lint", "documentation", "doc", "bash", "shell", "powershell", "linux", "terminal", "plan", "debug"],
    "💼 Negócios & Gestão": ["business", "manager", "legal", "hr", "financial", "project", "product", "support", "strategy", "consultant"],
    "📦 Outros & Específicos": [] # Fallback
}

def categorize(name):
    name_lower = name.lower()
    for cat, keywords in CATEGORIES.items():
        if any(kw in name_lower for kw in keywords):
            return cat
    return "📦 Outros & Específicos"

# Read names
input_path = r"c:\Users\lenovo\Documents\01. MARCOS\agent\names.txt"
output_path = r"c:\Users\lenovo\Documents\01. MARCOS\agent\CATALOGO_DE_SKILLS.md"

if not os.path.exists(input_path):
    print(f"Error: {input_path} not found.")
    exit(1)

with open(input_path, "r", encoding="utf-8") as f:
    names = [line.strip() for line in f if line.strip()]

grouped = {}
for name in names:
    cat = categorize(name)
    if cat not in grouped:
        grouped[cat] = []
    grouped[cat].append(name)

# Generate Markdown
with open(output_path, "w", encoding="utf-8") as f:
    f.write("# 📚 Catálogo Completo de Skills (Categorizado)\n\n")
    f.write(f"Você tem um arsenal de **{len(names)} habilidades** prontas para uso. Este arquivo organiza todas elas por categoria para facilitar sua busca.\n\n")
    f.write("> [!IMPORTANT]\n")
    f.write("> Para usar qualquer uma dessas habilidades, basta me referenciar o nome dela ou pedir: *\"Use a skill [nome] para...\"*\n\n")
    f.write("> [!TIP]\n")
    f.write("> Use `Ctrl + F` para buscar uma skill específica neste arquivo.\n\n")
    
    # Sort categories to keep it consistent
    # Priority for specific categories
    order = list(CATEGORIES.keys())
    for cat in order:
        if cat in grouped:
            f.write(f"## {cat}\n")
            skills = sorted(grouped[cat])
            for skill in skills:
                # Add a small hint if possible (though I don't have descriptions here)
                f.write(f"- `{skill}`\n")
            f.write("\n")

print(f"Catalog generated with {len(names)} skills.")
