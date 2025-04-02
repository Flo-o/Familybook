function initTurn() {
  $('#flipbook').turn({
    width: window.innerWidth < 600 ? 320 : 800,
    height: window.innerWidth < 600 ? 420 : 500,
    autoCenter: true,
    gradients: true,
    elevation: 50,
    display: window.innerWidth < 600 ? 'single' : 'double'
  });
}

function buildFlipbook() {
  const flipbook = document.createElement("div");
  flipbook.id = "flipbook";
  flipbook.innerHTML = '<div class="hard">Deckblatt</div><div class="hard">Ende</div>';

  for (let year = 2010; year <= 2025; year++) {
    const page = document.createElement("div");
    page.className = "page";
    page.innerHTML = `<h2>${year}</h2><p>Inhalte für ${year}</p>`;
    flipbook.insertBefore(page, flipbook.children[flipbook.children.length - 1]);
  }

  document.body.appendChild(flipbook);
  initTurn();
}

function goToYear(pageNumber) {
  $('#flipbook').turn('page', parseInt(pageNumber));
}

$(document).ready(() => {
  buildFlipbook();

  window.addEventListener('resize', () => {
    $('#flipbook').turn('destroy').remove();
    buildFlipbook();
  });
});
