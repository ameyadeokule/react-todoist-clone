import {
	FaChevronDown,
	FaInbox,
	FaRegCalendarAlt,
	FaRegCalendar,
} from 'react-icons/fa'

export const Sidebar = () => {
	return (
		<div className='sidebar' data-testid='sidebar'>
			<ul className='generic__sidebar'>
				<li>
					<span>
						<FaInbox />
					</span>
					<span>Inbox</span>
				</li>
				<li>
					<span>
						<FaRegCalendar />
					</span>
					<span>Today</span>
				</li>
				<li>
					<span>
						<FaRegCalendarAlt />
					</span>
					<span>Next 7 Days</span>
				</li>
			</ul>
			<div className='sidebar__middle'>
				<span>
					<FaChevronDown />
				</span>
				<h2>Projects</h2>
			</div>
			<div className='sidebar__projects'>Projects</div>
			Add Projects component
		</div>
	)
}
