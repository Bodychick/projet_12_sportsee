import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default class MyRadarChart extends PureComponent {

    render() {
        const { data } = this.props;
        console.log(data);

        const formatKind = (kind) => {
            return data.kind[kind];
          };

      return (
        <div style={{ width: '300px', height: '300px', backgroundColor: '#282D30', borderRadius:'20px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'30px'}} >
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" tickFormatter={formatKind} fontSize={13}/>
                    <Radar name="Mike" dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
      );
    }
  }