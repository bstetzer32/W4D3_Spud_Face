window.addEventListener("DOMContentLoaded", (event) => {
  // ** Phase 1B: Update license with event delegation and event.target ** 
  let addFormElement = function (event) {
    
    let infoId = "card-" + event.target.id;
    let info = document.getElementById(infoId);
    
    if (infoId === "card-license-num-confirm") {
    }
    
    else if (infoId === "card-donor-status") {
      if (event.target.checked) {
        info.innerText = "❤️ Organ Donor ❤️";
      } else {
        info.innerText = "";
      }
    } else {
      info.innerText = event.target.value;
    }
  }
  let form = document.getElementById("drivers-license-form");
  form.addEventListener("input", addFormElement);
  
  // ** Phase 2: Add focus and blur events to form inputs **
  let form2 = document.getElementsByClassName("form__input")
  let focus = function (event) {
    event.target.style.backgroundColor = "lightgreen";
    
  }
  let blur = function (event) {
    event.target.style.backgroundColor = "initial";
    
  }
  console.log(form2);
  Array.from(form2).forEach((input) => {
    input.addEventListener("focus", focus)
    input.addEventListener("blur", blur)
  })
  
  // ** Phase 3: Check that license numbers match **
  //              See lines 49-54

  
  // ** Phase 4: Update submit button click count **
  let submit = document.getElementsByTagName("button");
  let clicks = 0;
  submit[0].addEventListener("click", (event) => {
    event.preventDefault();
    let licenseNum = document.getElementById("license-num");
    let licenseNumConfirm = document.getElementById("license-num-confirm");
    let flag = true;
    Array.from(form2).forEach((input) => {
      if (input.value === "") {
        flag = false;
      }
    });
    if (flag === false && licenseNumConfirm.value !== licenseNum.value) {
      licenseNumConfirm.style.backgroundColor = "lightcoral";
      licenseNum.style.backgroundColor = "lightcoral";
      alert("All Forms Must Be Completed & License Numbers Must Match.");
    } else if (flag === false) {
      alert("All Forms Must Be Completed.")
    } else if (licenseNumConfirm.value !== licenseNum.value) {
      licenseNumConfirm.style.backgroundColor = "lightcoral";
      licenseNum.style.backgroundColor = "lightcoral";
      alert("License Numbers Must Match.");
    }
    else {
      clicks++;
      event.target.innerText = "Submit " + clicks;
    //   licenseNumConfirm.style.backgroundColor = "initial";
    //   licenseNum.style.backgroundColor = "initial";
    }
  });
 
});