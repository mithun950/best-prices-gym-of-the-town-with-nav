
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import PriceOption from './PriceOption'

function PriceOptions() {

   
      const [priceOptions,setPriceOptions] = useState([])

      useEffect(() => {
        fetch('Data.json')
        .then(res => res.json())
        .then((data) => setPriceOptions(data))
      },[])
  return (
    <div className=''>
      <h2 className='text-4xl text-center'>Best Prices of the Town</h2>
      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center'>
      {
        priceOptions.map(option => <PriceOption key={Option.id} option={option}></PriceOption>)
      }
      </div>
    </div>
  )
}

PriceOptions.propTypes = {

}

export default PriceOptions

