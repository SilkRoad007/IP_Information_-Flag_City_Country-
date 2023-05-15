// Fonction pour obtenir les informations de géolocalisation à partir de l'adresse IP
async function getLocationData() {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data;
  }
  
  // Fonction pour mettre à jour le drapeau et le message de bienvenue en fonction de la localisation de l'utilisateur
  async function updateWelcomeMessage() {
    const locationData = await getLocationData();
    const countryCode = locationData.country_code.toLowerCase();
    const flagElement = document.getElementById('flag');
    const welcomeMessageElement = document.getElementById('welcome-message');
    flagElement.style.backgroundImage = `url(img/flags/${countryCode}.svg)`;
    welcomeMessageElement.innerText = `${locationData.city}, ${locationData.country_name} !`;
  }
  
  // Appel de la fonction pour mettre à jour le message de bienvenue
  updateWelcomeMessage();