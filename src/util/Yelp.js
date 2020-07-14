const { default: SearchBar } = require("../components/SearchBar/SearchBar");

const apiKey = 'bWQ3DZM1gtPxXIfs97QUt100C_9NmRADrdJJOK951Hh5BzuIlGVSoB0LGvHAwicVCEeJCvn3_TMij3PwjJkwp_bivnsW4QpGZEI2Gk6znsrl3ravMRN-5nkBtusNX3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        ).then(response => { return response.json(); })
            .then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return (jsonResponse.businesses.map(business => {
                        return ({
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zipCode,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.reviewCount,
                        })
                    }));
                }

            });
    }

};

export default Yelp;