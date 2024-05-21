export const info = {
	baseUrl: "https://akorn.netlify.app/",
	name: "Alex Korn",
	jobDescription: "Full-Stack Software Engineer",
	about: `I am a full-stack software engineer and technical leader with 6 years of experience, 
  I have a strong foundation in software engineering principles and a passion for building scalable, 
  innovative software solutions. I have experience working with various technologies and frameworks, 
  including AWS and Azure, React, C#, Java, Python, Go and TypeScript. I am skilled in the frontend, backend, 
  and in cloud development, and I have a track record of delivering successful projects on time and to specification. 
  I am a proactive problem-solver with excellent communication and collaboration skills, 
  and I am always looking for opportunities to learn and grow as a leader and software engineer.
  `,

	experience: [
		{
			name: "Slalom - Senior Software Engineering Consultant",
			location: "Austin, TX (remote)",
			startDate: "March 2022",
			endDate: "Present",
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
				"Node.js, React, Next.js, Astro, Flask, Django, .NET, Spring, Pandas, Tailwind",
		},
		{
			title: "Databases",
			skills:
				"DynamoDB, MongoDB, Cassandra, Postgres, SQL Server, Redis, MySQL, Snowflake",
		},
		{
			title: "Skills",
			skills:
				"Node, Git, Kafka, Datadog, Splunk, Elasticsearch, Kibana, Logstash, Docker, Kubernetes, AWS CDK, Terraform, gRPC, REST, AWS, Azure, Vercel, Okta, Linux, Windows",
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
			liveUrl: "https://akorn-portfolio.netlify.app/",
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
};
