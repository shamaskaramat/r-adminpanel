import { Link } from 'react-router-dom'
import './Product.css'
import Charts from '../../Components/Charts/Charts'
import { productData } from '../../Dumydata'
import { Publish } from '@material-ui/icons'


export const Product = () => {
    return (
        <>
            <div className='product'>
                <div className='productTitleContainer'>
                    <h1 className='productTitle'>Product</h1>
                    <Link to='/newproduct'>
                        <button className='productAddButton'>Create</button>
                    </Link>
                </div>
                <div className='productTop'>
                    <div className='productTopLeft'>
                        <Charts data={ productData } dataKey="Sales" title="Sales Performance"/>             
                    </div>
                    <div className='productTopRight'>
                        <div className='productInfoTop'>
                            <img className='productInfoImg' src="https://images.pexels.com/photos/9741343/pexels-photo-9741343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            <span className='productName'>Apple Airpods</span>
                        </div>
                        <div className='productInfoBottom'>
                            <div className='productInfoItem'>
                                <span className='productInfoKey'>id:</span>
                                <span className='productInfoValue'>123</span>
                            </div>
                            <div className='productInfoItem'>
                                <span className='productInfoKey'>sales:</span>
                                <span className='productInfoValue'>3123</span>
                            </div>
                            <div className='productInfoItem'>
                                <span className='productInfoKey'>Active:</span>
                                <span className='productInfoValue'>Yes</span>
                            </div>
                            <div className='productInfoItem'>
                                <span className='productInfoKey'>In Stock:</span>
                                <span className='productInfoValue'>No</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='productBottom'>
                    <form className='productForm'>
                    <div className='fromProductLeft'>
                        <label>Product Name</label>
                        <input type="text" placeholder='Apple Airpods'/>
                        <label>In Stock</label>
                        <select name='instock' id="idstock">
                         <option value="yes">Yes</option>
                         <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name='active' id="active">
                         <option value="yes">Yes</option>
                         <option value="no">No</option>
                        </select>
                    </div>
                    <div className='formProductRight'>
                        <div className='productUpload'>
                            <img className='productUploading' src="https://images.pexels.com/photos/9741343/pexels-photo-9741343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id ="file" style={{display:"none"}}/>
                        </div>
                        <button className='productButton'>Update</button>
                    </div>
                    </form>
                </div>
            </div>

        </>
    )
}
