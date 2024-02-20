const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclaration des variables

let selectedSlide = 0;  // Slide ou index a zero
const banner = document.querySelector(".banner-img"); // Déclaration de la variable pour les images en allant chercher l'element html qui contient la classe css banner-img grace a document.querySelector(banner-img).
const tagLine = document.querySelector('p') // Déclaration de la variable pour le texte en allant chercher l'élément html p grace a document.querySelector(p).
const divDots = document.querySelector('.dots') // Déclaration de la variable de la div .dots en allant chercher l'element html qui contient la classe css dots grace a document.querySelector(dots).

// Fonction pour la mise à jour du Slide (DOT_SELECTED + DONNEES) 

function upSlide() { // Définit la function upSlide
	const slide = slides[selectedSlide] // Déclare la variable Slide et Récupère les informations de la diapo correspondant à l'index selectedSlide.
	banner.src = "./assets/images/slideshow/" + slide.image // Applique l'image correspondante a la source de la banniere.
	tagLine.innerHTML = slide.tagLine // Applique la tagline correspondante au contenue du paragraphe.
	const dots = divDots.querySelectorAll('.dot'); // Sélectionne tous les éléments avec la classe CSS ".dot" à l'intérieur de la div "divDots".
	dots.forEach((dot, i) => { // Applique une boucle avec .dot et l'index i.
		if (i === selectedSlide) { // Si l'index i correspond à la diapo selectionné
			dot.classList.add('dot_selected'); // On ajoute la class css .dot_selected a l'element dot.
		} else {
			dot.classList.remove('dot_selected'); // Sinon, on supprime la classe CSS .dot_selected	de l'élément dot.
		}
});
}

let arrowleft = document.querySelector(".arrow_left");// Je déclare la variable "arrowLeft" et je sélectionne l'élément avec la classe CSS ".arrow_left" à l'aide de querySelector.
arrowleft.addEventListener("click", function () {     // Je déclare un evenement de click a arrowleft avec addeventlistener.
	selectedSlide--;    // Sert a passer a la diapo précedente et mettre a jour la variable selectedslide en consequence.
	if (selectedSlide < 0) {    // Si la diapo actuelle est inférieur a 0
		selectedSlide = slides.length -1; // Je mets à jour la valeur de "selectedSlide" pour revenir à la dernière diapositive.
	}  
	upSlide() // J'appelle la fonction "upSlide()" pour mettre à jour l'affichage de la diapositive.
});


let arrowright = document.querySelector(".arrow_right");// Je déclare la variable "arrowRight" et je sélectionne l'élément avec la classe CSS ".arrow_right" à l'aide de querySelector.
arrowright.addEventListener("click", function () {		// Je déclare un evenement de click a arrowright avec addeventlistener.
	selectedSlide++;		// J'incrémente la valeur de "selectedSlide" pour passer à la diapositive suivante.
	if (selectedSlide >= slides.length) {	// Si la diapositive actuelle est supérieure ou égale à la longueur du tableau "slides". 
		selectedSlide = 0	// Je réinitialise la valeur de "selectedSlide" à 0, pour revenir au début du tableau.
	}
	upSlide()	// J'appelle la fonction "upSlide()" pour mettre à jour l'affichage de la diapositive.
});

