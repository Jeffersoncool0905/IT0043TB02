
var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("tab-activate");

            }for(tabcontent of tabcontents){
                tabcontent.classList.remove("block-activate");
            }
            event.currentTarget.classList.add("tab-activate");
            document.getElementById(tabname).classList.add("block-activate")
        }
        document.addEventListener('DOMContentLoaded', () => {
            const projects = [
                {
                    title: "Pokemon Flexbox",
                    description: "Check my Pokemon Gallery",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPcRvzXTvyu1N7Ri87lUNYOHXfih8QlTDFA&s",
                    link: "https://jeffersoncool0905.github.io/IT0043TB02/midtermfinal.html"
                },
                {
                    title: "Fortune Analytics",
                    description: "Advisory project for Fortune Analytics",
                    image: "https://www.pea.gov.ph/wp-content/uploads/2024/05/pra-public.png",
                    link: "https://jeffersoncool0905.github.io/IT0043TB02/Petronio_TSA4.html"
                },
                {
                    title: "Pokemon Cards",
                    description: "My favorite Pokemons!",
                    image: "https://preview.redd.it/ofzpqymnwty41.jpg?width=1080&crop=smart&auto=webp&s=19ced725363f00a475f203158ccca75b0e5ea824",
                    link: "https://danielvilla1.github.io/it0043tb02/TSA5/petronio_villa_tsa5.html"
                },
                {
                    title: "Demon Slayer Characters",
                    description: "My bias characters, check it out!",
                    image: "https://preview.redd.it/demon-slayer-game-v0-pelh1v5386bd1.jpeg?width=1080&crop=smart&auto=webp&s=319f833c3793f45998f88e59dc17507dbc2302cd",
                    link: "https://icoiconii.github.io/it0043tb02/carpio_petronio_tsa6/kimetsu.html"
                },
                {
                    title: "Demon Slayer Fanpage",
                    description: "Fanpage about Demon Slayer news and updates!",
                    image: "https://i1.sndcdn.com/artworks-y20K7kR1It4ki5cn-BpHnoA-t1080x1080.jpg",
                    link: "https://jeffersoncool0905.github.io/IT0043TB02/Petronio%20-%20Mangubat_TSA_7.html"
                },
                {
                    title: "Flexbox Simulator Planets",
                    description: "A flexbox simulator that uses planets!WW",
                    image: "https://astronz.nz/cdn/shop/articles/jupiter.png?v=1682054176",
                    link: "https://jeffersoncool0905.github.io/IT0043TB02/Activity%20Monday/Petronio-Pe%C3%B1ano.html"
                }
                
            ];
        
            const projectsContainer = document.getElementById('projects-container');
            projects.forEach(project => {
                const projectWrap = document.createElement('div');
                projectWrap.classList.add('project-wrap');
        
                const projectLink = document.createElement('a');
                projectLink.href = project.link;
        
                const projectImage = document.createElement('img');
                projectImage.src = project.image;
                projectImage.alt = project.title;
        
                const projectDescription = document.createElement('div');
                projectDescription.classList.add('project-description');
        
                const projectTitle = document.createElement('h3');
                projectTitle.textContent = project.title;
        
                const projectDesc = document.createElement('p');
                projectDesc.textContent = project.description;

                
                projectDescription.appendChild(projectTitle);
                projectDescription.appendChild(projectDesc);
                projectLink.appendChild(projectImage);
                projectLink.appendChild(projectDescription);
                projectWrap.appendChild(projectLink);
                projectsContainer.appendChild(projectWrap);
            });
        });
        