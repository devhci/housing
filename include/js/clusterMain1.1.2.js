var cityCircle;
	
	
	var script = '<script type="text/javascript" src="js/markerclusterer';
      if (document.location.search.indexOf('compiled') !== -1) {
        script += '_packed';
      }
      script += '.js"><' + '/script>';
      document.write(script);
	  
	  clickcounter=0;
	 var map;
	 var markers = [];
	  var markerCluster;
	 
	 var geocoder;
	 var styles = [[{
        url: 'images/button.png',
        height: 50,
        width: 50,
        anchor: [16, 0],
        textColor: 'white',
        textSize: 15
      
      }]];
	  var PlaceAvalable = [
      "Sector 45, gurgaon",
      "Dlf phase 3",
      "Cyber city",
      "sector 21",
      "iffco chock",
      "sushant lok 1",
      "Dundahera",
      "Sector 23",
      "Sukrale",
      "Dlf Phase 2",
      "Sector 25",
      "Sushant Lok",
      " Galleria market,dlf pahse 4",
      "Gallaria marker",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
	  "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
	  "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
	
	
	   
	 
      function initialize() {
       
	   
	   geocoder = new google.maps.Geocoder();
	   var center = new google.maps.LatLng(28.46688,77.048149);
	   
	  
	   
	  

	   

      map = new google.maps.Map(document.getElementById('map-canvas'), {
            zoom:12,
            center: center,
		     maxZoom: 16,
		     minZoom: 11,
             mapTypeId: google.maps.MapTypeId.ROADMAP
        });

 
      /* search(map);*/
		
		placeMarker();
		
        markerCluster = new MarkerClusterer(map, markers,{
          maxZoom:15,
          gridSize: 60,
		  ignoreHidden:true,
          styles: styles[0]
        });
		
			
		$("#photo1").click(function(){
          $(".iframe").colorbox({iframe:true, width:"50%", height:"70%"});
         });
	
		
			$(".exit").click(function(){
              exitbuttonfunction();
             });
			 
			 
			 $(".region-dropdown").mouseenter(function(){
			
			  $("#location_search").show();
			
			 });
			 
			 $("#location_search").mouseleave(function(){
			
			  $("#location_search").hide();
			
			 });
			 
			 
			  
			 $(".bedrooms-dropdown").mouseenter(function(){
			
			  $("#bedroom_type").show();
			
			 });
			 
			 $(".bedrooms-dropdown").mouseleave(function(){
			
			  $("#bedroom_type").hide();
			
			 });
			 
			 
	
	 
    $("#target1").autocomplete({
      source: PlaceAvalable,
	  minLength:1
	  
    });
		
	


showMarker('PG');
showMarker('1RK');

showMarker('1BHK');
showMarker('2BHK');	

showMarker('3BHK');
showMarker('4BHK');		
		
      }
	  

    function  codeAddress()
	{
	
	codeAddress1();
	document.getElementById("target1").value="";
	hide(cityCircle);
	document.getElementById("target1").value="";
	}

    /*  draw circle at searched locations   */
  function codeAddress1() {
    var address = document.getElementById("target1").value;
	
	searchInGurgaonOnly(address); 
	if(address=="")
	{ alert("type any Near by Land mark");return false;}
	address=address +",gurgaon";
	
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map.setZoom(15),
            position: results[0].geometry.location
        });
        
		 
		var populationOptions = {
      strokeColor: 'blue',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: 'white',
      fillOpacity: 0.35,
      map: map,
      center: results[0].geometry.location,
      radius: 500
    };
cityCircle = new google.maps.Circle(populationOptions);
  
     
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
    return false;
  }

 
	  function searchInGurgaonOnly(address){
	  
	  
	  
	  
	  
	  
	  
	  }
	  
	  
	  
	  
	  
	function exitbuttonfunction()
  {
       $(".info-window").hide();
              clickcounter=0;
			  $('.val').remove();
			  $('.apt_type').remove();
			  $('.Street_Info_val').remove();
  }	
	 
	
	function addValueInDetail( id)
   {
 var a =getDetailOfClickedMarker(id);
  
	
 $('.rent').append('<span class="val">'+ id +'</span>');
 $('.aptType').append('<span class="apt_type">'+a[0]+'</span>');
  $('.rentamount').append('<span class="val">'+ id +'</span>');
$('.Street_Info').append('<span class="Street_Info_val">'+ a[1] +'</span>')  
  
   }
	  
	
	 
	 

 function showinfowindow(id)
	  {
	   
	   if(clickcounter==0)
	   { $(".info-window").toggle();
	  
	   addValueInDetail( id);
	   clickcounter ++;
	  }
	  
	  else
	 
	  {
	    
	   $(".info-window").toggle();
	  
	   }
	  
	  }	 
	  
	  
	 
	function getDetailOfClickedMarker(id)
	  {
	    var Marker_Details = new Array(4);
		
		for(var i=0;i<36;i++)
	    {
		  if(data.putmarkers[i].House_id==id)
		  {
		 Marker_Details[0] = data.putmarkers[i].House_type;
		 Marker_Details[1] = data.putmarkers[i].Street_Info;
         return Marker_Details;
      
	  	 }
		  
		
		}
		
	 
	  } 
 	 
	  
	function placeMarker()
    {

        for (var i = 0; i < 36; i++) {
          var dataPhoto = data.putmarkers[i];
          var latLng = new google.maps.LatLng(dataPhoto.latitude,dataPhoto.longitude);
		  
		  
		  
		  var flatImage = new google.maps.MarkerImage(dataPhoto.photo_url,
					new google.maps.Size(130,50),
					
					new google.maps.Point(0,0),
					new google.maps.Point(50,50)
				);
				
				
          var marker = new google.maps.Marker({
            position: latLng,
			map: map,
					icon: flatImage,
			        title:dataPhoto.Marker_title,
					id:dataPhoto.House_id
				
			
          });
		  
		  marker.House_type = dataPhoto.House_type;
          
          markers.push(marker);
		  
		  google.maps.event.addListener(marker, 'click', function() {
					
					
					
					showinfowindow(this.id);

					
					
					
					
				});							
        }
	
	
	}	
	  
	  
	  function boxclick(box,category) {
       
         

	   if (box.checked) {
	  showMarker(category);
	   
        } else {
          hideMarker(category);
        }
        // == rebuild the side bar
        /*makeSidebar();*/
      }
	  
	  
	   function showMarker(category) {
        for (var i=0; i<markers.length; i++) {
          if (markers[i].House_type == category) {
            markers[i].setVisible(true);
          }
        }
		markerCluster.repaint();
        // == check the checkbox ==
        document.getElementById(category+"box").checked = true;
      }
	  
	  function hideMarker(category) {
        for (var i=0; i<markers.length; i++) {
          if (markers[i].House_type == category) {
            markers[i].setVisible(false);
          }
        }
		markerCluster.repaint();
        // == clear the checkbox ==
        document.getElementById(category+"box").checked = false;
        // == close the info window, in case its open on a marker that we just hid
        
      }
	 
	function ifAllbox()
	{
	
	for (var i=0; i<markers.length; i++) {
          
            markers[i].setVisible(false);
          
        }
	
	
	}
	     
function hide(cityCircle){

cityCircle.setMap(null);
}
      google.maps.event.addDomListener(window, 'load', initialize);