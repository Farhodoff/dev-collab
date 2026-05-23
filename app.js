// ============================================
// LANGUAGE MANAGEMENT
// ============================================
let currentLanguage = localStorage.getItem('language') || 'uz';

const langSelector = document.getElementById('langSelector');
langSelector.value = currentLanguage;

function translate(key) {
    return translations[currentLanguage]?.[key] || translations['uz'][key] || key;
}

function updateUIText() {
    // Hero
    document.getElementById('heroTitle').textContent = translate('title');
    document.getElementById('heroSubtitle').textContent = translate('subtitle');
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.label) {
            btn.textContent = translate(btn.dataset.label);
        }
    });
    
    // Level tabs
    document.querySelectorAll('.level-tab').forEach(btn => {
        if (btn.dataset.label) {
            btn.textContent = translate(btn.dataset.label);
        }
    });
    
    // Section titles
    document.getElementById('juniorTitle').innerHTML = `
        <span class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 font-bold">Jr</span>
        ${translate('juniorDeveloper')}
    `;
    document.getElementById('middleTitle').innerHTML = `
        <span class="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center mr-4 font-bold">Md</span>
        ${translate('middleDeveloper')}
    `;
    document.getElementById('seniorTitle').innerHTML = `
        <span class="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-4 font-bold">Sr</span>
        ${translate('seniorDeveloper')}
    `;
    document.getElementById('comparisonTitle').textContent = translate('juniorVsMiddle');
    
    // Resources
    document.getElementById('resourcesTitle').textContent = '📚 ' + translate('resources');
    document.getElementById('resourcesBooks').textContent = '📖 ' + translate('books');
    document.getElementById('resourcesCourses').textContent = '🎓 ' + translate('courses');
    document.getElementById('resourcesTemplates').textContent = '⚙️ ' + translate('templates');
    
    // Search placeholder
    const searchEl = document.getElementById('searchInput');
    if (searchEl) searchEl.setAttribute('placeholder', translate('searchPlaceholder'));

    // Footer
    document.getElementById('footerText').textContent = translate('footerText');
    document.getElementById('feedbackLink').textContent = translate('feedback');
}

langSelector.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    localStorage.setItem('language', currentLanguage);
    updateUIText();
    updateContent();
});

// ============================================
// DARK MODE TOGGLE
// ============================================
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Accessibility helpers
let lastFocusedElement = null;
let modalKeydownHandler = null;

// Check localStorage
if (localStorage.getItem('darkMode') === 'true' || (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
}

darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
});

// Current filter, search and level states
let currentFilter = 'all';
let currentSearch = '';
let currentLevel = 'junior';

// Progress tracking (completed skills) stored in localStorage
const COMPLETED_KEY = 'completed_skills_v1';
function loadCompletedSkills() {
    try {
        const raw = localStorage.getItem(COMPLETED_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
}
function saveCompletedSkills(arr) {
    try { localStorage.setItem(COMPLETED_KEY, JSON.stringify(Array.from(new Set(arr)))); } catch (e) {}
}
function isCompleted(skillId) {
    return loadCompletedSkills().includes(skillId);
}
function toggleCompleted(skillId) {
    const list = loadCompletedSkills();
    const idx = list.indexOf(skillId);
    if (idx === -1) list.push(skillId); else list.splice(idx,1);
    saveCompletedSkills(list);
    updateContent();
}

// Search input handling
const searchInputEl = document.getElementById && document.getElementById('searchInput');
if (searchInputEl) {
    searchInputEl.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim().toLowerCase();
        updateContent();
    });
}

