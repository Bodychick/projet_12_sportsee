import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis,Legend, Tooltip, ResponsiveContainer } from 'recharts';
import "./areaChart.css"


class MyAreaChart extends PureComponent {

  render() {
    const { data } = this.props;
    const formatJour = (day) => {
      const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
      if(day-1<0){
        return daysOfWeek[day];
      }
      return daysOfWeek[day - 1];
    };

    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip-area-chart">
            <p className="label">{`${payload[0].value} min`}</p>
          </div>
        );
      }
  }

    return (
      <div style={{ width: '300px', height: '300px', backgroundColor: 'red', borderRadius:'20px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
        <ResponsiveContainer width="90%" height="90%">
          <AreaChart
            data={data}
            margin="auto"
            borderRadius="20px"
          >
            <XAxis dataKey="day" tickFormatter={formatJour} align="center" verticalAlign="bottom" stroke="white" />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="sessionLength" stroke="#FFFFFF" fill="red" />
            <Legend verticalAlign="top" height={36} wrapperStyle={{ paddingTop: 10, color: 'white' }} />
          </AreaChart>
        </ResponsiveContainer>
    </div>
    );
  }
}

export default MyAreaChart;