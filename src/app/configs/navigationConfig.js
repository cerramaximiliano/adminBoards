import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);
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
				id: 'apps.academy',
				title: 'Academy',
				type: 'item',
				icon: 'heroicons-outline:academic-cap',
				url: '/apps/academy',
				translate: 'ACADEMY'
			},
			{
				id: 'apps.calendar',
				title: 'Calendar',
				subtitle: '3 upcoming events',
				type: 'item',
				icon: 'heroicons-outline:calendar',
				url: '/apps/calendar',
				translate: 'CALENDAR'
			},
			{
				id: 'apps.messenger',
				title: 'Messenger',
				type: 'item',
				icon: 'heroicons-outline:chat-alt',
				url: '/apps/messenger',
				translate: 'MESSENGER'
			},
			{
				id: 'apps.contacts',
				title: 'Contacts',
				type: 'item',
				icon: 'heroicons-outline:user-group',
				url: '/apps/contacts',
				translate: 'CONTACTS'
			},
			{
				id: 'apps.ecommerce',
				title: 'ECommerce',
				type: 'collapse',
				icon: 'heroicons-outline:shopping-cart',
				translate: 'ECOMMERCE',
				children: [
					{
						id: 'e-commerce-products',
						title: 'Products',
						type: 'item',
						url: 'apps/e-commerce/products',
						end: true
					},
					{
						id: 'e-commerce-product-detail',
						title: 'Product Detail',
						type: 'item',
						url: 'apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print'
					},
					{
						id: 'e-commerce-new-product',
						title: 'New Product',
						type: 'item',
						url: 'apps/e-commerce/products/new'
					},
					{
						id: 'e-commerce-orders',
						title: 'Orders',
						type: 'item',
						url: 'apps/e-commerce/orders',
						end: true
					},
					{
						id: 'e-commerce-order-detail',
						title: 'Order Detail',
						type: 'item',
						url: 'apps/e-commerce/orders/1'
					}
				]
			},
			{
				id: 'apps.file-manager',
				title: 'File Manager',
				type: 'item',
				icon: 'heroicons-outline:cloud',
				url: '/apps/file-manager',
				end: true,
				translate: 'FILE_MANAGER'
			},
			{
				id: 'apps.help-center',
				title: 'Help Center',
				type: 'collapse',
				icon: 'heroicons-outline:support',
				url: '/apps/help-center',
				children: [
					{
						id: 'apps.help-center.home',
						title: 'Home',
						type: 'item',
						url: '/apps/help-center',
						end: true
					},
					{
						id: 'apps.help-center.faqs',
						title: 'FAQs',
						type: 'item',
						url: '/apps/help-center/faqs'
					},
					{
						id: 'apps.help-center.guides',
						title: 'Guides',
						type: 'item',
						url: '/apps/help-center/guides'
					},
					{
						id: 'apps.help-center.support',
						title: 'Support',
						type: 'item',
						url: '/apps/help-center/support'
					}
				]
			},
			{
				id: 'apps.mailbox',
				title: 'Mailbox',
				type: 'item',
				icon: 'heroicons-outline:mail',
				url: '/apps/mailbox',
				translate: 'MAIL',
				badge: {
					title: '27',
					classes: 'px-8 bg-pink-600 text-white rounded-full'
				}
			},
			{
				id: 'apps.notes',
				title: 'Notes',
				type: 'item',
				icon: 'heroicons-outline:pencil-alt',
				url: '/apps/notes',
				translate: 'NOTES'
			},
			{
				id: 'apps.scrumboard',
				title: 'Scrumboard',
				type: 'item',
				icon: 'heroicons-outline:view-boards',
				url: '/apps/scrumboard',
				translate: 'SCRUMBOARD'
			},
			{
				id: 'apps.tasks',
				title: 'Tasks',
				subtitle: '12 remaining tasks',
				type: 'item',
				icon: 'heroicons-outline:check-circle',
				url: '/apps/tasks',
				translate: 'TASKS'
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
	{
		id: 'example-component',
		title: 'Example',
		translate: 'EXAMPLE',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'example'
	}
];
export default navigationConfig;