// Render skill cards
function renderSkillCard(skill) {
    const exercisesBadge = skill.exercises && skill.exercises.length ? `<span class="ml-2 inline-block text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">${skill.exercises.length} ${translate('exercisesLabel')}</span>` : '';

    return `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 p-6 border-l-4 ${skill.type === 'soft' ? 'border-l-blue-600' : 'border-l-purple-600'}">
            <div class="flex justify-between items-start mb-3">
                <span class="text-3xl">${skill.icon}</span>
                <span class="text-xs font-bold px-2 py-1 rounded ${skill.type === 'soft' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'}">
                ${skill.type === 'soft' ? translate('softLabel') : translate('hardLabel')}${exercisesBadge}
                </span>
            </div>
            <h3 class="text-xl font-bold mb-2">${skill.name}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">${skill.description}</p>
            
            <div class="space-y-1">
                <p class="text-xs font-semibold text-gray-700 dark:text-gray-300">💡 ${currentLanguage === 'uz' ? 'Maslahat' : currentLanguage === 'jp' ? 'ヒント' : 'Tips'}:</p>
                <ul class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    ${skill.tips.map(tip => `<li>• ${tip}</li>`).join('')}
                </ul>
            </div>

            <div class="mt-4 flex items-center gap-2">
                <button class="open-skill-btn mt-3 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm" data-skill-id="${skill.id}" data-level="${currentLevel}">📖 ${currentLanguage === 'uz' ? 'Batafsil' : currentLanguage === 'jp' ? '詳細' : 'More'}</button>
                ${skill.exercises && skill.exercises.length ? `<button class="mt-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-sm px-3 py-2 rounded" data-open-exercises="${skill.id}">${currentLanguage === 'uz' ? 'Amaliyotlar' : currentLanguage === 'jp' ? '演習' : 'Exercises'}</button>` : ''}
                <button class="mark-done-btn mt-3 ${isCompleted(skill.id) ? 'bg-green-600 text-white' : 'bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-sm'} px-3 py-2 rounded" data-skill-id="${skill.id}">${isCompleted(skill.id) ? (currentLanguage === 'uz' ? 'Bajarildi' : currentLanguage === 'jp' ? '完了' : 'Done') : (currentLanguage === 'uz' ? 'Belgilash' : currentLanguage === 'jp' ? 'マーク' : 'Mark')}</button>
            </div>
        </div>
    `;
}

// Filter skills based on type and level
function getFilteredSkills(level) {
    const levelData = skillsDataMultilang[currentLanguage]?.[level] || skillsDataMultilang['uz'][level] || [];
    
    let results = levelData;
    if (currentFilter !== 'all') {
        results = results.filter(skill => skill.type === currentFilter);
    }

    if (currentSearch && currentSearch.length > 0) {
        results = results.filter(skill => {
            const haystack = [skill.name, skill.description, ...(skill.tips||[])].join(' ').toLowerCase();
            return haystack.indexOf(currentSearch) !== -1;
        });
    }
    
    return results;
}

// Render grid
function renderGrid(level) {
    const grid = document.getElementById(`${level}-grid`);
    const skills = getFilteredSkills(level);
    
    grid.innerHTML = skills.map(skill => renderSkillCard(skill)).join('');
    
    // attach open buttons
    grid.querySelectorAll('.open-skill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const skillId = parseInt(btn.dataset.skillId, 10);
            const level = btn.dataset.level || currentLevel;
            openSkillModal(skillId, level);
        });
    });

    // attach exercises buttons (open modal for that skill)
    grid.querySelectorAll('[data-open-exercises]').forEach(b => {
        b.addEventListener('click', () => {
            const id = parseInt(b.getAttribute('data-open-exercises'), 10);
            openSkillModal(id, currentLevel);
            // scroll to exercises (modal will show them)
        });
    });

    // attach mark-done buttons (toggle completed)
    grid.querySelectorAll('.mark-done-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.skillId, 10);
            toggleCompleted(id);
        });
    });

    // Update visual state based on completed
    grid.querySelectorAll('[data-skill-id]').forEach(el => {
        const id = parseInt(el.getAttribute('data-skill-id'), 10);
        // find nearest card container
        const card = el.closest('.rounded-lg');
        if (!card) return;
        if (isCompleted(id)) {
            card.classList.add('opacity-60', 'ring-2', 'ring-green-300');
        } else {
            card.classList.remove('opacity-60', 'ring-2', 'ring-green-300');
        }
    });
}


