    const Gallery = function(array,big){

        this.arrimg =array
        this.big = big

        //In appoggio a mainimage estrae random la prima img da visualizzare nel BIG
        let setfirstimg=function()
        {
            let randkey= Math.floor(Math.random()*array.length)
            let randimg= array[randkey]
            return randimg
        }
        //Definisce le regole CSS per il div BIG  e le sue img 
        let setbigcssrules=function()
        {
            $(big+" img").css("width","100%")
        }
        //Definisce le regole CSS di thumbs e del suo contenuto
        let setthumbscssrules=(contenitore,misura)=>{

        $(contenitore).css("display","flex")
        $(contenitore+" li").css({"width":misura+"px","list-style-type":"none","cursor":"pointer"})
        $(contenitore+" li img").css("width","100%")

       
        }
        //Definisce la larghezza del contenitore thumbs
        let setthumbswidth=(contenitore,misura)=>{

            let thwidth = array.length*misura
            $(contenitore).css("width",thwidth+"px")
        }




        this.mainimage=function(){

            $(this.big).html("<img src="+setfirstimg()+">")
            setbigcssrules()

        }

        this.createthumbs=function(contenitore,misura)
        {
            this.arrimg.forEach(function(v,k){

                let ele = $("<li></li>")
                ele.html("<img src="+v+">")
                $(contenitore).append(ele)

                //click--
                ele.click(function(){
                    let url =$(this).find("img").attr("src")
                    $(big).html("<img src="+url+">")
                   //risetto le regole CSS per BIG
                   setbigcssrules()
                })

            })
            setthumbswidth(contenitore,misura)
            setthumbscssrules(contenitore,misura)
        }





     //end OBJ   
    }




