import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traduções
const resources = {
  'pt-BR': {
    translation: {
      // Navigation
      'nav.expertise': 'Expertise',
      'nav.projects': 'Projetos',
      'nav.contact': 'Contato',
      
      // Meta
      'meta.description': 'QA Engineer com foco em automação, qualidade de ponta a ponta e entrega confiável.',
      'meta.ogDescription': 'Automação de testes, API testing, CI/CD e qualidade de ponta a ponta.',
      
      // Hero
      'hero.tagline': 'Qualidade de ponta a ponta com automação, observabilidade e entrega confiável.',
      'cta.contact': 'Falar comigo',
      
      // Sections
      'sections.expertise': 'Expertise',
      'sections.projects': 'Projetos e Resultados',
      'sections.contact': 'Vamos conversar',
      
      // Cards - Expertise
      'cards.automation.title': 'Automação de Testes',
      'cards.automation.text': 'Web/Mobile com foco em estabilidade e manutenção: Playwright, Cypress, Selenium.',
      'cards.api.title': 'API Testing',
      'cards.api.text': 'Validação de contratos, cenários de erro e resiliência. Postman, REST Assured, Playwright API.',
      'cards.cicd.title': 'CI/CD e QA Gates',
      'cards.cicd.text': 'Integração com pipelines, testes por PR, ambientes efêmeros e métricas de qualidade.',
      'cards.strategy.title': 'E2E Strategy',
      'cards.strategy.text': 'Estratégia de testes, pirâmide de testes, análise de risco e cobertura com ROI.',
      'cards.performance.title': 'Performance',
      'cards.performance.text': 'Testes de carga e stress com análise de gargalos e SLOs. k6, JMeter.',
      'cards.observability.title': 'Observability',
      'cards.observability.text': 'Quality in Production: logs, métricas, tracing e alertas orientados à experiência do usuário.',
      
      // Projects
      'projects.pipeline.title': 'Pipeline de Qualidade',
      'projects.pipeline.text': 'Redução de 40% no tempo de feedback com paralelização e testes por PR.',
      'projects.e2e.title': 'Suite E2E Confiável',
      'projects.e2e.text': 'Queda de 70% em flakiness com estabilização, mocks e dados determinísticos.',
      'projects.api.title': 'API Testing',
      'projects.api.text': 'Detecção precoce de regressões com contratos, testes de erro e monitoração em produção.',
      
      // Contact
      'contact.paragraph': 'Entre em contato para falarmos sobre qualidade, automação e como elevar a confiança na entrega.'
    }
  },
  'en-US': {
    translation: {
      // Navigation
      'nav.expertise': 'Expertise',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      
      // Meta
      'meta.description': 'QA Engineer focused on automation, end-to-end quality and reliable delivery.',
      'meta.ogDescription': 'Test automation, API testing, CI/CD, and end-to-end quality.',
      
      // Hero
      'hero.tagline': 'End-to-end quality with automation, observability, and reliable delivery.',
      'cta.contact': 'Contact me',
      
      // Sections
      'sections.expertise': 'Expertise',
      'sections.projects': 'Projects and Results',
      'sections.contact': 'Let\'s talk',
      
      // Cards - Expertise
      'cards.automation.title': 'Test Automation',
      'cards.automation.text': 'Web/Mobile focused on stability and maintenance: Playwright, Cypress, Selenium.',
      'cards.api.title': 'API Testing',
      'cards.api.text': 'Contract validation, error scenarios and resilience. Postman, REST Assured, Playwright API.',
      'cards.cicd.title': 'CI/CD & QA Gates',
      'cards.cicd.text': 'Pipeline integration, PR testing, ephemeral environments and quality metrics.',
      'cards.strategy.title': 'E2E Strategy',
      'cards.strategy.text': 'Test strategy, test pyramid, risk analysis and ROI-focused coverage.',
      'cards.performance.title': 'Performance',
      'cards.performance.text': 'Load and stress testing with bottleneck analysis and SLOs. k6, JMeter.',
      'cards.observability.title': 'Observability',
      'cards.observability.text': 'Quality in Production: logs, metrics, tracing and user experience-oriented alerts.',
      
      // Projects
      'projects.pipeline.title': 'Quality Pipeline',
      'projects.pipeline.text': '40% reduction in feedback time with parallelization and PR testing.',
      'projects.e2e.title': 'Reliable E2E Suite',
      'projects.e2e.text': '70% reduction in flakiness with stabilization, mocks and deterministic data.',
      'projects.api.title': 'API Testing',
      'projects.api.text': 'Early regression detection with contracts, error testing and production monitoring.',
      
      // Contact
      'contact.paragraph': 'Get in touch to discuss quality, automation and how to elevate delivery confidence.'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('locale') || 'pt-BR',
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
