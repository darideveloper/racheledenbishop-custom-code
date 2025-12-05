// --- Footer arrow ---

window.addEventListener("scroll", () => {
  const arrowElement = document.querySelector('#arrow')
  const target = document.querySelector('[page-url="main-page-bottom-1"] span > br + span')

  if (!arrowElement || !target || !target.parentNode) return

  // Prevent running more than once
  if (arrowElement.dataset.moved === "1") return

  // Create wrapper with role="button"
  const wrapper = document.createElement("div")
  wrapper.id = "arrow-wrapper"
  wrapper.setAttribute("role", "button")
  wrapper.style.display = "inline-flex"
  wrapper.style.alignItems = "center"

  // Insert wrapper after target
  target.parentNode.insertBefore(wrapper, target.nextSibling)

  // Move both target and arrow into wrapper
  wrapper.appendChild(target)
  wrapper.appendChild(arrowElement)

  // Mark as done
  arrowElement.dataset.moved = "1"
})
