import TerminalInput from "./TerminalInput";

import help from "./commands/help";
import unknown from "./commands/unknown";

import contact from "./commands/contact";
import courses from "./commands/courses";
import skills from "./commands/skills";
import social from "./commands/social";
import whois from "./commands/whois";

function scroll() {
  const parent = document.querySelector("#terminal_content").querySelectorAll("pre")[document.querySelector("#terminal_content").querySelectorAll("pre").length - 1].scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
}

export default function General() {
  window.addEventListener('click', () => {
    document.getElementById("terminal_input_input").select()
  })

  const input = document.getElementById("terminal_input_input")

  let command_input

  input.addEventListener("keydown", (e) => {
    if (e.isComposing || e.key === "ArrowUp") {
      input.value = document.querySelectorAll(".terminal_input")[document.querySelectorAll(".terminal_input").length - 2].lastChild.textContent
    }

    if (e.isComposing || e.key === "Enter") {
      command_input = input.value

      switch (command_input) {
        case "clear":
          const terminal_content = document.getElementById("terminal_content")
          while (terminal_content.firstChild) {
            terminal_content.removeChild(terminal_content.lastChild)
          }
          break
        case "help":
          TerminalInput(command_input)
          help()
          scroll()
          break

        case "whois":
          TerminalInput(command_input)
          whois()
          scroll()
          break

        case "contact":
          TerminalInput(command_input)
          contact()
          scroll()
          break

        case "social":
          TerminalInput(command_input)
          social()
          scroll()
          break

        case "courses":
          TerminalInput(command_input)
          courses()
          scroll()
          break

        case "skills":
          TerminalInput(command_input)
          skills()
          scroll()

          break

        case "reboot":
          TerminalInput(command_input)
          location.reload()
          break

        case "":
          TerminalInput(command_input)
          scroll()
          break

        default:
          TerminalInput(command_input)
          unknown(command_input)
          scroll()
          break
      }
      input.value = ""
    }
  })
}
