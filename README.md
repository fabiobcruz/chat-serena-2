# 🔮 OrderBump Tarot

Uma aplicação web moderna de cartas de tarot com sistema de seleção permanente e interface mística.

## ✨ Funcionalidades

- **6 cartas de tarot únicas** com significados espirituais
- **Sistema de seleção permanente** - uma vez escolhida, a carta permanece sua guia espiritual
- **Persistência no localStorage** - sua escolha é mantida mesmo após recarregar a página
- **Sistema de bloqueio** - outras cartas ficam bloqueadas após a seleção
- **Design responsivo** - funciona perfeitamente em mobile, tablet e desktop
- **Interface mística** - tema roxo/dourado com efeitos visuais elegantes

## 🛠️ Tecnologias

- **React 18** + TypeScript
- **Vite** (build tool)
- **Tailwind CSS** (estilização)
- **Lucide React** (ícones)
- **Context API** (gerenciamento de estado)

## 🚀 Deploy no GitHub Pages

### Configuração Automática

1. **Fork ou clone este repositório**
2. **Configure o nome do repositório** no `tarot/vite.config.ts`:
   ```typescript
   base: '/SEU-NOME-DO-REPOSITORIO/',
   ```
3. **Faça push para o branch main**
4. **Configure GitHub Pages**:
   - Vá em Settings > Pages
   - Source: "GitHub Actions"
5. **O deploy será automático** a cada push no main

### Deploy Manual

```bash
cd tarot
npm install
npm run build
```

## 🔧 Desenvolvimento Local

```bash
cd tarot
npm install
npm run dev
```

Acesse: `http://localhost:5173`

## 📁 Estrutura do Projeto

```
tarot/
├── src/
│   ├── components/     # Componentes React
│   ├── contexts/       # Context API
│   ├── data/          # Dados das cartas
│   ├── types/         # Tipagens TypeScript
│   └── ...
├── .github/workflows/ # GitHub Actions
└── ...
```

## 🎯 Como Usar

1. **Acesse a aplicação**
2. **Escolha uma carta** clicando nela
3. **Sua carta será revelada** e permanecerá como sua guia espiritual
4. **As outras cartas ficarão bloqueadas** permanentemente
5. **Sua escolha é salva** e persistirá entre sessões

## 📄 Licença

© 2025 Cartas del Tarot. Todos os direitos reservados.

---

**URL do Projeto:** `https://seu-usuario.github.io/SEU-NOME-DO-REPOSITORIO/` 