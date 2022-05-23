import Charts from '../Components/Charts/Charts';
import FeaturedInfo from '../Components/FeaturedInfo/FeaturedInfo';
import './Home.css';
import {UserData} from "../Dumydata";
import WidgetLg from '../Components/WidgetsLarge/WidgetsLg';
import WidgetSm from '../Components/Widgetsmall/WidgetSm';

const Home = () => {
  return (
    <>
    <div className='home'>
        <FeaturedInfo/>
        <Charts UserData={UserData} title="Sales Analytics" grid dataKey="ActiveUser"/>
        <div className='homeWidgets'>
      <WidgetSm/>
      <WidgetLg/>
    </div>
    </div>
    
    </>
  )
}

export default Home