function Product(n,c,i,p,g,s){
    this.name = n
    this.category = c
    this.image = i
    this.price = p
    this.gender = g
    this.sold = s
}
function addProductToLocalStorage(product){
    let prod = JSON.parse(localStorage.getItem('Products')) || []
    prod.push(product)
    localStorage.setItem('Products',JSON.stringify(prod))
}
function handleForm(event){
    event.preventDefault();
    const name = document.getElementById('name').value
    const category = document.getElementById('category').value
    const image = document.getElementById('image').value
    const price = document.getElementById('price').value
    const gender = document.getElementById('gender').value
    const sold = document.getElementById('sold').value == 'true'

    const newProduct = new Product(name,category,image,price,gender,sold)

    addProductToLocalStorage(newProduct)
    document.getElementById('form').reset()
    alert("Product added successfully..")
}
document.getElementById('form').addEventListener('submit',handleForm)