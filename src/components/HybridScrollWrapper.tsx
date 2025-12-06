import React, { useRef, useEffect, useState } from "react";

interface HybridScrollWrapperProps {
	children: React.ReactNode;
	sectionHeight?: string;
	stickyHeight?: string;
}

const HybridScrollWrapper: React.FC<HybridScrollWrapperProps> = ({
	children,
	sectionHeight,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const stickyRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const [calculatedHeight, setCalculatedHeight] = useState<string | undefined>(
		sectionHeight
	);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		// Just use the sticky element's height
		const calculateHeight = () => {
			if (!stickyRef.current) return;
			const stickyHeight = stickyRef.current.offsetHeight;
			setCalculatedHeight(`${stickyHeight}px`);
		};

		// Wait a bit for content to render
		const timer = setTimeout(calculateHeight, 100);

		// Also recalculate on resize
		window.addEventListener("resize", calculateHeight);

		return () => {
			clearTimeout(timer);
			window.removeEventListener("resize", calculateHeight);
		};
	}, [sectionHeight, children]);

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current || !stickyRef.current || !contentRef.current)
				return;

			const containerRect = containerRef.current.getBoundingClientRect();
			const containerTop = containerRect.top;
			const containerHeight = containerRect.height;
			const viewportHeight = window.innerHeight;

			// Check if component is fully visible in viewport
			const componentFullyInView =
				containerTop >= 0 && containerTop + containerHeight <= viewportHeight;
			setIsInView(componentFullyInView);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleWheel = (e: WheelEvent) => {
			if (!contentRef.current || !isInView) return;

			const container = contentRef.current;
			const canScrollRight =
				container.scrollLeft < container.scrollWidth - container.clientWidth;
			const canScrollLeft = container.scrollLeft > 0;

			// Allow horizontal scroll when component is in view with reduced speed
			if ((e.deltaY > 0 && canScrollRight) || (e.deltaY < 0 && canScrollLeft)) {
				e.preventDefault();
				// Reduce scroll speed by 0.3x for smoother experience
				container.scrollLeft += e.deltaY * 0.3;
			}
		};

		if (isInView) {
			window.addEventListener("wheel", handleWheel, { passive: false });
			return () => window.removeEventListener("wheel", handleWheel);
		}
	}, [isInView]);

	return (
		<div
			ref={containerRef}
			style={{ height: calculatedHeight }}
			className={"relative"}
		>
			<div ref={stickyRef} className="sticky top-0 overflow-hidden">
				<div
					ref={contentRef}
					className="h-full overflow-x-auto overflow-y-hidden"
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default HybridScrollWrapper;
