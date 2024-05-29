document.addEventListener("DOMContentLoaded",function(){
    const nameSearch = document.getElementById("name-search")
    const tags = document.querySelectorAll(".tag")
    const projects = document.querySelectorAll(".project")


    function filterProjects(){
        const namequery = nameSearch.value.toLowerCase();
        console.log("name ->>", namequery)

        projects.forEach((project)=>{
            const name = project.getAttribute('data-name')
            const nameMatch = name.includes(namequery)


            console.log("name", name)
            console.log("namematch", nameMatch)

            if(nameMatch){
                project.style.display = "";
            }else {
                project.style.display ="none";
            }
        })
    }

    tags.forEach((tag)=>{
        tag.addEventListener("click", function(){
            const selectedtag = this.getAttribute("data-tag")

            projects.forEach((project)=>{
                const projecttags = project.getAttribute("data-tags")

                if(projecttags.includes(selectedtag)){
                    project.style.display = "";

                }else{
                    project.style.display = "none"
                }
            })
        })
    })


    nameSearch.addEventListener("keyup", filterProjects)
})