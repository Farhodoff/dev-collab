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

// Check localStorage
if (localStorage.getItem('darkMode') === 'true' || (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
}

darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
});

// Current filter and level states
let currentFilter = 'all';
let currentLevel = 'junior';

// Render skill cards
function renderSkillCard(skill) {
    return `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 p-6 border-l-4 ${skill.type === 'soft' ? 'border-l-blue-600' : 'border-l-purple-600'}">
            <div class="flex justify-between items-start mb-3">
                <span class="text-3xl">${skill.icon}</span>
                <span class="text-xs font-bold px-2 py-1 rounded ${skill.type === 'soft' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'}">
                    ${skill.type === 'soft' ? 'SOFT' : 'HARD'}
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
        </div>
    `;
}

// Filter skills based on type and level
function getFilteredSkills(level) {
    const levelData = skillsDataMultilang[currentLanguage]?.[level] || skillsDataMultilang['uz'][level];
    
    if (currentFilter === 'all') {
        return levelData;
    }
    
    return levelData.filter(skill => skill.type === currentFilter);
}

// Render grid
function renderGrid(level) {
    const grid = document.getElementById(`${level}-grid`);
    const skills = getFilteredSkills(level);
    
    grid.innerHTML = skills.map(skill => renderSkillCard(skill)).join('');
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
