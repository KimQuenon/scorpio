import qs from "qs";

//url de l'api
const DUMMY_API_URL = "https://dummyjson.com/products/category/womens-jewellery";

// gestion api + erreurs
const fetchData = async (params = {}) => {
  const queryString = qs.stringify(params, { encodeValuesOnly: false });
  const url = `${DUMMY_API_URL}?${queryString}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error fetching data: ' + response.status);
    }

    const data = await response.json();

    return data;

  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

// recup id
async function fetchJewelById(jewelId) {
  const url = `https://dummyjson.com/products/${jewelId}`;

  console.log("fetchJewelById: ", url);

  
    const response = await fetch(url);
    const data = await response.json();

    return data


  }


// fonction return
const toJewel = (product) => ({
  id: product.id,
  brand: product.brand,
  title: product.title,
  price: product.price,
  image: product.thumbnail,
});


// affichage multiple
export async function getJewels(limit) {
  try {
    const { products } = await fetchData({
      fields: ["id", "brand", "title", "price"],
      populate: { image: { fields: ["thumbnail"] } },
      sort: ["id:desc"],
      limit:limit
    });

    return products.map(toJewel);
  } catch (error) {
    console.error("Error fetching jewels:", error);
    throw error;
  }
}


//affichage individuel + description & ratings
export async function getJewel(id) {
  const jewelData = await fetchJewelById(id);

  return {
    ...toJewel(jewelData),
    description: jewelData.description,
    rating: jewelData.rating,
  };
}
