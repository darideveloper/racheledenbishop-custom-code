// ------ CUSTOM CURSOR ------


// Hide the default cursor
document.body.style.cursor = "none"

//Create the circle element
const cursor = document.createElement("div")
document.body.appendChild(cursor)

//Style it (black, small, circle, fixed position)
Object.assign(cursor.style, {
  width: "10px",
  height: "10px",
  backgroundColor: "black",
  borderRadius: "50%",
  position: "fixed",
  pointerEvents: "none",
  zIndex: "9999",
  transform: "translate(-50%, -50%)",
})

// Move it with the mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px"
  cursor.style.top = e.clientY + "px"
})

// ------ END CUSTOM CURSOR ------