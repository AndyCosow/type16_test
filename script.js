const box = document.querySelector(".box")

console.log("labas")

const data = [
    "#C0392B",
    "#E74C3C",
    "#9B59B6",
    "#2980B9",
    "#1ABC9C",
    "#F1C40F",
    "#BDC3C7",
    "#34495E",
    "#0D1282",
    "#557A46",
    "#D4E2D4",
    "#FF52A2",
    "#35A29F",
    "#A78295",
    "#A2FF86",
    "#2B2730"
]

let selected = []
let selectedDivs = []
let defence = false

let colors = [...data, ...data]
colors = colors.sort(() => Math.random() - 0.5)

for (let i = 0; i < 32; i++) {
    box.innerHTML += `<div color="${colors[i]}"></div>`
}

const cells = document.querySelectorAll(".box > div")

cells.forEach(x => {
    x.onclick = e => {
        if(defence) return
        if(e.target.className === "open") return

        let color = e.target.attributes[0].value
        e.target.style.backgroundColor = color

        e.target.className = "open"

        if(selected.length === 0) {
            selected[0] = color
            return selectedDivs.push(e.target)
        }

        if(selected.length === 1) {
            selected[1] = color
            defence = true
            selectedDivs.push(e.target)
            closeOrSaveCells()
        }

        console.log(selected)

    }
})

function closeOrSaveCells() {

    if(selected[0] === selected[1]) {
        selected = []
        defence = false
        return selectedDivs = []
    }

    if(selected[0] !== selected[1]) {
        setTimeout(() => {
            selected = []
            defence = false
            selectedDivs[0].style.backgroundColor = 'white'
            selectedDivs[1].style.backgroundColor = 'white'
            selectedDivs[0].className = ""
            selectedDivs[1].className = ""
            selectedDivs = []
        }, 1000)
    }

}