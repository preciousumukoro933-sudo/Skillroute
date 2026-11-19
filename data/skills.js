// All course content lives here. To add a skill, copy one object and edit it.
// video.videoId is optional: paste a YouTube video ID (the part after "v=") to embed a specific video.
window.SKILLS = [
  {
    id: "frontend",
    title: "Frontend Web Development",
    tagline: "Build the websites and apps people see and click.",
    color: "#2F6BFF",
    duration: "10 to 12 weeks",
    outcome: "A live portfolio website you built yourself",
    intro: "Frontend developers turn designs into working web pages. You’ll learn HTML for structure, CSS for style, JavaScript for behaviour, then put your work online.",
    modules: [
      {
        title: "HTML: the skeleton of every page",
        summary: "Write your first web page and understand how browsers read it.",
        lesson: [
          "Every website you visit is built on HTML (HyperText Markup Language). HTML doesn’t make things pretty. Its job is to tell the browser what each piece of content is: this is a heading, this is a paragraph, this is an image, this is a link.",
          "You write HTML with tags. A tag like <h1> opens a heading and </h1> closes it. Tags can sit inside other tags, which is how a page gets its structure: a <header> holds the logo and menu, a <main> holds the content, a <footer> holds contact details.",
          "Start with a text editor (VS Code is free) and a browser. Create a file called index.html, type your content inside the right tags, save, and open it in your browser. That loop of edit, save and refresh is how every developer works.",
          "Use the right tag for the job. A button should be a <button>, not a styled box. Headings should go in order (h1, then h2, then h3). This is called semantic HTML, and it helps screen readers, search engines and your future self."
        ],
        keyPoints: [
          "HTML describes what content is, not how it looks.",
          "Tags open and close, and they nest inside each other.",
          "Semantic tags (header, main, nav, button) make pages accessible and easier to style."
        ],
        video: { query: "HTML full course for beginners", note: "Watch a complete beginner HTML course and code along with it. Pause and type every example yourself." },
        assignment: {
          task: "Build a one-page ‘About Me’ website using only HTML. Include a heading with your name, a short bio, a photo, a list of three skills you want to learn, and links to two of your social profiles.",
          deliverables: ["Your index.html file, or a screenshot of the page open in your browser", "A short note on which tags you used and why"],
          criteria: ["Uses headings, paragraphs, an image, a list and links correctly", "Content is organised with semantic tags", "It’s clearly the learner’s own page, not a copied template"]
        }
      },
      {
        title: "CSS: making it look good on any screen",
        summary: "Colours, fonts, spacing, Flexbox, Grid and responsive design.",
        lesson: [
          "CSS (Cascading Style Sheets) controls how HTML looks. You select an element, then set its properties: color, font-size, padding, background and so on. Put your CSS in a separate styles.css file and link it in your HTML head.",
          "Everything on a page is a box. The box model has four layers: the content, padding around it, a border, and margin outside the border. Most layout bugs beginners hit are really box model confusion, so learn it well.",
          "For layout, learn two tools. Flexbox lines items up in one direction, like a row of menu links. Grid places items in rows and columns, like a gallery of cards. Together they handle almost every layout you’ll need.",
          "Most people in Nigeria browse on phones, so design for small screens first. Use relative units like rem and %, and media queries to adjust the layout on bigger screens. Always test by shrinking your browser window."
        ],
        keyPoints: [
          "Selector plus properties: that’s how all CSS works.",
          "Every element is a box with content, padding, border and margin.",
          "Flexbox for one direction, Grid for two. Design for mobile first."
        ],
        video: { query: "CSS flexbox grid responsive design beginners", note: "Find a beginner CSS course that covers Flexbox, Grid and media queries." },
        assignment: {
          task: "Style your ‘About Me’ page from Stop 1 with CSS. Give it a colour scheme, readable fonts, and a layout that works on both phone and laptop. Use Flexbox or Grid at least once.",
          deliverables: ["Screenshots of the page on a phone-sized and a laptop-sized window", "Your styles.css file, or a link to your code"],
          criteria: ["Has a consistent colour scheme and readable typography", "Uses Flexbox or Grid for layout", "Layout adapts to small and large screens"]
        }
      },
      {
        title: "JavaScript: making pages respond",
        summary: "Variables, functions, events and changing the page with code.",
        lesson: [
          "JavaScript is the programming language of the browser. HTML is the structure and CSS is the style; JavaScript is the behaviour. It’s what makes a menu open, a form check your input, or a counter go up when you click.",
          "Start with the basics: variables store values (let score = 0), functions group steps you can reuse, if statements make decisions, and loops repeat work. These four ideas appear in every programming language, so learning them well pays off forever.",
          "The DOM (Document Object Model) is how JavaScript sees your page. You can grab an element with document.querySelector, listen for a click with addEventListener, and change its text or style. That combination of select, listen and change is most of frontend interactivity.",
          "When something breaks, open your browser’s developer tools (F12) and check the Console tab. Error messages tell you the file and line number. Reading errors calmly is a core developer skill."
        ],
        keyPoints: [
          "Variables, functions, conditions and loops are the foundation.",
          "Select an element, listen for an event, change the page.",
          "The browser console is your best friend when debugging."
        ],
        video: { query: "JavaScript DOM projects for beginners", note: "Watch a beginner JavaScript tutorial that builds small projects using the DOM." },
        assignment: {
          task: "Build a small interactive tool with HTML, CSS and JavaScript. Pick one: a tip calculator, a to-do list where you can add and remove items, or a quiz with a score at the end.",
          deliverables: ["A link to your code (GitHub) or your main .js file", "A screenshot of it working", "A short explanation of how your code works"],
          criteria: ["The tool works and responds to user input", "Uses event listeners and updates the page with JavaScript", "Code is readable, with sensible variable names"]
        }
      },
      {
        title: "Git, GitHub and going live",
        summary: "Save your work with version control and deploy a real website.",
        lesson: [
          "Git is a tool that tracks every change you make to your code, so you can go back if something breaks. GitHub is a website that stores your Git projects online, where employers and clients can see them. Every working developer uses both.",
          "The basic Git loop is: make changes, git add to stage them, git commit with a message describing what you did, then git push to send them to GitHub. Write commit messages that explain what changed, like ‘Add contact form’.",
          "Once your code is on GitHub, you can deploy it for free with Netlify, Vercel or GitHub Pages. Connect your repository and every push updates the live site automatically. You now have a real link to share.",
          "Your next steps after this route: learn a framework like React, practise by rebuilding websites you like, and keep everything on GitHub. Your GitHub profile is your CV as a frontend developer."
        ],
        keyPoints: [
          "Git tracks changes; GitHub stores them online.",
          "Add, commit, push: the everyday loop.",
          "Free hosting turns your code into a link anyone can open."
        ],
        video: { query: "Git and GitHub for beginners crash course", note: "Watch a beginner Git and GitHub crash course, then a short video on deploying with Netlify or GitHub Pages." },
        assignment: {
          task: "Put your portfolio online. Combine your About Me page and your JavaScript tool into one small portfolio site, push it to GitHub, and deploy it so anyone can visit it.",
          deliverables: ["The live website link", "The GitHub repository link"],
          criteria: ["The site is live and loads correctly", "The code is on GitHub with more than one commit", "It includes the learner’s earlier projects"]
        }
      }
    ]
  },

  {
    id: "backend",
    title: "Backend Development",
    tagline: "Build the servers, databases and APIs behind every app.",
    color: "#1F8A5B",
    duration: "12 to 14 weeks",
    outcome: "A working API connected to a database, deployed online",
    intro: "Backend developers build the part of an app you don’t see: the server that handles requests, the database that stores data, and the rules that keep it secure.",
    modules: [
      {
        title: "How the web talks",
        summary: "Clients, servers, HTTP requests and JSON.",
        lesson: [
          "When you open an app, your phone (the client) sends a request across the internet to a computer somewhere (the server). The server does some work, maybe reads from a database, and sends back a response. Backend development is building that server.",
          "These messages follow a set of rules called HTTP. Each request has a method that says what you want: GET to read data, POST to create something, PUT or PATCH to update, DELETE to remove. Each response has a status code: 200 means OK, 404 means not found, 500 means the server broke.",
          "Data usually travels as JSON, a simple text format that looks like { \"name\": \"Ada\", \"age\": 21 }. Almost every API you’ll build or use speaks JSON.",
          "You can see all of this happening right now. Open developer tools in your browser, go to the Network tab, and reload any website. Every line is a request and response."
        ],
        keyPoints: [
          "Client sends a request, server sends a response.",
          "GET, POST, PUT/PATCH, DELETE describe what a request wants.",
          "JSON is the common language for sending data."
        ],
        video: { query: "how HTTP and APIs work explained for beginners", note: "Watch a beginner explanation of HTTP, APIs and JSON." },
        assignment: {
          task: "Explore a real public API. Use a free API (for example, a weather API or the GitHub API) with a tool like Postman, Thunder Client, or your browser. Make at least three requests and explain what came back.",
          deliverables: ["Screenshots of your requests and their responses", "A short write-up explaining the method, URL, status code and data for each request"],
          criteria: ["Shows at least three real requests and responses", "Correctly explains methods and status codes", "Explanation shows understanding, not just copied output"]
        }
      },
      {
        title: "Your first server",
        summary: "Pick a language and build routes that respond to requests.",
        lesson: [
          "Pick one backend language and stick with it for now. JavaScript with Node.js and Express is a great choice if you already know some frontend. Python with Flask or FastAPI is another friendly option. Both are in high demand.",
          "A server is a program that listens on a port and responds to requests. In Express, you define routes: app.get('/hello', ...) means ‘when someone sends a GET request to /hello, run this function’. The function sends back a response.",
          "Learn to read data from the request: URL parameters (/users/5), query strings (?page=2), and the request body for POST requests. Then send back JSON with the right status code.",
          "Test your server as you build. Run it locally, then send requests from Postman or Thunder Client. Build one route, test it, then build the next."
        ],
        keyPoints: [
          "Choose one language and framework, and go deep.",
          "Routes connect a method and URL to the code that handles it.",
          "Read input from params, query and body; respond with JSON and a status code."
        ],
        video: { query: "Node.js Express REST API tutorial for beginners", note: "Watch a beginner tutorial that builds a REST API with Express (or Flask/FastAPI if you chose Python)." },
        assignment: {
          task: "Build a simple API for a list of items (books, products or tasks), stored in memory. It should let you list all items, get one item, add an item, and delete an item.",
          deliverables: ["A GitHub link or your main server file", "Screenshots of each route tested in Postman or Thunder Client"],
          criteria: ["Has working GET, POST and DELETE routes", "Returns JSON with sensible status codes", "Handles a missing item with a 404"]
        }
      },
      {
        title: "Databases",
        summary: "Store data permanently with SQL and connect it to your server.",
        lesson: [
          "Data stored in memory disappears when the server restarts. A database stores it permanently. The most common kind is a relational database, like PostgreSQL or MySQL, which stores data in tables with rows and columns, a bit like spreadsheets.",
          "You talk to relational databases with SQL. Four commands cover most of what you need: SELECT to read, INSERT to add, UPDATE to change, and DELETE to remove. These match the CRUD operations (create, read, update, delete) your API already does.",
          "Design your tables carefully. Each table has a primary key that uniquely identifies a row. Tables connect through foreign keys: an orders table might have a user_id column pointing to the users table.",
          "Services like Supabase or Neon give you a free hosted PostgreSQL database, so you don’t have to install anything. Connect your server to it with a library, and your API now saves real data."
        ],
        keyPoints: [
          "Databases keep data after the server restarts.",
          "SELECT, INSERT, UPDATE, DELETE map to CRUD.",
          "Primary keys identify rows; foreign keys link tables."
        ],
        video: { query: "SQL for beginners PostgreSQL tutorial", note: "Watch a beginner SQL course, then a short tutorial on connecting your chosen framework to PostgreSQL." },
        assignment: {
          task: "Connect your API from Stop 2 to a real database. Design at least two related tables (for example, users and orders), and update your routes so data is saved and read from the database.",
          deliverables: ["A GitHub link to your project", "Your table design (a screenshot or SQL file)", "Screenshots showing data saved and read through your API"],
          criteria: ["Uses a real database, not in-memory storage", "Has at least two tables linked by a foreign key", "API routes perform create, read and delete on the database"]
        }
      },
      {
        title: "Auth, security and deployment",
        summary: "Protect your API with login and put it online.",
        lesson: [
          "Most apps need to know who is making a request. Authentication checks identity (logging in). Authorisation checks permission (can this user delete that post?). A common approach is to issue a token, like a JWT, after login and require it on protected routes.",
          "Never store passwords as plain text. Hash them with a library like bcrypt. Keep secrets like database passwords and API keys in environment variables, never in your code on GitHub.",
          "Validate everything that comes in. Never trust user input: check types, lengths and formats, and use parameterised queries so nobody can inject SQL into your database.",
          "Deploy your API to a service like Render or Railway. Set your environment variables there, connect your GitHub repo, and your API gets a public URL that a frontend or mobile app can call."
        ],
        keyPoints: [
          "Authentication is who you are; authorisation is what you can do.",
          "Hash passwords and keep secrets in environment variables.",
          "Validate input and deploy with your secrets set on the host."
        ],
        video: { query: "JWT authentication Node.js Express tutorial", note: "Watch a tutorial on adding sign-up, login and protected routes, then one on deploying an API to Render." },
        assignment: {
          task: "Add sign-up and login to your API with hashed passwords, protect at least one route so only logged-in users can use it, and deploy the API online.",
          deliverables: ["The live API URL", "The GitHub repository link", "Screenshots showing a protected route rejecting a request without a token and accepting one with a token"],
          criteria: ["Passwords are hashed, not stored as plain text", "At least one route requires authentication", "No secrets are committed to GitHub and the API is deployed"]
        }
      }
    ]
  },

  {
    id: "uiux",
    title: "UI/UX Design",
    tagline: "Design apps and websites that are easy and pleasant to use.",
    color: "#8B4FD8",
    duration: "8 to 10 weeks",
    outcome: "A full case study for your portfolio",
    intro: "UX (user experience) is about solving the right problem for real people. UI (user interface) is how the screens look and feel. You’ll learn both, using Figma.",
    modules: [
      {
        title: "Think like a designer",
        summary: "Understand users and define the problem before drawing anything.",
        lesson: [
          "Good design starts with people, not screens. Before you design anything, ask: who is this for, what are they trying to do, and what makes it hard for them today? Designers who skip this step make beautiful apps that nobody needs.",
          "The simplest research method is talking to people. Interview five potential users with open questions like ‘Tell me about the last time you…’. Listen for frustrations and workarounds. Avoid asking ‘Would you use an app that…?’ because people are bad at predicting their own behaviour.",
          "Turn what you learn into a clear problem statement: ‘[User] needs a way to [goal] because [insight].’ You can also create a simple persona that summarises a typical user’s goals and pain points.",
          "Then map the user journey: the steps someone takes to reach their goal, and where they get stuck. Those sticking points are your design opportunities."
        ],
        keyPoints: [
          "Understand the problem before designing the solution.",
          "Ask about past behaviour, not hypothetical opinions.",
          "A clear problem statement guides every design decision."
        ],
        video: { query: "UX design process for beginners user research", note: "Watch an introduction to the UX design process and user interviews." },
        assignment: {
          task: "Pick an everyday problem around you (for example, finding hostel accommodation, splitting bills with friends, or booking a barber). Interview at least three people about it and write up what you found.",
          deliverables: ["Your interview questions", "A summary of key findings", "A problem statement and a simple persona"],
          criteria: ["Shows real research with at least three people", "Findings are specific, not generic", "The problem statement follows clearly from the findings"]
        }
      },
      {
        title: "Figma and wireframes",
        summary: "Sketch the structure of your screens quickly and cheaply.",
        lesson: [
          "Figma is the industry-standard design tool, and it’s free to start. It runs in your browser, so any laptop works. Learn frames, shapes, text, and auto layout first; those four cover most daily work.",
          "Wireframes are simple black-and-white layouts that show what goes where on a screen, without colours or images. They let you test ideas fast. It’s much easier to change a grey box than a polished design.",
          "Start with user flows: the screens someone moves through to complete a task, like sign up, search, book and pay. Then wireframe each screen in that flow. Ask of every element: does the user need this to complete their task?",
          "Follow common patterns people already understand, such as navigation at the bottom on mobile, a search bar at the top, and clear primary buttons. Familiar patterns make apps feel easy."
        ],
        keyPoints: [
          "Learn frames, text, shapes and auto layout in Figma first.",
          "Wireframes test structure before you spend time on looks.",
          "Design flows, not just single screens."
        ],
        video: { query: "Figma tutorial for beginners wireframing", note: "Watch a beginner Figma tutorial, then a short video on wireframing a mobile app." },
        assignment: {
          task: "Using your problem from Stop 1, design a user flow and wireframe at least five mobile screens in Figma that solve it.",
          deliverables: ["A Figma share link or screenshots of the wireframes", "Your user flow diagram", "A short note explaining how the flow solves the problem"],
          criteria: ["At least five connected screens forming a complete flow", "Layout is clear and uses familiar patterns", "Design connects back to the research problem"]
        }
      },
      {
        title: "Visual design",
        summary: "Typography, colour, spacing and reusable components.",
        lesson: [
          "Visual design turns wireframes into polished interfaces. Four things do most of the work: typography, colour, spacing and consistency.",
          "Typography: pick one or two fonts and a clear size scale, for example 32, 24, 18 and 16. Make headings clearly bigger than body text. Colour: choose one main brand colour, a few neutrals, and colours for success and error. Check that text has enough contrast against its background.",
          "Spacing: use a consistent system like multiples of 8 (8, 16, 24, 32). Generous, consistent spacing is the quickest way to make a design look professional.",
          "Consistency: build components like buttons, input fields and cards once, then reuse them. In Figma, make them components so a change updates everywhere. This is the start of a design system."
        ],
        keyPoints: [
          "Clear type sizes, limited colours, consistent spacing.",
          "Check colour contrast so everyone can read your text.",
          "Build reusable components instead of redrawing things."
        ],
        video: { query: "UI design fundamentals typography color spacing", note: "Watch a video on UI fundamentals, then one on creating components in Figma." },
        assignment: {
          task: "Turn your wireframes into high-fidelity designs. Create a small style guide (colours, fonts, spacing) and at least three reusable components, then apply them to all your screens.",
          deliverables: ["A Figma link or screenshots of the final screens", "A screenshot of your style guide and components"],
          criteria: ["Consistent typography, colour and spacing across screens", "Uses reusable components", "Text is readable with good contrast"]
        }
      },
      {
        title: "Prototype, test and tell the story",
        summary: "Make it clickable, test it with users, and build a case study.",
        lesson: [
          "A prototype links your screens together so people can click through as if it were a real app. In Figma, use Prototype mode to connect buttons to screens. It takes minutes and makes testing possible.",
          "Usability testing means watching real people try to complete a task with your prototype. Give them a goal, such as ‘Book a haircut for Saturday’, then stay quiet and watch where they hesitate or get lost. Three to five testers will reveal most big problems.",
          "Fix what you learn, then test again. Design is a loop: research, design, test, improve.",
          "Clients and employers hire designers based on case studies, not just pretty screens. A case study tells the story: the problem, your research, your process, what you changed after testing, and the final result. Post it on Behance, Medium or your own site."
        ],
        keyPoints: [
          "Prototypes let you test before anything is built.",
          "Watch users silently; their struggles show you what to fix.",
          "Case studies show your thinking, and that’s what gets you hired."
        ],
        video: { query: "Figma prototyping and usability testing beginners", note: "Watch a Figma prototyping tutorial, then a video on writing a UX case study." },
        assignment: {
          task: "Make your design clickable, test it with at least three people, improve it based on what you learned, and publish a case study.",
          deliverables: ["The prototype link", "Your testing notes and what you changed", "A link to your published case study"],
          criteria: ["Prototype is clickable and completes the main flow", "Shows real test findings and design changes", "Case study clearly explains problem, process and result"]
        }
      }
    ]
  },

  {
    id: "graphic-design",
    title: "Graphic Design",
    tagline: "Create brands, flyers and social media designs people notice.",
    color: "#E0457B",
    duration: "8 to 10 weeks",
    outcome: "A brand identity project and a portfolio ready for clients",
    intro: "Graphic designers communicate with visuals. You’ll learn the principles behind good design, the tools, branding, and how to get paid for your work.",
    modules: [
      {
        title: "Design principles",
        summary: "Hierarchy, contrast, alignment, balance and white space.",
        lesson: [
          "Good design isn’t about talent; it follows principles you can learn. The most important is hierarchy: deciding what people see first, second and third. Make the most important thing the biggest, boldest or most colourful.",
          "Contrast makes things stand out: big against small, dark against light, bold against thin. Alignment keeps things tidy, so line elements up along clear edges instead of placing them randomly.",
          "White space (empty space) isn’t wasted space. It gives your design room to breathe and makes it look premium. Beginners often cram too much in; professionals remove things.",
          "Train your eye by studying designs you like. Ask: what did I notice first? Why? How did the designer guide my eyes? Save examples in a folder or on Pinterest for inspiration."
        ],
        keyPoints: [
          "Hierarchy decides what people see first.",
          "Use contrast and alignment to create order.",
          "White space makes designs clearer and more premium."
        ],
        video: { query: "graphic design principles for beginners", note: "Watch a beginner video on the core principles of graphic design." },
        assignment: {
          task: "Find three real designs (posters, ads or social posts) and analyse them using the principles. Then redesign one weak design you find around you, such as a church flyer or shop banner.",
          deliverables: ["Your analysis of the three designs", "The before and after of your redesign"],
          criteria: ["Correctly identifies hierarchy, contrast, alignment and white space", "The redesign clearly improves on the original", "Explains which principles were applied"]
        }
      },
      {
        title: "Tools of the trade",
        summary: "From Canva to Photoshop, Illustrator and Figma.",
        lesson: [
          "Start with Canva if you’re completely new. It’s free, runs on phones and laptops, and teaches layout, fonts and colour quickly. Many clients use Canva too, so being fast with it is a sellable skill.",
          "As you grow, learn the professional tools. Adobe Photoshop is for editing photos and image-heavy designs. Adobe Illustrator is for vector work like logos and icons that must stay sharp at any size. Figma is a free alternative for many layouts. Affinity apps are a cheaper one-time purchase.",
          "Understand file types: PNG for graphics with transparency, JPG for photos, SVG and PDF for vector logos and print. Learn the difference between RGB (for screens) and CMYK (for print).",
          "Whatever tool you use, learn the shortcuts and the grid. Speed matters when you have clients."
        ],
        keyPoints: [
          "Canva first, then Photoshop, Illustrator or Figma.",
          "Raster (Photoshop) is for photos; vector (Illustrator) is for logos.",
          "Know your file types and colour modes for screen and print."
        ],
        video: { query: "Adobe Illustrator for beginners tutorial", note: "Watch a beginner tutorial for the tool you chose (Canva, Photoshop, Illustrator or Figma)." },
        assignment: {
          task: "Design an event flyer for a real or imaginary event (a tech meetup, a church programme or a birthday) in your chosen tool. Include a headline, date, venue, a call to action and an image.",
          deliverables: ["The final flyer as an image or PDF", "Which tool you used and one thing you learned"],
          criteria: ["Clear hierarchy: event name and date are easy to find", "Readable fonts and a good colour combination", "Information is complete and well aligned"]
        }
      },
      {
        title: "Branding and logos",
        summary: "Build a visual identity, not just a logo.",
        lesson: [
          "A brand is how people feel about a business. A brand identity is the visual system that creates that feeling: the logo, colours, fonts, imagery style and tone. A logo alone isn’t a brand.",
          "Start with a brief. Ask the client: what does the business do, who are the customers, what should people feel, and who are the competitors? Every design decision should trace back to these answers.",
          "Sketch many logo ideas on paper before touching the computer. A good logo is simple, memorable, works in one colour, and still reads when tiny, like on a phone app icon.",
          "Package the identity into a brand guide: logo versions, colour codes (HEX, RGB, CMYK), fonts, and examples of correct and incorrect use. This is what makes you look professional and lets you charge more."
        ],
        keyPoints: [
          "A brand identity is a whole system, not only a logo.",
          "Start from a brief; sketch before going digital.",
          "Deliver a brand guide so the brand stays consistent."
        ],
        video: { query: "logo design process brand identity tutorial", note: "Watch a video on the logo design process from brief to final brand guide." },
        assignment: {
          task: "Create a brand identity for a small local business (real or imaginary), like a bakery, a phone repair shop or a fashion brand. Write a short brief, then design the logo and a simple one-page brand guide.",
          deliverables: ["Your brief", "The logo in colour and in black and white", "Your brand guide as an image or PDF"],
          criteria: ["The logo is simple and works in one colour", "Colours and fonts fit the brief", "Brand guide includes colour codes, fonts and logo usage"]
        }
      },
      {
        title: "Social media design and getting clients",
        summary: "Design for Instagram and LinkedIn, build a portfolio, and price your work.",
        lesson: [
          "Social media is where most small businesses need design every week. Learn the common sizes (square 1080×1080, portrait 1080×1350, story 1080×1920) and design for a fast scroll: bold visuals, few words, one clear message per post.",
          "Carousels (multi-slide posts) are great for teaching or telling a story. Keep a consistent template so a brand’s feed looks unified.",
          "Your portfolio should show 5 to 8 of your best projects, each with a short story: the problem, your idea and the result. Post on Behance, Instagram and LinkedIn. Showing your process publicly attracts clients.",
          "Pricing: start by charging per project, not per hour. Always agree on scope (what’s included and how many revisions) and take a deposit, such as 50% upfront, before you start."
        ],
        keyPoints: [
          "Design for the scroll: bold, simple, one message.",
          "Show 5 to 8 strong projects with their stories.",
          "Agree on scope, revisions and a deposit before starting."
        ],
        video: { query: "social media post design tutorial carousel", note: "Watch a tutorial on designing social media posts and carousels." },
        assignment: {
          task: "Using the brand from Stop 3, design a set of three social media posts: one announcement, one promotional post and one three-slide carousel. Keep them consistent with the brand guide.",
          deliverables: ["All designs as images or a PDF", "A short caption for each post"],
          criteria: ["Correct sizes for the chosen platform", "Consistent with the brand identity", "Each post has one clear message and call to action"]
        }
      }
    ]
  },

  {
    id: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Help businesses and products find customers online.",
    color: "#F08A24",
    duration: "8 to 10 weeks",
    outcome: "Your own digital product, launched and marketed",
    intro: "Digital marketers get the right message to the right people online. You’ll learn audiences, content, ads, email and analytics, and launch your first product.",
    modules: [
      {
        title: "Marketing basics: audience, offer and funnel",
        summary: "Who you’re selling to, what you’re offering, and the journey to a sale.",
        lesson: [
          "Marketing starts with three questions: who is the customer, what problem do they have, and why is your offer the best answer? If you can’t answer these clearly, no amount of posting or ads will help.",
          "Define your target audience specifically. ‘Everyone’ isn’t an audience. ‘Final-year students in Nigeria who want a tech job but don’t know where to start’ is. The more specific, the easier your messages become.",
          "A funnel describes the customer’s journey. Awareness: they discover you. Interest: they follow or read more. Decision: they compare and consider. Action: they buy. Different content serves different stages.",
          "Your value proposition is one sentence explaining what you offer, for whom, and why it’s different. Write it before anything else."
        ],
        keyPoints: [
          "Know the customer, their problem, and your offer.",
          "A specific audience makes marketing easier.",
          "The funnel is awareness, interest, decision, action."
        ],
        video: { query: "digital marketing fundamentals for beginners", note: "Watch a beginner digital marketing course introduction covering audiences and funnels." },
        assignment: {
          task: "Choose a digital product you could create, such as an e-book, template, mini-course or checklist. Define the target audience, the problem it solves, your value proposition, and a simple funnel from discovery to purchase.",
          deliverables: ["A one-page marketing plan covering audience, problem, value proposition and funnel"],
          criteria: ["The audience is specific", "The value proposition is clear and one sentence", "The funnel has realistic steps for each stage"]
        }
      },
      {
        title: "Social media and content marketing",
        summary: "Grow attention with useful, consistent content.",
        lesson: [
          "Content marketing means attracting customers by giving value first: tips, stories, tutorials and behind-the-scenes posts. People buy from brands they already trust.",
          "Pick one or two platforms where your audience spends time, rather than being everywhere. Students and creators gather on TikTok, Instagram and X; professionals on LinkedIn.",
          "Use content pillars: three to four themes you post about repeatedly, such as tips, stories, proof (results and testimonials) and offers. A content calendar keeps you consistent, and consistency beats occasional viral posts.",
          "Every post needs a hook: the first line or first second that stops the scroll. Then deliver value, then a call to action (follow, comment, click the link)."
        ],
        keyPoints: [
          "Give value first; trust leads to sales.",
          "Focus on one or two platforms and post consistently.",
          "Hook, value, call to action."
        ],
        video: { query: "content marketing strategy social media beginners", note: "Watch a video on building a content strategy and writing hooks." },
        assignment: {
          task: "Create a two-week content calendar for your product from Stop 1, with content pillars, and actually publish at least three posts.",
          deliverables: ["Your content calendar", "Links or screenshots of the three published posts", "Any early results (views, likes, comments)"],
          criteria: ["Clear content pillars aligned with the audience", "Posts have hooks and calls to action", "At least three posts were actually published"]
        }
      },
      {
        title: "Paid ads and email marketing",
        summary: "Reach more people with ads and turn followers into buyers with email.",
        lesson: [
          "Paid ads let you pay to reach people who don’t follow you yet. Meta (Facebook and Instagram) and Google are the big platforms. You choose your audience, budget and goal, and the platform shows your ad.",
          "Start small. Test two or three versions of an ad with a small budget, see which one gets the best results, then put more money behind the winner. Never spend big on an untested ad.",
          "Email is the most reliable channel you can own, because social media reach can disappear overnight. Offer something free, called a lead magnet (a checklist, mini-guide or template), in exchange for an email address.",
          "Then send a short welcome sequence: three to five emails that introduce you, deliver value and finally present your offer. Tools like MailerLite or Brevo have free plans."
        ],
        keyPoints: [
          "Test small with ads; scale only what works.",
          "Email is a channel you own; build your list early.",
          "Lead magnet, then welcome sequence, then offer."
        ],
        video: { query: "Facebook Instagram ads tutorial for beginners", note: "Watch a beginner Meta ads tutorial, then a video on lead magnets and email sequences." },
        assignment: {
          task: "Create a lead magnet for your product and a three-email welcome sequence. Also write two ad versions (text plus image idea) that would promote the lead magnet.",
          deliverables: ["Your lead magnet (file or link)", "The three emails", "The two ad versions"],
          criteria: ["The lead magnet gives genuine value to the audience", "Emails build trust before selling", "The two ads test meaningfully different angles"]
        }
      },
      {
        title: "Analytics and launching your product",
        summary: "Measure what works and launch your first digital product.",
        lesson: [
          "Marketing without measurement is guessing. Track a few key numbers: reach (how many saw it), engagement (how many interacted), click-through rate (how many clicked), and conversion rate (how many bought or signed up).",
          "Use the free analytics built into each platform, plus Google Analytics for websites. Add UTM tags to links so you know which post or ad brought each visitor.",
          "Launching means putting your product somewhere people can pay for it, such as Selar, Paystack payment pages or Gumroad, and then driving people to it with content, email and maybe ads.",
          "After launch, review the numbers. What brought the most buyers? Do more of that. Marketing is a cycle of trying, measuring and improving."
        ],
        keyPoints: [
          "Track reach, engagement, clicks and conversions.",
          "UTM tags show which source brought each visitor.",
          "Launch, measure, then double down on what works."
        ],
        video: { query: "how to sell digital products online Selar Gumroad", note: "Watch a video on launching a digital product, then one on reading social media analytics." },
        assignment: {
          task: "Create and launch your first digital product. Put it on a sales page (Selar, Gumroad or a Paystack page), promote it for at least a week, and report the results.",
          deliverables: ["The sales page link", "A screenshot or file of the product", "A short report: what you did to promote it, your numbers, and what you learned"],
          criteria: ["The product is real and available to buy or download", "Promotion used at least two channels", "The report uses real numbers and draws a lesson from them"]
        }
      }
    ]
  },

  {
    id: "content-writing",
    title: "Content Writing and Copywriting",
    tagline: "Write words that inform, persuade and sell.",
    color: "#0E9AA7",
    duration: "6 to 8 weeks",
    outcome: "A writing portfolio with published pieces",
    intro: "Every business needs words: website copy, blog posts, emails, ads and product descriptions. You’ll learn to write clearly, write for search engines, and write copy that sells.",
    modules: [
      {
        title: "Writing clearly",
        summary: "Short sentences, plain words and a clear structure.",
        lesson: [
          "Good writing is clear writing. Your reader is busy and scrolling. Use short sentences, everyday words and one idea per paragraph. If a simpler word works, use it.",
          "Know your reader and your goal before you write. Who is reading, and what should they know, feel or do afterwards? Everything that doesn’t serve that goal should go.",
          "Structure helps readers skim. Use a strong headline, short paragraphs, subheadings and examples. Put the most important point first.",
          "Editing is where good writing happens. Write the first draft fast, then cut it. Read it out loud: wherever you stumble, rewrite. Tools like Hemingway Editor and Grammarly can help, but your judgement matters most."
        ],
        keyPoints: [
          "Short sentences, plain words, one idea per paragraph.",
          "Know your reader and your goal first.",
          "Draft fast, then edit hard."
        ],
        video: { query: "how to write clearly content writing beginners", note: "Watch a video on clear writing and self-editing." },
        assignment: {
          task: "Write a 400 to 600 word article explaining something you know well to a complete beginner (for example, how to prepare for exams, or how to use a phone feature). Then edit it and show both versions.",
          deliverables: ["Your first draft", "Your edited final version"],
          criteria: ["The final version is clear, with short sentences and plain words", "Well structured with a headline and short paragraphs", "Editing clearly improved the draft"]
        }
      },
      {
        title: "Writing for the web and SEO",
        summary: "Write blog posts people can find on Google.",
        lesson: [
          "SEO (search engine optimisation) helps your writing appear on Google when people search. It starts with keywords: the words people actually type. Use free tools like Google’s autocomplete, ‘People also ask’ and AnswerThePublic to find them.",
          "Match search intent. If someone searches ‘how to start freelancing in Nigeria’, they want practical steps, not history. Give them exactly what they’re looking for, better than other results.",
          "Put your main keyword naturally in the title, the first paragraph, and a subheading or two. Never stuff keywords; Google rewards content that genuinely helps people.",
          "Make posts easy to skim with descriptive subheadings, lists where useful, and links to helpful sources. Write a meta description (the short summary under your link on Google) that makes people want to click."
        ],
        keyPoints: [
          "Find the words people actually search for.",
          "Match search intent and answer it well.",
          "Use keywords naturally and make posts skimmable."
        ],
        video: { query: "SEO writing for beginners blog post", note: "Watch a beginner guide to SEO writing and keyword research." },
        assignment: {
          task: "Pick a keyword, research what currently ranks for it, and write an 800 to 1,200 word SEO blog post that answers it better. Publish it on Medium, Hashnode, LinkedIn or a blog.",
          deliverables: ["The published post link", "Your target keyword and a short note on search intent", "Your meta description"],
          criteria: ["The post matches the search intent of the keyword", "The keyword is used naturally in key places", "Well structured and genuinely useful"]
        }
      },
      {
        title: "Copywriting that sells",
        summary: "Use proven formulas to write ads, sales pages and emails.",
        lesson: [
          "Copywriting is writing to get action: buy, sign up, click. The key shift is to write about the reader, not the product. People don’t buy features; they buy results. ‘10GB storage’ is a feature. ‘Never delete photos to free up space again’ is a benefit.",
          "Two simple formulas help. AIDA: grab Attention, build Interest, create Desire, ask for Action. PAS: name the Problem, Agitate it (show why it matters), then present the Solution.",
          "Headlines do most of the work. Write ten headline options for every piece and pick the best. Specific beats vague: ‘Land your first freelance client in 30 days’ beats ‘Grow your career’.",
          "Always end with one clear call to action. Remove anything that distracts from it."
        ],
        keyPoints: [
          "Sell benefits and results, not features.",
          "Use AIDA or PAS to structure copy.",
          "Write many headlines; end with one clear call to action."
        ],
        video: { query: "copywriting for beginners AIDA PAS formula", note: "Watch a beginner copywriting tutorial covering benefits and formulas." },
        assignment: {
          task: "Pick a real product or service (a friend’s business works) and write: a short sales page (300 to 500 words), three ad headlines, and a product description, all using AIDA or PAS.",
          deliverables: ["The sales page copy", "The three headlines", "The product description", "Which formula you used"],
          criteria: ["Focuses on benefits and the reader’s problem", "Follows a clear formula", "Has a strong headline and a clear call to action"]
        }
      },
      {
        title: "Portfolio and getting paid",
        summary: "Show your work and find your first clients.",
        lesson: [
          "Clients want to see proof you can write. Build a simple portfolio with 4 to 6 of your best pieces. A free Contra profile, a Notion page or a Google Drive folder with clean PDFs all work.",
          "Choose a niche if you can, such as tech, finance, health or education. Specialists find clients faster and charge more than generalists.",
          "Find work on LinkedIn (post your writing and engage with founders), on job boards, and by pitching directly. Send businesses a short, personal message showing how you could improve something specific on their website.",
          "Agree on the brief, word count, deadline, number of revisions and price before you start. Ask for a deposit with new clients."
        ],
        keyPoints: [
          "Show 4 to 6 strong samples, ideally in a niche.",
          "Pitch with specific, personal ideas.",
          "Agree on scope and payment before writing."
        ],
        video: { query: "how to get freelance writing clients beginners", note: "Watch a video on building a writing portfolio and finding first clients." },
        assignment: {
          task: "Build your writing portfolio with at least four pieces (you can use work from earlier stops), and write a pitch message to a real business offering your writing.",
          deliverables: ["Your portfolio link", "Your pitch message"],
          criteria: ["The portfolio is organised and shows at least four strong pieces", "The pitch is personal and specific to the business", "The work shows a clear niche or focus"]
        }
      }
    ]
  },

  {
    id: "data-analysis",
    title: "Data Analysis",
    tagline: "Turn messy numbers into clear answers and decisions.",
    color: "#5B7A1F",
    duration: "10 to 12 weeks",
    outcome: "A data dashboard and analysis project for your portfolio",
    intro: "Data analysts help businesses make decisions using data. You’ll learn spreadsheets, cleaning data, SQL, and how to present findings people understand.",
    modules: [
      {
        title: "Thinking with data and spreadsheets",
        summary: "Ask the right question, then explore data in Excel or Google Sheets.",
        lesson: [
          "Data analysis starts with a question, not a tool. ‘Which product sells most in which month?’ is something you can answer. ‘Analyse this data’ is not. Always write down the business question first.",
          "Spreadsheets are where most analysts begin, and Excel or Google Sheets are still used everywhere. Learn to sort, filter, and use basic formulas: SUM, AVERAGE, COUNT, MIN, MAX and IF.",
          "Understand your data before analysing it. What does each row represent? What does each column mean? Are there missing values or strange numbers?",
          "Find free datasets on Kaggle or data.gov sites, or collect your own, such as your monthly spending or your class results."
        ],
        keyPoints: [
          "Start with a clear business question.",
          "Master sort, filter and basic formulas.",
          "Understand what each row and column means before analysing."
        ],
        video: { query: "Excel for data analysis beginners", note: "Watch a beginner tutorial on using Excel or Google Sheets for data analysis." },
        assignment: {
          task: "Find or create a dataset with at least 100 rows. Write three questions about it and answer them using spreadsheet formulas.",
          deliverables: ["Your spreadsheet file (CSV) or a share link", "Your three questions and answers"],
          criteria: ["Questions are specific and answerable", "Formulas are used correctly", "Answers are supported by the data"]
        }
      },
      {
        title: "Cleaning data and pivot tables",
        summary: "Fix messy data and summarise it fast.",
        lesson: [
          "Real data is messy. Analysts spend much of their time cleaning it: removing duplicates, fixing spelling differences (‘Lagos’, ‘lagos’, ‘LAG’), handling empty cells and correcting data types.",
          "Useful cleaning tools include TRIM (removes extra spaces), PROPER or UPPER (fixes capitalisation), Remove Duplicates, Find and Replace, and Text to Columns.",
          "Pivot tables are the analyst’s superpower. In a few clicks they summarise thousands of rows, for example total sales by region and month. Learn to drag fields into rows, columns and values.",
          "Lookup functions like XLOOKUP or VLOOKUP combine data from different sheets, such as matching product IDs to product names."
        ],
        keyPoints: [
          "Clean before you analyse: duplicates, spelling, blanks, types.",
          "Pivot tables summarise large data in seconds.",
          "XLOOKUP joins information across sheets."
        ],
        video: { query: "data cleaning and pivot tables Excel tutorial", note: "Watch a tutorial on cleaning data and building pivot tables." },
        assignment: {
          task: "Take a messy dataset (Kaggle has many), clean it, then build at least two pivot tables that answer business questions.",
          deliverables: ["Your cleaned file or a share link", "A list of the cleaning steps you took", "Screenshots of your pivot tables and what they show"],
          criteria: ["Cleaning steps are clear and appropriate", "Pivot tables answer real questions", "Conclusions are correct for the data"]
        }
      },
      {
        title: "SQL for analysts",
        summary: "Query databases to pull the data you need.",
        lesson: [
          "Most company data lives in databases, not spreadsheets. SQL is how analysts get it out. It’s one of the most requested skills in data job postings.",
          "Start with SELECT columns FROM table. Then add WHERE to filter rows, ORDER BY to sort, and LIMIT to show only a few rows.",
          "Aggregate with COUNT, SUM and AVG, and group results with GROUP BY, for example total revenue by city. Use HAVING to filter groups.",
          "Combine tables with JOIN, for example matching orders to customers. Practise on free sites like SQLZoo, or with SQLite or a free online SQL editor."
        ],
        keyPoints: [
          "SELECT, FROM, WHERE, ORDER BY are the basics.",
          "GROUP BY with COUNT, SUM and AVG summarises data.",
          "JOIN combines related tables."
        ],
        video: { query: "SQL for data analysts beginners", note: "Watch a beginner SQL tutorial aimed at data analysts." },
        assignment: {
          task: "Load a dataset into a SQL tool and write at least five queries that answer business questions, including at least one GROUP BY and one JOIN.",
          deliverables: ["Your SQL queries (a .sql file or text)", "Screenshots of the results", "The question each query answers"],
          criteria: ["Queries run and are correct", "Includes GROUP BY and JOIN", "Each query answers a meaningful question"]
        }
      },
      {
        title: "Visualisation and telling the story",
        summary: "Build dashboards and present insights people act on.",
        lesson: [
          "Numbers only matter if people understand them. Visualisation turns results into charts that show patterns at a glance. Use bar charts to compare categories, line charts for change over time, and avoid pie charts with many slices.",
          "Tools like Power BI, Looker Studio (free) and Tableau Public let you build interactive dashboards that update when data changes.",
          "A good dashboard answers a few key questions clearly. Put the most important number at the top, use consistent colours, and label everything.",
          "Finish with the story: what did you find, why does it matter, and what should the business do? An insight plus a recommendation is what makes an analyst valuable."
        ],
        keyPoints: [
          "Pick the chart that fits the comparison.",
          "Dashboards should answer a few questions clearly.",
          "End with insight and a recommendation."
        ],
        video: { query: "Power BI dashboard tutorial for beginners", note: "Watch a beginner Power BI or Looker Studio dashboard tutorial." },
        assignment: {
          task: "Build a dashboard from a dataset of your choice and write a short report with three insights and one recommendation.",
          deliverables: ["A dashboard link or screenshots", "Your report with insights and a recommendation"],
          criteria: ["Charts suit the data and are clearly labelled", "Insights are supported by the data", "The recommendation follows logically from the insights"]
        }
      }
    ]
  },

  {
    id: "ai-automation",
    title: "AI Automation and No-Code",
    tagline: "Use AI tools and automations to save businesses hours of work.",
    color: "#8A5A2B",
    duration: "6 to 8 weeks",
    outcome: "A working AI automation you can sell as a service",
    intro: "AI automation means connecting apps and AI models so work happens automatically. You’ll learn prompting, no-code automation tools, AI workflows, and how to sell them.",
    modules: [
      {
        title: "AI tools and prompting",
        summary: "What AI can do, and how to give it clear instructions.",
        lesson: [
          "AI models like Claude, ChatGPT and Gemini can write, summarise, analyse, translate, classify and answer questions. They’re powerful, but they make mistakes, so always check important outputs.",
          "Prompting is giving clear instructions. Good prompts include context (who you are and what this is for), the task, the format you want, and examples. ‘Write a post’ gets a weak result. ‘Write a 120-word LinkedIn post for final-year students about getting their first internship, in a friendly tone, ending with a question’ gets a strong one.",
          "Break big tasks into steps. Ask for an outline first, then each section. Give feedback and iterate, like working with a smart assistant.",
          "Build a prompt library: save prompts that work well so you can reuse them. This becomes the building blocks of your automations."
        ],
        keyPoints: [
          "AI is powerful but not always right; check its work.",
          "Context, task, format and examples make strong prompts.",
          "Save prompts that work so you can reuse them."
        ],
        video: { query: "prompt engineering for beginners", note: "Watch a beginner guide to writing effective prompts." },
        assignment: {
          task: "Pick a real repetitive task (writing product descriptions, replying to customer questions, summarising notes). Write a strong prompt for it, test it on three different inputs, and improve it.",
          deliverables: ["Your first prompt and your final improved prompt", "The three test outputs", "What you changed and why"],
          criteria: ["The final prompt includes context, task and format", "Shows real testing and improvement", "Output quality improved between versions"]
        }
      },
      {
        title: "No-code automation",
        summary: "Connect apps with triggers and actions using Zapier, Make or n8n.",
        lesson: [
          "Automation tools connect apps so that when something happens in one, something happens in another. Zapier is the easiest to start with, Make is visual and flexible, and n8n is powerful and can be self-hosted.",
          "Every automation has a trigger (the event that starts it, like a new form submission) and one or more actions (what happens next, like adding a row to Google Sheets and sending an email).",
          "Data flows between steps. You map fields from the trigger, such as the person’s name and email, into the actions. Learn filters (only continue if a condition is met) and paths or routers (do different things in different cases).",
          "Start by automating your own life: save email attachments to Drive, post form responses to a sheet, or get a WhatsApp or Telegram alert for important emails."
        ],
        keyPoints: [
          "Trigger plus actions equals an automation.",
          "Map data between steps; use filters and paths.",
          "Practise on your own repetitive tasks first."
        ],
        video: { query: "n8n tutorial for beginners automation", note: "Watch a beginner tutorial for Zapier, Make or n8n." },
        assignment: {
          task: "Build an automation that handles a real task. For example: when someone fills a Google Form, save the response to a sheet and send them a personalised email.",
          deliverables: ["Screenshots of the automation setup", "Proof it ran (for example the sheet row or received email)", "An explanation of the trigger and actions"],
          criteria: ["Has a clear trigger and at least two actions", "Data is mapped correctly between steps", "Evidence shows it actually ran"]
        }
      },
      {
        title: "AI-powered workflows",
        summary: "Add AI steps to automations so they can read, write and decide.",
        lesson: [
          "The real power comes from adding AI inside automations. An AI step can read an incoming email and decide if it’s a complaint, summarise a long document, draft a reply, or pull out key details like names and dates.",
          "Most automation tools have AI modules built in, or you can call an AI API with an HTTP step. You send the text plus your prompt, and use the response in the next step.",
          "Ask the AI to return structured output, such as JSON with fixed fields, so the next steps can use it reliably. Use your prompting skills from Stop 1.",
          "Always keep a human check for important actions. Let AI draft a reply, but have a person approve it before sending. This keeps the automation safe and trusted."
        ],
        keyPoints: [
          "AI steps let automations understand and write text.",
          "Ask for structured output so later steps can use it.",
          "Keep a human approval step for important actions."
        ],
        video: { query: "AI automation workflow tutorial n8n Make", note: "Watch a tutorial on building an AI-powered automation workflow." },
        assignment: {
          task: "Build an automation with at least one AI step. For example: new customer emails are classified by AI (question, complaint or order), logged in a sheet, and a draft reply is created.",
          deliverables: ["Screenshots of the workflow", "Example inputs and AI outputs", "An explanation of how it works and where a human checks it"],
          criteria: ["Includes at least one AI step that does real work", "AI output is used by later steps", "Includes a sensible human check"]
        }
      },
      {
        title: "Sell automation as a service",
        summary: "Find business problems, price your work and land clients.",
        lesson: [
          "Businesses don’t buy automations; they buy saved time and money. Look for repetitive tasks that eat hours: answering the same customer questions, copying data between apps, sending reminders, creating reports.",
          "Price by value, not hours. If your automation saves a business 10 hours a week, that’s worth far more than the 4 hours it took you to build.",
          "Show proof. Record short screen videos of your automations working and post them on LinkedIn or X. Explain the problem, the solution and the time saved.",
          "Offer a simple package: an audit (find what to automate), the build, and monthly maintenance. Maintenance gives you recurring income."
        ],
        keyPoints: [
          "Sell saved time and money, not tools.",
          "Price by the value you create.",
          "Demo videos are your best marketing."
        ],
        video: { query: "how to sell AI automation services to small businesses", note: "Watch a video on finding clients for AI automation services." },
        assignment: {
          task: "Find a real small business, identify one task they could automate, build a demo of the automation, and write a short proposal with a price.",
          deliverables: ["The business problem you found", "A demo video link or screenshots", "Your proposal with pricing"],
          criteria: ["The problem is real and specific", "The demo shows a working solution", "The proposal explains the value and has clear pricing"]
        }
      }
    ]
  }
];
