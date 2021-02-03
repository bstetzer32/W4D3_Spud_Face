window.addEventListener("DOMContentLoaded", (event) => {
  let addFormElement = function(event) {

      let infoId = "card-" + event.target.id;
      let info = document.getElementById(infoId);

      if (infoId === "card-license-num-confirm") {
      }  

      else if (infoId === "card-donor-status") {
        if (event.target.checked) {
          info.innerText = "Organ Donor";
        } else {
          info.innerText = "";
        } 
      } else {
          info.innerText = event.target.value;
      } 
  }

  let form = document.getElementById("drivers-license-form");
  form.addEventListener("input", addFormElement);

  // ** Phase 1B: Update license with event delegation and event.target ** 


  // ** Phase 2: Add focus and blur events to form inputs **
 

  // ** Phase 3: Check that license numbers match **
 

  // ** Phase 4: Update submit button click count **

 
});