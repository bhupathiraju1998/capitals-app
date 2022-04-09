import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].country}

  changeCapital = event => {
    const capital = event.target.value
    const cherry = countryAndCapitalsList.find(each => each.id === capital)
    this.setState({capital: cherry.country})
  }

  render() {
    const {capital} = this.state
    return (
      <div className="bg-container">
        <div className="capital-container">
          <h1>Countries and capitals</h1>
          <div className="select-component">
            <select onChange={this.changeCapital} value={capital.id}>
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id} key={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p>{capital}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
