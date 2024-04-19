<div align="center">
  <h1>:mortar_board: Tech Educators' SWD Bootcamp :mortar_board:<br/>:mortar_board: Week 05 Assessment :mortar_board:</h1>
  <p>  Repository for coursework for TechEd Software Development Bootcamp - Week 05</p>
    <p><b>Static Site (Client)</b>: <a href="https://teched-sd-w05.onrender.com/">https://teched-sd-w05.onrender.com/</a></p>
    <p><b>Web Service (Server)</b>: <a href="https://teched-sd-w05-server.onrender.com">https://teched-sd-w05-server.onrender.com</a></p>
  </div>
  <ul>
    <li>
    <span>
Kev B. -
    <a href="http://www.LinkedIn.com/in/kevin-barr1988">LinkedIn</a> |
    <a href="http://kjb88.github.io">Website</a> |
    <a href="mailto:kevinbarr.business@gmail.com">Email</a> |
    <a href="https://github.com/KJB88">Github</a>
</span>
      </li>
        <li>
  <span>Connor L. - <a href="https://github.com/MopeyHippo">Github</a></span>
    </li> 
            <li>
  <span>Themba .M - </span>
    </li>
        <li>
  <span>Colin C.</span>
    </li>
    </ul>
<section>
<h2>📋 Project Outline</h2>
<p>As a group of fine, fine gentlemen; design and build a web application that utilises a snazzy and responsive, yet accessible, front-end webpage. The back-end must consider of a node.js server and SQLite database that can handle requests (GET, POST, DEL, PUT) from the client to insert, update or remove records from the database.</p>
  <p><b>All requirements are complete, however we were unable to meet all stretch goals.</b></p>
</section>
<section>
  <h2>🙍‍♂️ User Stories</h2>
  <h3>As a User, I would like to...</h3>
  <ul>
    <li>...quickly show that I do not recommend a TV show by pressing a button.</li>
    <li>...quickly show that I recommend a TV show by pressing a button.</li>
    <li>...write a review on a TV Show for others to see..</li>
    <li>...see the latest TV shows on the web page.</li>
    <li>...see overall ratings on each TV show.</li>
    <li>...read other user's reviews on TV shows.</li>
    <li>...see the website logo, navigation and title.</li>
    <li>...navigate the website using a screen-reader and/or without using a mouse.</li>
    <li>...see the footer containing copyright and company information.</li>
  </ul>
  </section>
  <section>
<h2>👷 Requirements</h2>
<ul>
  <li><b>Design</b>: Demonstrate proper design practices by creating wireframes, data flow and database schema. The application must include both client-side and server-side code.</li>
  <li><b>Front-End Dev</b>: Develop a user interface with HTML and CSS, focusing on responsive, accessible and intuitive design. Implement async/await and the Fetch API for non-blocking database operations and API calls.</li>
  <li><b>Interactivity</b>: Implement dynamic content on the front-end using vanilla JavaScript for DOM manipulation. Ensure the application is fully responsive and works across modern browsers.</li>
  <li><b>Back-End Dev</b>: Build a server with Express that handles HTTP requests and communicates with an SQLite database. Use Express.js to set up your server and define API endpoints.</li>
  <li><b>Database Integration</b>: Design a database and use SQLite to store, update and retrieve data efficiently using SQL queries. Demonstrate an understanding of database edsign, relationships and SQL queries. Use SQLite with the better-sqlite3 library for database operations.</li>
  <li><b>Collaboration</b>: Work as a team to design and build a web application that showcases your skills in full-stack development, and collaborate on code using Git and Github.</li>
  <li><b>Presentation</b>: Produce and present your problem domain, user stories, design and technical implementation to the class in the form of a 10minute presentation.</li>
</ul>
</section>
<section>
<h2>🥅 Stretch Goals</h2>
<ul>
  <li><b>Let someone else do it!</b>: Use external libraries to add some pa-zazz to the project.</li>
  <li><b>Rebelling against Conformity</b>: Have different functionality for each 'section' of viewing (eg, rank movies, only show movies with reviews, etc).</li>
  <li><b>We are Legion</b>: Use more than one webpage to display information about TV shows.</li>
  <li><b>Stick around and find out!</b>: Have basic user persistence and login (no auth).</li>
  <li><b>With great power, comes great responsibility</b>: Be able to modify, delete TVshows, reviews and users.</li>
  <li><b>I'm in your computer, nabbin' your datas</b>: Use a fancy API to grab existing TV Show data.</li>
