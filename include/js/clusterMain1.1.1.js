
	var script = '<script type="text/javascript" src="js/markerclusterer';
      if (document.location.search.indexOf('compiled') !== -1) {
        script += '_packed';
      }
      script += '.js"><' + '/script>';
      document.write(script);
	  
	  clickcounter=0;
	
      function initialize() {
       var center = new google.maps.LatLng(28.493323,77.097073);

        var map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom:16,
          center: center,
		   maxZoom: 20,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });


        var markers = [];
        for (var i = 0; i < 15; i++) {
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
		  
		  
          
          markers.push(marker);
		  
		  google.maps.event.addListener(marker, 'click', function() {
					
					
					
					showinfowindow(this.id);

					
					
					
					
				});
				
				
						
				
        }
        var markerCluster = new MarkerClusterer(map, markers);
		
			
		$("#photo1").click(function(){
          $(".iframe").colorbox({iframe:true, width:"50%", height:"70%"});
         });
	
		
			$(".exit").click(function(){
              exitbuttonfunction();
             });
			 
			 
			 jQuery("#neighbourhood1").click(function(){
			 
			 document.getElementById("#details").style.display="none";
			 document.getElementById("#neighbourhood").style.display="block";
			 
			 });
	
		
      }
	  
	  
	  
	function exitbuttonfunction()
  {
       $(".info-window").hide();
              clickcounter=0;
			  $('.val').remove();
			  $('.apt_type').remove();
  }	
	 
	
	function addValueInDetail( id)
   {
 var a =getDetailOfClickedMarker(id);
  
	
 $('.rent').append('<span class="val">'+ id +'</span>');
 $('.aptType').append('<span class="apt_type">'+a[0]+'</span>');
  $('.rentamount').append('<span class="val">'+ id +'</span>');	
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
		
		for(var i=0;i<15;i++)
	    {
		  if(data.putmarkers[i].House_id==id)
		  {
		 Marker_Details[0] = data.putmarkers[i].House_type;
		 Marker_Details[1] = data.putmarkers[i].Street_Info;
         return Marker_Details;
      
	  	 }
		  
		
		}
		
	 
	  } 
 	 
	  
	 
	  function hide(markers) {
        for (var i=0; i<markers.length; i++) {
          
            markers[i].setVisible(false);
         
        }
        // == clear the checkbox ==
      
        // == close the info window, in case its open on a marker that we just hid
       
      }
      google.maps.event.addDomListener(window, 'load', initialize);