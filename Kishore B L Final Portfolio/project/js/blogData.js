const blogData = [
    {
        id: 1,
        slug: "modern-guide-to-web-development-in-2025",
        title: "Modern Guide to Web Development in 2025",
        description: "A comprehensive guide covering the latest trends, technologies, and best practices in web development for 2025.",
        thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
        date: "2025-01-15",
        readTime: "12 min read",
        tags: ["Web Development", "2025 Trends", "Modern Tech"],
        category: "web-development",
        bloggerUrl: "https://kishorewebdevleopmentt.blogspot.com/2025/07/modern-guide-to-web-development-in-2025.html",
        isExternal: true,
        content: `
            <div class="external-blog-notice">
                <p><strong>Note:</strong> This blog post is hosted on Blogger. Click the button below to read the full article.</p>
                <a href="https://kishorewebdevleopmentt.blogspot.com/2025/07/modern-guide-to-web-development-in-2025.html" 
                   target="_blank" 
                   class="external-blog-btn">
                   Read Full Article on Blogger →
                </a>
            </div>
            
            <h2>Preview: Modern Web Development in 2025</h2>
            <p>The web development landscape continues to evolve rapidly. In 2025, developers need to stay updated with the latest technologies, frameworks, and best practices to build modern, efficient, and user-friendly applications.</p>
            
            <h3>Key Topics Covered:</h3>
            <ul>
                <li>Latest JavaScript frameworks and libraries</li>
                <li>Modern CSS techniques and tools</li>
                <li>Performance optimization strategies</li>
                <li>Progressive Web Apps (PWAs)</li>
                <li>AI integration in web development</li>
                <li>Security best practices</li>
                <li>Accessibility standards</li>
            </ul>
            
            <div class="blog-embed-container">
                <h3>Read the Complete Article</h3>
                <iframe src="https://kishorewebdevleopmentt.blogspot.com/2025/07/modern-guide-to-web-development-in-2025.html" 
                        width="100%" 
                        height="600" 
                        frameborder="0" 
                        scrolling="yes"
                        title="Modern Guide to Web Development in 2025">
                </iframe>
            </div>
        `
    },
    {
        id: 2,
        slug: "responsive-web-design-guide",
        title: "Complete Guide to Responsive Web Design",
        description: "Learn how to create websites that look great on all devices using modern CSS techniques.",
        thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop",
        date: "2025-01-12",
        readTime: "8 min read",
        tags: ["CSS", "Responsive Design", "Web Development"],
        category: "web-development",
        isExternal: false,
        content: `
            <h2>What is Responsive Web Design?</h2>
            <p>Responsive web design is an approach that makes web pages look good on all devices - desktops, tablets, and phones. It uses flexible layouts, images, and CSS media queries.</p>
            
            <h2>Key Principles</h2>
            <h3>1. Flexible Grid Layouts</h3>
            <p>Use relative units like percentages instead of fixed pixels:</p>
            <pre><code>.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}</code></pre>
            
            <h3>2. Flexible Images</h3>
            <p>Make images scale with their container:</p>
            <pre><code>img {
    max-width: 100%;
    height: auto;
}</code></pre>
            
            <h3>3. Media Queries</h3>
            <p>Apply different styles for different screen sizes:</p>
            <pre><code>@media (max-width: 768px) {
    .container {
        padding: 10px;
    }
}</code></pre>
            
            <h2>Best Practices</h2>
            <ul>
                <li>Start with mobile-first design</li>
                <li>Use CSS Grid and Flexbox</li>
                <li>Test on real devices</li>
                <li>Optimize images for different screen sizes</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Responsive design is essential in today's multi-device world. By following these principles, you can create websites that provide great user experiences across all devices.</p>
        `
    },
    {
        id: 3,
        slug: "javascript-fundamentals",
        title: "JavaScript Fundamentals Every Developer Should Know",
        description: "Master the core concepts of JavaScript including variables, functions, and modern ES6+ features.",
        thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop",
        date: "2025-01-10",
        readTime: "10 min read",
        tags: ["JavaScript", "Programming", "Web Development"],
        category: "web-development",
        isExternal: false,
        content: `
            <h2>JavaScript Basics</h2>
            <p>JavaScript is the programming language of the web. It allows you to create interactive and dynamic websites.</p>
            
            <h2>Variables and Data Types</h2>
            <h3>Declaring Variables</h3>
            <pre><code>// Modern way (ES6+)
let name = "John";
const age = 25;

// Older way (avoid)
var city = "New York";</code></pre>
            
            <h3>Data Types</h3>
            <ul>
                <li><strong>String:</strong> "Hello World"</li>
                <li><strong>Number:</strong> 42, 3.14</li>
                <li><strong>Boolean:</strong> true, false</li>
                <li><strong>Array:</strong> [1, 2, 3]</li>
                <li><strong>Object:</strong> {name: "John", age: 25}</li>
            </ul>
            
            <h2>Functions</h2>
            <h3>Function Declaration</h3>
            <pre><code>function greet(name) {
    return "Hello, " + name + "!";
}</code></pre>
            
            <h3>Arrow Functions (ES6)</h3>
            <pre><code>const greet = (name) => {
    return \`Hello, \${name}!\`;
};

// Short version
const greet = name => \`Hello, \${name}!\`;</code></pre>
            
            <h2>Working with Arrays</h2>
            <pre><code>const fruits = ["apple", "banana", "orange"];

// Add item
fruits.push("grape");

// Loop through array
fruits.forEach(fruit => {
    console.log(fruit);
});</code></pre>
            
            <h2>DOM Manipulation</h2>
            <pre><code>// Select elements
const button = document.getElementById("myButton");
const text = document.querySelector(".text");

// Add event listener
button.addEventListener("click", () => {
    text.textContent = "Button clicked!";
});</code></pre>
            
            <h2>Next Steps</h2>
            <p>Practice these fundamentals and then explore:</p>
            <ul>
                <li>Async/Await for handling promises</li>
                <li>Modern frameworks like React or Vue</li>
                <li>Node.js for backend development</li>
            </ul>
        `
    }
];