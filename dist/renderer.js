class Renderer{
    
    render(data){
        $(".main").empty();
        const src = $("#ingredients").html();
        const template = Handlebars.compile(src);
        let someHtml = template({ recipe: data });
        $(".main").append(someHtml);
    }
    
      
}