const filterButtons = document.querySelectorAll(".filter-btn");
const foodItems = document.querySelectorAll(".food-item");
const co2Display = document.getElementById("co2Value");
const progressFill = document.getElementById("progressFill")


  let co2Saved = 12.4;
  let monthlyGoal = 20;

  co2Display.textContent = co2Saved;

  let progressPercentage = (co2Saved / monthlyGoal) * 100;
  progressFill.style.width = progressPercentage + "%";

  filterButtons.forEach(button => { 
    
    button.addEventListener("click", () => {

      filterButtons.forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");

      const filterValue = button.dataset.filter;

      foodItems.forEach(item => {

        if (filterValue === "all") {
          item.style.display = "block";
        }
        else if (item.dataset.impact === filterValue){
          item.style.display = "block";
        }
        else{
          item.style.display = "none";
        }
        
      });

    });

});
