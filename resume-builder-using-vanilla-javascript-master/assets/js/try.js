const levenshteinDistance = (a, b) => {
    const matrix = [];
  
    // Create an empty matrix
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
  
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
  
    // Fill the matrix
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1,     // deletion
                    matrix[i - 1][j] + 1      // insertion
                );
            }
        }
    }
  
    return matrix[b.length][a.length];
};

const jobTitles = [
    {
        "title": "Software Engineer",
        "summary": "Develops, tests, and maintains software applications. Collaborates with cross-functional teams to design and implement innovative solutions."
    },
    {
        "title": "Data Scientist",
        "summary": "Analyzes and interprets complex data to inform business decisions. Uses statistical methods and machine learning techniques to build predictive models."
    },
    {
        "title": "Product Manager",
        "summary": "Oversees product development from concept to launch. Works closely with engineering, marketing, and sales teams to ensure product success."
    },
    {
        "title": "UX/UI Designer",
        "summary": "Designs user-friendly interfaces and enhances user experience for digital products. Conducts user research and testing to inform design decisions."
    },
    {
        "title": "Marketing Specialist",
        "summary": "Develops and implements marketing strategies to increase brand awareness and drive sales. Analyzes market trends and customer feedback."
    },
    {
        "title": "Network Administrator",
        "summary": "Manages and maintains network infrastructure. Ensures network security and performance while troubleshooting issues as they arise."
    },
    {
        "title": "Project Manager",
        "summary": "Leads project teams to deliver projects on time and within budget. Coordinates resources and communicates progress to stakeholders."
    },
    {
        "title": "Sales Representative",
        "summary": "Identifies and engages potential clients, demonstrating product value to achieve sales targets. Builds and maintains strong client relationships."
    },
    {
        "title": "Financial Analyst",
        "summary": "Evaluates financial data and trends to provide insights for investment decisions. Prepares financial reports and forecasts."
    },
    {
        "title": "Customer Support Specialist",
        "summary": "Provides assistance and support to customers, resolving inquiries and issues efficiently. Strives to improve customer satisfaction."
    },
    {
        "title": "Web Developer",
        "summary": "Creates and maintains websites, ensuring optimal performance and user experience. Collaborates with designers and content creators."
    },
    {
        "title": "Business Analyst",
        "summary": "Analyzes business needs and identifies solutions to improve processes and systems. Works with stakeholders to define project requirements."
    },
    {
        "title": "Quality Assurance Engineer",
        "summary": "Develops and executes test plans to ensure product quality. Identifies bugs and works with development teams to resolve issues."
    },
    {
        "title": "Systems Analyst",
        "summary": "Evaluates and improves IT systems. Collaborates with stakeholders to gather requirements and create technical specifications."
    },
    {
        "title": "Content Writer",
        "summary": "Creates engaging and informative content for websites and blogs. Researches topics and optimizes content for search engines."
    },
    {
        "title": "Database Administrator",
        "summary": "Manages and maintains databases, ensuring data integrity and security. Optimizes database performance and supports user access."
    },
    {
        "title": "Human Resources Manager",
        "summary": "Oversees HR functions, including recruitment, employee relations, and compliance. Develops policies to foster a positive workplace culture."
    },
    {
        "title": "Graphic Designer",
        "summary": "Creates visual concepts and designs for marketing materials, branding, and websites. Works with clients to deliver creative solutions."
    },
    {
        "title": "Operations Manager",
        "summary": "Oversees daily operations and ensures efficient processes within the organization. Analyzes performance metrics and implements improvements."
    },
    {
        "title": "SEO Specialist",
        "summary": "Implements and manages SEO strategies to improve website rankings. Analyzes performance data and conducts keyword research."
    },
    {
        "title": "Research Scientist",
        "summary": "Conducts experiments and analyzes data to advance scientific knowledge. Publishes findings in peer-reviewed journals and presents at conferences."
    },
    {
        "title": "Cloud Engineer",
        "summary": "Designs and manages cloud infrastructure. Implements cloud services and ensures system reliability and security."
    },
    {
        "title": "Compliance Officer",
        "summary": "Ensures that the organization complies with regulatory requirements. Develops policies and conducts audits to mitigate risks."
    },
    {
        "title": "E-commerce Manager",
        "summary": "Oversees online sales strategies and manages the e-commerce platform. Analyzes customer behavior and optimizes the shopping experience."
    },
    {
        "title": "Social Media Manager",
        "summary": "Develops and implements social media strategies to enhance brand presence. Engages with followers and analyzes performance metrics."
    },
    {
        "title": "Technical Writer",
        "summary": "Creates documentation for software products, including user manuals and API references. Works closely with developers to understand the product."
    },
    {
        "title": "Interior Designer",
        "summary": "Plans and designs interior spaces to meet clients' needs. Works with contractors and vendors to bring design concepts to life."
    },
    {
        "title": "Legal Assistant",
        "summary": "Provides administrative support to lawyers, including preparing documents and conducting legal research. Maintains case files and client communication."
    },
    {
        "title": "Logistics Coordinator",
        "summary": "Manages the supply chain and oversees the transportation of goods. Coordinates with suppliers, vendors, and shipping companies."
    },
    {
        "title": "Pharmaceutical Sales Representative",
        "summary": "Promotes and sells pharmaceutical products to healthcare professionals. Builds and maintains relationships with doctors and pharmacists."
    },
    {
        "title": "Web Analytics Specialist",
        "summary": "Analyzes website traffic and user behavior to improve digital marketing efforts. Utilizes tools like Google Analytics to gather insights."
    },
    {
        "title": "Video Editor",
        "summary": "Edits video content for various media platforms, ensuring high-quality output. Works with directors and producers to meet project goals."
    }
]


const summarizeJob = (inputTitle) => {
    let closestTitle = '';
    let closestTitleIndex = 0;
    
    let minDistance = 10;
  
    // Find the closest job title
    for (let index = 0; index < jobTitles.length; index++) {
        currentTitle = jobTitles[index]["title"]
        const distance = levenshteinDistance(inputTitle.toLowerCase(), currentTitle.toLowerCase());
        if (distance < minDistance) {
            minDistance = distance;
            closestTitle = currentTitle;
            closestTitleIndex = index
        }
    }
    // Return the summary or a not found message
    return closestTitle ? jobTitles[closestTitleIndex]['summary'] : 'Job title not found.';
};

// Example usage
console.log(summarizeJob('Softwre Enginer')); // "Develops software applications."
console.log(summarizeJob('Data Sciencet'));    // "Analyzes and interprets complex data."
console.log(summarizeJob('Prodct Manager'));    // "Oversees product development and strategy."
console.log(summarizeJob('designer'));

