// ============================================
// ENHANCED DATA & FEATURES
// ============================================

// Skill Comparison Data (Junior vs Middle vs Senior)
const skillComparison = {
  uz: {
    'Git Versiya Boshqarishi': {
      junior: {
        description: 'Branch, commit, push, pull, PR',
        tasks: [
          'Feature branch yaratish (feature/login-page)',
          'Commit message yozish (imperative)',
          'PR yaratib, code review uchun jo\'natamoq',
          'Merge conflicts hal qilish'
        ],
        tools: ['Git CLI', 'GitHub', 'VS Code']
      },
      middle: {
        description: 'Git strategy, branch policy, merge strategies',
        tasks: [
          'Git flow yoki trunk-based development tanlash',
          'Team uchun branch naming policy yaratish',
          'Rebase vs Merge qaror qabul qilish',
          'Tag va release versioning boshqarish',
          'Hotfix branches uchun process yaratish'
        ],
        tools: ['Git advanced', 'GitHub Actions', 'Husky', 'Commitizen']
      },
      senior: {
        description: 'Enterprise version control strategy, governance',
        tasks: [
          'Multi-team Git workflow tuzish',
          'Monorepo vs polyrepo strategy',
          'Access control va permissions',
          'Audit logging va compliance',
          'Code ownership va CODEOWNERS file'
        ],
        tools: ['Advanced Git', 'Gitops', 'GitHub Enterprise']
      }
    },
    
    'Code Review': {
      junior: {
        description: 'Feedback olish, o\'rganish',
        tasks: [
          'Orolgan izohlarni o\'zlashtirish',
          'Sharh-izohlar bo\'yicha savol berish',
          'Suggested changes'ni qabul qilish',
          'Yaxshi izohlardan o\'rganish'
        ],
        tools: ['GitHub', 'Slack']
      },
      middle: {
        description: 'Sifatli feedback berish, standards qo\'yish',
        tasks: [
          'Security vulnerabilities aniqla',
          'Performance issues topish',
          'Architecture principles nazorat qilish',
          'Testing coverage tekshirish',
          'Konstruktiv va konstruktiv bo\'lmagan sharh farqlash'
        ],
        tools: ['GitHub', 'SonarQube', 'Linters']
      },
      senior: {
        description: 'Review culture tuzish, standards yaratish',
        tasks: [
          'Code review guidelines yozish',
          'Review metrics va KPI',
          'Reviewer selection strategy',
          'Knowledge sharing through reviews',
          'Tech debt decisions'
        ],
        tools: ['Review platforms', 'Metrics tools']
      }
    },
    
    'Testing': {
      junior: {
        description: 'Unit test yozish',
        tasks: [
          'Unit test yozish (Jest, pytest)',
          'Happy path va sad path',
          'Edge cases qarab qolish',
          'Test coverage 80%+'
        ],
        tools: ['Jest', 'pytest', 'Vitest']
      },
      middle: {
        description: 'Testing strategy, automation, CI integration',
        tasks: [
          'Test pyramid (unit, integration, E2E)',
          'Mock va stub strategy',
          'Test data management',
          'CI/CD pipeline testing',
          'Performance testing'
        ],
        tools: ['Jest', 'Cypress', 'Selenium', 'LoadTesting tools']
      },
      senior: {
        description: 'Testing culture, tool selection, standards',
        tasks: [
          'Testing framework selection va procurement',
          'Team testing standards yaratish',
          'Test environment management',
          'Flaky test detection va fixing',
          'Testing ROI analysis'
        ],
        tools: ['Advanced testing stacks', 'Analytics']
      }
    }
  }
};

