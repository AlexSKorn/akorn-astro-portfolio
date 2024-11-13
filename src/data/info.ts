export const info = {
	baseUrl: "https://akorn.netlify.app/",
	name: "Alex Korn",
	jobDescription: "Full-Stack Software Engineer",
	about: `Full-stack Software Engineer with 6 years of experience specializing in high-throughput distributed systems, 
		cloud development, and full-stack solutions. Skilled in React, Next.js, TypeScript/JavaScript, Go, C#, AWS, Docker, 
		and Kubernetes, I bring a robust foundation in software engineering principles and a track record of leading technical 
		projects to completion. As a proactive problem-solver, I excel at delivering scalable, reliable solutions and thrive in collaborative, 
		innovative environments, constantly seeking opportunities to enhance my skills and drive impactful results.
  `,

	experience: [
		{
			name: "Okta - Senior Software Engineer",
			location: "San Francisco, CA (remote)",
			startDate: "August 2024",
			endDate: "Current",
			description: [
				"-  Led technical initiatives increasing performance and the security posture of Auth0's extensibility platform",
				"-  Developed and maintained high-traffic extensibility infrastructure supporting millions of developers design custom authentication and authorization flows",
				"-  Optimized CI/CD pipelines reducing build times by 50%-80% and increasing developer productivity",
			],
		},
		{
			name: "Slalom - Senior Software Engineering Consultant",
			location: "Austin, TX (remote)",
			startDate: "March 2022",
			endDate: "August 2024",
			description: [
				"-  Led technical initiatives as a lead engineer, collaborating with stakeholders to deliver effective solutions",
				"-  Developed secure, high-traffic, GraphQL, REST and gRPC, APIs supporting millions of users and billions of daily requests",
				"-  Engineered and managed cloud-based infrastructure ensuring high availability, scalability, and cost optimization.",
				"-  Mentored and coached junior engineers to help them grow and develop their technical skills.",
				"-  Built scalable, real-time data pipelines to support large-scale data processing for AI/ML and BI applications.",
				"-  Instrumented APIs with observability tools, enabling real-time performance monitoring, metrics-driven optimization, and streamlined troubleshooting.",
				"-  Partnered with sales and leadership to conduct discovery, understand client requirements, and architect solutions that addressed client needs.",
			],
		},
		{
			name: "Discover Financial Services - Senior Software Engineer",
			location: "Austin, TX (remote)",
			startDate: "July 2021",
			endDate: "March 2022",
			description: [
				"-  Engineered secure REST APIs supporting millions of daily requests and developed user interface functionality.",
				"-  Deployed and managed cloud infrastructure and CI/CD pipelines supporting blue/green deployment.",
				"-  Built a product from scratch, and successfully delivered and launched beta and MVP versions.",
			],
		},
		{
			name: "Cox Automotive - Software Engineer II",
			location: "Austin, TX (remote)",
			startDate: "Oct 2020",
			endDate: "July 2021",
			description: [
				"-  Developed a customer-facing API portal, enabling users to sign up, track usage, monitor performance, and optimize their API experience.",
				"-  Implemented CI/CD pipelines to reduce deployment time from 15 minutes to 3 minutes.",
				"-  Developed internal tools and SDKs to optimize developer experience throughout the organization.",
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
		},
		{
			name: "Beckman Coulter - Software Engineering Intern",
			location: "Chaska, MN",
			startDate: "May 2017",
			endDate: "Aug 2017",
			description: [
				"-  Built and launched a troubleshooting system to help users fix common issues without contacting support.",
			],
		},
	],

	skills: [
		{
			title: "Certifications",
			skills: "AWS Solutions Architect",
		},
		{
			title: "Languages",
			skills: "Typescript, Go, Python, Java, C#, SQL",
		},
		{
			title: "Frameworks",
			skills:
				"React, Next.js, Astro, Node.js, Flask, Django, .NET, Spring, Pandas, Tailwind",
		},
		{
			title: "Databases",
			skills:
				"Postgres, MySQL, SQL Server, MongoDB, DynamoDB, Cassandra, Redis, Snowflake",
		},
		{
			title: "Skills",
			skills:
				"AWS, AWS CDK, Azure, Docker, Kubernetes, Terraform, Kafka, REST, gRPC, Git, Datadog, Splunk, Elasticsearch, Kibana, Logstash, Vercel, Okta, Linux, Windows",
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
		},
		{
			title: "Pastebin Next.js",
			isFeatured: true,
			thumbnail: "/assets/images/pastebin.png",
			githubUrl: "https://github.com/AlexSKorn/paste-bin",
			liveUrl: "",
		},
		{
			title: "Job Queue Go",
			isFeatured: true,
			thumbnail: "/assets/images/queue.png",
			githubUrl: "https://github.com/AlexSKorn/JobQueueGo",
			liveUrl: "",
		},
	],

	technologies: [
		// Runtime/Backend
		{ name: "Node.js", icon: "devicon-nodejs-plain-wordmark" },
		{ name: "Go", icon: "devicon-go-original-wordmark" },
		{ name: "TypeScript", icon: "devicon-typescript-plain" },

		// Frontend
		{ name: "React", icon: "devicon-react-original-wordmark" },
		{ name: "Next.js", icon: "devicon-nextjs-original-wordmark" },

		// Databases & Caching
		{ name: "PostgreSQL", icon: "devicon-postgresql-plain-wordmark" },
		{ name: "MongoDB", icon: "devicon-mongodb-plain-wordmark" },
		{ name: "Cassandra", icon: "devicon-cassandra-plain-wordmark" },
		{ name: "Redis", icon: "devicon-redis-plain-wordmark" },

		// Message Queue & Streaming
		{ name: "Kafka", icon: "devicon-apachekafka-original-wordmark" },

		// Cloud & Infrastructure
		{ name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
		{ name: "Azure", icon: "devicon-azure-plain-wordmark" },
		{ name: "Docker", icon: "devicon-docker-plain-wordmark" },
		{ name: "Kubernetes", icon: "devicon-kubernetes-plain-wordmark" },
		{ name: "Terraform", icon: "devicon-terraform-plain-wordmark" },

		// Monitoring/CI
		{ name: "DataDog", icon: "devicon-datadog-plain-wordmark" },
		{ name: "Jenkins", icon: "devicon-jenkins-plain-wordmark" },
	],
};
