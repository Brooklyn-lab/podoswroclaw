const contactForm = document.querySelector("#contact-form")
const currentUrl = window.location.pathname

// Завантажуємо переклади
const translations = {
  pl: {
    name: "Imię i nazwisko musi zawierać od 3 do 20 liter (bez znaków specjalnych).",
    email: "Wprowadź poprawny adres e-mail.",
    message: "Wiadomość nie może zawierać więcej niż 100 znaków.",
    success: "Wiadomość została wysłana pomyślnie!",
    error: "Wystąpił błąd podczas wysyłania wiadomości.",
    consoleError:
      "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.",
  },
  ua: {
    name: "Ім'я та прізвище має містити від 3 до 20 букв (без спеціальних символів).",
    email: "Введіть дійсну електронну адресу.",
    message: "Повідомлення не може містити більше 100 символів.",
    success: "Повідомлення успішно відправлено!",
    error: "Під час надсилання повідомлення сталася помилка.",
    consoleError:
      "Під час надсилання повідомлення сталася помилка. Спробуйте пізніше.",
  },
}

// Вибираємо потрібну мову
const lang = currentUrl.startsWith("/ua") ? "ua" : "pl"
const t = translations[lang]

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault()

    // Збираємо дані з форми
    const form = event.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    // Масив для збору помилок
    let errors = []

    // Валідація імені
    if (!/^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻа-яА-ЯёЁїЇєЄґҐ\s]{3,20}$/.test(name)) {
      errors.push(t.name)
    }

    // Валідація електронної пошти
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push(t.email)
    }

    // Валідація повідомлення
    if (message.length > 100) {
      errors.push(t.message)
    }

    // Якщо є помилки, показуємо повідомлення і зупиняємо відправку
    if (errors.length > 0) {
      alert(errors.join("\n"))
      return
    }

    // Формуємо дані для відправки
    const formData = new FormData(form)

    // Відправка даних через Web3Forms API
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert(t.success)
          form.reset()
        } else {
          alert(t.error)
        }
      })
      .catch((error) => {
        console.error(t.consoleError, error)
        alert(t.consoleError)
      })
  })
}
