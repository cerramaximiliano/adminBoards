/* eslint-disable react/no-unstable-nested-components */
import { useMemo, useState } from 'react';
import DataTable from 'app/shared-components/data-table/DataTable';
import { ListItemIcon, MenuItem, Paper } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import { useDeleteECommerceOrdersMutation, useGetECommerceOrdersQuery, useGetEcommerceTotalOrdersQuery } from '../ECommerceApi';
import OrdersStatus from '../order/OrdersStatus';

import { format } from 'date-fns';

// Función para generar columnas
export function generateColumns(orders) {
    const customColumns = [];

    // Función recursiva para generar columnas
    const generateNestedColumns = (object, prefix = '') => {
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                const propertyValue = object[key];
                const column = {
                    accessorKey: prefix + key,
                    header: key.charAt(0).toUpperCase() + key.slice(1), // Convertir la primera letra a mayúscula
                };
                // Si la propiedad es 'date', agregar una función Cell para formatear la fecha
                if (key === 'date') {
                    column.Cell = ({ cell }) => {
                        const formattedDate = format(new Date(cell.getValue()), 'dd/MM/yyyy HH:mm');
                        return formattedDate;
                    };
                }
                // Si la propiedad es 'signal', establecer una función accessorFn para mostrar 'BUY' o 'SELL'
				if (key === 'signal') {
					column.accessorFn = (row) => {
						const signalValue = propertyValue;
						if (signalValue !== null && signalValue !== undefined) {
							let resultName = signalValue > 0 ? 'BUY' : signalValue < 0 ? 'SELL' : 'NEUTRAL';
							 return <OrdersStatus name={resultName} />
						} else {
							return null;
						}
					};
				}
                // Si la propiedad es un objeto y no es nula, llamar recursivamente a generateNestedColumns
                if (typeof propertyValue === 'object' && propertyValue !== null) {
                    generateNestedColumns(propertyValue, prefix + key + '.');
                } else {
                    // Si la propiedad no es 'signal' y es un número, formatearlo para mostrar solo dos dígitos
                    if (typeof propertyValue === 'number' && key !== 'signal') {
                        column.Cell = ({ cell }) => {
                            const formattedNumber = Number(cell.getValue()).toFixed(2);
                            return formattedNumber;
                        };
                    }
                    customColumns.push(column);
                }
            }
        }
    };
    
    // Verificar si hay órdenes y si la primera orden no es null
    if (orders && orders.length > 0 && orders[0] !== null) {
        generateNestedColumns(orders[0]);
    }
    return customColumns;
};

function OrdersTable({url, urlTable}) {
	const [pagination, setPagination] = useState({
		pageIndex: 0,
		pageSize: 10,
	});

	let urlBase = ''
	if ( import.meta.env.VITE_MODE === "development" ){
		urlBase = `http://localhost:3030/` 
	}else{
		urlBase = url
	}
	const { data: orders, isLoading } = useGetECommerceOrdersQuery( url ? `${urlBase}${urlTable}?order=-1&limit=100` : `/mock-api/ecommerce/orders` );

	const demoColumns = [
		{
			accessorKey: 'id',
			header: 'Id',
			size: 64
		},
		{
			accessorKey: 'reference',
			header: 'Reference',
			size: 64,
			Cell: ({ row }) => (
				<Typography
					component={Link}
					to={`/apps/e-commerce/orders/${row.original.id}`}
					className="underline"
					color="secondary"
					role="button"
				>
					{row.original.reference}
				</Typography>
			)
		},
		{
			id: 'customer',
			accessorFn: (row) => `${row.customer.firstName} ${row.customer.lastName}`,
			header: 'Customer'
		},
		{
			id: 'total',
			accessorFn: (row) => `$${row.total}`,
			header: 'Total',
			size: 64
		},
		{ id: 'payment', accessorFn: (row) => row.payment.method, header: 'Payment', size: 128 },
		{
			id: 'status',
			accessorFn: (row) => <OrdersStatus name={row.status[0].name} />,
			accessorKey: 'status',
			header: 'Status'
		},
		{
			accessorKey: 'date',
			header: 'Date',
		}
	];

	const [removeOrders] = useDeleteECommerceOrdersMutation();
	const columns = useMemo(() => generateColumns(orders), [orders]); 

	if (isLoading) {
		return <FuseLoading />;
	}

	return (
		<Paper
			className="flex flex-col flex-auto shadow-3 rounded-t-16 overflow-hidden rounded-b-0 w-full h-full"
			elevation={0}
		>
			<DataTable
				initialState={{
					density: 'spacious',
					showColumnFilters: false,
					showGlobalFilter: true,
					columnPinning: {
						left: ['mrt-row-expand', 'mrt-row-select'],
						right: ['mrt-row-actions']
					},
					onPaginationChange: setPagination, //hoist pagination state to your state when it changes internally
					state: { pagination }
				}}
				title={url && 'BTC/USDT Binance 15m'}
				data={orders}
				columns={columns}
				renderRowActionMenuItems={({ closeMenu, row, table }) => [
					<MenuItem
						key={0}
						onClick={() => {
							removeOrders([row.original.id]);
							closeMenu();
							table.resetRowSelection();
						}}
					>
						<ListItemIcon>
							<FuseSvgIcon>heroicons-outline:trash</FuseSvgIcon>
						</ListItemIcon>
						Delete
					</MenuItem>
				]}
				renderTopToolbarCustomActions={({ table }) => {
					const { rowSelection } = table.getState();
					if (Object.keys(rowSelection).length === 0) {
						return null;
					}

					return (
						<Button
							variant="contained"
							size="small"
							onClick={() => {
								const selectedRows = table.getSelectedRowModel().rows;
								removeOrders(selectedRows.map((row) => row.original.id));
								table.resetRowSelection();
							}}
							className="flex shrink min-w-40 ltr:mr-8 rtl:ml-8"
							color="secondary"
						>
							<FuseSvgIcon size={16}>heroicons-outline:trash</FuseSvgIcon>
							<span className="hidden sm:flex mx-8">Delete selected items</span>
						</Button>
					);
				}}
			/>
		</Paper>
	);
}

export default OrdersTable;
