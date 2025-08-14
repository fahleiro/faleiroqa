# Faleiro QA - React

Portfólio profissional de Gabriel Reinisch Faleiro, QA Engineer especializado em automação de testes, APIs e qualidade de ponta a ponta.

## 🚀 Tecnologias

- **React 19** - Biblioteca principal
- **Vite** - Build tool e dev server
- **React Router DOM** - Navegação SPA
- **React i18next** - Internacionalização (PT-BR/EN-US)
- **Framer Motion** - Animações suaves
- **CSS Modules** - Estilos isolados

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🎨 Características

- ✅ **Design responsivo** - Funciona em todos os dispositivos
- ✅ **Internacionalização** - Suporte a PT-BR e EN-US
- ✅ **Animações suaves** - Scroll reveal com Framer Motion
- ✅ **SPA Navigation** - Navegação sem reload
- ✅ **Acessibilidade** - Seguindo boas práticas
- ✅ **Performance** - Otimizado com Vite

## 🌐 Deploy

O projeto está configurado para deploy no [Render.com](https://render.com) como site estático.

### Configuração no Render:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Node Version**: `18+`

## 📁 Estrutura

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx      # Cabeçalho com navegação
│   ├── Hero.jsx        # Seção principal
│   ├── Section.jsx     # Container de seções
│   ├── Card.jsx        # Cards com animação
│   └── Footer.jsx      # Rodapé
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Página inicial
│   ├── Expertise.jsx   # Expertise técnica
│   ├── Projetos.jsx    # Projetos e resultados
│   └── Contato.jsx     # Informações de contato
├── i18n/               # Configuração de idiomas
│   └── config.js       # Setup do react-i18next
├── styles/             # Estilos globais
│   └── global.css      # CSS principal
└── hooks/              # Hooks customizados
    └── useMetaTags.js  # Meta tags dinâmicas
```

## 🎯 Funcionalidades

- **Navegação SPA**: Transições suaves entre páginas
- **Troca de idioma**: Botão para alternar PT-BR/EN-US
- **Scroll reveal**: Animações ao fazer scroll
- **Meta tags dinâmicas**: SEO otimizado por idioma
- **Design system**: Componentes consistentes

## 🔧 Desenvolvimento

O projeto mantém **exatamente** o mesmo visual do site original, mas com uma arquitetura React moderna e escalável.

### Scripts disponíveis:

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview da build
- `npm run lint` - Verificar código

## 📱 Responsividade

- **Mobile**: Layout otimizado para telas pequenas
- **Tablet**: Grid adaptativo para telas médias  
- **Desktop**: Layout completo com 3 colunas

## 🌟 Performance

- **Lazy loading**: Componentes carregados sob demanda
- **Code splitting**: Bundle otimizado
- **Tree shaking**: Apenas código usado é incluído
- **CSS otimizado**: Estilos minificados

---

**Gabriel Reinisch Faleiro** - QA Engineer  
[GitHub](https://github.com/fahleiro) | [LinkedIn](https://linkedin.com/in/gabriel-faleiro)