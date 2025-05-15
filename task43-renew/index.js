//DOM
const searchForm=document.getElementById('searchForm')
const searchInput=document.getElementById('searchInput')
const productList=document.getElementById('productList')
const preBtn=document.getElementById('preBtn')
const nextBtn=document.getElementById('nextBtn')
const curPage=document.getElementById('curPage')
const sortType=document.getElementById('sortType')
const paginate=document.getElementById('paginate')
const pages=document.getElementById('pages')
let page = 1;
let limit = 8;
let skip = (page-1)*limit;
let totalProducts;
let totalPage = totalProducts/limit;

preBtn.addEventListener("click",function(){
    console.log("hello")
    if(page>1){
        page--;
        curPage.innerText = page;
        skip=(page - 1)*limit;
        getProducts(limit,skip);
    }
})
nextBtn.addEventListener("click",function(){
    console.log("hello")
    pageMax = totalProducts/limit;
    if(page<pageMax){
        page++;
        curPage.innerText = page;
        skip=(page - 1)*limit;
        getProducts(limit,skip);
    }
})

//main function
const getProducts = async (limit = 8, skip = 0)=>{
    try {
        const fetchData = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        const { products,total } = await fetchData.json()
        totalProducts = total
        // console.log(products)
        renderProduct(products)
    } catch (error) {
        console.log(error)
    }
}
function renderProduct(products){
    productList.innerHTML=""
    products.forEach(item=>{
        let product = document.createElement("div")
        product.classList.add("product")
        product.innerHTML=
        `
        <div class="product-image">
                    <img src="${item.thumbnail}" alt="" >
                </div>
                <div class="product-info">
                    <p>id:${item.id}</p>
                    <h1>${item.title}</h1>
                    <p>${item.branch}</p>
                    <p>${item.description}</p>
                    <p>${item.price}</p>
                    <button onclick="getDetail(${item.id})">Detail</button>
                </div>
        `
        productList.appendChild(product)
    })
}
async function searchProduct(){
    searchName = searchInput.value.trim().toLowerCase()
    try {
        const fetchData= await fetch(`https://dummyjson.com/products/search?q=${searchName}`)
        const { products } = await fetchData.json()
        renderProduct(products)
    } catch (error) {
        console.log(error)
    }
}
getProducts()

async function sortProduct(require=sortType.value){
    try {
        const fetchData = await fetch('https://dummyjson.com/products')
        const { products } = await fetchData.json()
        // console.log(products)
        if(require==="asc"){
            const sortProducts = [...products].sort((a,b)=>a.price-b.price)
            renderProduct(sortProducts)
        }else if(require==="desc"){
            const sortProducts = [...products].sort((a,b)=>b.price-a.price)
            renderProduct(sortProducts)
        }else renderProduct(products)
        
    } catch (error) {
        console.log(error)
    }
}

async function getDetail(id){
    try{
        const fetchData = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await fetchData.json()
        productList.innerHTML=""
        console.log(data)
        const productDetail = document.createElement("div")
        productDetail.classList.add('product-detail')
        productDetail.innerHTML=
        `
                <button onclick="reset()">Back</button>
                <div class="image">
                    <img src="${data.images}" alt="">
                </div>
                <div class="detail-info" id="detail-info">
                    <p>id:${data.id}</p>
                    <h3>${data.title}</h3>
                    <p>${data.category}</p>
                    <p>${data.description}</p>
                    <h4>${data.price}</h4>
                    <p>${data.brand}</p>
                    <p>${data.stock}</p>
                </div>
        `
        productList.appendChild(productDetail)
        searchForm.style.display="none"
        paginate.style.display="none"
    }
    catch(error){
        console.log(error)
    }
}
function reset(){
    searchForm.style.display=""
    paginate.style.display=""
    getProducts()
}