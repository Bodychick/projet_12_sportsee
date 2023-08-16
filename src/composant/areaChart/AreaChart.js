import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



class MyAreaChart extends PureComponent {

  render() {
    const { data } = this.props;
    
    return (
      <ResponsiveContainer width={400} height={400} aspect={1.5} >
        <AreaChart
          width={400}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sessionLength" stroke="#FFFFFF" fill="red" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default MyAreaChart;