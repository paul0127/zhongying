let search_text = document.querySelector('header .search input')
search_text.onfocus = () => {
  search_text.classList.add('active')
}
search_text.onblur = () => {
  search_text.classList.remove('active')
}

let arrow_down = document.querySelector('.index_top .arrow_down')

arrow_down.addEventListener('click', () => {
  let index_about_top = document.querySelector('.index_about').offsetTop
  window.scrollTo({
    top: index_about_top,
    behavior: 'smooth',
  })
})