</ul>
</section>
  <section>
    <h2>📈 Project Structure</h2>
    <h3>Client</h3>
    <ul>
      <li><b>HTML</b>: Both index.html and its iframe popup template, closeup.html, are located in the /client/ folder.</li>
      <li><b>CSS</b>: style.css is located in the /client/ folder.</li>
      <li><b>JS</b>: All .js files (networkHandler.js, app.js, galleryBuilder.js, closeup.js) are all in the /client/ folder.</li>
      <li><b>IMGs</b>: Client images are held within /client/public to facilitate inclusion within vite builds.</li>
    </ul>
    <h3>Server</h3>
    <ul>
      <li><b>JS</b>: server.js and seed.js are in the /server/ folder to facilitate rapid testing of server and DB. Other .js (wordlibs.js, dbHandler.js) are found in the /server/assets/js folder.</li>
      <li><b>IMGS</b>: Some images are located on the server within /server/assets/imgs but are not used. This was for a triaged goal of hosting the image files on the server or within the DB.</li>
    </ul>
    <h3>Database</h3>
    <ul>
      <li><b>JS</b>: dbHandler.js is located in the /server/assets/js folder.</li>
      <li><b>SQL</b>: All SQL queries are localted inside the /server/assets/js/dbHandler.js file.</li>
      <li><b>DB</b>: The .db file itself is held within the /server/assets/db/ folder.</li>
    </ul>
      </section>
<section>
<h2>✔️ Implementation (of Requirements)</h2>
  <h3>Design</h3>
  <p>The team discussed what kind of application we'd like to make and once a decision was made, weworked on wireframes and some quick mockups to get the rough idea in place. These were refined and basic implementation was put in place to see how it looks on a page. The server side design was mapped roughly with our initial understanding of the problem domain and we prepared basic routings based on that. Given the overall project direction, it was identified that the DB would require at least 3 tables with differing elements, as well as a relationship between users and TV shows via reviews.</p>
  <h3>Front-End Dev</h3>
  <p>The frontend was designed with a clearly defined style and structure, and each section has a different context around TV Shows. The final frontend product was tested against Lighthouse and WAVE for accessibility and responsivity at typical mobile phone resolution.</p>
  <h3>Interactivity</h3>
  <p>Interactivity via the front end was achieved through the carousel drag, arrows to provide easy accessibility if dragging is difficult and ability to write reviews.</p>
  <h3>Back-End Dev</h3>
  <p>The backend was designed to be straight forward and have semantic endpoints that make sense. From a technical standpoint, it was designed to be a minimal API-like approach where internals were hidden from other layers and only safe, reliable access points were available for use.</p>
  <h3>Database Integration</h3>
  <p>The DB has many different queries all pre-prepared. These range from SELECT, INSERT, DELETE, UPDATE. A couple of queries use INNER JOINS to produce the required output for the client. The DB consists of three tables; users, tv_shows and reviews. users and tv_shows have a relationship to reviews, which links a review, user and tv show together via PKs/FKs.</p>
 <h3>Collaboration</h3>
  <p>As a team, we made decisions together and iterated on designs and concepts until all were in agreement that it was in an acceptable and actionable state. This process was facilitated by tools like Trello, Figma and of course, Google Meet.</p>
  <h3>Presentation</h3>
  <p>For the presentation, as a team we had a meeting to discuss which elements we could fit into the available 10 minutes and that would match the requirements criteria. Once that was established, we partitioned the workload between each member based on their strengths and knowledge. </p>
</section>
<section>
  <h2>➕ Implementation (of Stretch Goals)</h2>
  <h3>External Libraries</h3>
  <p>We should get government funding for the amount of libraries we stuck in this project! It was two. We added two libraries. Glide.js for carousels and Fancybox.js for popping up iframes.</p>
  <h3>Unique Interactables</h3> 
  <p>Carousels go wheeeee! We implemented the carousels to hold the unique content in each section. This gave it a very fun-to-use, clean control layout and minimised the clutter of content across the style of the site.</p>
  <h3>Webpage(s)</h3>
    <p>We initially intended to implement a static page rather than iframe, but we decided to triage that away mid-way to focus on more important items in MVP. As we approached the deadline, we found scope to bring it back but in a more interactive way. And thus, iframe pop-up was born! It uses a pre-defined layout from closeup.html.</p>
  <h3>User Persistence</h3>
    <p>We unfortunately were unable to implement this. However, we implemented a similar feature via review persistence.</p>
  <h3>Update and Delete</h3>
    <p>We had the back-end database able to modify and delete records, but did not have time to implement this on the server and client.</p>
  <h3>Fetch from external APIs</h3>
    <p>We explored this early on in the project but were unable to secure a solid API that gave us the required data and that was free within our discovery phase. So we opted to remove this from scope mid-way in the project.</p>
</section>
<section>
  <h2>🏆 Honorary Mentions</h2>
  <h3>Cha-cha Glideeeeeeeeeeeeeeeee</h3>
  <p>Using the glide.js library, the team implemented smooth carousels and tweaked the Options of the library to produce desired results.</p>
    <h3>We don't have no fancyshmancy boxes 'round here</h3>
  <p>Using the Fancybox.js library, the team implemented iframe popups to display then populate information about TV shows.</p>
</section>
