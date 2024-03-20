const unsplashAccessKey = '1RgYk8_QyDWBGMZJBLIrcfnWRCd-CJkDOVgJ97kJGOk';
const numberOfImages = 25;

async function fetchImages() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random/?query=mumbai&count=${numberOfImages}&orientation=portrait`, {
            headers: {
                Authorization: `Client-ID ${unsplashAccessKey}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch images from Unsplash');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching images:', error.message);
        return [];
    }
}

const collect = document.getElementById("photoCollect")

async function ShowImages() {
    try {
        const Imagedata = await fetchImages()

        Imagedata.forEach((element) => {
            const photoItem = document.createElement("div")
            photoItem.classList.add("col")

            const imageContain = document.createElement("div")
            imageContain.classList.add("photo")
            // imageContain.innerHTML = `<img src="${element.urls.regular}" alt="photo" style="object-fit: cover; width: 100%; height: auto;">`

            const imgElement = document.createElement("img");
            imgElement.src = element.urls.regular;
            imgElement.alt = "photo";

            const textBefore = document.createElement("div");
            textBefore.classList.add("textdescription");
            textBefore.innerText = element.alt_description;

            imageContain.appendChild(imgElement);
            imageContain.appendChild(textBefore);
            photoItem.appendChild(imageContain)
            collect.appendChild(photoItem)
        });
    } catch (error) {
        console.error('Error showing images:', error.message);
    }
}

function fetchHeritageSites() {
    const unsplashAccessKey = '1RgYk8_QyDWBGMZJBLIrcfnWRCd-CJkDOVgJ97kJGOk'; // Replace with your Unsplash access key
    const numberOfSites = 25; // Change as needed

    fetch(`https://api.unsplash.com/photos/random?query=mumbai&count=${numberOfSites}&client_id=${unsplashAccessKey}`)
      .then(response => response.json())
      .then(data => {
        const cardCollectDiv = document.querySelector('.cardCollect');
        data.forEach(site => {
          const card = createCard(site.urls.regular, site.alt_description, site.user.username);
          cardCollectDiv.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching data from Unsplash:', error));
  }

  function createCard(imageSrc, title, author) {
    const cardArea = document.createElement('div');
    cardArea.className = 'cardArea';
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const cardContent = `
      <div class="card-img-top">
        <img src="${imageSrc}" alt="${title}">
      </div>
      <div class="card-body">
        <div class="card-title">${title}</div>
        <p class="rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </p>
        <p class="card-text small">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Book</a>
      </div>
    `;
    cardDiv.innerHTML = cardContent;
    cardArea.appendChild(cardDiv);
    return cardArea;
  }