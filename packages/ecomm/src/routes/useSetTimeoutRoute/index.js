import { useState } from 'react';
import UseSetTimeout from '../../hooks/useSetTimeout';

const UseSetTimeoutRoute = () => {
	const [visible, setVisible] = useState(true);
	const hide = () => setVisible(false);
	UseSetTimeout(hide, 5000);

	return (
		<div className='router-body'>
			<h1 className='padding-y-20'>use SetTimeout hook</h1>
			<p className='padding-y-20'>
				{
					visible ? "I'm visible for 5000ms" :
						"You can no longer see this component"
				}
			</p>
		</div>
	)
}

export default UseSetTimeoutRoute;