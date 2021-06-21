let body = document.querySelector('body')

let menu_btn = document.querySelector('header .head_contain .menu_btn')
let menu = document.querySelector('header .head_contain ul.head_nav')

let search_btn = document.querySelector('header .search_btn')
let search_block = document.querySelector('header .serch_block')
let search_text = document.querySelector('header .search input')

search_text.onfocus = () => {
  search_block.classList.add('active')
}
search_text.onblur = () => {
  search_block.classList.remove('active')
}

search_btn.addEventListener('click', () => {
  search_block.classList.add('active')
  body.classList.add('fixed')
  menu.classList.remove('active')
})

window.addEventListener('click', (event) => {
  if (
    search_block.classList.contains('active') &&
    !search_btn.contains(event.target) &&
    !search_text.parentElement.contains(event.target)
  ) {
    search_block.classList.remove('active')
    body.classList.remove('fixed')
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 1450) {
    body.classList.remove('fixed')
  }else if(window.innerWidth <= 1450 && search_block.classList.contains('active')){
    body.classList.add('fixed')
  }
})

menu_btn.addEventListener('click',()=>{
  menu.classList.toggle('active')
})

let arrow_down = document.querySelector('.index_top .arrow_down')
arrow_down.addEventListener('click', () => {
  let index_about_top = document.querySelector('.index_about').offsetTop
  window.scrollTo({
    top: index_about_top,
    behavior: 'smooth',
  })
})
