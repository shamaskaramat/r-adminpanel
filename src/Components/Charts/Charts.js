import './Charts.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Charts = ({UserData,dataKey,title, grid}) => {
    
  return (  
    <>
     <div className="charts">
         <h3 className="chartTitle">{title}</h3>
         <ResponsiveContainer width="100%" aspect={4/1}>
             <LineChart data={UserData}>
             <XAxis dataKey="name" stroke="#0d39ff" strokeDasharray="5 5"/>
             <YAxis/>
             <Line type="monotone" dataKey={dataKey} stroke="#0d39ff"/>
             <Tooltip/>
             {grid && <CartesianGrid stroke='#e3e3e3'/>}
             </LineChart>
         </ResponsiveContainer>
     </div>
    </>
  )
}

export default Charts