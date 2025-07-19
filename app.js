// Krakowskie Planszówki 2.0 - Fixed Application Logic

// Application Data
const AppData = {
  clubs: [
    {
      id: 1,
      name: "Meeples Restobar",
      address: "Karmelicka 9, 31-128 Kraków",
      coordinates: [50.0619, 19.9350],
      hours: "9:00-23:00",
      description: "Nowoczesne połączenie restauracji z grami planszowymi"
    },
    {
      id: 2,
      name: "Hex Cafe",
      address: "Dwernickiego 5, 31-518 Kraków", 
      coordinates: [50.0647, 19.9450],
      hours: "15:00-22:00",
      description: "Alternatywna kawiarnia z punk underground klimatem"
    },
    {
      id: 3,
      name: "Boardowa",
      address: "Topolowa 52/2, 31-506 Kraków",
      coordinates: [50.0875, 20.0475],
      hours: "16:00-23:00",
      description: "Specjalizuje się w turniejach i premierach nowych gier"
    },
    {
      id: 4,
      name: "Domówka Cafe",
      address: "Miodowa 28a, 31-055 Kraków",
      coordinates: [50.0614, 19.9372],
      hours: "12:00-22:00",
      description: "Najstarszy lokal planszówkowy w Krakowie z ponad 500 grami"
    },
    {
      id: 5,
      name: "BarON",
      address: "Batorego 1, 31-135 Kraków",
      coordinates: [50.0619, 19.9281],
      hours: "17:00-01:00",
      description: "Łączy gry planszowe z rozrywką konsolową"
    },
    {
      id: 6,
      name: "R'lyeh Cafe",
      address: "Lubicz 28, 31-512 Kraków",
      coordinates: [50.0677, 19.9449],
      hours: "18:00-24:00",
      description: "Klimatyczne wnętrza inspirowane H.P. Lovecraftem"
    },
    {
      id: 7,
      name: "Planszówki Kliny",
      address: "Forteczna 146, 30-437 Kraków",
      coordinates: [50.0123, 19.8967],
      hours: "Poniedziałki 18:00-21:00",
      description: "Cotygodniowe spotkania w Fort 52 Borek"
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
      players: ["planszowka_lover"],
      organizer: "MasterCatan",
      description: "Rozszerzenie do klasycznego Catana"
    },
    {
      id: 2,
      title: "Azul - Witraże Sintry",
      clubId: 3,
      gameId: "Azul",
      date: "2025-07-20",
      time: "18:30",
      maxPlayers: 4,
      players: [],
      organizer: "AzulMaster",
      description: "Piękna gra w zbieranie płytek"
    },
    {
      id: 3,
      title: "Wingspan",
      clubId: 1,
      gameId: "Wingspan",
      date: "2025-07-21",
      time: "17:00",
      maxPlayers: 5,
      players: ["natura_fan", "ptak_miłośnik"],
      organizer: "BirdWatcher",
      description: "Strategiczna gra o ptakach"
    },
    {
      id: 4,
      title: "Call of Cthulhu RPG",
      clubId: 6,
      gameId: "Call of Cthulhu",
      date: "2025-07-22",
      time: "19:30",
      maxPlayers: 6,
      players: ["horror_fan", "cthulhu_lover", "rpg_master", "gracz456"],
      organizer: "Keeper_Koszmaru",
      description: "Sesja RPG w uniwersum Lovecrafta"
    },
    {
      id: 5,
      title: "Poniedziałkowe Planszówki",
      clubId: 7,
      gameId: "Mix Gier",
      date: "2025-07-21",
      time: "18:00",
      maxPlayers: 12,
      players: ["lokalny_gracz", "kliny_regular", "fort_fan", "board_enthusiast", "game_lover", "kraków_player", "weekly_gamer"],
      organizer: "Organizator_Kliny",
      description: "Cotygodniowe spotkanie - różne gry"
    }
  ],
  badges: [
    {
      id: 1,
      name: "Pierwsze Kroki",
      description: "Weź udział w pierwszym wydarzeniu",
      icon: "🎯",
      requirement: "attend_first_event"
    },
    {
      id: 2,
      name: "Aktywny Gracz",
      description: "Weź udział w 5 wydarzeniach",
      icon: "⚡",
      requirement: "attend_5_events"
    },
    {
      id: 3,
      name: "Eksplorator",
      description: "Odwiedź 3 różne kluby",
      icon: "🗺️",
      requirement: "visit_3_clubs"
    },
    {
      id: 4,
      name: "Społecznik",
      description: "Zorganizuj własne wydarzenie",
      icon: "👥",
      requirement: "organize_event"
    },
    {
      id: 5,
      name: "Planszówkowy Mistrz",
      description: "Weź udział w 20 wydarzeniach",
      icon: "👑",
      requirement: "attend_20_events"
    },
    {
      id: 6,
      name: "Nocny Marszruta",
      description: "Zagraj po 21:00",
      icon: "🌙",
      requirement: "play_late_night"
    }
  ],
  sampleUsers: [
    {
      username: "gracz123",
      email: "gracz123@example.com",
      password: "haslo123",
      badges: [1, 2, 3],
      stats: {
        totalEvents: 3,
        clubsVisited: 2,
        favoriteGame: "Catan",
        joinDate: "2025-01-15"
      },
      history: [
        {date: "2025-07-15", event: "Catan", club: "Hex Cafe", role: "uczestnik"},
        {date: "2025-07-16", event: "Azul", club: "Boardowa", role: "uczestnik"},
        {date: "2025-07-17", event: "Wingspan", club: "Meeples Restobar", role: "uczestnik"}
      ]
    },
    {
      username: "planszowka_lover",
      email: "lover@example.com", 
      password: "haslo456",
      badges: [1, 4],
      stats: {
        totalEvents: 3,
        clubsVisited: 2,
        favoriteGame: "Wingspan",
        joinDate: "2025-02-01"
      },
      history: []
    }
  ]
};

