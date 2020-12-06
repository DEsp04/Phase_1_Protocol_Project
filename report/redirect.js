import axios from 'axios';



let searchReport = localStorage.getItem('value-name');
const reportUrl = `https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=${searchReport}`

let response = async function () { 
  await axios.get(reportUrl).then(res => { 
    console.log(res.data.data);
  }).catch(err => { 
    console.log(err)
  })
}

response();

