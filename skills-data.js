const skillsData = {
    junior: [
        {
            id: 1,
            type: 'soft',
            name: 'Kommunikatsiya',
            description: 'Savol berish, javob qaytarish, gapda qatnashish',
            tips: ['Daily scrumda aktiv gapirish', 'Nozavma savol berish', 'Fikringizni ifodalang'],
            icon: '💬'
        },
        {
            id: 2,
            type: 'soft',
            name: 'Code Review Dan Qo\'rqmaslik',
            description: 'Boshqa kodlarni o\'qish va o\'rganish',
            tips: ['Kritika shaxsiy emas, kod haqida', 'Yaxshi questions berish', 'Learn from others'],
            icon: '👀'
        },
        {
            id: 3,
            type: 'soft',
            name: 'Javobgarlik',
            description: 'O\'z ishiga mas\'ul bo\'lish, vaqtida topshirish',
            tips: ['Deadline ovoz berish', 'Progress update', 'Agar muammo - darhol xabar'],
            icon: '📋'
        },
        {
            id: 4,
            type: 'hard',
            name: 'Git Asoslari',
            description: 'Branch, commit, push, pull, PR',
            tips: ['Branch qayta nomlashtirish', 'Yaxshi commit messages', '.gitignore'],
            icon: '🌳'
        },
        {
            id: 5,
            type: 'hard',
            name: 'Unit Test Yozish',
            description: 'Jest, pytest - oddiy testlar yozish',
            tips: ['Har function uchun test', 'Edge cases', 'AAA pattern (Arrange, Act, Assert)'],
            icon: '✅'
        },
        {
            id: 6,
            type: 'hard',
            name: 'SQL Asoslari',
            description: 'SELECT, INSERT, UPDATE, DELETE, JOIN',
            tips: ['Indexing nima uchun', 'N+1 problem', 'Transactions'],
            icon: '💾'
        },
        {
            id: 7,
            type: 'hard',
            name: 'Frontend Asoslari',
            description: 'HTML, CSS, JavaScript, DOM manipulation',
            tips: ['Semantic HTML', 'CSS Flexbox/Grid', 'Event handling'],
            icon: '🎨'
        },
        {
            id: 8,
            type: 'hard',
            name: 'API Integration',
            description: 'REST API calls, fetch, axios',
            tips: ['HTTP methods', 'Status codes', 'Error handling'],
            icon: '🔌'
        },
        {
            id: 9,
            type: 'soft',
            name: 'Vaqt Boshqarish',
            description: 'Task prioritization, time estimation',
            tips: ['Pomodoro technique', 'To-do lists', 'Distraction haddan to\'xtating'],
            icon: '⏰'
        }
    ],
    middle: [
        {
            id: 101,
            type: 'soft',
            name: 'Code Review Expertligi',
            description: 'Kod sifatiga mas\'ul, konstruktiv izoh berish',
            tips: ['Security vulnerabilities aniqla', 'Performance issues', 'Architecture review'],
            icon: '🔍'
        },
        {
            id: 102,
            type: 'soft',
            name: 'Mentoring',
            description: 'Juniorlarga o\'rgatish, guidance',
            tips: ['Sabr, paraphrase', 'Self-discovery encourage', 'Regular 1-on-1s'],
            icon: '👨‍🏫'
        },
        {
            id: 103,
            type: 'soft',
            name: 'Konflikt Boshqarish',
            description: 'Texnik bahslarni boshqarish',
            tips: ['Empathize', 'Data-driven decisions', 'Win-win solution'],
            icon: '⚖️'
        },
        {
            id: 104,
            type: 'soft',
            name: 'Stakeholder Communication',
            description: 'PM, Design, QA bilan aloqa',
            tips: ['Clear requirements', 'Trade-offs explain', 'Regular updates'],
            icon: '🤝'
        },
        {
            id: 105,
            type: 'hard',
            name: 'CI/CD Pipeline',
            description: 'GitHub Actions, Jenkins, Docker, deployment',
            tips: ['Automated testing', 'Environment management', 'Rollback strategies'],
            icon: '🚀'
        },
        {
            id: 106,
            type: 'hard',
            name: 'Architecture Design',
            description: 'Microservices, monolith, scaling decisions',
            tips: ['Monolith vs Microservices', 'Database design', 'API design'],
            icon: '🏗️'
        },
        {
            id: 107,
            type: 'hard',
            name: 'Performance Optimization',
            description: 'Caching, indexing, query optimization',
            tips: ['Database indexing', 'Redis caching', 'Frontend optimization'],
            icon: '⚡'
        },
        {
            id: 108,
            type: 'hard',
            name: 'Security Best Practices',
            description: 'SQL injection, XSS, CSRF, authentication',
            tips: ['OWASP top 10', 'Secure coding', 'Dependency scanning'],
            icon: '🔐'
        },
        {
            id: 109,
            type: 'hard',
            name: 'System Design',
            description: 'Scalable systems, load balancing, databases',
            tips: ['CAP theorem', 'Sharding', 'Replication'],
            icon: '🌐'
        },
        {
            id: 110,
            type: 'soft',
            name: 'Technical Leadership',
            description: 'Team lead-ga tayorlash',
            tips: ['Decision making', 'Technical vision', 'Team direction'],
            icon: '👑'
        }
    ],
    senior: [
        {
            id: 201,
            type: 'soft',
            name: 'Strategic Planning',
            description: '5+ yil uchun technical roadmap',
            tips: ['Business alignment', 'Tech debt management', 'Innovation'],
            icon: '📊'
        },
        {
            id: 202,
            type: 'soft',
            name: 'Team Building & Culture',
            description: 'Team qurish, culture yaratish',
            tips: ['Hiring', 'Onboarding', 'Team dynamics'],
            icon: '👥'
        },
        {
            id: 203,
            type: 'soft',
            name: 'Cross-functional Leadership',
            description: 'Butun organizatsiya bo\'ylab foydalanilish',
            tips: ['Product teamlar bilan', 'Engineering excellence', 'Innovation labs'],
            icon: '🎯'
        },
        {
            id: 204,
            type: 'hard',
            name: 'Enterprise Architecture',
            description: 'Katta systemlar design va integrate',
            tips: ['SOA principles', 'Integration patterns', 'Legacy modernization'],
            icon: '🏢'
        },
        {
            id: 205,
            type: 'hard',
            name: 'Advanced System Design',
            description: 'Ultra-large scale systems',
            tips: ['Global distribution', 'Fault tolerance', 'High availability'],
            icon: '🌍'
        }
    ]
};

const comparisonSkills = [
    {
        skill: 'Git Flowi',
        junior: 'Branch qayta qilish, PR yozish',
        middle: 'Git strategy (GitFlow, Trunk-based), merge conflicts'
    },
    {
        skill: 'Code Review',
        junior: 'Feedback olish, o\'rganish',
        middle: 'Feedback berish, standards set qilish'
    },
    {
        skill: 'Testing',
        junior: 'Unit tests yozish',
        middle: 'Integration, E2E, coverage strategy'
    },
    {
        skill: 'Database',
        junior: 'SQL queries, CRUD',
        middle: 'Schema design, indexing, optimization'
    },
    {
        skill: 'Debugging',
        junior: 'Print statements, DevTools',
        middle: 'Profiling, log analysis, memory dumps'
    },
    {
        skill: 'Communicatsiya',
        junior: 'Team ichida',
        middle: 'Stakeholders, external teams, documentation'
    }
];
