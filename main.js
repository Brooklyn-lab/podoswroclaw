document.addEventListener("DOMContentLoaded", () => {
  const langLinks = document.querySelectorAll(".lang-switcher__link")

  const currentUrl = window.location.pathname

  langLinks.forEach((link) => {
    const linkHref = link.getAttribute("href")

    if (linkHref === currentUrl) {
      link.classList.add("lang-switcher__link_active")
    } else {
      link.classList.remove("lang-switcher__link_active")
    }
  })

  new Glide(".glide-works", {
    type: "carousel",
    perView: 3.5,
    gap: 12,
    breakpoints: {
      991.98: { perView: 2.5 },
      599.98: { perView: 1.4, gap: 8 },
    },
  }).mount()

  new Glide(".glide-certificates", {
    type: "carousel",
    perView: 4.2,
    breakpoints: {
      991.98: { perView: 2.5 },
      479.98: { perView: 1.4 },
    },
    gap: 16,
  }).mount()

  const burger = document.querySelector(".burger")
  const body = document.querySelector("body")

  burger.addEventListener("click", (event) => {
    event.stopPropagation()
    body.classList.toggle("nav-visible")
  })

  document.addEventListener("click", (event) => {
    const nav = document.querySelector(".nav")
    const body = document.body

    if (!nav.contains(event.target) || event.target.closest(".nav__link")) {
      body.classList.remove("nav-visible")
    }
  })

  const items = document.querySelectorAll(".accordion button")

  function closeAllAccordions() {
    items.forEach((item) => item.setAttribute("aria-expanded", "false"))
  }

  function toggleAccordion(event) {
    const itemToggle = this.getAttribute("aria-expanded")

    closeAllAccordions()

    if (itemToggle === "false") {
      this.setAttribute("aria-expanded", "true")
    }

    event.stopPropagation()
  }

  items.forEach((item) => {
    item.addEventListener("click", toggleAccordion)
  })

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".accordion")) {
      closeAllAccordions()
    }
  })

  items.forEach((item) => item.addEventListener("click", toggleAccordion))

  document.querySelector(".nav").addEventListener("click", function (event) {
    const link = event.target.closest("a.nav__link")
    if (!link) return

    event.preventDefault()

    const targetId = link.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      if (document.body.classList.contains("nav-visible")) {
        document.body.classList.remove("nav-visible")
      }
    }
  })
})

//---------Loader----------
window.onload = function () {
  document.body.classList.add("loaded_hiding")
  window.setTimeout(function () {
    document.body.classList.add("loaded")
    document.body.classList.remove("loaded_hiding")
  }, 500)
}