function openSkillModal(skillId, level) {
    const levelData = skillsDataMultilang[currentLanguage]?.[level] || skillsDataMultilang['uz'][level] || [];
    const skill = levelData.find(s => s.id === skillId);
    if (!skill) return;

    // store last focused element for return focus
    lastFocusedElement = document.activeElement;

    document.getElementById('skill-modal-title').textContent = skill.name;
    const body = document.getElementById('skill-modal-body');
    body.innerHTML = '';

    // Show detailed paragraphs if available
    if (skill.details && skill.details.length) {
        skill.details.forEach(d => {
            const p = document.createElement('p');
            p.textContent = d;
            p.className = 'mb-2';
            body.appendChild(p);
        });
    } else {
        const p = document.createElement('p');
        p.textContent = skill.description;
        body.appendChild(p);
        if (skill.tips && skill.tips.length) {
            const ul = document.createElement('ul');
            ul.className = 'list-disc pl-5 mt-3';
            skill.tips.forEach(t => {
                const li = document.createElement('li');
                li.textContent = t;
                ul.appendChild(li);
            });
            body.appendChild(ul);
        }
    }

    // Exercises section (if present)
    if (skill.exercises && skill.exercises.length) {
        const h = document.createElement('h4');
        h.className = 'font-bold mt-4';
        h.textContent = translate('exercisesLabel');
        body.appendChild(h);

        const ulEx = document.createElement('ol');
        ulEx.className = 'list-decimal pl-5 mt-2 space-y-1';
        skill.exercises.forEach(ex => {
            const li = document.createElement('li');
            li.textContent = ex;
            ulEx.appendChild(li);
        });
        body.appendChild(ulEx);
    }

    // Key commands parsing and rendering (if details contains 'Key commands')
    if (skill.details && skill.details.length) {
        const keyLine = skill.details.find(d => /key commands:?/i.test(d));
        if (keyLine) {
            const match = keyLine.match(/key commands:?\s*(.*)/i);
            if (match && match[1]) {
                const cmds = match[1].split(',').map(c => c.trim()).filter(Boolean);
                if (cmds.length) {
                    const cmdsH = document.createElement('h4');
                    cmdsH.className = 'font-bold mt-4';
                    cmdsH.textContent = currentLanguage === 'uz' ? 'Buyruqlar' : currentLanguage === 'jp' ? 'コマンド' : 'Commands';
                    body.appendChild(cmdsH);

                    const cmdsDiv = document.createElement('div');
                    cmdsDiv.className = 'mt-2 flex flex-wrap gap-2';
                    cmds.forEach(cmd => {
                        const b = document.createElement('button');
                        b.className = 'bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs border';
                        b.textContent = cmd;
                        b.onclick = () => {
                            if (navigator.clipboard && navigator.clipboard.writeText) {
                                navigator.clipboard.writeText(cmd).then(() => {
                                    const prev = b.textContent;
                                    b.textContent = translate('copiedText');
                                    setTimeout(() => { b.textContent = prev; }, 1500);
                                });
                            }
                        };
                        cmdsDiv.appendChild(b);
                    });
                    body.appendChild(cmdsDiv);
                }
            }
        }
    }

    // Copy button - copies key sections (name, description, details, tips, exercises)
    const copyBtn = document.createElement('button');
    copyBtn.className = 'mt-4 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded';
    copyBtn.textContent = translate('copyText');
    copyBtn.onclick = () => {
        const parts = [skill.name, skill.description].concat(skill.details || [], skill.tips || [], skill.exercises || []);
        const text = parts.join('\n\n');
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                const orig = copyBtn.textContent;
                copyBtn.textContent = translate('copiedText');
                setTimeout(() => { copyBtn.textContent = orig; }, 2000);
            });
        }
    };
    body.appendChild(copyBtn);

    const modal = document.getElementById('skill-modal');
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // focus management: focus close button
    const closeBtn = document.getElementById('skill-modal-close');
    if (closeBtn) closeBtn.focus();

    // focus trap
    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableEls = Array.from(modal.querySelectorAll(focusableSelectors)).filter(el => !el.hasAttribute('disabled'));
    const firstFocusable = focusableEls[0];
    const lastFocusable = focusableEls[focusableEls.length - 1];

    modalKeydownHandler = function(e) {
        if (e.key === 'Escape') {
            e.preventDefault();
            closeSkillModal();
            return;
        }
        if (e.key === 'Tab') {
            if (focusableEls.length === 0) {
                e.preventDefault();
                return;
            }
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    };
    document.addEventListener('keydown', modalKeydownHandler);

    // close handlers
    document.getElementById('skill-modal-close').onclick = closeSkillModal;
    modal.onclick = (e) => { if (e.target.id === 'skill-modal') closeSkillModal(); };
}

