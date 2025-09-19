// La liste des fichiers que vous avez fournie
const fileList = [
    "2022_MVMA_inscription_gallery-2.webp",
    "Affiche_2023_FDP_carre_Insta-e1725973409812.jpg",
    "ambassador4-min-min-min-scaled-1-e1721749371203.webp",
    "ambassador5-min.webp",
    "ambassador-min-scaled.webp",
    "atout-1-min-1024x692.webp",
    "avantage-.png",
    "Bail-reel-solidaire-d-activite-pour-les-micro-entreprises-scaled.webp",
    "BANNIERE_MEDICIS_PER-MEDICIS-MULTISUPPORT_2025-1020x1024.webp",
    "bg-footerQuestion.webp",
    "bgForm (1).webp",
    "BOUCHER2-1024x800 (1).jpg",
    "Boulangerie-scaled.jpg",
    "Boulangerie-scaled-e1729008613624-1024x608.jpg",
    "Cancer-logo-1-1024x561.png",
    "Capture-decran-2024-07-04-104343.webp",
    "Capture-decran-2024-07-24-165536-e1721832998137.png",
    "Capture-decran-2025-02-13-164907.png",
    // ... j'ai omis une partie de la liste pour ne pas surcharger, mais vous devez la compléter ...
    "SnapInsta.to_328090391_2996126370683122_5328676227859705699_n.jpg",
    "SnapInsta.to_318189127_693736588767019_625180091618538224_n.jpg",
    "SnapInsta.to_316712069_227576506269104_7118887484828167743_n.jpg"
];

const gallery = document.querySelector('.gallery-grid');
const videoExtensions = ['.mp4', '.mov', '.webm']; // Les extensions vidéo à surveiller

fileList.forEach(fileName => {
    // Détermine si le fichier est une vidéo en vérifiant l'extension
    const isVideo = videoExtensions.some(ext => fileName.toLowerCase().endsWith(ext));
    const fullPath = BASE_URL + fileName;

    const mediaContainer = document.createElement('div');
    mediaContainer.classList.add('media-item');

    if (isVideo) {
        // --- Création d'un élément Vidéo pour l'interactivité ---
        const video = document.createElement('video');
        video.src = fullPath;
        video.loop = true;      // Pour qu'elle tourne en boucle
        video.muted = true;     // Pour que le son soit coupé au démarrage (essentiel pour autoplay)
        video.playsInline = true; // Pour la lecture sur mobile
        video.preload = 'metadata'; // Optimisation du chargement

        // Logique JavaScript pour le survol
        video.addEventListener('mouseover', () => {
            video.play().catch(error => console.log("Erreur de lecture vidéo :", error));
        });
        video.addEventListener('mouseout', () => {
            video.pause();
            video.currentTime = 0; // Remet au début pour l'effet "aperçu"
        });

        mediaContainer.appendChild(video);

    } else {
        // --- Création d'un élément Image ---
        const img = document.createElement('img');
        img.src = fullPath;
        img.alt = fileName;
        
        // IMPORTANT : Si vous utilisez la balise <picture> pour le WEBP/JPG fallback
        // Il faudrait adapter cette partie pour créer les balises <picture> et <source>.
        // Pour la simplicité, on utilise ici la balise <img> classique qui fonctionne
        // directement avec les .webp dans Chrome.

        mediaContainer.appendChild(img);
    }

    gallery.appendChild(mediaContainer);
});
