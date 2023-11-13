import { shallowMount } from "@vue/test-utils";
import BaseInput from "../../components/base/Input.vue";
import TestComponent from "../../components/TestComponent.vue";

describe("BaseInput", () => {
	let wrapper: ReturnType<typeof BaseInput>;

	beforeEach(() => {
		wrapper = shallowMount(BaseInput, {
			props: {
				modelValue: "Input Content",
				"onUpdate:modelValue": (e) => wrapper.setProps({ modelValue: e }),
			},
			global: {
				components: {
					NuxtIcon: TestComponent,
					BaseButton: TestComponent,
				},
			},
		});
	});

	it("emits input value when changed", async () => {
		await wrapper.find("input").setValue("New Input Content");
		expect(wrapper.props("modelValue")).toBe("New Input Content");
	});
});
