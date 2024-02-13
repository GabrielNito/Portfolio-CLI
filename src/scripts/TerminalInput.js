export default function TerminalInput(command_input) {
    const terminal = document.querySelector("#terminal_content")
    const terminal_input = document.createElement("div")
    terminal_input.setAttribute("class", "terminal_input")

    const pwd = document.createElement("p")
    pwd.innerHTML = "~/GabrielNito/portfolio"

    const dash1 = document.createElement("pre")
    dash1.innerHTML = " - "
    const dash2 = document.createElement("pre")
    dash2.innerHTML = " - "

    const branch = document.createElement("p")
    branch.innerHTML = "(main)"

    const arrow = document.createElement("pre")
    arrow.innerHTML = "❱ "

    const command = document.createElement("p")
    command.innerHTML = command_input

    terminal_input.appendChild(pwd)
    terminal_input.appendChild(dash1)
    terminal_input.appendChild(branch)
    terminal_input.appendChild(dash2)
    terminal_input.appendChild(arrow)
    terminal_input.appendChild(command)
    terminal.appendChild(terminal_input)
}