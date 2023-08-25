import React from 'react'
 
import {   useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'

const Statusadmin = () => {
 
    const dispatch = useDispatch()

    return (
        <div  >
          <div className="btn btn-info"  >
            <button
              
              onClick={() => dispatch({ type: GLOBALTYPES.STATUSADMIN , payload: true })}
            >
              PublicaTion Admin
            </button>
          </div>
        </div>
    )
}

export default Statusadmin
