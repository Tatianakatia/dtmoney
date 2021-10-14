import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
useEffect( () => {
  api.get('transactions')
    .then(response => console.log(response.data))
})

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website Development</td>
            <td className="deposit">€12,000</td>
            <td>Development</td>
            <td>27/09/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">-€1,100</td>
            <td>Home</td>
            <td>17/09/2021</td>
          </tr>
          <tr>
            <td>Yoga</td>
            <td className="withdraw">-€200</td>
            <td>Gym</td>
            <td>23/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}