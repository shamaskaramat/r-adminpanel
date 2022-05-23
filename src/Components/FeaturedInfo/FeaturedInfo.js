import './Featured.css'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const FeaturedInfo = () => {
  return (
    <>
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTitle'>Revanue</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$ 2150</span>
                    <span className='featuredMoneyRate'>-10.8<ArrowDownwardOutlinedIcon className="featureIconNegative"/></span>
                </div>
                <span className='featuredsub'>Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Sales</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$ 4150</span>
                    <span className='featuredMoneyRate'>-1.8<ArrowDownwardOutlinedIcon className="featureIconNegative"/></span>
                </div>
                <span className='featuredsub'>Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Cost</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$ 2250</span>
                    <span className='featuredMoneyRate'>+12.8<ArrowUpwardOutlinedIcon className="featureIcon"/></span>
                </div>
                <span className='featuredsub'>Compared to last month</span>
            </div>
        </div>
    </>
  )
}

export default FeaturedInfo