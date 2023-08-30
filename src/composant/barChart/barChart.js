import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './barChart.css'

function CustomTick(props) {
  const { x, y, payload } = props;

  // Convertir la date en un objet Date
  const date = new Date(payload.value);

  // Obtenir le jour
  const day = date.getDate();

  return <text x={x} y={y} dy={16} textAnchor="middle" style={{color:'gray', fontSize:"10px"}} >{day}</text>;
}

class MyBarChart extends PureComponent {
  render() {
    const { data } = this.props;

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${payload[0].value}kg`}</p>
              <p className="label">{`${payload[1].value}Kcal`}</p>
            </div>
          );
        }
    }
    
    return (
      <div style={{ width: '80%', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', backgroundColor:"#F4F6F6",padding:"20px",marginBottom:"10px"}}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="2 2" horizontal={true}
              vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={<CustomTick />}/>
            <YAxis orientation="right" axisLine={false} tickLine={false} />

            <Tooltip
              offset={40}
              wrapperStyle={{ outline: "none", fontWeight: 600 }}
              content={<CustomTooltip />}
            />
            <Legend 
            height={"40px"}
            align="right" 
            verticalAlign="top"
            margin={{bottom:"20px"}}
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
            <Bar dataKey="kilogram" name="kg" fill="black" radius={[10, 10, 0, 0]}
              barSize={10} />
            <Bar dataKey="calories" name="kCal" fill="red" radius={[10, 10, 0, 0]}
              barSize={10} />
          </BarChart>
			  </ResponsiveContainer>
      </div>
    );
  }
}

export default MyBarChart;
