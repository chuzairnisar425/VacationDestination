var detailsForm = document.getElementById('Destination_Details_Form');
detailsForm.addEventListener('submit',handleFormSubmit) 
function handleFormSubmit(event){
    event.preventDefault();
    var destName = event.target.elements['name'].value;
    var destLocation = event.target.elements['location'].value;
    var destPhoto = event.target.elements['photo'].value;
    var destDesc = event.target.elements['description'].value;

    for (var i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";
    }
    //create card 

    var destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc)

    var mywishlistContainer = document.getElementById('container_details')

    if (mywishlistContainer.children.length == 0) {
        document.getElementById('title').innerHTML = 'My Wish List'
    }
    document.querySelector('#container_details').appendChild(destCard)
}

//add card 



function createDestinationCard(name, location, photoURl, description) {
    var card = document.createElement('div');
    card.className = 'card';
    var img = document.createElement('img');
    img.setAttribute('alt', name)
    var constantphotoURl = 'images/signpost.jpg';
    if (photoURl.length == 0) {
        img.setAttribute('src', constantphotoURl)
    }
    else {
        img.setAttribute('src', photoURl)

    }
    card.appendChild(img);
    var cardBody = document.createElement('div')
    cardBody.className = 'card-body';

    var cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    var cardSubtitle = document.createElement('h4')
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);
    if (description.length !== 0) {

        var cardDescription = document.createElement('p')
        cardDescription.className = 'card-text'
        cardDescription.innerText = description;
        cardBody.appendChild(cardDescription);
    }
    var removeBtn = document.createElement('button')
    removeBtn.innerText = 'Remove'
    removeBtn.addEventListener('click', removeDestination)
    cardBody.appendChild(removeBtn)
    card.appendChild(cardBody)
    return card;
}

function removeDestination(event) {
    var card = event.target.parentElement.parentElement;
    card.remove();

}
