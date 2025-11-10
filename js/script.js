// Open panel from Home page button
function openPage(pageId) {
  document.getElementById('home').classList.remove('active');
  document.getElementById('app').classList.add('active');
  showPanel(pageId);
}

// Show panel from sidebar menu
function showPanel(panelId) {
  const panels = document.querySelectorAll('.panel');
  panels.forEach(p => p.classList.remove('active'));
  document.getElementById(panelId).classList.add('active');
}

// Return to Home page
function returnHome() {
  document.getElementById('app').classList.remove('active');
  document.getElementById('home').classList.add('active');
}