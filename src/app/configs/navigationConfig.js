import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';


/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig = [
	{
		id: 'dashboards',
		title: 'Dashboards',
		subtitle: 'Unique dashboard designs',
		type: 'group',
		icon: 'heroicons-outline:home',
		translate: 'DASHBOARDS',
		children: [
			{
				id: 'dashboards.project',
				title: 'Project',
				type: 'item',
				icon: 'heroicons-outline:clipboard-check',
				url: '/dashboards/project'
			},
			{
				id: 'dashboards.analytics',
				title: 'Analytics',
				type: 'item',
				icon: 'heroicons-outline:chart-pie',
				url: '/dashboards/analytics'
			}
		]
	},
	{
		id: 'apps',
		title: 'Applications',
		subtitle: 'Custom made application designs',
		type: 'group',
		icon: 'heroicons-outline:cube',
		translate: 'APPLICATIONS',
		children: [
			{
				id: 'apps.tasks',
				title: 'Tasks',
				type: 'item',
				icon: 'heroicons-outline:check-circle',
				url: '/apps/tasks',
			},
			{
				id: 'apps.file-manager',
				title: 'File Manager',
				type: 'item',
				icon: 'heroicons-outline:cloud',
				url: '/apps/file-manager',
				end: true,
			},
			{
				id: 'e-commerce-orders',
				title: 'Data List',
				type: 'item',
				icon: 'heroicons-outline:view-boards',
				url: 'apps/e-commerce/orders',
				end: true
			},
			{
				id: 'apps.profile',
				title: 'Profile',
				type: 'item',
				icon: 'heroicons-outline:user-circle',
				url: '/apps/profile'
			},
			{
				id: 'apps.notifications',
				title: 'Notifications',
				type: 'item',
				icon: 'heroicons-outline:bell',
				url: '/apps/notifications'
			}
		]
	},

];
export default navigationConfig;
