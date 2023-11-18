import logo from '../assets/investment-calculator-logo.png'
function Header() {
  return (
    <header id='header'>
        <h1>Investment Calculator</h1>
        <img src={logo} alt="" />
    </header>
  )
}

export default Header