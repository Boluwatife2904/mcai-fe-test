<script setup lang="ts">
export interface TableColumn {
	value: string;
	label: string;
	width: string;
}

export interface TableProps {
	columns: TableColumn[];
	tableData: any;
}

const { tableData = [] } = defineProps<TableProps>();
</script>

<template>
	<div class="table">
		<div class="table__body overflow-x-auto no-scrollbar">
			<table>
				<thead>
					<tr>
						<th v-for="column in columns" :key="column.value" class="table__column" :style="{ width: `${column.width}`, minWidth: `${column.width}` }">
							<span class="table__column-header">{{ column.label }}</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<template v-if="!tableData.length">
						<tr><td class="table__cell table__empty" :colspan="columns.length">No data available</td></tr>
					</template>
					<template v-else>
						<tr v-for="row in tableData" :key="row.id" class="table__row">
							<td v-for="column in columns" :key="column.value" class="table__cell">
								<slot :key="column.value" :name="column.value" :value="row[column.value]" :record="row">
									{{ row[column.value] }}
								</slot>
							</td>
						</tr>
					</template>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.table {
	&__column {
		@apply px-[2.4rem] py-[1.3rem];
	}

	&__row {
		@apply bg-white;
		box-shadow: 0px -1px 0px 0px #eaecf0 inset;
	}

	&__cell {
		@apply px-[2.4rem] py-[2.5rem];
	}

	&__empty {
		@apply py-[10rem] text-center text-[1.6rem] font-medium;
	}
}

table {
	@apply w-full table-fixed border-separate border-spacing-0 text-left;

	thead {
		@apply table-header-group bg-gray-25 align-middle;
		box-shadow: 0px -1px 0px 0px #eaecf0 inset;

		th {
			@apply text-[1.2rem] font-medium leading-[1.8rem] text-gray-500;
		}
	}

	tbody {
		@apply table-row-group;

		td {
			@apply text-[1.2rem] leading-[2rem] text-gray-900;
		}
	}

	tr {
		@apply table-row align-middle;
	}
}
</style>
