export default function courses() {
    const parent = document.querySelector("#terminal_content")

    const courses = `
    Maratona Programacao    <a href="/Maratona de Programacao - Even3.pdf" target="_blank">[PDF]</a>
    `

    const pre = document.createElement("pre")
    pre.innerHTML = courses

    parent.appendChild(pre)
}
