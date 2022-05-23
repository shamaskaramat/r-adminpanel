import './WidgetsLg.css'

const WidgetLg = () => {

  const Button =({type})=>{
    return <button className={'widgetlgButton ' + type}>{type}</button>
  }
  return (
    <>
      <div className='widgetlg'>
        <h3 className='widgetlgTitle'>Latest Transactions</h3>
        <table className='widgetlgTable'>
          <tr className='widgetlgTr'>
            <th className='widgetlgTh'>Customer</th>
            <th className='widgetlgTh'>Date</th>
            <th className='widgetlgTh'>Amount</th>
            <th className='widgetlgTh'>Status</th>
          </tr>
          <tr className='widgetlgTr'>
            <td className='widgetlgUser'>
              <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='widgetlgImg' />
              <span className='widgetlgName'>Alexa David</span>
            </td>
            <td className='widgetlgDate'>20 feb 2022</td>
            <td className='widgetlgAmount'>$135.00</td>
            <td className='widgetlgStatus'><Button type="Approved"/></td>
          </tr>
          <tr className='widgetlgTr'>
            <td className='widgetlgUser'>
              <img src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='widgetlgImg' />
              <span className='widgetlgName'>Alexa David</span>
            </td>
            <td className='widgetlgDate'>20 feb 2022</td>
            <td className='widgetlgAmount'>$135.00</td>
            <td className='widgetlgStatus'><Button type="Declined" /></td>
          </tr>
          <tr className='widgetlgTr'>
            <td className='widgetlgUser'>
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='widgetlgImg' />
              <span className='widgetlgName'>Alexa David</span>
            </td>
            <td className='widgetlgDate'>20 feb 2022</td>
            <td className='widgetlgAmount'>$135.00</td>
            <td className='widgetlgStatus'><Button type="Pending"/></td>
          </tr>
          <tr className='widgetlgTr'>
            <td className='widgetlgUser'>
              <img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='widgetlgImg' />
              <span className='widgetlgName'>Alexa David</span>
            </td>
            <td className='widgetlgDate'>20 feb 2022</td>
            <td className='widgetlgAmount'>$135.00</td>
            <td className='widgetlgStatus'><Button type="Approved"/></td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default WidgetLg