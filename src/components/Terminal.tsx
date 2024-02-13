import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Terminal = ({ children }: Props) => {
  return (
    <>
      <section id="terminal">
        <div id="terminal_content">{children}</div>
        <div className="terminal_input">
          <p>~/GabrielNito/portfolio</p>
          <pre> - </pre>
          <p>(main)</p>
          <pre> - </pre>
          <pre>❱ </pre>
          <input type="text" id="terminal_input_input" autoFocus />
        </div>
      </section>
    </>
  );
};

export default Terminal;