// Simple theme management
function getStoredTheme() {
  return localStorage.getItem('theme') || 'dark';
}

function setStoredTheme(theme) {
  localStorage.setItem('theme', theme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-color-scheme', theme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = getStoredTheme();
  applyTheme(savedTheme);
});

// Simple auth management
function getStoredUser() {
  const userData = localStorage.getItem('currentUser');
  return userData ? JSON.parse(userData) : null;
}

function setStoredUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

// Date utilities
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

// Notification system
function showNotification(message, type = 'success') {
  const container = document.getElementById('notifications');
  if (!container) return;

  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  
  const icons = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-triangle',
    info: 'fa-info-circle'
  };
  
  const icon = icons[type] || icons.info;
  notification.innerHTML = `
    <i class="fas ${icon}"></i>
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

// Main Alpine.js Application
function app() {
  return {
    // Data
    clubs: AppData.clubs,
    events: AppData.events,
    badges: AppData.badges,
    users: AppData.sampleUsers,

    // UI State
    sidebarOpen: false,
    mapReady: false,
    selectedClub: null,
    selectedEvent: null,
    showEventModal: false,
    showLoginModal: false,
    showRegisterModal: false,
    showProfileModal: false,
    showInstallPrompt: false,

    // User state
    currentUser: null,
    currentTheme: 'dark',

    // Forms
    loginForm: { username: '', password: '' },
    registerForm: { username: '', email: '', password: '' },

    // Filters
    activeFilter: 'today',
    clubFilter: '',
    filteredEvents: [],

    // Map
    map: null,
    markers: {},

    // Filter options
    dateFilters: [
      { key: 'today', label: 'Dziś' },
      { key: 'week', label: 'Ten tydzień' },
      { key: 'month', label: 'Ten miesiąc' }
    ],

    // Computed properties
    get isDarkMode() {
      return this.currentTheme === 'dark';
    },

    get isLoggedIn() {
      return this.currentUser !== null;
    },

    // Initialization
    init() {
      console.log('Initializing Krakowskie Planszówki 2.0...');
      
      // Initialize theme
      this.currentTheme = getStoredTheme();
      applyTheme(this.currentTheme);
      
      // Initialize user
      this.currentUser = getStoredUser();
      
      // Initialize UI
      this.filterEvents();
      
      // Initialize map after a short delay to ensure DOM is ready
      this.$nextTick(() => {
        setTimeout(() => this.initMap(), 1000);
      });
      
      // Store Alpine instance globally
      window.alpineApp = this;
      
      // Show install prompt after delay
      setTimeout(() => {
        this.showInstallPrompt = true;
      }, 5000);
      
      console.log('App initialized successfully');
    },

    // Theme Management
    toggleTheme() {
      this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(this.currentTheme);
      setStoredTheme(this.currentTheme);
      showNotification(
        `Przełączono na motyw ${this.currentTheme === 'dark' ? 'ciemny' : 'jasny'}`, 
        'info'
      );
    },

    // Authentication
    login() {
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
        this.checkForNewBadges();
      } else {
        showNotification('Nieprawidłowa nazwa użytkownika lub hasło', 'error');
      }
    },

    register() {
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
        badges: [],
        stats: {
          totalEvents: 0,
          clubsVisited: 0,
          favoriteGame: '',
          joinDate: new Date().toISOString().split('T')[0]
        },
        history: []
      };

      this.users.push(newUser);
      this.currentUser = newUser;
      setStoredUser(newUser);
      
      this.showRegisterModal = false;
      this.registerForm = { username: '', email: '', password: '' };
      showNotification(`Witaj w społeczności, ${newUser.username}! 🎉`, 'success');
    },

    logout() {
      this.currentUser = null;
      localStorage.removeItem('currentUser');
      this.showProfileModal = false;
      showNotification('Zostałeś wylogowany', 'info');
    },

    // Map Management
    async initMap() {
      // Wait for Leaflet to be available
      let attempts = 0;
      while (typeof L === 'undefined' && attempts < 50) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }
      
      if (typeof L === 'undefined') {
        console.error('Leaflet failed to load');
        this.mapReady = true; // Set to true to hide loading state
        return;
      }

      try {
        // Initialize map
        this.map = L.map('map', {
          center: [50.0647, 19.9450],
          zoom: 12,
          zoomControl: true
        });

        // Add tile layer
        const tileLayer = this.isDarkMode
          ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
          : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

        L.tileLayer(tileLayer, {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19
        }).addTo(this.map);

        // Add club markers
        this.clubs.forEach(club => this.addClubMarker(club));
        
        // Force map to resize after initialization
        setTimeout(() => {
          if (this.map) {
            this.map.invalidateSize();
          }
        }, 100);
        
        this.mapReady = true;
        console.log('Map initialized with', this.clubs.length, 'markers');

      } catch (error) {
        console.error('Error initializing map:', error);
        this.mapReady = true;
      }
    },

    addClubMarker(club) {
      if (!this.map) return;
      
      try {
        const marker = L.marker(club.coordinates).addTo(this.map);

        const clubEvents = this.getClubEvents(club.id);
        const availableEvents = clubEvents.filter(e => e.players.length < e.maxPlayers);

        const popupContent = `
          <div style="min-width: 200px;">
            <h4 style="margin: 0 0 8px 0; color: var(--color-text);">${club.name}</h4>
            <p style="margin: 0 0 8px 0; font-size: 14px; color: var(--color-text-secondary);">
              📍 ${club.address}
            </p>
            <p style="margin: 0 0 12px 0; font-size: 14px; color: var(--color-text-secondary);">
              📅 ${clubEvents.length} wydarzeń (${availableEvents.length} dostępnych)
            </p>
            <button onclick="window.selectClub(${club.id})" 
                    style="width: 100%; padding: 8px 16px; background: var(--color-primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500;">
              Zobacz klub
            </button>
          </div>
        `;

        marker.bindPopup(popupContent, {
          maxWidth: 280
        });

        this.markers[club.id] = marker;

      } catch (error) {
        console.error('Error adding marker for:', club.name, error);
      }
    },

    selectClubFromMarker(club) {
      this.selectedClub = club;
      
      if (this.map) {
        this.map.closePopup();
      }
      
      if (window.innerWidth < 1024) {
        this.sidebarOpen = false;
      }
    },

    // Event Management
    filterEvents() {
      let filtered = [...this.events];

      // Apply date filter
      filtered = filtered.filter(event => isInRange(event.date, this.activeFilter));

      // Apply club filter
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

    getClubEvents(clubId) {
      return this.events.filter(event => event.clubId === clubId);
    },

    getClubName(clubId) {
      const club = this.clubs.find(c => c.id === clubId);
      return club ? club.name : 'Nieznany klub';
    },

    getGameName(gameId) {
      return gameId || 'Nieznana gra';
    },

    formatDate(dateString) {
      return formatDate(dateString);
    },

    getPlayerInitials(playerName) {
      return playerName.split(' ')
        .map(name => name.charAt(0).toUpperCase())
        .join('')
        .substring(0, 2);
    },

    openEventModal(event) {
      if (!this.isLoggedIn) {
        this.showLoginModal = true;
        return;
      }

      if (event.players.length >= event.maxPlayers) {
        showNotification('Ta gra jest już pełna!', 'error');
        return;
      }

      this.selectedEvent = event;
      this.showEventModal = true;
    },

    joinEvent() {
      if (!this.isLoggedIn || !this.selectedEvent) return;

      const username = this.currentUser.username;

      if (this.selectedEvent.players.includes(username)) {
        showNotification('Już jesteś zapisany na to wydarzenie!', 'error');
        return;
      }

      if (this.selectedEvent.players.length >= this.selectedEvent.maxPlayers) {
        showNotification('Ta gra jest już pełna!', 'error');
        return;
      }

      // Add player to event
      this.selectedEvent.players.push(username);

      // Update user statistics
      this.updateUserStats();

      // Close modal
      this.showEventModal = false;
      this.selectedEvent = null;

      // Update filtered events
      this.filterEvents();

      // Check for new badges
      this.checkForNewBadges();

      showNotification('Pomyślnie zapisałeś się na grę! 🎉', 'success');
    },

    updateUserStats() {
      if (!this.currentUser) return;

      const userEvents = this.events.filter(e => e.players.includes(this.currentUser.username));
      const visitedClubs = [...new Set(userEvents.map(e => e.clubId))];

      this.currentUser.stats = {
        ...this.currentUser.stats,
        totalEvents: userEvents.length,
        clubsVisited: visitedClubs.length
      };

      // Add to history
      if (this.selectedEvent) {
        const newHistoryEntry = {
          date: this.selectedEvent.date,
          event: this.selectedEvent.gameId,
          club: this.getClubName(this.selectedEvent.clubId),
          role: 'uczestnik'
        };
        
        this.currentUser.history.push(newHistoryEntry);
      }

      setStoredUser(this.currentUser);
    },

    checkForNewBadges() {
      if (!this.currentUser) return;

      const stats = this.currentUser.stats;
      const currentBadges = this.currentUser.badges || [];
      const newBadges = [];

      this.badges.forEach(badge => {
        if (currentBadges.includes(badge.id)) return;

        let earned = false;
        switch (badge.requirement) {
          case 'attend_first_event':
            earned = stats.totalEvents >= 1;
            break;
          case 'attend_5_events':
            earned = stats.totalEvents >= 5;
            break;
          case 'visit_3_clubs':
            earned = stats.clubsVisited >= 3;
            break;
          case 'attend_20_events':
            earned = stats.totalEvents >= 20;
            break;
        }

        if (earned) {
          newBadges.push(badge.id);
        }
      });

      if (newBadges.length > 0) {
        this.currentUser.badges = [...currentBadges, ...newBadges];
        setStoredUser(this.currentUser);

        newBadges.forEach(badgeId => {
          const badge = this.badges.find(b => b.id === badgeId);
          if (badge) {
            showNotification(`🏆 Nowa odznaka: ${badge.name}!`, 'success');
          }
        });
      }
    },

    // User Profile
    getUserAvatar() {
      if (!this.currentUser) return '#666';
      
      const hash = this.currentUser.username
        .split('')
        .reduce((a, b) => a + b.charCodeAt(0), 0);
      
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3', '#54A0FF'];
      return colors[hash % colors.length];
    },

    getUserInitials() {
      if (!this.currentUser) return '?';
      return this.getPlayerInitials(this.currentUser.username);
    },

    getUserBadges() {
      if (!this.currentUser || !this.currentUser.badges) return [];
      
      return this.badges.filter(badge => 
        this.currentUser.badges.includes(badge.id)
      );
    },

    exportHistory() {
      if (!this.currentUser || !this.currentUser.history) return;

      const csvData = [
        ['Data', 'Wydarzenie', 'Klub', 'Rola'],
        ...this.currentUser.history.map(entry => [
          entry.date,
          entry.event,
          entry.club,
          entry.role
        ])
      ];

      const csvContent = csvData
        .map(row => row.map(field => `"${field}"`).join(','))
        .join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      
      link.setAttribute('href', url);
      link.setAttribute('download', `historia_${this.currentUser.username}.csv`);
      link.style.visibility = 'hidden';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showNotification('Historia została wyeksportowana!', 'success');
    },

    // PWA Functions
    installApp() {
      this.showInstallPrompt = false;
      showNotification('Funkcja instalacji jest symulowana w tej wersji demo', 'info');
    }
  };
}

// Global function for popup callbacks
window.selectClub = function(clubId) {
  if (window.alpineApp) {
    const club = window.alpineApp.clubs.find(c => c.id === clubId);
    if (club) {
      window.alpineApp.selectClubFromMarker(club);
    }
  }
};

console.log('Krakowskie Planszówki 2.0 - Fixed App.js loaded successfully');