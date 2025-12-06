import { useState, useEffect } from "react";
import Logo from "./Logo";

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className="px-6 py-5 flex items-center justify-between fixed top-0 z-50"
			style={{
				width: isMobile || !isScrolled ? "100%" : "480px",
				left: isMobile || !isScrolled ? "0" : "50%",
				transform:
					isMobile || !isScrolled ? "translateX(0)" : "translateX(-50%)",
				borderRadius: isMobile || !isScrolled ? "0" : "9999px",
				transition:
					"width 0.7s ease, left 0.7s ease, transform 0.7s ease, border-radius 0.7s ease",
				backgroundColor: isScrolled && !isMobile ? "#faf1f3" : "transparent",
				top: isScrolled && !isMobile ? "20px" : "0px",
				paddingBlock: isScrolled && !isMobile ? "10px" : "20px",
			}}
		>
			<Logo />
			<div className="flex gap-5 text-[18px] font-medium items-center">
				<a
					href="https://docs.google.com/document/d/13_JICexGsVjDYUIjzKCl5jpbA48vcccx-zBTBNXR_aU/edit?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="underline-animation text-[#575555]"
				>
					Résumé
				</a>
				<a
					href="mailto:thankgodegb@gmail.com"
					rel="noopener noreferrer"
					className="px-4 py-2 bg-[#313236] text-white font-medium hover:opacity-80 transition-colors rounded-3xl"
				>
					Say Hi 👋🏽
				</a>
			</div>
		</div>
	);
};

export default Navigation;
