document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA COMÚN PARA TODAS LAS PÁGINAS ---
    lucide.createIcons();
    // 1. Switcher de Tema (Claro/Oscuro)
    const themeToggleButtons = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
    const body = document.body;

    const applyTheme = (theme) => {
        body.classList.toggle('dark-mode', theme === 'dark');
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    });

    // 2. Menú Móvil
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- LÓGICA ESPECÍFICA POR PÁGINA ---

    // Lógica del gráfico de comparación
    const interestChartCanvas = document.getElementById('interestChart');
    if (interestChartCanvas) {
        const ctx = interestChartCanvas.getContext('2d');
        const principal = 1000;
        const rate = 0.10; // 10%
        const periods = 20;

        let labels = [];
        let simpleInterestData = [];
        let compoundInterestData = [];

        for (let i = 0; i <= periods; i++) {
            labels.push(`Año ${i}`);
            simpleInterestData.push(principal * (1 + rate * i));
            compoundInterestData.push(principal * Math.pow(1 + rate, i));
        }

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Interés Compuesto',
                    data: compoundInterestData,
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    fill: true,
                    tension: 0.1
                }, {
                    label: 'Interés Simple',
                    data: simpleInterestData,
                    borderColor: '#4b5563',
                    backgroundColor: 'rgba(75, 85, 99, 0.1)',
                    fill: true,
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Crecimiento de S/ 1,000 al 10% Anual',
                        font: { size: 18 }
                    },
                    tooltip: { mode: 'index', intersect: false }
                },
                scales: {
                    y: { title: { display: true, text: 'Monto Total (S/)' } },
                    x: { title: { display: true, text: 'Años' } }
                }
            }
        });
    }

    // Función para renderizar problemas
    const createProblemHTML = (problem, index) => {
        return `
            <div class="border-b pb-4 mb-4">
                <h4 class="text-lg font-semibold mb-2">Problema ${index + 1}: ${problem.question}</h4>
                <button onclick="toggleSolution('${problem.id}')" class="btn btn-secondary btn-sm">
                    <i data-lucide="eye" class="mr-2 h-4 w-4"></i>Ver Solución
                </button>
                <div id="${problem.id}" class="solution mt-4">
                    ${problem.solution}
                </div>
            </div>
        `;
    };

    // Renderizar problemas de Interés Simple si estamos en la página correcta
    const simpleProblemsContainer = document.getElementById('simple-problems-container');
    if (typeof simpleProblems !== 'undefined' && simpleProblemsContainer) {
        simpleProblems.forEach((problem, index) => {
            simpleProblemsContainer.innerHTML += createProblemHTML(problem, index);
        });
    }

    // Renderizar problemas de Interés Compuesto si estamos en la página correcta
    const compoundProblemsContainer = document.getElementById('compound-problems-container');
    if (typeof compoundProblems !== 'undefined' && compoundProblemsContainer) {
        compoundProblems.forEach((problem, index) => {
            compoundProblemsContainer.innerHTML += createProblemHTML(problem, index);
        });
    }
    
    // Re-inicializar Lucide Icons después de renderizar contenido dinámico
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Función global para mostrar/ocultar soluciones
function toggleSolution(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    }
}