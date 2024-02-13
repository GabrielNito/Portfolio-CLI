const Intro = () => {
  const gabrielnito = `
        ____       _          _      _   _   _ _ _
       / ___| __ _| |__  _ __(_) ___| | | \\ | (_) |_ ___
      | |  _ / _' | '_ \\| '__| |/ _ \\ | |  \\| | | __/ _ \\
      | |_| | (_| | |_) | |  | |  __/ | | |\\  | | || (_) |
       \\____|\\__,_|_.__/|_|  |_|\\___|_| |_| \\_|_|\\__\\___/
  `;

  const help = `
      Welcome to my portfolio👋!
      Type "help" to see all available commands
  `;
  return (
    <>
      <div className="terminal_input">
        <p>~/GabrielNito/portfolio</p>
        <pre> - </pre>
        <p>(main)</p>
        <pre> - </pre>
        <pre>❱ </pre>
        <p>cat introduction.txt</p>
      </div>
      <pre id="gabrielnito">{gabrielnito}</pre>
      <pre>{help}</pre>
    </>
  );
};

export default Intro;
