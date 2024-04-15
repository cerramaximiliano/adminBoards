import GlobalStyles from '@mui/material/GlobalStyles';
import OrdersHeader from './OrdersHeader';
import OrdersTable from './OrdersTable';
import { useAppSelector } from 'app/store/hooks';
import { selectUser } from 'src/app/auth/user/store/userSlice';
/**
 * The orders page.
 */
function Orders() {
	const { url } = useAppSelector(selectUser);
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
				<OrdersHeader title={url ? 'Last BTC Data' : 'Orders' } />
				<OrdersTable />
			</div>
		</>
	);
}

export default Orders;
