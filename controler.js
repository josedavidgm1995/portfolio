function controler (vista) {
   

    let funciones = [
        cv.getIntro(),
        cv.getProfile(),
        cv.getPortfolio(),
        cv.getEducation(),
        cv.getWork(),
        cv.getData()
    ]   

    vista.onChange = (index) =>{
        vista.renderContent(funciones[index]);

        //background-color: rgb(255, 0, 51);
        //box-shadow: 0px 5px 5px rgb(20,20,20);
        let items = vista.body.querySelectorAll('.menu li');

        items.forEach((e, i) => {
            if(i==index){
                e.style.backgroundColor="rgb(255, 0, 51)";
                e.style.boxShadow="0px 5px 5px rgb(20,20,20)";
            }else{
                e.style.backgroundColor="rgba(255, 255, 51,0)";
                e.style.boxShadow="none";
            }
        });
       
    }

    vista.render(funciones[0]);

};
 controler(vista);