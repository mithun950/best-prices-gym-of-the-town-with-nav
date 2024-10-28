import { FaCheckCircle } from "react-icons/fa";
import PropTypes from 'prop-types'

function Feature({feature}) {
  return (
    <div className=''>
      <p className='flex items-center gap-2'><FaCheckCircle className="text-yellow-200" />{feature}</p>
    </div>
  )
}

Feature.propTypes = {
 feature:PropTypes.object
}

export default Feature

