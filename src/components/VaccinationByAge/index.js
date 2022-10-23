import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeData} = props

  console.log(vaccinationByAgeData)

  return (
    <div className="graph-container">
      <h1 className="graph-heading">Vaccination by age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="40%"
          data={vaccinationByAgeData}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill=" #a3df9f" />
          <Cell name="Above 60" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
