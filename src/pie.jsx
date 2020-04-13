import React from 'react'
import { PieChart } from '@opd/g2plot-react'
const config = {
  forceFit: true,
  description: {
    visible: true,
  },
  radius: 0.8,
  data: [

    {
      type: 'present',
      value: '15 days',
    },
    {
      type: 'absent',
      value: 10,
    },

  ],

  angleField: 'value',
  colorField: 'type',
  label: {
    visible: false,
    type: 'inner',
  },
}
export default () => (
  <section>
    <h2>Daily attendence</h2>
    <PieChart {...config} />
    <h3 style={{ color: "red", textAlign: "center", fontFamily: "comic sans ms", fontStyle: "Italic" }}>Total days = 25</h3>
  </section>
)