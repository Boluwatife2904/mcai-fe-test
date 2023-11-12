<script setup lang="ts">
import { BarChart } from "vue-chart-3";
import { Chart, BarController, BarElement, LinearScale, CategoryScale, Tooltip, type ChartOptions, type ChartData } from "chart.js";
Chart.register(BarController, BarElement, LinearScale, CategoryScale, Tooltip);

interface Props {
	isLoading: boolean;
}
defineProps<Props>();

const labels = ["sales", "claim"];

const testData: ChartData<"bar"> = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	datasets: [
		{
			data: [70000, 150000, 300000, 70000, 100000, 230000, 100000, 220000, 240000, 75000, 210000, 110000],
			backgroundColor: "#7A5AF8",
		},
		{
			data: [100000, 120000, 110000, 180000, 200000, 90000, 90000, 50000, 30000, 50000, 90000, 50000],
			backgroundColor: "#F5B203",
		},
	],
};

const chartOptions: ChartOptions = {
	responsive: true,
	plugins: {
		tooltip: {
			backgroundColor: "#101828",
		},
	},
	scales: {
		y: {
			beginAtZero: false,
			display: true,
			suggestedMin: 50000,
			suggestedMax: 1000000,
			grid: { color: "#343744" },
			ticks: {
				padding: 11,
				count: 5,
				color: "#475467",
				font: { family: "Phantom Sans", size: 10 },
				callback: function (value) {
					return convertToInternationalCurrencySystem(Number(value));
				},
			},
			border: {
				dash: [2, 4],
				display: false,
			},
		},
		x: {
			grid: { display: false },
			border: { color: "#7f91a86" },
			ticks: {
				color: "#475467",
				padding: 17,
				align: "start",
				font: { family: "Phantom Sans", size: 10 },
			},
		},
	},
};
</script>

<template>
	<div class="statistics flex flex-col gap-[5.3rem] rounded-[1.2rem] bg-white">
		<div class="flex flex-wrap items-center sm:gap-10">
			<div class="md:pr-[4.4rem]" :class="{ 'md:border-r md:border-r-[#D6DDE0]': !isLoading }">
				<template v-if="isLoading">
					<LoadingShimmer class="mb-3 h-[2.4rem] w-[21.9rem] rounded-[0.4rem]" />
					<LoadingShimmer class="h-[1.6rem] w-[5.3rem] rounded-[0.4rem]" />
				</template>
				<template v-else>
					<h3 class="font-medium leading-[3.4rem] text-gray-800">Total No. of Sales Vs Total Claim</h3>
					<p class="text-[1.4rem] leading-[2.4rem] text-mcai">Last Year</p>
				</template>
			</div>
			<div v-if="!isLoading" class="sm:pl-3rem mx-auto flex items-center justify-center gap-5 md:mx-0 md:flex-col md:items-start md:justify-start md:pl-[7.7rem]">
				<span v-for="label in labels" :key="label" class="flex items-center justify-end gap-[1rem] text-[1.2rem] capitalize leading-[2.8rem] text-[#7F91A8]">
					<BaseDot :variant="label === 'sales' ? 'purple' : 'yellow'" class="h-[1rem] w-[1rem]" />
					{{ label }}
				</span>
			</div>
		</div>
		<div class="relative h-[20.3rem]">
			<LoadingShimmer v-if="isLoading" class="h-full w-full" />
			<BarChart v-else css-classes="h-full" :chart-data="testData" :options="chartOptions" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.statistics {
	@apply pb-[2.9rem] pl-[1.8rem] pr-[4.2rem] pt-[3.8rem];
}
</style>
