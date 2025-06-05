// ------ DISCOVER FOOTER SCROLL ------
setTimeout(() => {
  // Get footer and add hidden class 
  const footerScroll = document.querySelector('#main-page-bottom-1 + .page-layout')
  const isEditMode = window.location.pathname.includes('/edit/')

  // Detect sroll
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // add "show" class when scrolled more than 50%
    if (scrollPercent > 50 || isEditMode) {
      footerScroll.classList.add('show');
    } else {
      footerScroll.classList.remove('show');
    }
  });
}, 2000); // Delay to ensure the footer is loaded
// ------ END DISCOVER FOOTER SCROLL ------