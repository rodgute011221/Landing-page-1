const phone = "51942757023"; // Cambia esto por tu número real
const message = encodeURIComponent(
    "Hola, vi tu publicación de la casaca deportiva talla M. ¿Sigue disponible?"
);
const waLink = `https://wa.me/${phone}?text=${message}`;

document.getElementById("buyBtn").href = waLink;
document.getElementById("buyBtnFloating").href = waLink;