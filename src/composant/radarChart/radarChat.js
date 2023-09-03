import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default function MyRadarChart({data}){

        console.log(data);

        const formatKind = (kind) => {
            return data.kind[kind];
          };

        const polarGrid = false;

        if (!data) {
          // Gérez le cas où data est null ou non défini, par exemple, en affichant un message d'erreur ou en rendant un composant vide.
          return <div>Données non disponibles</div>;
        }
        
      return (
        <div style={{ width: '28%', height: '300px', backgroundColor: '#282D30', borderRadius:'20px', display: 'flex',padding:"20px", justifyContent: 'center', alignItems: 'center'}} >
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data.data}>
                    <PolarGrid radialLines={polarGrid}/>
                    <PolarAngleAxis dataKey="kind" tickFormatter={formatKind} fontSize={13}/>
                    <Radar name="performance" dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
      );
  }