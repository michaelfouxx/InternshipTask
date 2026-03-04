const filterButtons = document.querySelectorAll(".filter-btn");
const foodItems = document.querySelectorAll(".food-item");
const co2Display = document.getElementById("co2Value");
const progressFill = document.getElementById("progressFill")


  let co2Saved = 12.4;
  let monthlyGoal = 20;

  co2Display.textContent = co2Saved.toFixed(1);

  let progressPercentage = (co2Saved / monthlyGoal) * 100;
  progressPercentage = Math.min(progressPercentage , 100);
  progressFill.style.width = progressPercentage + "%";

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
