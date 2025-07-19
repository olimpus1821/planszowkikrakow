// Krakowskie Planszówki - FINALNA NAPRAWIONA WERSJA
console.log('🎲 Krakowskie Planszówki - Inicjalizacja');

// DANE APLIKACJI
const AppData = {
  clubs: [
    {
      id: 1,
      name: "Meeples Restobar",
      address: "Karmelicka 9, 31-128 Kraków",
      coordinates: [50.0648, 19.9377],
      hours: "9:00-23:00"
    },
    {
      id: 2,
      name: "Hex Cafe",
      address: "Dwernickiego 5, 31-518 Kraków", 
      coordinates: [50.0503, 19.9398],
      hours: "15:00-22:00"
    },
    {
      id: 3,
      name: "Boardowa",
      address: "Topolowa 52/2, 31-506 Kraków",
      coordinates: [50.0776, 19.9691],
      hours: "16:00-23:00"
    },
    {
      id: 4,
      name: "Domówka Cafe",
      address: "Miodowa 28a, 31-055 Kraków",
      coordinates: [50.0623, 19.9490],
      hours: "12:00-22:00"
    },
    {
      id: 5,
      name: "BarON",
      address: "Batorego 1, 31-135 Kraków",
      coordinates: [50.0619, 19.9370],
      hours: "17:00-01:00"
    },
    {
      id: 6,
      name: "R'lyeh Cafe",
      address: "Lubicz 28, 31-512 Kraków",
      coordinates: [50.0681, 19.9470],
      hours: "18:00-24:00"
    },
    {
      id: 7,
      name: "Runa Game Cafe",
      address: "Brzozowa 4, 31-054 Kraków",
      coordinates: [50.0541, 19.9447],
      hours: "16:00-22:00"
    },
    {
      id: 8,
      name: "Planszówki Kliny",
      address: "Forteczna 146, 30-437 Kraków",
      coordinates: [50.0890, 19.9180],
      hours: "Poniedziałki 18:00-21:00"
    }
  ],
  events: [
    {
      id: 1,
      title: "Catan - Kupcy i Barbarzyńcy",
      clubId: 2,
      gameId: "Catan",
      date: "2025-07-19",
      time: "19:00",
      maxPlayers: 4,
      players: ["planszowka_lover"]
    },
    {
      id: 2,
      title: "Azul - Witraże Sintry",
      clubId: 3,
      gameId: "Azul",
      date: "2025-07-20",
      time: "18:30",
      maxPlayers: 4,
      players: []
    },
    {
      id: 3,
      title: "Wingspan",
      clubId: 1,
      gameId: "Wingspan",
      date: "2025-07-21",
      time: "17:00",
      maxPlayers: 5,
      players: ["natura_fan", "ptak_miłośnik"]
    },
    {
      id: 4,
      title: "Call of Cthulhu RPG",
      clubId: 6,
      gameId: "Call of Cthulhu",
      date: "2025-07-22",
      time: "19:30",
      maxPlayers: 6,
      players: ["horror_fan", "cthulhu_lover"]
    },
    {
      id: 5,
      title: "Poniedziałkowe Planszówki",
      clubId: 8,
      gameId: "Mix Gier",
      date: "2025-07-21",
      time: "18:00",
      maxPlayers: 12,
      players: ["lokalny_gracz", "kliny_regular", "fort_fan"]
    }
  ],
  users: [
    {
      username: "gracz123",
      email: "gracz123@example.com",
      password: "haslo123",
      stats: {
        totalEvents: 3,
        clubsVisited: 2,
        joinDate: "2025-01-15"
      },
      history: []
    }
  ]
};

// UTILITY FUNCTIONS
function formatDate(dateString) {
  const date = new Date(dateString);
  const today = new Date('2025-07-19');
  
  const diffTime = date - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Dziś';
  if (diffDays === 1) return 'Jutro';
  if (diffDays === -1) return 'Wczoraj';
  
  return new Intl.DateTimeFormat('pl-PL', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  }).format(date);
}

