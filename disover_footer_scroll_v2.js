// discover footer scroll v2

window.addEventListener("scroll", () => {

  // --- Overlays ---

  // Get scroll percentage
  const scrollTop = window.scrollY
  const docHeight = document.body.scrollHeight - window.innerHeight
  const scrollPercent = (scrollTop / docHeight) * 100

  // Calculate opacity based on scroll percentage
  let opacity = 1 - ((scrollPercent - 90) / 10)
  opacity = Math.max(0, Math.min(1, opacity))

  // Update global CSS variable
  document.documentElement.style.setProperty("--overlay-opacity", opacity)

})

// --- Above section height ---
const aboveSection = document.querySelector('[page-url="main-page-2"]')
const footerSection = document.querySelector('[page-url="main-page-bottom-1"]')
const footerHeight = footerSection.offsetHeight
aboveSection.style.marginBottom = `${footerHeight}px`