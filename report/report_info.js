




// //When a title is clicked, the either an image or body text will appeared
// document.getElementById('title_section').addEventListener('click', async (e) => { 
  
//   let reportId = e.target.id;

//   let divElement = document.querySelector('div');
//   divElement.innerHTML = "";


// //Add the back button to get back to the list of reports title
  
// let newButton = document.createElement('button');

//   try {
//     const responseTwo = await axios.get(`https://api.reliefweb.int/v1/reports/${reportId}`);
//     console.log(responseTwo)

//     let responseTitle = responseTwo.data.data[0].fields.title
//     let responseBody = responseTwo.data.data[0].fields['body-html']
    

//     let newHeaderElement = document.createElement('h3')
//     newHeaderElement.textContent = `${responseTitle}`
//     divElement.appendChild(newHeaderElement);

//     if (responseBody === undefined) {
//       let reponseImageUrl = responseTwo.data.data[0].fields.file[0].preview.url
//       let newImageElement = document.createElement('img');
//       newImageElement.setAttribute('src',`${reponseImageUrl}`);
//       divElement.appendChild(newImageElement);
//     } else {
//       let newParElement = document.createElement('p');
//       newParElement.innerHTML = `${responseBody}`
//       divElement.appendChild(newParElement);
//     }

//     newButton.textContent = "Back"
// newButton.setAttribute('onclick', 'reloadPage()');  
// document.querySelector('div').appendChild(newButton);

//   document.querySelector('button').addEventListener('click', function () {
//     location.reload();
//   })
   
//   } catch (e) { 
//     console.log(e);
//   }
// })
