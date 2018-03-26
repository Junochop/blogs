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

    }

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



