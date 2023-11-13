import { convertToInternationalCurrencySystem, convertWordToInitials } from "../../utils/index";

describe("Utility functions work as expected", () => {
	test("Converts currency to international format", () => {
		expect(convertToInternationalCurrencySystem(50000)).toBe("50K");
		expect(convertToInternationalCurrencySystem(1750)).toBe("1.75K");
		expect(convertToInternationalCurrencySystem(20200000)).toBe("20.2M");
	});

	test("Generate initials from user avatar", () => {
		expect(convertWordToInitials("Mycovergenius")).toBe("Mg");
		expect(convertWordToInitials("Cowrywise")).toBe("Cw");
		expect(convertWordToInitials("Fincra")).toBe("Fc");
		expect(convertWordToInitials("Kuda")).toBe("Kd");
	});
});
