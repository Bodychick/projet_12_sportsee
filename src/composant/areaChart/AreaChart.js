import React from "react";
import styled from "styled-components";
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from 'recharts';


export default function ChartLine({data}) {

	return (
    <div style={{ width: '300px', height: '300px', backgroundColor: 'red', borderRadius:'20px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'30px'}} >
      <CustomLine>
        <div className="title">
          Durée moyenne des sessions
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ bottom: 10 }} >
            <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF"
              strokeWidth={2.5} dot={false}
            />

            <XAxis dataKey="sessionLength" />

            <Tooltip cursor={false}
              wrapperStyle={{ outline: "none", fontWeight: 600 }}
              labelFormatter={value => `${value} min`}
            />

          </LineChart>
        </ResponsiveContainer>
        <div className="legend">
          <p>L</p>
          <p>M</p>
          <p>M</p>
          <p>J</p>
          <p>V</p>
          <p>S</p>
          <p>D</p>
        </div>
      </CustomLine>
    </div>
	)
}


const CustomLine = styled.div`
		display:flex;
		flex-direction: column;
		position:relative;
		background: red; 
		border-radius: 5px;
		
		height: 263px;
		min-width: 240px;
		opacity: 0.9;
		font-size: 12px; 



		.title {
			color: white;
			font-weight: 600;
			padding-top: 30px;
			padding-left: 30px;
			font-size: 15px;
			max-width: 200px;
			line-height: 24px;
		}

	
		.legend { 
      color:white;
			display: flex;
			padding-bottom: 25px;
			justify-content: space-between;	
		}


		.recharts-tooltip-item-list,.xAxis {
			display: none;
		}
`; 