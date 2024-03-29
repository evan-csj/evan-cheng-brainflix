import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import relativeTime from 'dayjs/plugin/relativeTime';

const thresholds = [
	{ l: 's', r: 1 },
	{ l: 'ss', r: 59, d: 'second' },
	{ l: 'm', r: 1 },
	{ l: 'mm', r: 59, d: 'minute' },
	{ l: 'h', r: 1 },
	{ l: 'hh', r: 23, d: 'hour' },
	{ l: 'd', r: 1 },
	{ l: 'dd', r: 29, d: 'day' },
	{ l: 'M', r: 1 },
	{ l: 'MM', r: 11, d: 'month' },
	{ l: 'y', r: 1 },
	{ l: 'yy', d: 'year' },
];

const config = {
	thresholds: thresholds,
};

dayjs.extend(relativeTime, config);
dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
	relativeTime: {
		future: 'in %s',
		past: '%s ago',
		s: 'a second',
		ss: '%d seconds',
		m: 'a minute',
		mm: '%d minutes',
		h: 'an hour',
		hh: '%d hours',
		d: 'a day',
		dd: '%d days',
		M: 'a month',
		MM: '%d months',
		y: 'a year',
		yy: '%d years',
	},
});

const dynamicDate = timestamp => {
	const time = dayjs(timestamp);
	const diff = dayjs().diff(time, 'month', true);
	if (diff <= 0) {
		return '0 second ago';
	} else if (diff <= 12) {
		return time.fromNow();
	} else {
		return time.format('MM/DD/YYYY');
	}
};

export default dynamicDate;
