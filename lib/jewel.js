import qs from "qs";

const DUMMY_API_URL = "https://dummyjson.com/products/category/womens-jewellery";

//gestion api + erreurs
async function fetchData(endpoint, params = {}) {
  const queryString = qs.stringify(params, { encodeValuesOnly: true });
  const url = `${DUMMY_API_URL}/${endpoint}?${queryString}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`DummyJSON API returned ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

//recup champs pour affichage multiple
export async function getJewels(pageSize) {
  const { data } = await fetchData({
    fields: ['id', 'brand','title', 'price'],
    populate: { image: {fields: ['thumbnail']}},
    sort : ['id:desc'],
    pagination: { pageSize}
  });

  return data.map(toJewel)
}

//recup champs pour affichage individuel
export async function getJewel(id) {
    const {data} = await fetchData({
     filters: {id: { $eq: id}},
     fields: ['id', 'title', 'brand', 'description','price'],
     populate: { image: {fields: ['thumbnail']}},
     pagination: {pageSize: 1, withCount: false}
    })
    const item = data[0]
    return {
     ...toJewel(item),
     description: item.attributes.description
    }
 
 }

//gestion url
export async function getSlugs() {
    const {data} =  await fetchData({
        fields: ['id'],
        sort: ['id:desc'],
        pagination: {pageSize: 100}
    })
    return data.map((item)=> item.attributes.id)
}

//return map
function toJewel(item) {
    const { attributes } = item
    return {
        id: attributes.id,
        brand: attributes.brand,
        title: attributes.title,
        price:attributes.price,
        image: DUMMY_API_URL + "/" + attributes.thumbnail.url
    }
}




