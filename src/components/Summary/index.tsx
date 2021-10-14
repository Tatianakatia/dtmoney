import { Container } from "./styles";
import  incomeImg  from "../../assets/income.svg";
import  outcomeImg  from "../../assets/outcome.svg";
import  totalImg  from "../../assets/total.svg";

export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <p>In</p>
          <img src={incomeImg} alt="Income"></img>
        </header>
        <strong>€ 1000</strong>
      </div>
      <div>
        <header>
          <p>Out</p>
          <img src={outcomeImg} alt="Outcome"></img>
        </header>
        <strong>-€ 500</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"></img>
        </header>
        <strong>€ 500</strong>
      </div>
    </Container>
  )
}