/* eslint-disable @typescript-eslint/no-unused-vars */
type Variants = "success" | "pending" | "failed" | "purple" | "yellow" | "mcai" | "success-500" | "error-500";

type RequestStatus = "idle" | "pending" | "success" | "error";

interface OverviewData {
	numberOfDistributors: number;
	activeDistributor: number;
	numberOfPolicySold: number;
}

interface FeaturedData {
	gwp: number;
	gwpIncrease: number;
	revenue: number;
	revenueIncrease: number;
	totalClaimPaid: number;
}

interface ClaimGWPData {
	percentageClaim: 70;
	data: { id: string; month: string; value: number }[];
	totalClaimPaid: number;
	totalRevenue: number;
	claimToRevenuePercentage: number;
	claim: number;
	revenue: number;
}

interface Activity {
	id: string;
	activity: string;
	timestamp: string;
	agent: string;
}

interface Distributor {
	id: string;
	name: string;
	timestamp: string;
}

interface PoliciesStatisticsData {
	totalPolicies: number;
	totalActivePolicies: number;
	totalInactivePolicies: number;
	averagePolicyValue: number;
	percentageOfPolicyRenewal: number;
}

interface Sale {
	id: string;
	type: string;
	policy: string;
	customer: string;
	distributor: string;
	date: string;
	status: string;
}

interface DashboardOverview {
	overview: OverviewData;
	featured: FeaturedData;
	claimGWPData: ClaimGWPData;
	distributors: Distributor[];
	policiesStatistics: PoliciesStatisticsData;
	recentSales: Sale[];
}
