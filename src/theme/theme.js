const white = "#FFFFFF";
const black = "#0F172A";
const gray = "#F8FAFC";
const accent = "#3B82F6";
const accentLight = "#60A5FA";
const darkAccent = "#1E40AF";

const themeLight = {
	background: gray,
	body: black,
	accent: accent,
	accentLight: accentLight,
	darkAccent: darkAccent,
	secondaryText: "#64748B",
	borderColor: "#E2E8F0",
};

const themeDark = {
	background: black,
	body: white,
	accent: accentLight,
	accentLight: accent,
	darkAccent: darkAccent,
	secondaryText: "#94A3B8",
	borderColor: "#1E293B",
};

const theme = (mode) => (mode === "dark" ? themeDark : themeLight);

export default theme;
