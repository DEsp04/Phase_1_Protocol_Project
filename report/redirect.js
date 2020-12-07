import axios from 'axios';



let searchReport = localStorage.getItem('value-name');
const reportUrl = `https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=${searchReport}`

let response = async function () { 
  await axios.get(reportUrl).then(res => {
    console.log(res.data.totalCount);

    const reportData = res.data.data
    for (let i = 0; i < reportData.length; i++) { 
      document.getElementById('title_section').innerHTML += `<li id = ${reportData[i].id}>${reportData[i].fields.title}</li>`
    }
  }).catch(err => { 
    console.log(err)
  })
}

response();



//When a title is clicked, the either an image or body text will appeared
document.getElementById('title_section').addEventListener('click', async (e) => { 
  console.log(e.target);
  let reportId = e.target.id;

  console.log(document.querySelector('div'));
  let divElement = document.querySelector('div');
  divElement.innerHTML = "";


  
  let newAEle = document.createElement('a');

  try {
    const responseTwo = await axios.get(`https://api.reliefweb.int/v1/reports/${reportId}`);
    console.log(responseTwo.data.data[0].fields['body-html'])

    let responseTitle = responseTwo.data.data[0].fields.title
    let responseBody = responseTwo.data.data[0].fields['body-html']
    

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
      newParElement.innerHTML = `${responseBody}`
      divElement.appendChild(newParElement);
    }
   
  } catch (e) { 
    console.log(e);
  }
})





//Click next or previous and you will get fresh 10 new reports
let num = 0;

//For prev
let newA2 = document.createElement('a');
newA2.setAttribute("href", '#')
newA2.setAttribute("id", 'prevTitle')
newA2.textContent = "";
document.getElementById('info').appendChild(newA2);

document.getElementById('prevTitle').addEventListener('click', async (e) => {
  
  try {
    num -= 10;
    console.log(num);

    const responseThree = await axios.get(`https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=${searchReport}&offset=${num}&limit=10`);
    console.log(responseThree.data);

    if (num >= 0) {
      console.log(num);
      document.getElementById('title_section').innerHTML = ""
      const reponseTitleTwo = responseThree.data.data
      for (let i = 0; i < reponseTitleTwo.length; i++) {
        document.getElementById('title_section').innerHTML += `<li id = ${reponseTitleTwo[i].id}>${reponseTitleTwo[i].fields.title}</li>`
      }
    }
    if (num === 0) { 
      newA2.textContent = "";
    }
  
  } catch (e) { 
    console.log(e)
    num = 0;
  }
})


//For next
let newA1 = document.createElement('a');
newA1.setAttribute("href", '#')
newA1.setAttribute("id", 'nextTitle')
newA1.textContent = "next";
document.getElementById('info').appendChild(newA1);

document.getElementById('nextTitle').addEventListener('click', async (e) => {
  
  try {
    newA2.textContent = "prev";
    num += 10;
    console.log(num);
    

    const responseThree = await axios.get(`https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=${searchReport}&offset=${num}&limit=10`);
    console.log(responseThree.data);

    if (num <= responseThree.data.totalCount) {
      document.getElementById('title_section').innerHTML = ""
      const reponseTitleTwo = responseThree.data.data
      for (let i = 0; i < reponseTitleTwo.length; i++) {
        document.getElementById('title_section').innerHTML += `<li id = ${reponseTitleTwo[i].id}>${reponseTitleTwo[i].fields.title}</li>`
      }
    }
  
  } catch (e) { 
    console.log(e)
  }
})