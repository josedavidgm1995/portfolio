let vista = {

    body: document.querySelector('body'),


    getMenuContainer: function getMenuContainer() {
        let div = document.createElement('div');
        div.className = 'col-2 menuContainer';
        div.innerHTML = `                        
      
                        <div class= "col-12 menu">
                        <div id="logo">
                        </div> 
                        <ul>
                               <li>Profile</li>
                               <li>Portfolio</li>
                               <li>Education</li>
                               <li>Awards / Honors</li>
                               <li>Work experience</li>
                               <li>Data of interest</li>
                             </ul>
                        </div>
                        `;


        let items = div.querySelectorAll('li');

        items.forEach((element, index) => {
            element.addEventListener('click', e => {
                this.onChange(index);
            });

        });

        div.querySelector('#logo').appendChild(svg.getLogo());
        return div;
    },

    getContentContainer: function getMenuContainer() {
        let div = document.createElement('div');
        div.className = 'col-10 contentContainer';
        div.innerHTML = `
                            <div class="col-12 content">
            
                            </div>
                        `;

        //div.querySelector('.content').appendChild(cv.getWork());

        return div;
    },

    getContactInfoContainer: function getContactInfoContainer() {
        let div = document.createElement('div');
        div.className = 'col-2 contactInfoContainer';
        div.innerHTML = `
                            <div class= "col-12 info">
                                <div class="social">
                                    <ul>
                                        <li><a id="behance"  href="https://www.behance.net/JoseDavidGiraldoM" target="_blank"></a></li>
                                        <li><a id="github"   href="https://github.com/josedavidgm1995" target="_blank"></a></li>
                                        <li><a id="linkedin" href="https://www.linkedin.com/in/josedavidgiraldom/" target="_blank"></a></li>
                                        <li><a id="instagram" href="https://www.instagram.com/_david.giraldo/" target="_blank"></a></li>
                                        
                                    </ul>
                                </div>
                                <div class ="contact">
                                    <p>
                                    <a id="icesi-link" href="http://www.icesi.edu.co/" target="_blank">Icesi University </a>
                                    <br>
                                    Cali - Colombia - South America<br>
                                    cell number: (57) 316 278 9945 <br>
    
                                    josedavidgm1995@gmail.com</p>
                                    <br>
                                    <br>
                                    <p>
                                    From Colombia <br>
                                    with love - 2018
                                    </p>
                                </div>
                            </div>
                        
                        `;

        let b = div.querySelector('#behance');
        b.appendChild(svg.getBehance());
        let g = div.querySelector('#github');
        g.appendChild(svg.getGithub());
        let l = div.querySelector('#linkedin');
        l.appendChild(svg.getLinkedin());
        let i = div.querySelector('#instagram');
        i.appendChild(svg.getInstagram());

        return div;
    },

    getMainContainer: function getMainContainer() {
        let div = document.createElement('div');
        div.className = 'col-8 mainContainer';
        div.appendChild(this.getMenuContainer());
        div.appendChild(this.getContentContainer());
        div.appendChild(this.getContactInfoContainer());
        return div;
    },

    render: function render() {
        console.log("Hi there, welcome to my code");
        this.body.appendChild(this.getMainContainer());

    },

    renderContent: function renderContent(newContent) {
        let content =  this.body.querySelector('.content');
        content.innerHTML = '';
        content.appendChild(newContent);


    },


};