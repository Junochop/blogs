var journalBlogs = [
    {
        id: "blog1",
        date: "FEB 27, 2018",
        title: "Week 1: HTML, CSS, Git, Github",
        post: "My Week 1 was brushing off of the assigned prework. Most importantly, I learned setting up the Github account and Git commands.It would be interesting to utilize the CSS Grid method to create a blog site.I'll put in some time to research this method this week."
        },

    {
        id: "blog2",
        date: "Mar 6, 2018",
        title: "Week 3: Arrays, Functions, Objects",
        post: "My Week 3 was learning about Arrays, Functions, and Objects.Object? what is it ? I learned that an object(s) is summarized as Pairs of names(strings) and values(any value) where the name is separated from the value by a colon. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. The struggle of understanding how loops work can be profounding.My goal of the month: Let's try to review the class work more and practice more."

    },

    {
        id: "blog3",
        date: "Mar 13, 2018",
        title: "Week 4: Arrays, ES6 Functions, Object Array",
        post: "My Week 4 was learning about Advance JS, ES6, and Event Listener.  Using event listener exercise was helpful and targeting and calling the assigned functions by traversing the dom was very helpful."

    },
    {
        id: "blog4",
        date: "Mar 27, 2018",
        title: "Week 5: Markdowns",
        post: "This week, we learned how to use the Markdown's in Github.  We use this to write effective README and instructions.  There are  new ways to insert a picture of my project and also learned how to change its headings."

    },
    {
        id: "blog5",
        date: "April 3, 2018",
        title: "Week 6: XHR",
        post: "This week, we learned how to use XHR.  Utilizing XHR to access JSON files.  It is a different way to access the data object. It must convert strings to object by parsing the key values."

    },
    {
        id: "blog6",
        date: "April 9, 2018",
        title: "Week 7: Markdowns",
        post: "This week, we learned how to use Bootstrap.  There are new version out there.  We decided not to use the new version due to the stability and consistency of its performance.  It helped us to add new font styles as well as the unique icons in the library.  It also creates a flex-model type of structure by manipulating in the HTML file."

    },
    {
    id: "blog7",
    date: "April 17, 2018",
    title: "Week 8: Task Runner and Browserify",
    post: "This week, we learned how to use Browserify and Task Runner. There are certan rules and settings to follow in order to execute the files.  All files should be structured in a certain way; they can be compartmentalized. It was good to learn a different way to organize functions and data by utilizing the newly learned lessons in class."

   },

]

const printBlog = (strang, divId) => {
    const printTo = document.getElementById(divId);
    printTo.innerHTML = strang;

}

const buildBlogString = (journalArray) => {
    let domstring = "";
    journalArray.forEach((journal) => {
    domstring += `<div class="card-container">`;
    domstring += `<h1>${journal.title}</h1>`;
    domstring += `<h1>${journal.date}</h1>`;
    domstring += `<p>${journal.post}</p>`;
    domstring += `</div>`;

    });

    printBlog(domstring, "blogs");
}

buildBlogString(journalBlogs);



