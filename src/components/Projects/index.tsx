import { useState, useEffect, useMemo } from "react";
import HybridScrollWrapper from "../HybridScrollWrapper";
import PlaceholderImage from "./PlaceholderImage";

const Projects = () => {
	const projects = useMemo(
		() => [
			{ url: "https://www.sunseeker.com/", name: "Sunseeker" },
			{ url: "http://Grey.co", name: "Grey" },
			{ url: "https://www.fairfieldresidential.com/", name: "Fairfield" },
			{ url: "https://www.sparkyard.com/", name: "Sparkyard" },
			{ url: "https://www.dreambox.com/", name: "Dreambox" },
			{ url: "https://oldivyhouse.co.uk/", name: "The Old Ivy House" },
			{ url: "https://www.brandicarlile.com/", name: "Brandi Carlile" },
			{ url: "https://www.ericchurch.com/", name: "Eric Church" },
			{ url: "https://thesmalls.com/", name: "The Smalls" },
			{ url: "https://spudos.com/", name: "Spudos" },
			{ url: "https://homeathalls.com/", name: "Home at Halls" },
			{ url: "https://hometeam.thomasrhett.com/", name: "Home Team" },
			{ url: "https://bitumio.com/", name: "Bitumio" },
			{ url: "https://app.reel-box.io/christy-schinner", name: "Reel Box" },
		],
		[]
	);

	const [images, setImages] = useState<Record<string, string>>({});
	const [loadedProjects, setLoadedProjects] = useState<Set<string>>(new Set());
	const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

	useEffect(() => {
		const fetchOGImages = async () => {
			for (const project of projects) {
				try {
					const response = await fetch(
						`https://api.microlink.io/?url=${encodeURIComponent(project.url)}`
					);
					const data = await response.json();

					let imageUrl = `https://www.google.com/s2/favicons?sz=256&domain=${
						new URL(project.url).hostname
					}`;

					if (data.data?.image?.url) {
						imageUrl = data.data.image.url;
					}

					setImages((prev) => ({
						...prev,
						[project.url]: imageUrl,
					}));

					setLoadedProjects((prev) => new Set([...prev, project.url]));
				} catch (error) {
					console.log(error);
					const fallbackUrl = `https://www.google.com/s2/favicons?sz=256&domain=${
						new URL(project.url).hostname
					}`;
					setImages((prev) => ({
						...prev,
						[project.url]: fallbackUrl,
					}));
					setLoadedProjects((prev) => new Set([...prev, project.url]));
				}
			}
		};

		fetchOGImages();
	}, [projects]);

	return (
		<div className="px-6 py-20">
			<h2 className="text-[40px] font-semibold mb-12">My Work</h2>
			<HybridScrollWrapper>
				<div className="flex gap-6">
					{projects.map(
						(project) =>
							loadedProjects.has(project.url) && (
								<a
									key={project.url}
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fadeIn w-full h-[300px] md:w-[860px] md:h-[586px] shrink-0"
								>
									<div className="relative w-full h-[300px] md:w-[860px] md:h-[586px] bg-gray-200 overflow-hidden">
										{failedImages.has(project.url) ? (
											<PlaceholderImage name={project.name} />
										) : (
											<>
												<img
													src={images[project.url]}
													alt={project.name}
													className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
													onError={() => {
														setFailedImages(
															(prev) => new Set([...prev, project.url])
														);
													}}
												/>
											</>
										)}
										<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
											<p className="text-white font-semibold text-5xl">
												{project.name}
											</p>
										</div>
									</div>
								</a>
							)
					)}
				</div>
			</HybridScrollWrapper>
		</div>
	);
};

export default Projects;
