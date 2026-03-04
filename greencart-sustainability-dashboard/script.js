 const CO2_SAVED    = 12.4;
 const MONTHLY_GOAL = 20;

const co2ValueEl  = document.getElementById('co2Value');
const progressEl  = document.getElementById('progressFill');
const progressBar = progressEl.parentElement;
const co2Badge    = document.getElementById('co2Badge');
const filterBtns  = document.querySelectorAll('.filter-btn');
const foodItems   = document.querySelectorAll('.food-item');
const emptyState  = document.getElementById('emptyState');
const highCountEl = document.getElementById('highCount');
const lowCountEl  = document.getElementById('lowCount');

function animateCounter(target, duration = 1200) {
  const start = performance.now();

  requestAnimationFrame(function tick(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration,1);
    const eased    = 1 - Math.pow(1 - progress, 3);

    co2ValueEl.textContent = target * eased).toFixed(1);

    if (progress<1) {
      requestAnimationFrame(tick);
    } else {
      co2ValueEl. textContent = target.toFixed(1);
    }
  }

function initProgress() {
  const pct = Math.min((CO2_SAVED / MONTHLY_GOAL) * 100,100);
  progressEl.style.width = pct + '%';
  progressBar.setAttribute('aria-valuenow', Math.round(pct));

  if (pct>= 100) {
    co2Badge.textContent = 'Goal reached!';
  } else if (pct>= 60) {
    co2Badge.textContent = 'On track';
  } else {
    co2Badge.textContent = 'Keep going';
  }
}

  filterButtons.forEach(button => { 
    
    button.addEventListener("click", () => {

      filterButtons.forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      const filterValue = button.dataset.filter;

      foodItems.forEach(item => {

      if (filterValue === "all" || item.dataset.impact === filterValue) {
        item.classList.remove("hidden");
      } else {     
        item.classList.add("hidden");
        }
        
      });

    });

});
