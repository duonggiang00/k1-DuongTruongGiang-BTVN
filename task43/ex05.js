const productsList = document.getElementById("productsList")
const productsListHeader = document.getElementById("productsListHeader")
const searchForm = document.getElementById("searchForm")
const searchInput = document.getElementById("searchInput")
const renderRequest = document.getElementById("renderRequest")
const sortProduct = document.getElementById("sortProduct")
const previousBtn=document.getElementById("previous")
const nextBtn=document.getElementById("next")
const currentPage =document.getElementById("current-page")

let localProduct = []

// function renderList(products){
//     productsList.innerHTML=""
//     products.forEach(item=>{
//         console.log(item)
//         let trElement = document.createElement("tr")
//         trElement.id=`${item.id}`
//         trElement.innerHTML=`
//         <td>${item.id}</td>
//         <td>${item.title}</td>
//         <td>${item.description}</td>
//         <td>${item.price}</td>
//         <td><img src="${item.images}" height="100" alt=""></td>
//         <td><button onclick="getDetail(${item.id})">Detail</button></td>
//         `
//         productsList.appendChild(trElement)
//     })
// }

   

function getData(){
    fetch("https://dummyjson.com/products")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        localProduct=data.products
        renderList(data.products)
        
    })
    .catch((error)=>{
        console.log(error)
    })
}
// getData()




function searchData(){
    let keyword = searchInput.value.trim().toLowerCase()
    if((keyword)==="") return renderList(localProduct) ;
    const searchData = fetch(`https://dummyjson.com/products/search?q=${keyword}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        renderList(data.products)
        
    })
    .catch((error)=>{
        console.log(error)
    })
    return searchData
}

function reset(){
    productsList.innerHTML=""
    productsListHeader.style.display=""
    renderList(localProduct)
}

function sortData(type=sortProduct.value){
    console.log(type)
    switch(type){
        case 'asc':
            return renderList(data = localProduct.sort((a,b)=>a.price-b.price))
        case 'desc':
            return renderList(data = localProduct.sort((a,b)=>b.price-a.price))
        case '':
            return renderList(localProduct)
    }
    
}

function getDetail(id){
    fetch(`https://dummyjson.com/products/${id}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        productsList.innerHTML=""
        productsListHeader.style.display="none"
            productsList.innerHTML = `
            <tr>
                <button onclick="reset()">Back</button>
            </tr>
            <tr>
                <th>id</th>
                <th>${data.id}</th>
            </tr>
            <tr>
                <th>image:</th>
                <th><img src="${data.images}" height="100" alt=""></th>
            </tr>
            <tr>
                <th>title:</th>
                <th>${data.title}</th>
            </tr>
            <tr>
                <th>category</th>
                <th>${data.category}</th>
            </tr>
            <tr>
                <th>price</th>
                <th>${data.price}</th>
            </tr>
            <tr>
                <th>description</th>
                <th>${data.description}</th>
            </tr>
            <tr>
                <th>rating</th>
                <th>${data.rating}</th>
            </tr>
            <tr>
                <th>stock</th>
                <th>${data.stock}</th>
            </tr>
            <tr>
                <th>brand</th>
                <th>${data.brand}</th>
            </tr>
            <tr>
                <th>serial number</th>
                <th>${data.sku}</th>
            </tr>
            `
    })
    
}

searchForm.addEventListener("submit",function(event){
    event.preventDefault()
})

let page = 1;
let limit =12;
let skip = (page-1)*limit

const fetchProducts = async(limit = 12, skip = 10)=>{
    try {
        const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`)
        const { products } = await res.json();
        console.log(products);
        localProduct=products
        renderList(products)
    } catch (error) {
        console.log(error)
    }
} 
fetchProducts()
