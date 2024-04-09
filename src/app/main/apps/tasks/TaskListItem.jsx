import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IconButton } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import format from 'date-fns/format';
import Typography from '@mui/material/Typography';
import { Draggable } from 'react-beautiful-dnd';
import clsx from 'clsx';
import { useUpdateTasksItemMutation } from './TasksApi';

/**
 * The task list item.
 */

function calculateTimeDifference(nextRunAt) {
    const currentTime = new Date();
    const differenceInMilliseconds = new Date(nextRunAt) - currentTime;
    const differenceInMinutes = Math.max(0, Math.floor(differenceInMilliseconds / (1000 * 60)));
    return differenceInMinutes;
}

function renderTimeDifference(nextRunAt) {
    const differenceInMinutes = calculateTimeDifference(nextRunAt);
    if (differenceInMinutes > 0) {
        return `Next run in ${differenceInMinutes} minutes`;
    } else if (differenceInMinutes === 0) {
        return "Running now";
    } else {
        return "Unknown";
    }
}

function TaskListItem(props) {
	const { data, index } = props;
	const [updateTask] = useUpdateTasksItemMutation();
	return (
		<Draggable
			draggableId={data.id}
			index={index}
		>
			{(provided, snapshot) => (
				<>
					<ListItem
						className={clsx(snapshot.isDragging ? 'shadow-lg' : 'shadow', 'px-40 py-12 group')}
						sx={{ bgcolor: 'background.paper' }}
						button
						component={NavLinkAdapter}
						to={`/apps/tasks/${data.id}`}
						ref={provided.innerRef}
						{...provided.draggableProps}
					>
						<div
							className="md:hidden absolute flex items-center justify-center inset-y-0 left-0 w-32 cursor-move md:group-hover:flex"
							{...provided.dragHandleProps}
						>
							<FuseSvgIcon
								sx={{ color: 'text.disabled' }}
								size={20}
							>
								heroicons-solid:menu
							</FuseSvgIcon>
						</div>
						<ListItemIcon className="min-w-40 -ml-10 mr-8">
							<IconButton
								sx={{ color: data.completed ? 'secondary.main' : 'text.disabled' }}
								onClick={(ev) => {
									ev.preventDefault();
									ev.stopPropagation();
									updateTask({ ...data, completed: !data.completed });
								}}
							>
								<FuseSvgIcon>heroicons-outline:check-circle</FuseSvgIcon>
							</IconButton>
						</ListItemIcon>
						<ListItemText
							classes={{ root: 'm-0', primary: 'truncate' }}
							primary={data.title}
						/>
						<div className="flex items-center">
							<div>
								{data.priority === 0 && (
									<FuseSvgIcon className="text-green icon-size-16 mx-12">
										heroicons-outline:arrow-narrow-down
									</FuseSvgIcon>
								)}
								{data.priority === 2 && (
									<FuseSvgIcon className="text-red icon-size-16 mx-12">
										heroicons-outline:arrow-narrow-up
									</FuseSvgIcon>
								)}
							</div>

							<Typography
								className="text-12 whitespace-nowrap"
								color="text.secondary"
							>
								{data.dueDate && (
									<span>{format(new Date(data.dueDate), 'LLL dd')}</span>
								)}
								{data.nextRunAt && (
								<span className=''>
									{data.dueDate ? ' ' : ''}
									Next Run At {format(new Date(data.nextRunAt), 'LLL dd HH:mm')}
									{data.nextRunAt && (
										<span className='hidden md:block md:text-red'>
											&nbsp;
											{renderTimeDifference(data.nextRunAt)}
										</span>
									)}
								</span>
							)}
							</Typography>
							
						</div>
					</ListItem>
					<Divider />
				</>
			)}
		</Draggable>
	);
}

export default TaskListItem;
