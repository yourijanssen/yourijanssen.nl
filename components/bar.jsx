import React from 'react';
import {Bar} from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import {useTranslation} from "next-i18next/pages";
import {useDarkMode} from '@/context/DarkModeContext';

// Register the required components
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const backend = (datasetLabel) => ({
	labels: ['PostgreSQL', 'MongoDB', 'MariaDB', 'Mysql', 'Node.js', 'Spring MVC', 'Spring Boot',],
	datasets: [{
		label: datasetLabel,
		data: [4, 5, 12, 20, 20, 13, 5],
		backgroundColor: '#189EDA', // Single color for all bars
		borderColor: '#189EDA',
		borderWidth: 1
	}]
});

const frontend = (datasetLabel) => ({
	labels: ['Stylus', 'Next', 'React', 'Angular', 'Type/Javascript', 'CSS', 'Tailwind', 'Three.js'],
	datasets: [{
		label: datasetLabel,
		data: [4, 5, 19, 20, 20, 19, 5, 5],
		backgroundColor: '#189EDA', // Single color for all bars
		borderColor: '#189EDA',
		borderWidth: 1
	}]
});

const options = {
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
			position: 'top',
			labels: {
				font: {
					size: 14,
				},
			},
		},
	},
	animation: {
		duration: 2000,
		easing: 'easeInOutQuad',
		animateRotate: true,
		animateScale: true,
	},
	scales: {
		x: {
			grid: {
				color: '#1C1C22',
			},
			ticks: {
				font: {
					size: 14,
				},
			},
		},
		y: {
			grid: {
				color: '#E0E0E0',
				lineWidth: 1,
			},
			ticks: {
				font: {
					size: 14,
				},
				beginAtZero: true,
			},
		},
	},
};

const BarExample = () => {
	const {t} = useTranslation('common');
	const {isDarkMode} = useDarkMode();
	const labelColor = isDarkMode ? '#b7c5d4' : '#596575';
	const gridColor = isDarkMode ? '#344354' : '#d6dce1';
	const themedOptions = {
		...options,
		animation: false,
		plugins: {...options.plugins, legend: {...options.plugins.legend, labels: {color: labelColor}}},
		scales: {
			x: {...options.scales.x, grid: {color: gridColor}, ticks: {color: labelColor}},
			y: {...options.scales.y, grid: {color: gridColor}, ticks: {color: labelColor}},
		},
	};

	return <>
		<div style={{maxWidth: '800px'}}>
			<div style={{marginBottom: '20px'}}>
				<h2 className="text-text-light dark:text-text-dark">{t('currentBackendSkills')}</h2>
				<div style={{height: '300px'}}>
					<Bar data={backend(t('proficiency'))} options={themedOptions}/>
				</div>
			</div>
			<div>
				<h2 className="text-text-light dark:text-text-dark">{t('currentFrontendSkills')}</h2>
				<div style={{height: '300px'}}>
					<Bar data={frontend(t('proficiency'))} options={themedOptions}/>
				</div>
			</div>
		</div>
	</>;
};

export default BarExample;
