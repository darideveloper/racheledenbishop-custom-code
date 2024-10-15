const pageSections = document.querySelectorAll('[page-url]')

// Add transition duration 1s to all sections
pageSections.forEach(pageSection => {
  pageSection.style.transition = 'all 1s'
})

function changePageColor(color, isDark = false) {
  pageSections.forEach(pageSection => {
    // update bg color
    pageSection.style.backgroundColor = color
    pageSection.setAttribute('is-dark', isDark)
  })
}

function changeColorScroll(selector, newColor, isDark = false) {

  const elem = document.querySelector(selector)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(`Element ${selector} is visible`)
        changePageColor(newColor, isDark)
      } 
    })
  }, {
    threshold: 0.5  // Trigger when half of the element is visible
  })

  observer.observe(elem)
}

// Set initial bg color
changePageColor('#271010', true)

// Change color when scrolling
changeColorScroll('#main-page-middle + .page-layout', 'white')
changeColorScroll('#main-page- + .page-layout', 'white')
changeColorScroll('#pre-footer', 'white')
changeColorScroll('#main-page-bottom-1 + .page-layout', '#271010', true)