function isInRange(dateString, range) {
  const date = new Date(dateString);
  const today = new Date('2025-07-19');

  switch (range) {
    case 'today':
      return date.toDateString() === today.toDateString();
    case 'week':
      const weekEnd = new Date(today);
      weekEnd.setDate(today.getDate() + 7);
      return date >= today && date <= weekEnd;
    case 'month':
      return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    default:
      return true;
  }
}

// NOTIFICATIONS SYSTEM
function showNotification(message, type = 'success') {
  console.log(`[${type.toUpperCase()}] ${message}`);
  
  const container = document.getElementById('notifications');
  if (!container) return;

  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  
  const icons = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-triangle',
    info: 'fa-info-circle'
  };
  
  notification.innerHTML = `
    <i class="fas ${icons[type] || icons.info}"></i>
    <span>${message}</span>
  `;

  container.appendChild(notification);

  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'slideOutRight 0.3s ease-in';
      setTimeout(() => notification.remove(), 300);
    }
  }, 4000);
}

// THEME MANAGEMENT
function getStoredTheme() {
  try {
    return localStorage.getItem('theme') || 'dark';
  } catch (e) {
    return 'dark';
  }
}

function setStoredTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch (e) {
    console.warn('Cannot save theme');
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-color-scheme', theme);
}

// USER MANAGEMENT  
function getStoredUser() {
  try {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
  } catch (e) {
    return null;
  }
}

function setStoredUser(user) {
  try {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } catch (e) {
    console.warn('Cannot save user');
  }
}

// GLOBAL CALLBACK FOR MAP POPUPS
window.selectClub = function(clubId) {
  console.log('Global selectClub called:', clubId);
  
  if (window.appInstance) {
    const club = window.appInstance.clubs.find(c => c.id === clubId);
    if (club) {
      window.appInstance.selectClubFromMarker(club);
    }
  }
};

