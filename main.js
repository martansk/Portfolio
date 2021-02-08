window.onload = async (event) => {
    const url = "https://api.github.com/users/martansk/repos?per_page=100";
    const response = await fetch(url);
    const result = await response.json();
    const arr = [].concat(result);

    // creates a list of github repo names
    var githubDiv = document.getElementById("github");
    var clickHereText = document.createTextNode("Click here!");
    arr.map(repo => {
        
        // creates a block element for the repo
        var itemDiv = document.createElement('div');
        itemDiv.className = "flex-container";
        
        // creates a text element for the name
        var nameDiv = document.createElement('div');        
        nameDiv.className = "githubname";

        // url link to name
        var linkToGit = document.createElement('a');
        var repoName = document.createTextNode(repo.name);
        linkToGit.appendChild(repoName);
        linkToGit.href = repo.html_url;
        nameDiv.appendChild(linkToGit);
              
        // creates an element for the description & adds the name into the element
        var descrDiv = document.createElement('div');
        descrDiv.className = "repodescription";
        descrDiv.textContent = repo.description;
        
        // adds the text into the box and that into the list
        itemDiv.appendChild(nameDiv);
        itemDiv.appendChild(descrDiv);
        //itemDiv.appendChild(urlDiv);
        githubDiv.appendChild(itemDiv);
    });
};