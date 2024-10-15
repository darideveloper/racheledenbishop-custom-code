// Detect when page loads
window.onload = () => {
  console.log('Page loaded')

  const pageSections = document.querySelectorAll('[page-url]')
  console.log({ pageSections })

  // Add transition duration 1s to all sections
  pageSections.forEach(pageSection => {
    pageSection.style.transition = 'all 1s'
  })

  function changePageColor(color, isDark = false) {
    console.log(`Changing color to ${color}`)
    pageSections.forEach(pageSection => {
      // update bg color
      pageSection.style.backgroundColor = color
      pageSection.setAttribute('is-dark', isDark)
    })
  }

  function changeColorScroll(selector, newColorVisible, newColorNoVisible = "", isDark = false) {

    const elem = document.querySelector(selector)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(`Element ${selector} is visible`)
          changePageColor(newColorVisible, isDark)
        } else if (newColorNoVisible != "") {
          changePageColor(newColorNoVisible, !isDark)
        }
      })
    }, {
      threshold: 0.5  // Trigger when half of the element is visible
    })

    observer.observe(elem)
  }

  
  // Change color when match main section
  changeColorScroll('#main-page-middle + .page-layout', 'white')

  // Set initial bg color
  changePageColor('#271010', true)

  // Change color when match header
  window.onscroll = () => {
    if (window.scrollY <= 100) {
      changePageColor('#271010', true)
    } else {
      // Add event listener to change color when match footer
      changeColorScroll('#main-page-bottom-1 + .page-layout', '#271010', 'white', true)
    }
  }
}