function closeSkillModal() {
    const modal = document.getElementById('skill-modal');
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.add('hidden');
    modal.classList.remove('flex');

    // remove keydown listener if any
    if (modalKeydownHandler) {
        document.removeEventListener('keydown', modalKeydownHandler);
        modalKeydownHandler = null;
    }

    // restore focus
    try { if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus(); } catch (e) {}
    lastFocusedElement = null;
}

// Render comparison section
function renderComparison() {
    const juniorSkills = getFilteredSkills('junior');
    const middleSkills = getFilteredSkills('middle');
    
    const juniorDiv = document.getElementById('comparison-junior');
    const middleDiv = document.getElementById('comparison-middle');
    
    juniorDiv.innerHTML = `
        <h3 class="text-2xl font-bold mb-4 text-blue-600">Junior</h3>
        ${juniorSkills.slice(0, 6).map(skill => `
            <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <div class="flex items-center space-x-3">
                    <span class="text-2xl">${skill.icon}</span>
                    <div>
                        <p class="font-bold">${skill.name}</p>
                        <p class="text-sm text-gray-600 dark:text-gray-400">${skill.description}</p>
                    </div>
                </div>
            </div>
        `).join('')}
    `;
    
    middleDiv.innerHTML = `
        <h3 class="text-2xl font-bold mb-4 text-purple-600">Middle</h3>
        ${middleSkills.slice(0, 6).map(skill => `
            <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <div class="flex items-center space-x-3">
                    <span class="text-2xl">${skill.icon}</span>
                    <div>
                        <p class="font-bold">${skill.name}</p>
                        <p class="text-sm text-gray-600 dark:text-gray-400">${skill.description}</p>
                    </div>
                </div>
            </div>
        `).join('')}
    `;
}

// Update all content
function updateContent() {
    // Update filter button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('bg-blue-600', btn.dataset.filter === currentFilter && btn.dataset.filter === 'all');
        btn.classList.toggle('text-white', btn.dataset.filter === currentFilter && btn.dataset.filter === 'all');
        if (btn.dataset.filter === currentFilter && btn.dataset.filter !== 'all') {
            btn.classList.remove('bg-gray-300', 'dark:bg-gray-700');
            btn.classList.add('bg-blue-600', 'text-white');
        } else if (btn.dataset.filter !== 'all') {
            btn.classList.add('bg-gray-300', 'dark:bg-gray-700');
            btn.classList.remove('bg-blue-600', 'text-white');
        }
    });
    
    // Update level button states
    document.querySelectorAll('.level-tab').forEach(btn => {
        if (btn.dataset.level === currentLevel) {
            btn.classList.add('bg-white', 'dark:bg-gray-800', 'border-blue-600', 'text-blue-600');
            btn.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'border-gray-300', 'dark:border-gray-600');
        } else {
            btn.classList.remove('bg-white', 'dark:bg-gray-800', 'border-blue-600', 'text-blue-600');
            btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'border-gray-300', 'dark:border-gray-600');
        }
    });
    
    // Show/hide level sections
    document.querySelectorAll('.level-content').forEach(section => {
        section.classList.add('hidden');
    });
    
    if (currentLevel === 'comparison') {
        document.getElementById('comparison-section').classList.remove('hidden');
        renderComparison();
    } else if (currentLevel === 'quiz') {
        document.getElementById('quiz-section').classList.remove('hidden');
        initQuiz();
    } else {
        document.getElementById(`${currentLevel}-section`).classList.remove('hidden');
        renderGrid(currentLevel);
    }
}

