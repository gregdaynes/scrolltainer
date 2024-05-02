window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('html').classList.remove('no-js')

  const observer = new IntersectionObserver(handleIntersect, {
    root: document.querySelector('.content')
  })

  function handleIntersect (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('data-visible', true)
      } else {
        entry.target.setAttribute('data-visible', false)
      }
    })
  }

  [
    document.querySelector('[data-scroll-start]'),
    document.querySelector('[data-scroll-end]')
  ].forEach((entry) => observer.observe(entry))
})
