export default function courses() {
    const parent = document.querySelector("#terminal_content")

    const courses = `Under Development...
    `

    const pre = document.createElement("pre")
    pre.innerHTML = courses

    parent.appendChild(pre)
}
