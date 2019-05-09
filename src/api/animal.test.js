import { getBreeds, getPictureAndDescription } from './animal';

describe('Animal API', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockRejectedValue({});
  });

  describe('getBreeds', () => {
    it('Should call the breeds cat endpoint API with API key in the headers when the given animal is "cat".', () => {
      const expectedOptions = {
        method: 'GET',
        headers: {
          'x-api-key': '1409deef-1756-4ead-8ff1-dcea024edc47'
        }
      };

      getBreeds('cat');

      expect(window.fetch).toHaveBeenCalledWith('https://api.thecatapi.com/v1/breeds', expectedOptions);
    });

    it('Should call the breeds dog endpoint API with API KEY in the headers when the given animal is "dog".', () => {
      const expectedOptions = {
        method: 'GET',
        headers: {
          'x-api-key': 'b112a259-da98-4dca-8182-e7e8acff50ea'
        }
      };

      getBreeds('dog');

      expect(window.fetch).toHaveBeenCalledWith('https://api.thedogapi.com/v1/breeds', expectedOptions);
    });

    it('Should return the id, the name of the breeds when the API returns response.', () => {
      const breeds = [
        {
          "weight": {
              "imperial": "7  -  10",
              "metric": "3 - 5"
          },
          "id": "abys",
          "name": "Abyssinian",
          "cfa_url": "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx",
          "vetstreet_url": "http://www.vetstreet.com/cats/abyssinian",
          "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian",
          "temperament": "Active, Energetic, Independent, Intelligent, Gentle",
          "origin": "Egypt",
          "country_codes": "EG",
          "country_code": "EG",
          "description": "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
          "life_span": "14 - 15",
          "indoor": 0,
          "lap": 1,
          "alt_names": "",
          "adaptability": 5,
          "affection_level": 5,
          "child_friendly": 3,
          "dog_friendly": 4,
          "energy_level": 5,
          "grooming": 1,
          "health_issues": 2,
          "intelligence": 5,
          "shedding_level": 2,
          "social_needs": 5,
          "stranger_friendly": 5,
          "vocalisation": 1,
          "experimental": 0,
          "hairless": 0,
          "natural": 1,
          "rare": 0,
          "rex": 0,
          "suppressed_tail": 0,
          "short_legs": 0,
          "wikipedia_url": "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
          "hypoallergenic": 0
        }, {
            "weight": {
                "imperial": "7 - 10",
                "metric": "3 - 5"
            },
            "id": "aege",
            "name": "Aegean",
            "vetstreet_url": "http://www.vetstreet.com/cats/aegean-cat",
            "temperament": "Affectionate, Social, Intelligent, Playful, Active",
            "origin": "Greece",
            "country_codes": "GR",
            "country_code": "GR",
            "description": "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
            "life_span": "9 - 12",
            "indoor": 0,
            "alt_names": "",
            "adaptability": 5,
            "affection_level": 4,
            "child_friendly": 4,
            "dog_friendly": 4,
            "energy_level": 3,
            "grooming": 3,
            "health_issues": 1,
            "intelligence": 3,
            "shedding_level": 3,
            "social_needs": 4,
            "stranger_friendly": 4,
            "vocalisation": 3,
            "experimental": 0,
            "hairless": 0,
            "natural": 0,
            "rare": 0,
            "rex": 0,
            "suppressed_tail": 0,
            "short_legs": 0,
            "wikipedia_url": "https://en.wikipedia.org/wiki/Aegean_cat",
            "hypoallergenic": 0
        }
      ];
      window.fetch.mockResolvedValue({
        json: () => Promise.resolve(breeds)
      });

      return getBreeds('dog').then(breeds => {
        expect(breeds).toEqual([
          {
            id: 'abys',
            name: 'Abyssinian'
          }, {
            id: 'aege',
            name: 'Aegean'
          }
        ]);
      });
    });
  });

  describe('getPictureAndDescription', () => {
    it('Should call the search breeds cat endpoint API with API key in the headers and breed id as query param when the given animal is "cat".', () => {
      const expectedOptions = {
        method: 'GET',
        headers: {
          'x-api-key': '1409deef-1756-4ead-8ff1-dcea024edc47'
        }
      };
      const expectedBreedId = 'breed-cat-id';

      getPictureAndDescription('cat', expectedBreedId);

      expect(window.fetch).toHaveBeenCalledWith(`https://api.thecatapi.com/v1/images/search?breed_ids=${expectedBreedId}`, expectedOptions);
    });

    it('Should call the search breeds dog endpoint API with API key in the headers and breed id as query param when the given animal is "dog".', () => {
      const expectedOptions = {
        method: 'GET',
        headers: {
          'x-api-key': 'b112a259-da98-4dca-8182-e7e8acff50ea'
        }
      };
      const expectedBreedId = 'breed-dog-id';

      getPictureAndDescription('dog', expectedBreedId);

      expect(window.fetch).toHaveBeenCalledWith(`https://api.thedogapi.com/v1/images/search?breed_ids=${expectedBreedId}`, expectedOptions);
    });

    it('Should return the url of an image and the description of the breed when the API returns response.', () => {
      const expectedUrl = 'http://picture.io';
      const expectedDescription = 'random description';
      const response = [
        {
          "breeds": [
            {
              "weight": {
                "imperial": "6 - 12",
                "metric": "3 - 7"
              },
              "id": "beng",
              "name": "Bengal",
              "cfa_url": "http://cfa.org/Breeds/BreedsAB/Bengal.aspx",
              "vetstreet_url": "http://www.vetstreet.com/cats/bengal",
              "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/bengal",
              "temperament": "Alert, Agile, Energetic, Demanding, Intelligent",
              "origin": "United States",
              "country_codes": "US",
              "country_code": "US",
              "description": expectedDescription,
              "life_span": "12 - 15",
              "indoor": 0,
              "lap": 0,
              "adaptability": 5,
              "affection_level": 5,
              "child_friendly": 4,
              "cat_friendly": 4,
              "dog_friendly": 5,
              "energy_level": 5,
              "grooming": 1,
              "health_issues": 3,
              "intelligence": 5,
              "shedding_level": 3,
              "social_needs": 5,
              "stranger_friendly": 3,
              "vocalisation": 5,
              "bidability": 3,
              "experimental": 0,
              "hairless": 0,
              "natural": 0,
              "rare": 0,
              "rex": 0,
              "suppressed_tail": 0,
              "short_legs": 0,
              "wikipedia_url": "https://en.wikipedia.org/wiki/Bengal_(cat)",
              "hypoallergenic": 1
            }
          ],
          "id": "8pCFG7gCV",
          "url": expectedUrl,
          "width": 750,
          "height": 937
        }
      ];

      window.fetch.mockResolvedValue({
        json: () => Promise.resolve(response)
      });

      return getPictureAndDescription('dog', 'arg').then(({ img, description }) => {
        expect(img).toEqual(expectedUrl);
        expect(description).toEqual(expectedDescription);
      });
    });

    it('Should return the temperament as description of the breed when the API returns response and no description are given.', () => {
      const expectedTemperament = 'random temperament';
      const response = [
        {
          "breeds": [
            {
              "weight": {
                "imperial": "6 - 12",
                "metric": "3 - 7"
              },
              "id": "beng",
              "name": "Bengal",
              "cfa_url": "http://cfa.org/Breeds/BreedsAB/Bengal.aspx",
              "vetstreet_url": "http://www.vetstreet.com/cats/bengal",
              "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/bengal",
              "temperament": expectedTemperament,
              "origin": "United States",
              "country_codes": "US",
              "country_code": "US",
              "description": null,
              "life_span": "12 - 15",
              "indoor": 0,
              "lap": 0,
              "adaptability": 5,
              "affection_level": 5,
              "child_friendly": 4,
              "cat_friendly": 4,
              "dog_friendly": 5,
              "energy_level": 5,
              "grooming": 1,
              "health_issues": 3,
              "intelligence": 5,
              "shedding_level": 3,
              "social_needs": 5,
              "stranger_friendly": 3,
              "vocalisation": 5,
              "bidability": 3,
              "experimental": 0,
              "hairless": 0,
              "natural": 0,
              "rare": 0,
              "rex": 0,
              "suppressed_tail": 0,
              "short_legs": 0,
              "wikipedia_url": "https://en.wikipedia.org/wiki/Bengal_(cat)",
              "hypoallergenic": 1
            }
          ],
          "id": "8pCFG7gCV",
          "url": 'url.com',
          "width": 750,
          "height": 937
        }
      ];

      window.fetch.mockResolvedValue({
        json: () => Promise.resolve(response)
      });

      return getPictureAndDescription('dog', 'arg').then(({ description }) => {
        expect(description).toEqual(expectedTemperament);
      });
    });
  });
});