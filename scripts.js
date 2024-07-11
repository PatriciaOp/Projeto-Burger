

// desafio


const showProducts = document.querySelector('.productsList')
const buttonShow = document.querySelector('.forEach')
const buttonDescont = document.querySelector('.mapButton')
const buttonReduce = document.querySelector('.reduceButton')
const buttonFilter = document.querySelector('.filterButton')


function formatCurrency(value) {
  const newValue = value.toLocaleString('pt-br', {
    style: 'currency', 
    currency: 'BRL',
    
  })
  return newValue
}

//for each mostrar produtos na tela
function showAll(descontArray) {
  let myLi = ''

  descontArray.forEach((product) => {
    myLi += `
            <li>
                <img src=${product.src}>
                <h3>${product.name}</h3>
                <p> ${formatCurrency(product.price)}</p>
            </li> 
            `
  })
  showProducts.innerHTML = myLi
}

// map 10% de desconto    

function showDescont() {

  const newDescont = menuOptions.map((descont) => ({
    //  const newPrices = (descont) => {
    ...descont,  
    price: descont.price * 0.9,
  }))
 
  showAll(newDescont)
  //console.log(newDescont);
  // Adiciona a classe highlight aos parágrafos
  const paragraphs = showProducts.querySelectorAll('p');
  paragraphs.forEach((paragraph) => {
      paragraph.classList.add('highlight');
  });
}


//reduce somar tudo e mostrar em paragrafo

function mostrarSoma() {
  const somar = menuOptions.reduce((acc, currency) => acc + currency.price, 0)


  showProducts.innerHTML = `
           <li> 
              <h3>O valor total é de:  ${formatCurrency(somar)}</h3>
              
            </li>            
            `

//<h3>O valor total é de: <span " p " > ${formatCurrency(somar)}</span> </h3>
}

//filter somente os veganos 

function filterVegan() {
  const filtrar = menuOptions.filter(products => products.vegan === true)
        
  
      showAll(filtrar)
}

buttonShow.addEventListener("click", () => showAll(menuOptions))
buttonDescont.addEventListener("click", showDescont)
buttonReduce.addEventListener("click", mostrarSoma)
buttonFilter.addEventListener("click", filterVegan)