// Interactive Quiz Data
const quizQuestions = {
  uz: [
    {
      question: 'Code review olganingizda, biror sharoitmani tushunmagan bo\'lsangiz qanday qilasiz?',
      answers: [
        { text: 'Gaplashtiramizning o\'zi, qayta qayt deb o\'ylashim',  level: 'junior' },
        { text: 'Sherhchi niyatini tushunib olish uchun savol beraman', level: 'middle' },
        { text: 'Sherhni team'da muhokama qilishga taklifni beraman', level: 'senior' }
      ]
    },
    {
      question: 'Pull request uchun test yozishni kichik ish deb o\'ylaysizmi?',
      answers: [
        { text: 'Ha, test faqat deployment'dan oldin kerak', level: 'junior' },
        { text: 'Yo\'q, test feature qanday muhim bo\'lsa shunchalik muhim', level: 'middle' },
        { text: 'Test strategy'ni team'da belgilab olishimiz kerak', level: 'senior' }
      ]
    },
    {
      question: 'Yaxshi Software Architect'ni ta\'rif bering',
      answers: [
        { text: 'Bilib-bilmagani ham, birlamchi kod yoza oladigan odam', level: 'junior' },
        { text: 'Texnik qarorlar qabul qilishda boshqa komandalarni hisobga oladigan odam', level: 'middle' },
        { text: 'Kompaniyaning biznes maqsadlarini texnik strategiyaga aylantiruvchi odam', level: 'senior' }
      ]
    },
    {
      question: 'Conflicting opinions mavjud bo\'lsa, qanday qaror qabul qilasiz?',
      answers: [
        { text: 'Manager yoki senior developer ga so\'rashim', level: 'junior' },
        { text: 'Data va facts asosida muhokama qilaman', level: 'middle' },
        { text: 'Business value, scalability va team capacity bilan tavozun izlayaman', level: 'senior' }
      ]
    },
    {
      question: 'Yangi jamoaviy a\'zoni qanday onboard qilasiz?',
      answers: [
        { text: 'Xumoychi tayinlaganda o\'zi o\'retadi', level: 'junior' },
        { text: 'Onboarding guide va pair programming tajriba', level: 'middle' },
        { text: 'Structured onboarding, mentoring, clear expectations', level: 'senior' }
      ]
    }
  ]
};

// Scenario-based Tips
const scenarios = {
  uz: [
    {
      situation: 'PR sharh shariv ijobiy emas',
      junior: 'Sharni diqqat bilan o\'qib, tushunmagan bo\'lsangiz savol ber',
      middle: 'Sharni tahliil qil - agar xato bo\'lsa, junior'iga o\'rga; agar haqiqat bo\'lsa, qabul qil',
      senior: 'Sharh kultura'ni tekshir - sharh qanday berilayotgan, team'da etiquette nima'
    },
    {
      situation: 'Design pattern haqida team ichida reza-rifuz',
      junior: 'Katta odam'larning qarorini kut',
      middle: 'Pro va cons ni chiqarib, data driven decision qab qil',
      senior: 'Long-term implication, scalability va team learning impact'ni hisobot qil'
    },
    {
      situation: 'Vaqt yo\'tashtili tugallana olmadi',
      junior: 'Deadline o\'tib ketgani uchun sorry qilasan',
      middle: 'Root cause aniqla (complexity, underestimation, obstacles) va learn',
      senior: 'Process improve - bu takrorlanib turgan muammo mi? Team capacity tahlili'
    },
    {
      situation: 'Yangi jamoa a\'zasi ancha sekin kod yozmoqda',
      junior: 'Unga nima kerakligini bilmassan',
      middle: 'Pair programming va mentoring taklif qil',
      senior: 'Onboarding process, learning curve, individual coaching plan'
    }
  ]
};

// Daily Tips by Level
const dailyTips = {
  uz: {
    junior: [
      '📌 Standup\'da aktivlik bilan gapirishdek - nma o\'rganish tugundim deb, nma qiyinchilik tushdim deb',
      '📚 Har kuni bitta yangi Git command yoki test pattern o\'rganib ko\'ring',
      '🤝 Sharh olganingizda, sherchhiga rahmat ayt va soʻraoq - nima sebab deb o\'ylav',
      '⏰ Vaqt boshqarish - big tasks ni small sub-tasks ga bo\'ling',
      '🔍 Boshqa code review larni o\'qi - ulardan o\'rgan'
    ],
    middle: [
      '👥 Bir juniorga 30 minut mentoring qilsang, hafta davomida bo\'lsa uzoq muddatda team productivity',
      '📊 Code review time ni iz qo\'yib, team average bilan qiyas qil',
      '🏗️ Design decisions\'ni document qil - future uchun reference',
      '🔐 Security va performance checklist yaratib, review time\'da ishlatib ko\'r',
      '📈 Team velocity trend\'ni qarab, bottleneck aniqla'
    ],
    senior: [
      '🎯 Weekly: Bu hafta company goals bilan engineering roadmap ni align qildim mi?',
      '👨‍💼 Talantli a\'zalarnill career development plan yaratib, mentoring',
      '📋 Process improvement: Qaysi team workflow jinslar hozir inefficient?',
      '💡 Innovation: Yangi technology yoki approach\'ni explore qilish uchun time budget',
      '🌱 Culture: Team values ni strengthen qilish uchun nima qilish mumkin?'
    ]
  }
};

// Progress Tracking Suggestions
const progressMarkers = {
  uz: {
    junior: [
      'Git commands: clone, branch, commit, push, pull, merge',
      'Unit test yozish (80%+ coverage)',
      'PR yaratish va code review olish',
      'Standup\'da gapirish',
      'Simple bugs ni fix qilish'
    ],
    middle: [
      'Code review yoki 20+ PR',
      'CI/CD pipeline setup',
      'Architecture doc yozish',
      '2+ junior mentor qilish',
      'Performance optimization'
    ],
    senior: [
      'Technical roadmap yaratish',
      'Multi-team coordination',
      'Hiring va onboarding',
      'Strategic decisions',
      'Culture building'
    ]
  }
};

// Middle-Specific Skills Expanded
const middleSkillsExpanded = {
  uz: [
    {
      id: 'code-review-mastery',
      name: 'Code Review Ustasi',
      description: 'Kod sifatini kuchliroq, security va performance nazorat qilish',
      responsibilities: [
        'Security vulnerabilities topish va faqat o\'qitish',
        'Performance issues aniqla (N+1, memory leaks)',
        'Architecture principles check',
        'Testing coverage validate',
        'Knowledge transfer'
      ],
      icon: '👁️'
    },
    {
      id: 'system-design',
      name: 'Tizim Dizayni',
      description: 'Scalable, maintainable architecture yaratish',
      responsibilities: [
        'Monolith vs Microservices tanlov',
        'Database selection (SQL vs NoSQL)',
        'Caching strategy',
        'API design va versioning',
        'Disaster recovery planning'
      ],
      icon: '🏗️'
    },
    {
      id: 'mentoring',
      name: 'Mentorlik va Oʻqitish',
      description: 'Juniorlarga mentor bo\'lib, ularni develop qilish',
      responsibilities: [
        'Regular 1-on-1 meetings',
        'Learning paths yaratish',
        'Pair programming sessions',
        'Feedback berish',
        'Career growth planning'
      ],
      icon: '👨‍🏫'
    },
    {
      id: 'ci-cd',
      name: 'CI/CD Pipeline',
      description: 'Automated testing va deployment',
      responsibilities: [
        'GitHub Actions / Jenkins setup',
        'Environment management',
        'Deployment strategies',
        'Rollback procedures',
        'Monitoring va alerts'
      ],
      icon: '🚀'
    }
  ]
};

// Senior-Specific Leadership
const seniorLeadershipTopics = {
  uz: [
    {
      id: 'tech-strategy',
      name: 'Texnik Strategiya',
      description: 'Kompaniyaning 2-3 yillik texnik strategiyasini qabul qilish',
      focus: [
        'Business goals ni texnik roadmap\'ga aylantirish',
        'Tech debt management',
        'Innovation va R&D',
        'Technology selection criteria',
        'Compliance va security standards'
      ],
      icon: '📊'
    },
    {
      id: 'team-building',
      name: 'Jamoa Tuzish va Boshqarish',
      description: 'Kuchli, high-performance team yaratish',
      focus: [
        'Hiring va talent selection',
        'Onboarding process',
        'Culture va values definition',
        'Performance management',
        'Retention va growth'
      ],
      icon: '👥'
    },
    {
      id: 'cross-functional',
      name: 'Oʻzaro funksional Leadership',
      description: 'Product, Design, QA, Ops bilan hamkorlik',
      focus: [
        'Stakeholder management',
        'Trade-off decisions',
        'Resource allocation',
        'Timeline negotiation',
        'Risk management'
      ],
      icon: '🤝'
    },
    {
      id: 'scaling',
      name: 'Scaling Systems va Teams',
      description: 'Tizim va jamoa kattalashtirilganda chal\'qa emas',
      focus: [
        'Infrastructure scaling',
        'Team structure evolution',
        'Process formalization',
        'Documentation standards',
        'Knowledge management'
      ],
      icon: '📈'
    }
  ]
};

// Competency Matrix
const competencyMatrix = {
  uz: {
    header: 'Kompetensi Matritsasi: Junior ← → Middle ← → Senior',
    skills: [
      { name: 'Technical Depth', junior: '★★☆☆☆', middle: '★★★★☆', senior: '★★★★★' },
      { name: 'System Design', junior: '★☆☆☆☆', middle: '★★★☆☆', senior: '★★★★★' },
      { name: 'Code Review', junior: '★★☆☆☆', middle: '★★★★☆', senior: '★★★★★' },
      { name: 'Mentoring', junior: '★☆☆☆☆', middle: '★★★☆☆', senior: '★★★★★' },
      { name: 'Communication', junior: '★★☆☆☆', middle: '★★★★☆', senior: '★★★★★' },
      { name: 'Problem Solving', junior: '★★☆☆☆', middle: '★★★★☆', senior: '★★★★★' },
      { name: 'Leadership', junior: '★☆☆☆☆', middle: '★★☆☆☆', senior: '★★★★★' },
      { name: 'Strategic Thinking', junior: '★☆☆☆☆', middle: '★★☆☆☆', senior: '★★★★★' }
    ]
  }
};
