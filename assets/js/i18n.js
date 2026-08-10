/**
 * i18n.js
 * PT/EN language switcher for the portfolio.
 * Persists the selected language in localStorage.
 */
(function () {
  const translations = {
    pt: {
      "meta.title": "João Gabriel Torre — Data Analytics, Crédito & Risco | BI",
      "meta.description": "João Gabriel Gomes da Torre — Analista de Dados especializado em Crédito, Cobrança, Risco e Business Intelligence.",
      "meta.locale": "pt_BR",
      "nav.skip": "Pular para o conteúdo",
      "nav.home": "Home",
      "nav.about": "Sobre",
      "nav.experience": "Experiência",
      "nav.projects": "Projetos",
      "nav.certifications": "Certificações",
      "nav.contact": "Contato",
      "nav.letsTalk": "Vamos conversar",
      "nav.menu": "Abrir menu",
      "hero.tagline": "Transformando Dados em Decisões Estratégicas.",
      "hero.explore": "Explorar meus projetos",
      "hero.connect": "Vamos nos conectar",
      "hero.scroll": "Scroll",
      "section.aboutEyebrow": "// 01 — Sobre",
      "section.experienceEyebrow": "// 02 — Experiência",
      "section.experienceTitle": "Experiência Profissional",
      "section.demoEyebrow": "// 02.1 — Demonstração",
      "section.projectsEyebrow": "// 03 — Projetos",
      "section.projectsTitle": "Projetos",
      "section.educationEyebrow": "// 04 — Formação",
      "section.educationTitle": "Formação & Certificações",
      "section.contactEyebrow": "// 05 — Contato",
      "about.title": "Sobre mim",
      "about.p1": "🎓 Graduando em <strong>Ciência de Dados</strong> pela FATEC Votorantim e atualmente <strong>Analista de Planejamento de Cobrança no Banco Afinz</strong>.",
      "about.p2": "💼 Minha atuação é voltada à <strong>transformação de dados em inteligência de negócio</strong>, desenvolvendo análises, dashboards e soluções que apoiam decisões estratégicas, aumentam a eficiência operacional e impulsionam resultados.",
      "about.p3": "📊 Possuo experiência na extração, tratamento e modelagem de dados, construção de indicadores executivos e automação de processos, utilizando <strong>Python, SQL, Power BI, Oracle Database, Amazon Athena e Amazon S3</strong> para transformar dados em informações confiáveis e acionáveis.",
      "about.p4": "Acredito que dados bem estruturados, aliados à análise e à tecnologia, são fundamentais para transformar informações em <strong>decisões mais inteligentes</strong>, otimizar processos e gerar resultados para o negócio.",
      "skills.bi.title": "Business Intelligence",
      "skills.bi.desc": "Desenvolvimento de dashboards executivos, indicadores estratégicos e visualizações orientadas à tomada de decisão.",
      "skills.sql.title": "SQL & Engenharia de Dados",
      "skills.sql.desc": "Extração, transformação e modelagem de dados utilizando Oracle Database, Amazon Athena e processos ETL.",
      "skills.python.title": "Python & Automação",
      "skills.python.desc": "Automação de processos analíticos, tratamento de dados e desenvolvimento de soluções utilizando Python.",
      "skills.visual.title": "Visualização de Dados",
      "skills.visual.desc": "Construção de dashboards em Power BI com DAX, Power Query e boas práticas de visualização de dados.",
      "skills.credit.title": "Business & Credit Analytics",
      "skills.credit.desc": "Análise de carteiras, segmentação, recuperação, comportamento de clientes e indicadores de performance operacional.",
      "skills.stats.title": "Estatística & Forecasting",
      "skills.stats.desc": "Análise exploratória de dados, previsões, identificação de tendências e suporte ao planejamento estratégico.",
      "tech.programming": "Programação & Consultas",
      "tech.bi": "Business Intelligence",
      "tech.cloud": "Dados & Cloud",
      "tech.analytics": "Analytics & Estatística",
      "tech.executive": "Dashboards Executivos",
      "tech.visual": "Visualização de Dados",
      "tech.dimension": "Modelagem Dimensional",
      "tech.kpi": "Desenvolvimento de KPIs",
      "tech.datamodel": "Modelagem de Dados",
      "tech.eda": "Análise Exploratória de Dados",
      "tech.segment": "Segmentação de Clientes",
      "tech.forecast": "Forecasting",
      "tech.ml": "Fundamentos de Machine Learning",
      "tech.business": "Business Analytics",
      "dashboard.title": "Analytics na prática",
      "dashboard.disclaimer": "Dados fictícios — demonstração do tipo de análise e visualização que aplico em indicadores de cobrança e performance operacional.",
      "dashboard.recovery": "Taxa de Recuperação",
      "dashboard.delta23": "↑ 2.3pp vs. mês anterior",
      "dashboard.activePortfolios": "Carteiras Ativas",
      "dashboard.contracts": "contratos em régua",
      "dashboard.efficiency": "Eficiência Operacional",
      "dashboard.delta12": "↑ 1.2pp vs. mês anterior",
      "dashboard.sla": "SLA Médio de Contato",
      "dashboard.delta03": "↓ 0.3d vs. mês anterior",
      "dashboard.agingTitle": "Recuperação por Faixa de Atraso",
      "dashboard.efficiencyTitle": "Evolução da Eficiência Operacional",
      "dashboard.sixMonths": "6 meses",
      "projects.subtitle": "Projetos desenvolvidos para demonstrar conhecimentos em Business Intelligence, Analytics, Engenharia de Dados e Automação. Cada projeto representa aplicações práticas utilizando tecnologias empregadas no mercado para resolver problemas de negócio por meio de dados.",
      "education.inProgress": "Em andamento",
      "education.degree": "Graduação Tecnológica",
      "contact.title": "Vamos conversar.",
      "footer.rights": "João Gabriel Torre. Todos os direitos reservados.",
      "dynamic.current": "Atual",
      "dynamic.objective": "Objetivo:",
      "dynamic.challenges": "Desafios:",
      "dynamic.learnings": "Aprendizados:",
      "dynamic.viewGithub": "Ver no GitHub",
      "dynamic.emptyProjects": "Nenhum repositório público encontrado ainda. Novos projetos aparecem aqui automaticamente assim que publicados no",
      "dynamic.errorProjects": "Não foi possível carregar os projetos do GitHub agora. Veja diretamente em",
      "dynamic.viewCredential": "Ver credencial →",
      "dynamic.timelineError": "Não foi possível carregar a timeline. Sirva o projeto via HTTP (ex: <code>npx serve .</code>) para visualizar esta seção.",
      "dynamic.certError": "Não foi possível carregar as certificações. Sirva o projeto via HTTP (ex: <code>npx serve .</code>) para visualizar esta seção.",
      "dynamic.copied": "E-mail copiado ✓"
    },
    en: {
      "meta.title": "João Gabriel Torre — Data Analytics, Credit & Risk | BI",
      "meta.description": "João Gabriel Gomes da Torre — Data Analyst focused on Credit, Collections, Risk and Business Intelligence.",
      "meta.locale": "en_US",
      "nav.skip": "Skip to content",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.certifications": "Certifications",
      "nav.contact": "Contact",
      "nav.letsTalk": "Let's Talk",
      "nav.menu": "Open menu",
      "hero.tagline": "Transforming Data into Strategic Decisions.",
      "hero.explore": "Explore My Work",
      "hero.connect": "Let's Connect",
      "hero.scroll": "Scroll",
      "section.aboutEyebrow": "// 01 — About",
      "section.experienceEyebrow": "// 02 — Experience",
      "section.experienceTitle": "Professional Experience",
      "section.demoEyebrow": "// 02.1 — Live Demo",
      "section.projectsEyebrow": "// 03 — Projects",
      "section.projectsTitle": "Projects",
      "section.educationEyebrow": "// 04 — Education",
      "section.educationTitle": "Education & Certifications",
      "section.contactEyebrow": "// 05 — Contact",
      "about.title": "About me",
      "about.p1": "🎓 Bachelor's degree student in <strong>Data Science</strong> at FATEC Votorantim, currently working as a <strong>Collections Planning Analyst at Banco Afinz</strong>.",
      "about.p2": "💼 My work focuses on <strong>turning data into business intelligence</strong>, developing analyses, dashboards and solutions that support strategic decisions, improve operational efficiency and drive results.",
      "about.p3": "📊 I have experience in data extraction, transformation and modeling, executive KPI development and process automation, using <strong>Python, SQL, Power BI, Oracle Database, Amazon Athena and Amazon S3</strong> to turn data into reliable, actionable information.",
      "about.p4": "I believe that well-structured data, combined with analysis and technology, is essential to transform information into <strong>smarter decisions</strong>, optimize processes and generate business results.",
      "skills.bi.title": "Business Intelligence",
      "skills.bi.desc": "Development of executive dashboards, strategic KPIs and decision-oriented data visualizations.",
      "skills.sql.title": "SQL & Data Engineering",
      "skills.sql.desc": "Data extraction, transformation and modeling using Oracle Database, Amazon Athena and ETL processes.",
      "skills.python.title": "Python & Automation",
      "skills.python.desc": "Automation of analytical processes, data preparation and solution development using Python.",
      "skills.visual.title": "Data Visualization",
      "skills.visual.desc": "Power BI dashboard development using DAX, Power Query and data visualization best practices.",
      "skills.credit.title": "Business & Credit Analytics",
      "skills.credit.desc": "Portfolio analysis, segmentation, recovery, customer behavior and operational performance indicators.",
      "skills.stats.title": "Statistics & Forecasting",
      "skills.stats.desc": "Exploratory data analysis, forecasting, trend identification and support for strategic planning.",
      "tech.programming": "Programming & Query",
      "tech.bi": "Business Intelligence",
      "tech.cloud": "Data & Cloud",
      "tech.analytics": "Analytics & Statistics",
      "tech.executive": "Executive Dashboards",
      "tech.visual": "Data Visualization",
      "tech.dimension": "Dimensional Modeling",
      "tech.kpi": "KPI Development",
      "tech.datamodel": "Data Modeling",
      "tech.eda": "Exploratory Data Analysis",
      "tech.segment": "Customer Segmentation",
      "tech.forecast": "Forecasting",
      "tech.ml": "Machine Learning Fundamentals",
      "tech.business": "Business Analytics",
      "dashboard.title": "Analytics in Practice",
      "dashboard.disclaimer": "Fictional data — a demonstration of the type of analysis and visualization I apply to collections and operational performance indicators.",
      "dashboard.recovery": "Recovery Rate",
      "dashboard.delta23": "↑ 2.3pp vs. previous month",
      "dashboard.activePortfolios": "Active Portfolios",
      "dashboard.contracts": "contracts in the collection workflow",
      "dashboard.efficiency": "Operational Efficiency",
      "dashboard.delta12": "↑ 1.2pp vs. previous month",
      "dashboard.sla": "Average Contact SLA",
      "dashboard.delta03": "↓ 0.3d vs. previous month",
      "dashboard.agingTitle": "Recovery by Delinquency Range",
      "dashboard.efficiencyTitle": "Operational Efficiency Trend",
      "dashboard.sixMonths": "6 months",
      "projects.subtitle": "Projects developed to demonstrate skills in Business Intelligence, Analytics, Data Engineering and Automation. Each project represents a practical application of market technologies to solve business problems through data.",
      "education.inProgress": "In progress",
      "education.degree": "Technology Degree",
      "contact.title": "Let's connect.",
      "footer.rights": "João Gabriel Torre. All rights reserved.",
      "dynamic.current": "Current",
      "dynamic.objective": "Objective:",
      "dynamic.challenges": "Challenges:",
      "dynamic.learnings": "Learnings:",
      "dynamic.viewGithub": "View on GitHub",
      "dynamic.emptyProjects": "No public repositories found yet. New projects will appear here automatically once published on",
      "dynamic.errorProjects": "GitHub projects could not be loaded right now. See them directly at",
      "dynamic.viewCredential": "View credential →",
      "dynamic.timelineError": "Could not load the timeline. Serve the project via HTTP (e.g. <code>npx serve .</code>) to view this section.",
      "dynamic.certError": "Could not load certifications. Serve the project via HTTP (e.g. <code>npx serve .</code>) to view this section.",
      "dynamic.copied": "Email copied ✓"
    }
  };

  let current = localStorage.getItem('portfolio-language') || 'pt';
  if (!translations[current]) current = 'pt';

  function t(key) {
    return (translations[current] && translations[current][key]) || translations.pt[key] || key;
  }

  function applyLanguage(lang, persist = true) {
    if (!translations[lang]) return;
    current = lang;
    if (persist) localStorage.setItem('portfolio-language', lang);

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.documentElement.setAttribute('data-language', lang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = t(el.getAttribute('data-i18n'));
      if (value !== undefined) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const pairs = el.getAttribute('data-i18n-attr').split('|');
      pairs.forEach((pair) => {
        const [attr, key] = pair.split(':');
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });

    document.querySelectorAll('[data-language-option]').forEach((btn) => {
      const active = btn.getAttribute('data-language-option') === current;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    const title = document.querySelector('title[data-i18n]');
    if (title) document.title = t(title.getAttribute('data-i18n'));

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.content = t('meta.locale');

    window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: current } }));
  }

  function init() {
    document.querySelectorAll('[data-language-option]').forEach((btn) => {
      btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-language-option')));
    });
    applyLanguage(current, false);
  }

  window.portfolioI18n = { t, applyLanguage, getLanguage: () => current };

  document.addEventListener('DOMContentLoaded', init);
})();
