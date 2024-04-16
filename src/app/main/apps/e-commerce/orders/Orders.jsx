import GlobalStyles from '@mui/material/GlobalStyles';
import OrdersHeader from './OrdersHeader';
import OrdersTable from './OrdersTable';
import { useAppSelector } from 'app/store/hooks';
import { selectUser } from 'src/app/auth/user/store/userSlice';
import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useState } from 'react';

/**
 * The orders page.
 */
function Orders() {
	const { url, tables, urls } = useAppSelector(selectUser);
	const tabs = Object.keys(tables);
	const [currentUrl, setCurrentUrl] = useState( urls[tabs[0]] )
	const handleClick = (tab) => {
		console.log(urls[tab], tab)
		setCurrentUrl(urls[tab])
	}

	return (
		<>
			<GlobalStyles
				styles={() => ({
					'#root': {
						maxHeight: '100vh'
					}
				})}
			/>
			<div className="w-full h-full container flex flex-col">
				<div className='flex flex-col md:flex-row'>
					<OrdersHeader title={url ? 'Last BTC Data' : 'Orders' } />
					<div className='flex w-full md:w-1/2 items-center justify-around'>					
					{
						tabs && tabs.length > 0 
						? tabs.map( (tab, index) => (
							<Button
							key={index}
							onClick={ () =>  handleClick(tab) }
							className="whitespace-nowrap"
							variant="contained"
							color="primary"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:chart-bar</FuseSvgIcon>}
							>
							{tables[tab]}
						</Button>
						) )
						: false

					}


					</div>

				</div>
				<OrdersTable url={url} urlTable={currentUrl}/>
			</div>
		</>
	);
}

export default Orders;
