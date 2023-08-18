import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './barChart.css'

class MyBarChart extends PureComponent {
  render() {
    const { data } = this.props;

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            console.log(payload)
            console.log(label)
          return (
            <div className="custom-tooltip">
              <p className="label">{`${payload[0].value}kg`}</p>
              <p className="label">{`${payload[1].value}Kcal`}</p>
            </div>
          );
        }
    }
    
    return (
      <div style={{ width: '80%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
      <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <BarChart
          data={data} 
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            align="right" 
            verticalAlign="top"
            payload={[
                {
                  value: 'Poids (kg)',
                  type: 'circle',
                  color: 'black',
                },
                {
                  value: 'Calories brulées (kcal)',
                  type: 'circle',
                  color: 'red',
                },
              ]}
            />
          <Bar dataKey="calories" fill="red" barSize={10} radius={20} />
          <Bar dataKey="kilogram" fill="black" barSize={10} radius={20}/>
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  }
}

export default MyBarChart;
