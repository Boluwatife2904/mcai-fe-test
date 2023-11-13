import { shallowMount } from "@vue/test-utils";
import BaseBadge from "../../components/base/Badge.vue";
import TestComp from "../../components/TestComponent.vue";

describe("BaseBadge Component", () => {
	test("Renders success variant badge with successful text", () => {
		const variant = "success";
		const wrapper = shallowMount(BaseBadge, {
			props: { variant },
			global: {
				components: { BaseDot: TestComp },
			},
		});
		expect(wrapper.classes()).contains("base-badge--success");
		expect(wrapper.text()).toContain("Successful");
	});

	test("Renders pending variant badge with pending text", () => {
		const variant = "pending";
		const wrapper = shallowMount(BaseBadge, {
			props: { variant },
			global: {
				components: { BaseDot: TestComp },
			},
		});
		expect(wrapper.classes()).contains("base-badge--pending");
		expect(wrapper.text()).toContain("Pending");
	});

	test("Renders failed variant badge with failed text", () => {
		const variant = "failed";
		const wrapper = shallowMount(BaseBadge, {
			props: { variant },
			global: {
				components: { BaseDot: TestComp },
			},
		});
		expect(wrapper.classes()).contains("base-badge--failed");
		expect(wrapper.text()).toContain("Failed");
	});
});
