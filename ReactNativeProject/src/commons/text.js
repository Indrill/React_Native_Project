export const AQI_DEFINITION = "Un indice de la qualité de l'air est une mesure de la qualité de l'air, permettant de synthétiser différentes données sous la forme d'une valeur unique.";
export const AQI_GOOD_WARNING_TEXT = "Aujourd'hui, la qualité de l'air est jugée satisfaisante et la pollution atmosphérique présente peu ou pas de risques.";
export const AQI_MODERATE_WARNING_TEXT = "Aujourd'hui, la qualité de l'air est acceptable ; cependant, pour certains polluants, il peut y avoir un problème de santé modéré pour un très petit nombre de personnes qui sont particulièrement sensibles à la pollution atmosphérique.";
export const AQI_UNHEALTHY_LOW_WARNING_TEXT = "Aujourd'hui, les membres des groupes sensibles peuvent avoir des effets sur la santé. Il est peu probable que le grand public soit touché.";
export const AQI_UNHEALTHY_MODERATE_WARNING_TEXT = "Aujourd'hui, tout le monde peut commencer à ressentir des effets sur la santé ; les membres des groupes sensibles peuvent ressentir des effets plus graves sur la santé.";
export const AQI_UNHEALTHY_HIGH_WARNING_TEXT = "Mises en garde sanitaires en cas d'urgence. L'ensemble de la population est plus susceptible d'être touchée.";
export const AQI_HAZARDOUS_WARNING_TEXT = 'Alerte sanitaire : tout le monde peut avoir des effets plus graves sur la santé';
export const AQI_DEFAULT_WARNING_MESSAGE = 'Rien à signaler';

export const aqiText = (number) => {
  let text;
  if (number <= 50) {
    text = AQI_GOOD_WARNING_TEXT;
  } else if (number > 50 && number <= 100) {
    text = AQI_MODERATE_WARNING_TEXT;
  } else if (number > 100 && number <= 150) {
    text = AQI_UNHEALTHY_LOW_WARNING_TEXT;
  } else if (number > 150 && number <= 200) {
    text = AQI_UNHEALTHY_MODERATE_WARNING_TEXT;
  } else if (number > 200 && number <= 300) {
    text = AQI_UNHEALTHY_HIGH_WARNING_TEXT;
  } else if (number > 300) {
    text = AQI_HAZARDOUS_WARNING_TEXT;
  } else {
    text = AQI_DEFAULT_WARNING_MESSAGE;
  }
  return text;
};

export const LOCATION_ERROR = 'L\'autorisation d\'accéder à la position a été refusée';
export const CAM_ERROR = 'Désolé, nous avons besoin de l\'autorisation de filmer pour que cela fonctionne !';
export const MAP_INFO = 'Pour en connaitre plus sur la qualité de l\'air à travers le monde, cliqué sur le bouton carte ci-dessous';
