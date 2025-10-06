const ham = document.getElementById(`ham`)
const closeM = document.getElementById(`close`)
const menue = document.getElementById(`menu`)

ham.addEventListener(`click`, () => {
    menue.classList.toggle(`hidden`)
})

closeM.addEventListener(`click`, () => {
    menue.classList.toggle(`hidden`)
})