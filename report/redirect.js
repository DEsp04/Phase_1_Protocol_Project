import axios from 'axios';



let searchReport = localStorage.getItem('value-name');
const reportUrl = `https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=${searchReport}`

let response = async function () { 
  await axios.get(reportUrl).then(res => {
    console.log(res.data);

    const reportData = res.data.data
    for (let i = 0; i < reportData.length; i++) { 
      document.getElementById('title_section').innerHTML += `<li id = ${reportData[i].id}>${reportData[i].fields.title}</li>`
    }


    let newA2 = document.createElement('a');
    newA2.setAttribute("href", '#')
    newA2.textContent = "prev";
    document.getElementById('info').appendChild(newA2);
    
    let newA1 = document.createElement('a');
    newA1.setAttribute("href", '#')
    newA1.textContent = "next";
    document.getElementById('info').appendChild(newA1);



    


  }).catch(err => { 
    console.log(err)
  })
}

response();


document.getElementById('title_section').addEventListener('click', async (e) => { 
  console.log(e.target);
  let reportId = e.target.id;

  console.log(document.querySelector('div'));
  let divElement = document.querySelector('div');
  divElement.innerHTML = "";

  try {
    const responseTwo = await axios.get(`https://api.reliefweb.int/v1/reports/${reportId}`);
    console.log(responseTwo.data.data[0])

    let responseTitle = responseTwo.data.data[0].fields.title
    let responseBody = responseTwo.data.data[0].fields.body
    


    let newHeaderElement = document.createElement('h3')
    newHeaderElement.textContent = `${responseTitle}`
    divElement.appendChild(newHeaderElement);

    if (responseBody === undefined) {
      let reponseImageUrl = responseTwo.data.data[0].fields.file[0].preview.url
      let newImageElement = document.createElement('img');
      newImageElement.setAttribute('src',`${reponseImageUrl}`);
      divElement.appendChild(newImageElement);
    } else {
      let newParElement = document.createElement('p');
      newParElement.textContent = `${responseBody}`
      divElement.appendChild(newParElement);
    }
   
    

  } catch (e) { 
    console.log(e);
  }

  
})



