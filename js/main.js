function menu(){

    if( $('.menu').is(':visible') ){

        $('.menu').hide('drop');

    }else{

        $('.menu').show('drop');

    }        

}


function scroll_top_top(){
    
    $("html, body").animate({scrollTop: $("body").offset().top}, 500);

}


function go_to(id){

    menu();
    
    $("html, body").animate({scrollTop: $(id).offset().top}, 500);

}