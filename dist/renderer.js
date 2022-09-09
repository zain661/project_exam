class Renderer{
    
    render(data){
        $(".main").empty();
        const src = $("#ingredients").html();
        const template = Handlebars.compile(src);
        let someHtml = template({ data }); // {data : data ([])}
        $(".main").append(someHtml);
    }
    
      
}