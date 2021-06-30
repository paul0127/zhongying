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
  } else if (
    window.innerWidth <= 1450 &&
    search_block.classList.contains('active')
  ) {
    body.classList.add('fixed')
  }
})

menu_btn.addEventListener('click', () => {
  menu.classList.toggle('active')
})

let arrow_down = document.querySelector('.index_top .arrow_down')
if (arrow_down)
  arrow_down.addEventListener('click', () => {
    let index_about_top = document.querySelector('.index_about').offsetTop
    window.scrollTo({
      top: index_about_top,
      behavior: 'smooth',
    })
  })

let left_menu = document.querySelector('.product_frame .left_menu')
if (left_menu) {
  let left_menu_items = left_menu.querySelectorAll(
    '.left_menu_border > ul > li'
  )

  left_menu_items.forEach((item) => {
    let left_menu_item = item.querySelector('ul')
    if (left_menu_item) {
      let height = left_menu_item.offsetHeight

      if (item.classList.contains('active')) {
        left_menu_item.style.height = height + 'px'
      } else {
        left_menu_item.style.height = '0px'
      }

      let left_menu_items_btn = item.querySelector('.name')
      left_menu_items_btn.addEventListener('click', () => {
        left_menu_items_btn.parentElement.classList.toggle('active')
        if (left_menu_items_btn.parentElement.classList.contains('active')) {
          left_menu_item.style.height = height + 'px'
        } else {
          left_menu_item.style.height = '0px'
        }
      })
    }
  })
}
