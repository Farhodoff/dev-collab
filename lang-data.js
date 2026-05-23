// Multi-language support: Uzbek, Japanese, English
const translations = {
  uz: {
    // Navbar
    devcollab: 'DevCollab',
    
    // Hero
    title: 'Jamoaviy Ishlash Ko\'nikmalari',
    subtitle: 'Junior, Middle, va Senior darajadagi dasturchilar uchun soft va hard skilllarni o\'rganish va taqqoslash',
    
    // Filters
    all: 'Barchasi',
    softSkills: 'Soft Skills',
    hardSkills: 'Hard Skills',
    
    // Levels
    junior: 'Junior',
    middle: 'Middle',
    senior: 'Senior',
    comparison: 'Qiyoslash',
    
    // Titles
    juniorDeveloper: 'Junior Dasturchi',
    middleDeveloper: 'Middle Dasturchi',
    seniorDeveloper: 'Senior Dasturchi',
    juniorVsMiddle: 'Junior vs Middle Qiyoslash',
    
    // Resources
    resources: 'O\'rganish Resurslar',
    books: 'Kitoblar',
    courses: 'Kurslar',
    templates: 'Shablonlar',
    
    // Footer
    footerText: 'DevCollab © 2026 | Dasturchilar uchun Jamoaviy Ishlash Platform',
    feedback: 'Fikr Bildiring'
  },
  
  jp: {
    // Navbar
    devcollab: 'DevCollab',
    
    // Hero
    title: 'チームワーク スキル',
    subtitle: 'ジュニア、ミドル、シニア開発者向けのソフトスキルとハードスキルを学習・比較する',
    
    // Filters
    all: 'すべて',
    softSkills: 'ソフトスキル',
    hardSkills: 'ハードスキル',
    
    // Levels
    junior: 'ジュニア',
    middle: 'ミドル',
    senior: 'シニア',
    comparison: '比較',
    
    // Titles
    juniorDeveloper: 'ジュニア開発者',
    middleDeveloper: 'ミドル開発者',
    seniorDeveloper: 'シニア開発者',
    juniorVsMiddle: 'ジュニアvsミドル比較',
    
    // Resources
    resources: '学習リソース',
    books: '本',
    courses: 'コース',
    templates: 'テンプレート',
    
    // Footer
    footerText: 'DevCollab © 2026 | チーム開発スキルプラットフォーム',
    feedback: 'フィードバック'
  },
  
  en: {
    // Navbar
    devcollab: 'DevCollab',
    
    // Hero
    title: 'Teamwork Skills',
    subtitle: 'Learn and compare soft and hard skills for Junior, Middle, and Senior developers',
    
    // Filters
    all: 'All',
    softSkills: 'Soft Skills',
    hardSkills: 'Hard Skills',
    
    // Levels
    junior: 'Junior',
    middle: 'Middle',
    senior: 'Senior',
    comparison: 'Comparison',
    
    // Titles
    juniorDeveloper: 'Junior Developer',
    middleDeveloper: 'Middle Developer',
    seniorDeveloper: 'Senior Developer',
    juniorVsMiddle: 'Junior vs Middle Comparison',
    
    // Resources
    resources: 'Learning Resources',
    books: 'Books',
    courses: 'Courses',
    templates: 'Templates',
    
    // Footer
    footerText: 'DevCollab © 2026 | Teamwork Skills Platform for Developers',
    feedback: 'Give Feedback'
  }
};

