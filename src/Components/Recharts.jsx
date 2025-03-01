
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

function reCharts() {

   const prices= [
        {"id":1,"name":"Basic Plan","price":30,"duration":"1 Month","features":["Access to gym equipment","Locker facility","Free water bottle","Open 8 AM - 8 PM"],"availability":"All days","discount":0,"rating":4.0,"recommended":false},
        {"id":2,"name":"Standard Plan","price":80,"duration":"3 Months","features":["Access to gym equipment","Locker facility","1 Personal training session","Access to group fitness classes","Free gym t-shirt"],"availability":"All days except Sunday","discount":5,"rating":4.3,"recommended":true},
        {"id":3,"name":"Premium Plan","price":150,"duration":"6 Months","features":["Access to all equipment","Unlimited group classes","Locker and sauna facility","Dedicated personal trainer","Free diet plan"],"availability":"24/7","discount":10,"rating":4.7,"recommended":true},
        {"id":4,"name":"Annual Plan","price":250,"duration":"12 Months","features":["Full access","Free diet consultation","Unlimited personal training","Priority class booking","One-time guest pass each month"],"availability":"24/7","discount":15,"rating":4.9,"recommended":true},
        {"id":5,"name":"Student Plan","price":20,"duration":"1 Month","features":["Gym access during off-peak hours","Discount on group classes","Free yoga session","Complimentary healthy snacks on weekends"],"availability":"Weekdays only","discount":10,"rating":4.2,"recommended":false}
      ]

      
      
      
      
  return (
    <div className='w-11/12 mx-auto mt-10'>
        
      <LineChart width={500} height={400} data={prices} >
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Line dataKey={'price'} stroke='red'></Line>
        <Line dataKey={'rating'} stroke='green'></Line>
       
      </LineChart>
    </div>
  )
}

reCharts.propTypes = {

}

export default reCharts

