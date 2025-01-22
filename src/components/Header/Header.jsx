import logo from '../../assets/investment-calculator-logo.png';

export function Header() {
  return (
    <header id="header">
      <img
        src={logo}
        alt="A green bag with a golden dollar sign with the piles of coins on the background"
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}
