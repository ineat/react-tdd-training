const API_KEYS = {
  DOG: 'b112a259-da98-4dca-8182-e7e8acff50ea',
  CAT: '1409deef-1756-4ead-8ff1-dcea024edc47'
}

export function getBreeds(animal) {
  const targetAPI = animal === 'cat' ? 'thecatapi' : 'thedogapi';
  const headers = {
    'x-api-key': animal === 'cat' ? API_KEYS.CAT : API_KEYS.DOG
  };

  return fetch(`https://api.${targetAPI}.com/v1/breeds`, {
    method: 'GET',
    headers
  })
  .then(response => response.json())
  .then(breeds => breeds.map(breed => ({
    id: breed.id,
    name: breed.name
  })));
}

export function getPictureAndDescription(animal, breedId) {
  const targetAPI = animal === 'cat' ? 'thecatapi' : 'thedogapi';
  const headers = {
    'x-api-key': animal === 'cat' ? API_KEYS.CAT : API_KEYS.DOG
  };

  return fetch(`https://api.${targetAPI}.com/v1/images/search?breed_ids=${breedId}`, {
    method: 'GET',
    headers
  })
  .then(response => response.json())
  .then(response => ({
    img: response[0].url,
    description: response[0].breeds[0].description || response[0].breeds[0].temperament
  }));
}