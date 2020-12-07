let getReport = document.getElementById("getReports");
const searchReportInput = document.getElementById("reportText");



getReport.addEventListener('click', () => {

  let searchReport = searchReportInput.value;
  localStorage.setItem('value-name', searchReport);

  if (searchReport.length > 1 ) {
    document.getElementById("linkToReport").setAttribute('href', "./report/reports.html");
    document.getElementById("linkToReport").setAttribute('target', "_blank")
    // window.open("./report/reports.html");
  } else if (searchReport === "") {
    document.getElementById("linkToReport").removeAttribute("href", "target");
    alert("Enter key term");
  }

  searchReportInput.value = "";
})