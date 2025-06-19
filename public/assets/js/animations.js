// Intersection Observer for fade-in animations
function initScrollAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			}
		});
	}, observerOptions);

	// Observe all sections for animations
	document.querySelectorAll("section, .project-card").forEach((el) => {
		el.classList.add("fade-in-up");
		observer.observe(el);
	});
}

// Enhanced smooth scrolling for navigation links
function initSmoothScrolling() {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});

				// Update URL without jumping
				history.pushState(null, null, this.getAttribute("href"));
			}
		});
	});
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
	initScrollAnimations();
	initSmoothScrolling();
});

// Re-initialize on navigation (for SPAs)
document.addEventListener("astro:page-load", () => {
	initScrollAnimations();
	initSmoothScrolling();
});
