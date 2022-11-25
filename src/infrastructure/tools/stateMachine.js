export default (enumData, request) => ({
	isValidRequest: (currentEnum, nextEnum) => {
		const currentEnumKey = enumData.key(currentEnum);

		if (!currentEnumKey) return false;

		return request[currentEnumKey].some(
			(validNewState) => nextEnum === validNewState
		);
	},
});