// Multi-language skills data
const skillsDataMultilang = {
  uz: {
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
        tips: ['Har function uchun test', 'Edge cases', 'AAA pattern'],
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
  },

  jp: {
    junior: [
      { id: 1, type: 'soft', name: 'コミュニケーション', description: '質問、回答、会話参加', tips: ['スタンドアップで積極的に話す', '遠慮なく質問する', '意見を述べる'], icon: '💬' },
      { id: 2, type: 'soft', name: 'コードレビューへの抵抗感', description: '他人のコードを読んで学ぶ', tips: ['批判はコードについて', '良い質問をする', '他人から学ぶ'], icon: '👀' },
      { id: 3, type: 'soft', name: '責任感', description: '自分の仕事に責任を持つ', tips: ['期限を伝える', '進捗報告', '問題があれば即報告'], icon: '📋' },
      { id: 4, type: 'hard', name: 'Git基礎', description: 'ブランチ、コミット、プッシュ、プル、PR', tips: ['ブランチリネーム', '良いコミットメッセージ', '.gitignore'], icon: '🌳' },
      { id: 5, type: 'hard', name: 'ユニットテスト作成', description: 'Jest、pytest - シンプルなテスト', tips: ['各関数にテスト', 'エッジケース', 'AAAパターン'], icon: '✅' },
      { id: 6, type: 'hard', name: 'SQL基礎', description: 'SELECT、INSERT、UPDATE、DELETE、JOIN', tips: ['インデックスの重要性', 'N+1問題', 'トランザクション'], icon: '💾' },
      { id: 7, type: 'hard', name: 'フロントエンド基礎', description: 'HTML、CSS、JavaScript、DOM操作', tips: ['セマンティックHTML', 'CSSフレックス/グリッド', 'イベント処理'], icon: '🎨' },
      { id: 8, type: 'hard', name: 'API統合', description: 'REST APIコール、fetch、axios', tips: ['HTTPメソッド', 'ステータスコード', 'エラーハンドリング'], icon: '🔌' },
      { id: 9, type: 'soft', name: '時間管理', description: 'タスク優先順位付け、時間見積もり', tips: ['ポモドーロテクニック', 'TODOリスト', '気を散らさない'], icon: '⏰' }
    ],
    middle: [
      { id: 101, type: 'soft', name: 'コードレビュー専門知識', description: 'コード品質に責任を持つ、建設的なフィードバック', tips: ['セキュリティ脆弱性を見つける', 'パフォーマンス問題', 'アーキテクチャレビュー'], icon: '🔍' },
      { id: 102, type: 'soft', name: 'メンタリング', description: 'ジュニアに教える、ガイダンス', tips: ['忍耐力、パラフレーズ', '自己発見を促す', '定期的な1対1ミーティング'], icon: '👨‍🏫' },
      { id: 103, type: 'soft', name: '紛争管理', description: '技術的な議論を管理する', tips: ['共感する', 'データ駆動型の決定', 'ウィンウィンの解決'], icon: '⚖️' },
      { id: 104, type: 'soft', name: 'ステークホルダーコミュニケーション', description: 'PM、デザイン、QAとのコミュニケーション', tips: ['明確な要件', 'トレードオフを説明', '定期的なアップデート'], icon: '🤝' },
      { id: 105, type: 'hard', name: 'CI/CDパイプライン', description: 'GitHub Actions、Jenkins、Docker、デプロイメント', tips: ['自動テスト', '環境管理', 'ロールバック戦略'], icon: '🚀' },
      { id: 106, type: 'hard', name: 'アーキテクチャ設計', description: 'マイクロサービス、モノリス、スケーリング決定', tips: ['モノリスvsマイクロサービス', 'データベース設計', 'API設計'], icon: '🏗️' },
      { id: 107, type: 'hard', name: 'パフォーマンス最適化', description: 'キャッシング、インデックス、クエリ最適化', tips: ['データベースインデックス', 'Redisキャッシング', 'フロントエンド最適化'], icon: '⚡' },
      { id: 108, type: 'hard', name: 'セキュリティベストプラクティス', description: 'SQLインジェクション、XSS、CSRF、認証', tips: ['OWASP TOP 10', 'セキュアコーディング', '依存関係スキャン'], icon: '🔐' },
      { id: 109, type: 'hard', name: 'システム設計', description: 'スケーラブルシステム、ロードバランシング、データベース', tips: ['CAPの定理', 'シャーディング', 'レプリケーション'], icon: '🌐' },
      { id: 110, type: 'soft', name: '技術的リーダーシップ', description: 'チームリードへの準備', tips: ['意思決定', '技術的ビジョン', 'チーム方向性'], icon: '👑' }
    ],
    senior: [
      { id: 201, type: 'soft', name: '戦略計画', description: '5年以上の技術ロードマップ', tips: ['ビジネス整合性', 'テックデット管理', 'イノベーション'], icon: '📊' },
      { id: 202, type: 'soft', name: 'チームビルディング&カルチャー', description: 'チーム構築、カルチャー創造', tips: ['採用', 'オンボーディング', 'チームダイナミクス'], icon: '👥' },
      { id: 203, type: 'soft', name: 'クロスファンクショナルリーダーシップ', description: '組織全体での影響力', tips: ['プロダクトチーム連携', 'エンジニアリング卓越性', 'イノベーション研究所'], icon: '🎯' },
      { id: 204, type: 'hard', name: 'エンタープライズアーキテクチャ', description: '大規模システム設計と統合', tips: ['SOA原則', '統合パターン', 'レガシーモダナイゼーション'], icon: '🏢' },
      { id: 205, type: 'hard', name: '高度なシステム設計', description: '超大規模システム', tips: ['グローバル分散', 'フォールトトレランス', '高可用性'], icon: '🌍' }
    ]
  },

  en: {
    junior: [
      { id: 1, type: 'soft', name: 'Communication', description: 'Asking questions, giving answers, participating in conversations', tips: ['Speak actively in standups', 'Ask questions without hesitation', 'Express your opinions'], icon: '💬' },
      { id: 2, type: 'soft', name: 'Embracing Code Review', description: 'Reading and learning from other code', tips: ['Criticism is about code, not you', 'Ask good questions', 'Learn from others'], icon: '👀' },
      { id: 3, type: 'soft', name: 'Responsibility', description: 'Taking ownership of your work, delivering on time', tips: ['Communicate deadlines', 'Provide progress updates', 'Report issues immediately'], icon: '📋' },
      { id: 4, type: 'hard', name: 'Git Basics', description: 'Branches, commits, push, pull, PR', tips: ['Rename branches properly', 'Write good commit messages', 'Use .gitignore correctly'], icon: '🌳' },
      { id: 5, type: 'hard', name: 'Writing Unit Tests', description: 'Jest, pytest - simple tests', tips: ['Test each function', 'Cover edge cases', 'Use AAA pattern'], icon: '✅' },
      { id: 6, type: 'hard', name: 'SQL Basics', description: 'SELECT, INSERT, UPDATE, DELETE, JOIN', tips: ['Understand indexing', 'Avoid N+1 problems', 'Use transactions'], icon: '💾' },
      { id: 7, type: 'hard', name: 'Frontend Basics', description: 'HTML, CSS, JavaScript, DOM manipulation', tips: ['Use semantic HTML', 'Learn Flexbox/Grid', 'Handle events properly'], icon: '🎨' },
      { id: 8, type: 'hard', name: 'API Integration', description: 'REST API calls, fetch, axios', tips: ['Know HTTP methods', 'Understand status codes', 'Handle errors properly'], icon: '🔌' },
      { id: 9, type: 'soft', name: 'Time Management', description: 'Task prioritization, time estimation', tips: ['Try Pomodoro technique', 'Use TO-DO lists', 'Minimize distractions'], icon: '⏰' }
    ],
    middle: [
      { id: 101, type: 'soft', name: 'Code Review Expertise', description: 'Responsible for code quality, giving constructive feedback', tips: ['Spot security vulnerabilities', 'Identify performance issues', 'Review architecture'], icon: '🔍' },
      { id: 102, type: 'soft', name: 'Mentoring', description: 'Teaching juniors, providing guidance', tips: ['Be patient, paraphrase', 'Encourage self-discovery', 'Have regular 1-on-1s'], icon: '👨‍🏫' },
      { id: 103, type: 'soft', name: 'Conflict Management', description: 'Managing technical discussions', tips: ['Show empathy', 'Make data-driven decisions', 'Find win-win solutions'], icon: '⚖️' },
      { id: 104, type: 'soft', name: 'Stakeholder Communication', description: 'Working with PM, Design, QA', tips: ['Clarify requirements', 'Explain trade-offs', 'Provide regular updates'], icon: '🤝' },
      { id: 105, type: 'hard', name: 'CI/CD Pipeline', description: 'GitHub Actions, Jenkins, Docker, deployment', tips: ['Automate testing', 'Manage environments', 'Plan rollback strategies'], icon: '🚀' },
      { id: 106, type: 'hard', name: 'Architecture Design', description: 'Microservices, monolith, scaling decisions', tips: ['Monolith vs Microservices', 'Database design', 'API design'], icon: '🏗️' },
      { id: 107, type: 'hard', name: 'Performance Optimization', description: 'Caching, indexing, query optimization', tips: ['Database indexing', 'Redis caching', 'Frontend optimization'], icon: '⚡' },
      { id: 108, type: 'hard', name: 'Security Best Practices', description: 'SQL injection, XSS, CSRF, authentication', tips: ['Know OWASP TOP 10', 'Practice secure coding', 'Scan dependencies'], icon: '🔐' },
      { id: 109, type: 'hard', name: 'System Design', description: 'Scalable systems, load balancing, databases', tips: ['Understand CAP theorem', 'Master sharding', 'Know replication'], icon: '🌐' },
      { id: 110, type: 'soft', name: 'Technical Leadership', description: 'Preparing to be a team lead', tips: ['Make decisions', 'Set technical vision', 'Guide team direction'], icon: '👑' }
    ],
    senior: [
      { id: 201, type: 'soft', name: 'Strategic Planning', description: '5+ year technical roadmap', tips: ['Align with business', 'Manage tech debt', 'Drive innovation'], icon: '📊' },
      { id: 202, type: 'soft', name: 'Team Building & Culture', description: 'Building teams, creating culture', tips: ['Hiring', 'Onboarding', 'Team dynamics'], icon: '👥' },
      { id: 203, type: 'soft', name: 'Cross-functional Leadership', description: 'Impact across the organization', tips: ['Work with product teams', 'Promote engineering excellence', 'Run innovation labs'], icon: '🎯' },
      { id: 204, type: 'hard', name: 'Enterprise Architecture', description: 'Designing and integrating large systems', tips: ['SOA principles', 'Integration patterns', 'Legacy modernization'], icon: '🏢' },
      { id: 205, type: 'hard', name: 'Advanced System Design', description: 'Ultra-large scale systems', tips: ['Global distribution', 'Fault tolerance', 'High availability'], icon: '🌍' }
    ]
  }
};