// Event listeners for filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentFilter = btn.dataset.filter;
        updateContent();
    });
});

// Event listeners for level buttons
document.querySelectorAll('.level-tab').forEach(btn => {
    btn.addEventListener('click', () => {
        currentLevel = btn.dataset.level;
        updateContent();
    });
});

// Initial render
updateContent();

// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================
// QUIZ FUNCTIONALITY
// ============================================
let userQuizAnswers = {};

function initQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    userQuizAnswers = {};
    
    const quizData = typeof quizQuestions !== 'undefined' ? quizQuestions : [];
    
    if (!quizData || quizData.length === 0) {
        quizContainer.innerHTML = '<p class="text-gray-600">Quiz ma\'lumotlari topilmadi</p>';
        return;
    }
    
    quizData.forEach((question, idx) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700';
        
        const questionText = question[currentLanguage] || question['uz'];
        const options = question.options || [];
        
        questionDiv.innerHTML = `
            <h4 class="font-bold text-lg mb-4">Savol ${idx + 1}/${quizData.length}: ${questionText}</h4>
            <div class="space-y-2">
                ${options.map((option, optIdx) => `
                    <label class="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer transition">
                        <input type="radio" name="q${idx}" value="${optIdx}" class="quiz-answer mr-3" data-question="${idx}">
                        <span>${option[currentLanguage] || option['uz']}</span>
                    </label>
                `).join('')}
            </div>
        `;
        
        quizContainer.appendChild(questionDiv);
    });
    
    // Add submit button
    const submitBtn = document.createElement('button');
    submitBtn.className = 'mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition w-full';
    submitBtn.textContent = translate('quizSubmit');
    submitBtn.addEventListener('click', calculateQuizResult);
    quizContainer.appendChild(submitBtn);
    
    document.getElementById('quiz-result').classList.add('hidden');
}

function calculateQuizResult() {
    const answers = document.querySelectorAll('.quiz-answer:checked');
    const quizData = typeof quizQuestions !== 'undefined' ? quizQuestions : [];
    
    if (answers.length !== quizData.length) {
        alert('Barcha savollarga javob bering!');
        return;
    }
    
    let juniorScore = 0;
    let middleScore = 0;
    
    answers.forEach(answer => {
        const qIdx = parseInt(answer.dataset.question);
        const optIdx = parseInt(answer.value);
        const question = quizData[qIdx];
        
        if (question.options && question.options[optIdx]) {
            const option = question.options[optIdx];
            juniorScore += option.junior || 0;
            middleScore += option.middle || 0;
        }
    });
    
    let resultLevel = 'Junior';
    let resultText = '';
    
    if (middleScore > juniorScore + 5) {
        resultLevel = 'Middle';
        resultText = 'Siz Middle darajaga yaqin! Kod review qilish, mentorlik qilish va arxitektura bo\'yicha qaror qabul qilish ko\'nikmalari borligingiz payqalindi.';
    } else if (juniorScore > middleScore + 5) {
        resultLevel = 'Junior';
        resultText = 'Siz Junior darajada. Asosiy vositalar va jamoaviy ishlash madaniyatini o\'zlashtirish uchun ushbu skilllarni o\'rganish tavsiya etiladi.';
    } else {
        resultLevel = 'Junior-to-Middle';
        resultText = 'Siz Junior va Middle o\'rtasida. Junior skilllarni yanada kuchaytiring va Middle tanidiqlaridan o\'rganishni boshlang!';
    }
    
    document.getElementById('quiz-result-text').innerHTML = `
        <p class="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">📌 Siz: <strong>${resultLevel}</strong> darajada</p>
        <p>${resultText}</p>
    `;
    
    document.getElementById('quiz-result').classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('opacity-50', 'pointer-events-none');
    
    document.getElementById('quiz-restart').addEventListener('click', () => {
        document.getElementById('quiz-container').classList.remove('opacity-50', 'pointer-events-none');
        initQuiz();
    });
}

// Initialize quiz when quiz section is viewed
document.addEventListener('DOMContentLoaded', () => {
    // Quiz init will happen when user clicks quiz tab
});

