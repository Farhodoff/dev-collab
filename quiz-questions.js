const quizQuestions = [
  {
    uz: 'Siz PRga sharh olganda qanday munosabatda bo'rasiz?',
    jp: 'PR のコメントを受けたとき、どう対応しますか？',
    en: 'How do you respond to feedback on a PR?',
    options: [
      { uz: 'Xatoliklardan o'rganaman va savollar beraman', jp: 'エラーから学び、質問する', en: 'Learn and ask clarifying questions', junior: 2, middle: 1 },
      { uz: 'Tez tuzatib push qilaman', jp: 'すぐに修正してプッシュする', en: 'Fix quickly and push', junior: 1, middle: 2 },
      { uz: 'Avval muammoni tushunib, xulosalab keyin javob beraman', jp: '問題を理解してから対応する', en: 'Understand then respond', junior: 0, middle: 3 }
    ]
  },
  {
    uz: 'Siz taskni qanday bo'laklarga bo'lasiz?',
    jp: 'タスクをどのように分割しますか？',
    en: 'How do you break down a task?',
    options: [
      { uz: 'Kichik, mustaqil subtasks', jp: '小さく独立したサブタスク', en: 'Small independent subtasks', junior: 2, middle: 1 },
      { uz: 'Bitta katta commit orqali hal qilaman', jp: '大きなコミットでまとめる', en: 'One large commit', junior: 0, middle: 0 },
      { uz: 'Pair bilan rejalashtirib qilish', jp: 'ペアで計画して作業する', en: 'Plan with pair programming', junior: 1, middle: 2 }
    ]
  },
  {
    uz: 'Test yozish haqida qanday fikrdasiz?',
    jp: 'テストを書くことについてどう考えますか？',
    en: 'What is your approach to writing tests?',
    options: [
      { uz: 'Unit testlar yozaman', jp: 'ユニットテストを書く', en: 'Write unit tests', junior: 2, middle: 1 },
      { uz: 'Integration/E2E ham yozaman', jp: '統合テスト/E2Eも書く', en: 'Also write integration/E2E', junior: 0, middle: 2 },
      { uz: 'Test yozmayman, manual test qilaman', jp: 'テストを書かず手動でテストする', en: 'Manual testing only', junior: 0, middle: 0 }
    ]
  },
  {
    uz: 'Conflict paydo bo‘lsa nima qilasiz?',
    jp: 'コンフリクトが発生したらどうしますか？',
    en: 'If a merge conflict occurs, what do you do?',
    options: [
      { uz: 'Git pull --rebase va konfliktni hal qilaman', jp: 'git pull --rebase を行い解決する', en: 'git pull --rebase and resolve', junior: 1, middle: 2 },
      { uz: 'Tezda merge qilib boshqa branchni qaytaraman', jp: 'マージして他のブランチに戻す', en: 'Merge quickly', junior: 0, middle: 0 },
      { uz: 'Tez yordam so'rab, muammoni birga hal qilamiz', jp: '助けを求めて一緒に解決する', en: 'Ask for help and resolve together', junior: 2, middle: 1 }
    ]
  },
  {
    uz: 'Standupda qanday gapirasiz?',
    jp: 'スタンドアップではどう話しますか？',
    en: 'How do you speak in standups?',
    options: [
      { uz: 'Yesterday, Today, Blockers qisqacha', jp: '昨日、今日、ブロッカーを簡潔に', en: 'Short Y/T/B update', junior: 2, middle: 1 },
      { uz: 'Batafsil texnik maʼlumot beraman', jp: '詳細な技術情報を提供する', en: 'Provide detailed technical info', junior: 0, middle: 2 },
      { uz: 'Standupga qatnashmayman', jp: 'スタンドアップに参加しない', en: 'Skip standups', junior: 0, middle: 0 }
    ]
  }
];
