(function($) {
    "use strict";

    /*====================================Slice Circle chart============== */
    function sliceSize(dataNum, dataTotal) {
        return (dataNum / dataTotal) * 360;
      }
      function addSlice(sliceSize, pieElement, offset, sliceID, color) {
        $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
        var offset = offset - 1;
        var sizeRotation = -179 + sliceSize;
        $("."+sliceID).css({
          "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
        });
        $("."+sliceID+" span").css({
          "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
          "background-color": color
        });
      }
      function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
        var sliceID = "s"+dataCount+"-"+sliceCount;
        var maxSize = 179;
        if(sliceSize<=maxSize) {
          addSlice(sliceSize, pieElement, offset, sliceID, color);
        } else {
          addSlice(maxSize, pieElement, offset, sliceID, color);
          iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
        }
      }
      function createPie(dataElement, pieElement) {
        var listData = [];
        $(dataElement+" span").each(function() {
          listData.push(Number($(this).html()));
        });
        var listTotal = 0;
        for(var i=0; i<listData.length; i++) {
          listTotal += listData[i];
        }
        var offset = 0;
        var color = [
          "cornflowerblue", 
          "olivedrab", 
          "orange", 
          "tomato", 
          "crimson", 
          "purple", 
          "turquoise", 
          "forestgreen", 
          "navy", 
          "gray"
        ];
        for(var i=0; i<listData.length; i++) {
          var size = sliceSize(listData[i], listTotal);
          iterateSlices(size, pieElement, offset, i, 0, color[i]);
          $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
          offset += size;
        }
      }
      createPie(".pieID.legend", ".pieID.pie");




      /*=================Bar Charts============================== */
      $( ".chart_section" ).each(function() {
        var chart = $(this).find('ul');
        var chartBaseline = chart.data("baseline");
            console.log(chartBaseline);
        
        $(chart).find('li').each(function() {
            var bar = $(this);
            var barShape = $(this).find('i');
            var barData = bar.data("value");
            var barTotal = (Math.round((barData / chartBaseline) * 100) + '%');
            
            barShape.css({
          //"height": barTotal,
                "flex": '0 0 ' + barTotal,
          //"width": barTotal
        })
            console.log(barTotal);
            //bar.addClass(barData);
            //$(this).find('li').addClass('test');
        });
    });
    
    //console.log($('ul li:first-of-type').data("value"))

    /*-----------------progress chart------------ */
    setTimeout(function start (){
  
        $('.bar').each(function(i){  
          var $bar = $(this);
          $(this).append('<span class="count"></span>')
          setTimeout(function(){
            $bar.css('width', $bar.attr('data-percent'));      
          }, i*100);
        });
      
      $('.count').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).parent('.bar').attr('data-percent')
          }, {
              duration: 2000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now) +'%');
              }
          });
      });
      
      }, 500)
      
})(jQuery);