// MAIN ALPINE.JS FUNCTION
function krakowskiePlanszowki() {
  return {
    // DATA
    clubs: AppData.clubs,
    events: AppData.events,
    users: AppData.users,

    // UI STATE
    sidebarOpen: false,
    mapReady: false,
    mapError: false,
    mapStatus: 'Inicjalizacja...',
    selectedClub: null,
    showLoginModal: false,
    showRegisterModal: false,

    // USER STATE
    currentUser: null,
    currentTheme: 'dark',

    // FORMS
    loginForm: { username: '', password: '' },
    registerForm: { username: '', email: '', password: '' },

    // FILTERS
    activeFilter: 'today',
    clubFilter: '',
    filteredEvents: [],

    // MAP
    map: null,
    markers: {},

    // FILTER OPTIONS
    dateFilters: [
      { key: 'today', label: 'Dziś' },
      { key: 'week', label: 'Ten tydzień' },
      { key: 'month', label: 'Ten miesiąc' }
    ],

    // COMPUTED PROPERTIES
    get isDarkMode() {
      return this.currentTheme === 'dark';
    },

    // INITIALIZATION
    init() {
      console.log('🚀 Inicjalizacja aplikacji...');
      
      // Store global instance
      window.appInstance = this;
      
      // Initialize theme
      this.currentTheme = getStoredTheme();
      applyTheme(this.currentTheme);
      
      // Initialize user
      this.currentUser = getStoredUser();
      
      // Filter events
      this.filterEvents();
      
      // Initialize map after delay
      setTimeout(() => {
        this.initMap();
      }, 1000);
      
      console.log('✅ Aplikacja zainicjalizowana');
    },

    // THEME TOGGLE
    toggleTheme() {
      console.log('🎨 Przełączanie motywu...');
      
      this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(this.currentTheme);
      setStoredTheme(this.currentTheme);
      
      showNotification(`Motyw: ${this.currentTheme === 'dark' ? 'ciemny' : 'jasny'}`, 'info');
    },

    // MAP INITIALIZATION
    async initMap() {
      console.log('🗺️ Inicjalizuję mapę...');
      
      this.mapStatus = 'Ładowanie Leaflet...';
      
      // Wait for Leaflet
      let attempts = 0;
      while (typeof L === 'undefined' && attempts < 50) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }
      
      if (typeof L === 'undefined') {
        console.error('Leaflet nie załadował się');
        this.mapError = true;
        return;
      }

      try {
        this.mapStatus = 'Tworzenie mapy...';
        
        // Kraków coordinates
        const krakowCenter = [50.0647, 19.9450];
        
        // Create map
        this.map = L.map('map', {
          center: krakowCenter,
          zoom: 12,
          zoomControl: true,
          attributionControl: true
        });

        // Add tile layer
        this.mapStatus = 'Ładowanie kafelków...';
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19
        }).addTo(this.map);

        // Add club markers
        this.mapStatus = 'Dodawanie markerów...';
        this.addClubMarkers();

        // Finalize
        setTimeout(() => {
          if (this.map) {
            this.map.invalidateSize();
          }
        }, 500);

        this.mapReady = true;
        this.mapError = false;
        showNotification('Mapa załadowana! 🗺️', 'success');
        
      } catch (error) {
        console.error('Błąd mapy:', error);
        this.mapError = true;
        this.mapStatus = 'Błąd ładowania';
        showNotification('Błąd ładowania mapy', 'error');
      }
    },

    // RETRY MAP
    retryMap() {
      this.mapReady = false;
      this.mapError = false;
      
      if (this.map) {
        this.map.remove();
        this.map = null;
      }
      
      setTimeout(() => this.initMap(), 1000);
    },

    // ADD CLUB MARKERS
    addClubMarkers() {
      this.clubs.forEach(club => {
        try {
          const marker = L.marker(club.coordinates).addTo(this.map);
          
          const clubEvents = this.getClubEvents(club.id);
          const availableEvents = clubEvents.filter(e => e.players.length < e.maxPlayers);

          const popupContent = `
            <div style="min-width: 200px; font-family: var(--font-family-base);">
              <h4 style="margin: 0 0 8px 0; font-weight: 600; color: var(--color-text);">${club.name}</h4>
              <p style="margin: 0 0 8px 0; font-size: 14px; color: var(--color-text-secondary);">
                📍 ${club.address}
              </p>
              <p style="margin: 0 0 8px 0; font-size: 14px; color: var(--color-text-secondary);">
                🕐 ${club.hours}
              </p>
              <p style="margin: 0 0 12px 0; font-size: 14px; color: var(--color-text-secondary);">
                📅 ${clubEvents.length} wydarzeń (${availableEvents.length} dostępnych)
              </p>
              <button onclick="window.selectClub(${club.id})" 
                      style="width: 100%; padding: 10px 16px; background: var(--color-primary); color: var(--color-btn-primary-text); border: none; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 14px;">
                Zobacz klub
              </button>
            </div>
          `;

          marker.bindPopup(popupContent, { maxWidth: 280 });
          this.markers[club.id] = marker;
          
        } catch (error) {
          console.error(`Błąd markera ${club.name}:`, error);
        }
      });
      
      console.log(`✅ Dodano ${this.clubs.length} markerów`);
    },

    // SELECT CLUB FROM MARKER
    selectClubFromMarker(club) {
      console.log('Wybrano klub:', club.name);
      
      this.selectedClub = club;
      
      if (this.map) {
        this.map.closePopup();
      }
      
      // Close sidebar on mobile
      if (window.innerWidth < 1024) {
        this.sidebarOpen = false;
      }
    },

    // EVENT FILTERING
    filterEvents() {
      let filtered = [...this.events];

      // Date filter
      filtered = filtered.filter(event => isInRange(event.date, this.activeFilter));

      // Club filter
      if (this.clubFilter) {
        filtered = filtered.filter(event => event.clubId == this.clubFilter);
      }

      // Sort by date
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));

      this.filteredEvents = filtered;
    },

    setDateFilter(filter) {
      this.activeFilter = filter;
      this.filterEvents();
    },

    // JOIN EVENT
    joinEvent(event) {
      console.log('Dołączanie do wydarzenia:', event.title);
      
      if (!this.currentUser) {
        this.showLoginModal = true;
        return;
      }

      if (event.players.length >= event.maxPlayers) {
        showNotification('Ta gra jest już pełna!', 'error');
        return;
      }

      const username = this.currentUser.username;

      if (event.players.includes(username)) {
        showNotification('Już jesteś zapisany!', 'error');
        return;
      }

      // Add player
      event.players.push(username);
      
      // Refresh filtered events
      this.filterEvents();
      
      showNotification(`Zapisałeś się na ${event.gameId}! 🎉`, 'success');
    },

    // LOGIN
    login() {
      console.log('Próba logowania:', this.loginForm.username);
      
      if (!this.loginForm.username || !this.loginForm.password) {
        showNotification('Wypełnij wszystkie pola', 'error');
        return;
      }

      const user = this.users.find(u => 
        u.username === this.loginForm.username && u.password === this.loginForm.password
      );
      
      if (user) {
        this.currentUser = user;
        setStoredUser(user);
        this.showLoginModal = false;
        this.loginForm = { username: '', password: '' };
        showNotification(`Witaj, ${user.username}! 🎉`, 'success');
      } else {
        showNotification('Nieprawidłowe dane logowania', 'error');
      }
    },

    // REGISTER
    register() {
      console.log('Próba rejestracji:', this.registerForm.username);
      
      if (!this.registerForm.username || !this.registerForm.email || !this.registerForm.password) {
        showNotification('Wypełnij wszystkie pola', 'error');
        return;
      }

      if (this.users.find(u => u.username === this.registerForm.username)) {
        showNotification('Nazwa użytkownika już istnieje', 'error');
        return;
      }

      const newUser = {
        username: this.registerForm.username,
        email: this.registerForm.email,
        password: this.registerForm.password,
        stats: {
          totalEvents: 0,
          clubsVisited: 0,
          joinDate: new Date().toISOString().split('T')[0]
        },
        history: []
      };

      this.users.push(newUser);
      this.currentUser = newUser;
      setStoredUser(newUser);
      
      this.showRegisterModal = false;
      this.registerForm = { username: '', email: '', password: '' };
      showNotification(`Witaj, ${newUser.username}! 🎉`, 'success');
    },

    // LOGOUT
    logout() {
      console.log('Wylogowywanie');
      
      this.currentUser = null;
      try {
        localStorage.removeItem('currentUser');
      } catch (e) {}
      
      showNotification('Zostałeś wylogowany', 'info');
    },

    // HELPER FUNCTIONS
    getClubEvents(clubId) {
      return this.events.filter(event => event.clubId === clubId);
    },

    getClubName(clubId) {
      const club = this.clubs.find(c => c.id === clubId);
      return club ? club.name : 'Nieznany klub';
    },

    formatDate(dateString) {
      return formatDate(dateString);
    },

    getUserColor() {
      if (!this.currentUser) return '#666';
      
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3'];
      const hash = this.currentUser.username.length % colors.length;
      return colors[hash];
    },

    getUserInitials() {
      if (!this.currentUser) return '?';
      
      return this.currentUser.username
        .split(' ')
        .map(name => name.charAt(0).toUpperCase())
        .join('')
        .substring(0, 2);
    }
  };
}

// THEME INITIALIZATION ON DOM LOAD
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = getStoredTheme();
  applyTheme(savedTheme);
  console.log('🎨 Motyw początkowy:', savedTheme);
});

console.log('✅ App.js załadowany pomyślnie');