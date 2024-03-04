function fetchBlogPosts() {

    var apiUrl = 'https://www.googleapis.com/blogger/v3/blogs/7732303544633416750/posts?key=AIzaSyBoZUW9ODcYLGZADIpOtVphfRJk4ZxW2xc';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);
    xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var responseData = JSON.parse(xhr.responseText);
                displayBlogPosts(responseData.items); // Display blog posts
            } else {
                console.error('Error fetching blog posts: ' + xhr.status);
            }
        }
    };
    xhr.send();
}

function displayBlogPosts(posts) {
    var container = document.getElementById('blogPostsContainer');

    posts.forEach(function(post) {
        var column = document.createElement('div');
        column.classList.add('col-lg-4', 'col-md-6', 'd-flex', 'align-items-stretch');

        var card = document.createElement('div');
        card.classList.add('icon-box', 'iconbox-blue');

        var icon = document.createElement('div');
        icon.classList.add('icon');
        icon.innerHTML = '<svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"><path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path></svg><i class="bx bxl-blogger"></i>';

        var title = document.createElement('h3');
        var titleLink = document.createElement('a');
        titleLink.textContent = post.title;
        titleLink.setAttribute('href', '#');
        title.appendChild(titleLink);

        var date = document.createElement('h4');
        date.textContent = new Date(post.published).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

        var description = document.createElement('p');
        description.textContent = truncateHTML(post.content, 250);

        var btn = document.createElement('a');
        btn.classList.add('blogbtn');
        btn.textContent = 'Read More';
        btn.setAttribute('href', post.url);
        btn.setAttribute('target', '_blank');

        card.appendChild(icon);
        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(description);
        card.appendChild(btn);
        column.appendChild(card);    
        container.appendChild(column);
    });
}

function truncateHTML(html, maxLength) {
    var temp = document.createElement('div');
    temp.innerHTML = html;
    var text = temp.innerText || temp.textContent || "";

    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

window.onload = function() {
    fetchBlogPosts();
};
