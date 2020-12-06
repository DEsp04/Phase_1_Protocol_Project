let getReport = document.getElementById("getReports");
const searchReportInput = document.getElementById("reportText");
const formElement = document.querySelector('form');


getReport.addEventListener('click', (e) => {
  e.preventDefault();
  
  let searchReport = searchReportInput.value;
  localStorage.setItem('value-name', searchReport);

  if (searchReport.length >= 1) {
    window.open("./report/reports.html");
  } else { 
    alert("Enter key term");
  }
  
  formElement.reset();
})