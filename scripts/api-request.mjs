import { writeFileSync } from 'node:fs';
import qs from 'qs'

const url = 'https://dummyjson.com/products/category/womens-jewellery?select=title,brand,description,price,thumbnail'

const response = await fetch(url)
const body = await response.json()
//console.log(body)
//console.log(JSON.stringify(body,null,2))

const formatted = JSON.stringify(body,null,2)
const file = 'scripts/api-response.json'

writeFileSync(file, formatted, 'utf8')
