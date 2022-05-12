const products = [
	{
	  title: "Uva Crimson",
	  price: 8.99,
	  category: "Frutas",
	  image: "./img/products/no-img.svg",
	  imageDescription: "Imagem contendo a mensagem produto sem imagem",
	},
	{
	  title: "Banana",
	  price: 5.69,
	  category: "Frutas",
	  image: "./img/products/product_2.svg",
	  imageDescription: "imagem com varios tipos cachos de banana",
	},
	{
	  title: "Mamão",
	  price: 4.99,
	  category: "Frutas",
	  image: "./img/products/product_3.svg",
	  imageDescription: "Imagem contendo vários mamões",
	},
	{
	  title: "Maçã",
	  price: 9.2,
	  category: "Frutas",
	  image: "./img/products/product_4.svg",
	  imageDescription: "Imagem contendo a maçã verde",
	},
	{
	  title: "Refrigerante",
	  price: 8.99,
	  category: "Bebidas",
	  image: "./img/products/no-img.svg",
	  imageDescription: "Imagem contendo a mensagem produto sem imagem",
	},
	{
	  title: "Vinho",
	  price: 8.99,
	  category: "Bebidas",
	  image: "./img/products/product_6.svg",
	  imageDescription: "Imagem contendo foto do vinho ",
	},
	{
	  title: "Água Tônica",
	  price: 8.99,
	  category: "Bebidas",
	  image: "./img/products/no-img.svg",
	  imageDescription: "Imagem contendo a mensagem produto sem imagem",
	},
	{
	  title: "Água de coco",
	  price: 8.99,
	  category: "Bebidas",
	  image: "./img/products/product_8.svg",
	  imageDescription: "imagem com varios cocos",
	},
  
	{
	  title: "Sabonete",
	  price: 8.99,
	  category: "Higiene",
	  image: "./img/products/product_9.svg",
	  imageDescription: "Imagem contendo sabonete",
	},
  
	{
	  title: "Detergente",
	  price: 8.99,
	  category: "Higiene",
	  image: "./img/products/product_10.svg",
	  imageDescription: "Imagem do detergente",
	},
  
	{
	  title: "Limpa superfícies",
	  price: 8.99,
	  category: "Higiene",
	  image: "./img/products/product_11.svg",
	  imageDescription: "Imagem contendo o produto Limpa superficies sendo utilizado por uma mão com luva",
	},
  
	{
	  title: "Lustra Móveis",
	  price: 8.99,
	  category: "Higiene",
	  image: "./img/products/no-img.svg",
	  imageDescription: "Imagem contendo a mensagem produto sem imagem",
	},
  ];
  navMaker()
  function navMaker (){
	let nav = document.createElement('nav')
	let body = document.querySelector("body")
	let main = document.querySelector(".container")
	body.insertBefore(nav,main)
	let img = document.createElement('img')
	img.src = "./img/brand/logo.svg"
	img.setAttribute("alt","Imagem da logotipo do Virtual Market de cor preta")
	img.setAttribute("title","Imagem da logotipo do Virtual Market de cor preta")
	document.querySelector("nav").appendChild(img)
	marketInit()
  }
  
  function marketInit(){
	
	 let inicioLoja = document.querySelector(".container")
	 let categoryRepeat = []
	 let classId = ['fruits','drinks','hygiene']
	 let searchID = ['.fruits','.drinks','.hygiene']
	
	 for(let i = 0 ; i < products.length;  i++ ){
	   categoryRepeat.push(products[i].category)
	 }
	 let categoriaProdutos = Array.from(new Set(categoryRepeat))
	
	 for(let i = 0 ; i < categoriaProdutos.length ; i++){
		inicioLoja.innerHTML += `
		  <section class="products-section"> 
			<h1>`+categoriaProdutos[i]+`</h1>
			<main class="products-content `+classId[i]+`" >
			</main>
		  </section>
		  `
		  let productPlace = document.createElement('ul')
		  productPlace.setAttribute("id",categoriaProdutos[i])
		  document.querySelector(searchID[i]).appendChild(productPlace)

		let productCategory = document.getElementById(categoriaProdutos[i])
		let produtosFiltrados = products.filter((item)=>item.category === categoriaProdutos[i])
		for (let x = 0 ; x < produtosFiltrados.length ; x++){
		  productCategory.innerHTML += `
		  <li class="product">
		  <img
			src="`+produtosFiltrados[x].image+`"
			alt="`+produtosFiltrados[x].imageDescription+`"
			title="`+produtosFiltrados[x].title+`"
			class="product-img"
		  />
		  <main class="product-main">
			<h1 class="product-title">`+produtosFiltrados[x].title+`</h1>
			<h5 class="product-category">`+produtosFiltrados[x].category+`</h5>
			<strong class="product-price">R$ `+produtosFiltrados[x].price.toFixed(2)+`</strong>
		  </main>
		</li>
		  `
		}
	  }
  }