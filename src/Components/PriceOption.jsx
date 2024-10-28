
import PropTypes from 'prop-types'
import Feature from './Feature';

function PriceOption({option}) {
    const {name , price,features} = option;
  return (
    <div className='bg-green-400  min-h-[400px] rounded-2xl p-6 mt-5 flex flex-col text-white'>
      <h2 className='text-center font-bold'>
        <span className='text-5xl mt-2'>{price}</span>
        <span className='text-2xl'>/month</span>
      </h2>
      <h4 className='text-3xl mt-2 text-center font-bold'>{name}</h4>
    <div className='mt-3 flex-grow'>
         {
            features.map((feature) => <Feature key={feature.id} feature={feature}></Feature>)
        }
</div>


       <div className='text-center'>
       <button className='mt-10 bg-yellow-300 px-20  py-2 text-gray-500 font-bold rounded-3xl'>Buy Now</button>
        </div>  



    </div>
  )
}

PriceOption.propTypes = {
 option:PropTypes.object
}

export default PriceOption

