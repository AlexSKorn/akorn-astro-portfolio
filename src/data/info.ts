export const info = {
	baseUrl: "https://akorn.netlify.app/",
	name: "Alex Korn",
	jobDescription: "Backend Engineer",
	about: `I bridge the gap between technical excellence and business outcomes. With 8+ years spanning consulting and product engineering, I've partnered with executives and stakeholders to translate complex business needs into scalable solutions—while leading technical teams at Okta, Slalom, and Discover. Skilled in TypeScript/JavaScript, Go, React, AWS, Azure, Docker, and Kubernetes, I thrive in collaborative environments where I can drive both technical innovation and business impact.
  `,

	experience: [
		{
			name: "Okta - Senior Software Engineer (Auth0 Extensibility)",
			location: "San Francisco, CA (remote)",
			startDate: "August 2024",
			endDate: "Current",
			description: [
				"-  Collaborate with product managers and stakeholders to prioritize features that deliver maximum customer value while ensuring platform reliability",
				"-  Enhanced platform performance by 40% under peak load of 5,000+ RPS by implementing optimized caching strategy, maintaining P99 latencies below 300ms",
				"-  Engineered and maintained extensibility infrastructure, empowering thousands of developers to run custom code in their authentication and authorization flows",
				"-  Drove a 50-80% reduction in CI/CD build and test times by re-architecting the pipeline with parallelized jobs and improved caching",
				"-  Led efforts to modernize and implement AI solutions, boosting developer productivity and enhancing platform documentation",
				"-  Reduced Kubernetes cluster startup time from 2m 45s to 1m 30s by parallelizing pod initialization and optimizing resource allocation",
			],
			skills: [
				"Go",
				"Typescript",
				"NodeJs",
				"React",
				"Kubernetes",
				"Docker",
				"AWS",
				"Azure",
				"Terraform",
				"Redis",
				"PostgreSQL",
				"MongoDB",
				"Snowflake",
				"DataDog",
				"Jenkins",
				"ArgoCD",
				"GitHub Actions",
			],
		},
		{
			name: "Slalom - Senior Software Engineering Consultant",
			location: "Austin, TX (remote)",
			startDate: "March 2022",
			endDate: "August 2024",
			description: [
				"-  Partnered with sales and leadership across multiple client engagements to conduct discovery sessions, understand business requirements, and architect tailored solutions that addressed client needs",
				"-  Served as technical advisor to enterprise clients, presenting solutions to executive stakeholders and guiding technology strategy decisions",
				"-  Led technical initiatives as a lead engineer, collaborating with cross-functional teams to translate business needs into scalable, secure systems",
				"-  Developed secure, high-traffic GraphQL, REST, and gRPC APIs supporting millions of users and billions of daily requests",
				"-  Mentored and coached junior engineers to help them grow and develop their technical skills",
				"-  Built scalable, real-time data pipelines to support large-scale data processing for AI/ML and BI applications",
			],
			skills: [
				"Go",
				"TypeScript",
				"C#",
				"Python",
				"Django",
				"Nodejs",
				".NET",
				"React",
				"AWS",
				"Azure",
				"GraphQL",
				"PostgreSQL",
				"MongoDB",
				"Snowflake",
				"Cassandra",
				"Elasticsearch",
				"Docker",
				"Kubernetes",
				"Terraform",
				"Kafka",
			],
		},
		{
			name: "Discover Financial Services - Senior Software Engineer",
			location: "Austin, TX (remote)",
			startDate: "July 2021",
			endDate: "March 2022",
			description: [
				"-  Built a new financial product from scratch, partnering with product owners to define requirements and successfully delivering beta and MVP versions to market",
				"-  Engineered secure REST APIs supporting millions of daily requests and developed user interface functionality",
				"-  Deployed and managed cloud infrastructure and CI/CD pipelines supporting blue/green deployment",
			],
			skills: [
				"Typescript",
				"Nodejs",
				"React",
				"AWS",
				"Jenkins",
				"PostgreSQL",
				"MongoDB",
			],
		},
		{
			name: "Cox Automotive - Software Engineer II",
			location: "Austin, TX (remote)",
			startDate: "Oct 2020",
			endDate: "July 2021",
			description: [
				"-  Built and launched a customer-facing API portal, enabling external users to sign up, track usage, monitor performance, and optimize their API experience",
				"-  Implemented CI/CD pipelines to reduce deployment time from 15 minutes to 3 minutes",
				"-  Developed internal tools and SDKs to optimize developer experience throughout the organization",
			],
			skills: [
				"Typescript",
				"C#",
				".NET",
				"React",
				"AWS",
				"PostgreSQL",
				"DyanmoDB",
			],
		},
		{
			name: "Beckman Coulter - Software Engineer II",
			location: "Chaska, MN",
			startDate: "Jan 2019",
			endDate: "Oct 2020",
			description: [
				"-  Developed internal full-stack applications to support engineers in the development of research chemicals.",
				"-  Engineered and streamlined application deployment and automated testing to leverage Azure cloud resources.",
				"-  Developed, designed, and tested REST APIs and implemented user interface functionality.",
			],
			skills: [
				"Javascript",
				"C#",
				".NET",
				"Node.js",
				"JQuery",
				"Azure",
				"MySQL",
			],
		},
		{
			name: "Genesis 10 - Java Developer",
			location: "Minneapolis, MN",
			startDate: "Jun 2018",
			endDate: "Dec 2018",
			description: [
				"-  Created REST APIs for internal use, streamlining application development and integration.",
				"-  Modernized Ameriprise’s cloud approach from on-prem to leveraging Docker and Kubernetes on AWS.",
			],
			skills: [
				"Java",
				"Spring",
				"Docker",
				"Kubernetes",
				"JQuery",
				"ElastricSearch",
				"Kibana",
				"Azure",
				"MySQL",
			],
		},
		{
			name: "Beckman Coulter - Software Engineering Intern",
			location: "Chaska, MN",
			startDate: "May 2017",
			endDate: "Aug 2017",
			description: [
				"-  Built and launched a troubleshooting system to help users fix common issues without contacting support.",
			],
			skills: [
				"Javascript",
				"C#",
				".NET",
				"Node.js",
				"JQuery",
				"Azure",
				"MySQL",
			],
		},
	],

	skills: [
		{
			title: "Certifications",
			skills: "AWS Solutions Architect",
		},
	],

	education: [
		{
			name: "Gustavus Adolphus College",
			location: "St. Peter, MN",
			startDate: "2014",
			endDate: "2018",
			description: ["Bachelors in Computer Science"],
		},
		{
			name: "Eden Prairie High School",
			location: "Eden Prairie",
			startDate: "2010",
			endDate: "2014",
			description: ["High School Diploma"],
		},
	],

	socialMedia: {
		github: "https://github.com/AlexSKorn",
		email: "alexkorn1122@gmail.com",
		linkedin: "https://www.linkedin.com/in/alex-korn-97510a11b/",
	},

	projects: [
		{
			title: "Astro Portfolio",
			isFeatured: true,
			thumbnail: "/assets/images/astro-portfolio.png",
			githubUrl: "https://github.com/AlexSKorn/akorn-astro-portfolio",
			liveUrl: "https://akorn.netlify.app",
			description:
				"A modern, high-performance portfolio website showcasing my expertise in frontend development and performance optimization. Built with Astro for optimal loading speeds and SEO.",
			technologies: ["Astro", "TypeScript", "Tailwind CSS", "Netlify"],
			achievements: [
				"100% Lighthouse performance score",
				"Zero JavaScript bundle for instant loading",
			],
		},
		{
			title: "Instagram Recipe Extractor",
			isFeatured: true,
			thumbnail: "/assets/images/instagramimage.png",
			githubUrl: "https://github.com/AlexSKorn/InstagramRecipeExtractor",
			liveUrl: "",
			description:
				"This repository provides a tool for extracting recipes from Instagram Reels and organizing them into structured Markdown files using local AI. Users can paste a public Reel URL to automatically generate ingredients and instructions, which can then be saved and browsed within the application.",
			technologies: ["Python", "React", "Typescript", "Docker", "Ollama"],
			achievements: [
				"Local AI processing for privacy",
				"Automatic recipe structuring from video content",
			],
		},
		{
			title: "Tailscale MCP Server",
			isFeatured: true,
			thumbnail: "/assets/images/tailscale.png",
			githubUrl: "https://github.com/AlexSKorn/TailscaleMCP",
			liveUrl: "",
			description:
				"An MCP server for Tailscale that allows you to interact with your Tailscale network using AI.",
			technologies: ["Python", "FastMCP", "Docker", "Tailscale", "MCP"],
			achievements: [
				"Integrated private networking with AI assistants",
				"Robust, automated local API diagnostics",
			],
		},
	],

	technologies: [
		// Languages
		{ name: "TypeScript", icon: "devicon-typescript-plain" },
		{ name: "Go", icon: "devicon-go-original-wordmark" },
		{ name: "Python", icon: "devicon-python-plain" },

		// Frameworks
		{ name: "React", icon: "devicon-react-original-wordmark" },
		{ name: "Next.js", icon: "devicon-nextjs-original-wordmark" },
		{ name: "Node.js", icon: "devicon-nodejs-plain-wordmark" },
		{ name: "TailwindCSS", icon: "devicon-tailwindcss-plain" },
		{ name: "LangGraph", icon: "si si-langchain" },
		{ name: "Django", icon: "devicon-django-plain" },

		// Databases & Caching
		{ name: "PostgreSQL", icon: "devicon-postgresql-plain-wordmark" },
		{ name: "MongoDB", icon: "devicon-mongodb-plain-wordmark" },
		{ name: "Cassandra", icon: "devicon-cassandra-plain-wordmark" },
		{ name: "Redis", icon: "devicon-redis-plain-wordmark" },
		{ name: "Pinecone", icon: "/assets/icons/pinecone.svg" },
		{ name: "Snowflake", icon: "si si-snowflake" },

		// Artificial Intelligence
		{ name: "GitHub Copilot", icon: "si si-githubcopilot" },
		{ name: "Cursor", icon: "si si-cursor" },
		{ name: "Claude Code", icon: "si si-anthropic" },
		{ name: "Gemini", icon: "si si-googlegemini" },
		{ name: "Hugging Face", icon: "si si-huggingface" },
		{
			name: "Amazon Bedrock",
			icon: "devicon-amazonwebservices-plain-wordmark",
		},

		// Cloud & Infrastructure
		{ name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
		{ name: "Azure", icon: "devicon-azure-plain-wordmark" },
		{ name: "Docker", icon: "devicon-docker-plain-wordmark" },
		{ name: "Kubernetes", icon: "devicon-kubernetes-plain-wordmark" },
		{ name: "Terraform", icon: "devicon-terraform-plain-wordmark" },
		{ name: "Kafka", icon: "devicon-apachekafka-original-wordmark" },

		// Monitoring/CI
		{ name: "DataDog", icon: "devicon-datadog-plain" },
		{ name: "Jenkins", icon: "devicon-jenkins-line" },
		{ name: "Argo CD", icon: "devicon-argocd-plain" },
		{ name: "CloudWatch", icon: "devicon-amazonwebservices-plain-wordmark" },
		{ name: "OpenTelemetry", icon: "devicon-opentelemetry-plain" },
		{ name: "GitHub Actions", icon: "si si-githubactions" },
	],
};
