// Toggle do Menu Mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Classe do Serviço
class Servico {
  constructor(id, title, price, duration, description, imageUrl) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.duration = duration;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

// Lista de Serviços
const servicos = [
  new Servico(
    'corte-premium',
    'CORTE PREMIUM',
    'R$ 80',
    '45 MIN',
    'Lavagem especial, corte estilizado, finalização com produtos premium e consultoria de estilo.',
    '/src/image/tesoura.png'
  ),
  new Servico(
    'barba-imperial',
    'BARBA IMPERIAL',
    'R$ 60',
    '35 MIN',
    'Toalha quente, alinhamento preciso com navalha e hidratação com óleos essenciais.',
    '/src/image/maquinas.png'
  ),
  new Servico(
    'combo-barbelex',
    'COMBO BARBELEX',
    'R$ 120',
    '75 MIN',
    'Corte premium + Barba imperial com tratamento VIP completo e massagem facial.',
    '/src/image/espuma-barbear.png'
  )
];

// Função de criação do Card
function createServiceCard(data) {
  const card = document.createElement('div');
  card.className = 'relative group overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 p-6 text-white shadow-xl max-w-sm w-full transition-all duration-300 hover:border-[#f7cd46]/50 flex flex-col justify-between';

  card.innerHTML = `
    <div class="absolute inset-0 z-0">
      <img src="${data.imageUrl}" alt="${data.title}" class="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
    </div>

    <div class="relative z-10 flex flex-col justify-between h-full min-h-[230px]">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <h3 class="text-xl font-black tracking-wide uppercase text-white">
            ${data.title}
          </h3>
          <span class="text-xl font-bold text-[#f7cd46] whitespace-nowrap">
            ${data.price}
          </span>
        </div>

        <div class="flex items-center space-x-2 text-xs font-bold text-neutral-200 tracking-wider uppercase mb-3">
          <svg class="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>${data.duration}</span>
        </div>

        <p class="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed line-clamp-3">
          ${data.description}
        </p>
      </div>

      <button onclick="handleBooking('${data.id}')" class="w-full mt-6 py-3 rounded border border-[#f7cd46]/40 bg-neutral-900/60 text-[#f7cd46] font-bold text-xs tracking-widest uppercase hover:bg-[#f7cd46] hover:text-neutral-950 transition-all duration-300">
        RESERVAR
      </button>
    </div>
  `;

  return card;
}

function handleBooking(serviceId) {
  console.log(`Reserva iniciada para: ${serviceId}`);
}

// Renderização na div container
const grid = document.getElementById('services-grid');
if (grid) {
  servicos.forEach(servico => {
    grid.appendChild(createServiceCard(servico));
  });
}