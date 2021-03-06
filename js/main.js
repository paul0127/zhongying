let body = document.querySelector('body')
let header = document.querySelector('header')
let header_bottom = header.offsetTop + header.offsetHeight

/*header捲動 初始化設定 */
if (window.pageYOffset > header_bottom) {
  header.classList.add('fixed')
} else {
  header.classList.remove('fixed')
}
window.addEventListener('scroll', () => {
  if (window.pageYOffset > header_bottom) {
    header.classList.add('fixed')
  } else {
    header.classList.remove('fixed')
  }
})

/*選單及搜尋按鈕 */
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
  if (window.innerWidth > 1200) {
    body.classList.remove('fixed')
  } else if (
    window.innerWidth <= 1200 &&
    search_block.classList.contains('active')
  ) {
    body.classList.add('fixed')
  }
})

menu_btn.addEventListener('click', () => {
  menu.classList.toggle('active')
})

let cart_btn = document.querySelector('.cart_pop .cart_btn')
cart_btn.addEventListener('click', () => {
  cart_btn.parentNode.classList.toggle('active')
})

/*首頁向下滑動 */
let arrow_down = document.querySelector('.index_top .arrow_down')
if (arrow_down)
  arrow_down.addEventListener('click', () => {
    let index_about_top = document.querySelector('.index_about').offsetTop
    window.scrollTo({
      top: index_about_top,
      behavior: 'smooth',
    })
  })

/*產品左側選單 */
let left_menu = document.querySelector('.product_frame .left_menu')
if (left_menu) {
  let left_menu_items = left_menu.querySelectorAll(
    '.left_menu_border > ul > li'
  )

  left_menu_items.forEach((item) => {
    let left_menu_item = item.querySelector('ul')
    if (left_menu_item) {
      let left_menu_items_btn = item.querySelector('.name')
      left_menu_items_btn.addEventListener('click', () => {
        left_menu_items_btn.parentElement.classList.toggle('active')
      })
    }
  })

  let left_menu_title = left_menu.querySelector('.title')
  let left_menu_ul = left_menu.querySelector('ul')
  left_menu_title.addEventListener('click', () => {
    left_menu_ul.classList.toggle('active')
  })
}

/* 產品圖更換 */
let product_image = document.querySelector('.product_info .main_pic')
if (product_image) {
  let product_main_image = product_image.querySelector('.image')
  console.log(product_main_image)
  let product_items = product_image.querySelectorAll('.img_list .item a')
  product_items.forEach((item) => {
    item.addEventListener('click', () => {
      let data = item.dataset.image
      console.log(data)
      product_main_image.style.backgroundImage = 'url(' + data + ')'
    })
  })
}

/*產品數量 */
let qty = document.querySelector('.product_info .top .qty .input input')
let minus = document.querySelector('.product_info .top .qty .input .minus')
let plus = document.querySelector('.product_info .top .qty .input .plus')

if (qty) {
  minus.addEventListener('click', () => {
    if (qty.value > 1) qty.value = Number(qty.value) - 1
  })
  plus.addEventListener('click', () => {
    qty.value = Number(qty.value) + 1
  })
}

/*產品葉面切換 */
let tabs = document.querySelectorAll('.product_info .bottom ul.tabs li')
let panels = document.querySelectorAll('.product_info .bottom ul.panels > li')
tabs.forEach((item, index) => {
  item.addEventListener('click', () => {
    remove_class(tabs)
    remove_class(panels)
    item.classList.add('active')
    panels[index].classList.add('active')
  })
})

function remove_class(item) {
  item.forEach((item) => {
    item.classList.remove('active')
  })
}
