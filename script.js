function toggleCard(card) {
  document.querySelectorAll('.card').forEach(c => {
    if (c !== card) c.classList.remove("active");
  });

  card.classList.toggle("active");
}

function openCardFromMenu(event, id) {
  event.preventDefault();

  const card = document.getElementById(id);

  document.querySelectorAll('.card').forEach(c => {
    c.classList.remove("active");
  });

  card.classList.add("active");
  card.scrollIntoView({ behavior: "smooth", block: "center" });
}

function openWhatsApp(curso) {
  const msg = `Olá! Quero me inscrever no curso de ${curso}.`;
  window.open(`https://wa.me/5511956841148?text=${encodeURIComponent(msg)}`);
}

/* SLIDER */
const reviews = [
  {
    text: "Curso maravilhoso! Professora atenciosa e didática incrível.",
    name: "Maria A"
  },
  {
    text: "Ambiente acolhedor e profissional. Aprendi muito mais do que esperava.",
    name: "Milene A"
  },
  {
    text: "Me senti segura e preparada para começar a atender minhas clientes.",
    name: "Julia M"
  }
];

let index = 0;

const reviewText = document.getElementById("review-text");
const reviewName = document.getElementById("review-name");
const reviewCard = document.getElementById("review-card");

function showReview(dir = "right") {
  reviewCard.style.opacity = 0;
  reviewCard.style.transform = dir === "right" ? "translateX(60px)" : "translateX(-60px)";

  setTimeout(() => {
    reviewText.textContent = reviews[index].text;
    reviewName.textContent = reviews[index].name;
    reviewCard.style.opacity = 1;
    reviewCard.style.transform = "translateX(0)";
  }, 400);
}

document.querySelector(".next").onclick = () => {
  index = (index + 1) % reviews.length;
  showReview("right");
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + reviews.length) % reviews.length;
  showReview("left");
};

setInterval(() => {
  index = (index + 1) % reviews.length;
  showReview("right");
}, 4000);

showReview();

/* ANIMAÇÃO AO ROLAR */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));