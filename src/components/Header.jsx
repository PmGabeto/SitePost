import style from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";
export function Header() {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      {/* dentro do react, className é a propriedade que definine a classe que */}
      {/* puxa o import do css.modules. */}
      <h1>Ignite Feed</h1>
    </header>
  );
}
