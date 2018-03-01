import React from 'react';

import HighLightOne from '../HighLightOne/HighLightOne'
import HighLightTwo from '../HighLightTwo/HighLightTwo'
import HighLightThree from '../HighLightThree/HighLightThree'

const SlideThree = props => (
	<div className="MainContent--header sldr slideThree">
        <div className="Layout-width">
     		<div className="MainContent--header---wrp">
	    		<div className="MainContent--title">
	        		<span>Culture</span>
	        		<h1>How Can Your Company Work to Eliminate the Gender Pension Gap TO MOVE FORWARD</h1>
	        		<button className="btn-w">Read now</button>
	    		</div>
			    <div className="MainContent--highlight">
			        <HighLightOne slideOne={props.slideOne}/>
			        <HighLightTwo slideTwo={props.slideTwo}/>
			        <HighLightThree active slideThree={props.slideThree}/>
			    </div>
			</div>      
        </div>
    </div>
)

export default SlideThree