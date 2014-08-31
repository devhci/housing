
	var script = '<script type="text/javascript" src="js/markerclusterer';
      if (document.location.search.indexOf('compiled') !== -1) {
        script += '_packed';
      }
      script += '.js"><' + '/script>';
      document.write(script);
	
      function initialize() {
       var center = new google.maps.LatLng(28.493323,77.097073);

        var map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom:16,
          center: center,
		   maxZoom: 20,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });


        var markers = [];
        for (var i = 0; i < 8; i++) {
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
			        title:dataPhoto.photo_title
				
			
          });
		  
		  
          
          markers.push(marker);
		  
		  google.maps.event.addListener(marker, 'click', function() {
					
					
					$(".info-window").toggle();
					
						
					
				});
				
				
						
				
        }
        var markerCluster = new MarkerClusterer(map, markers);
		
		
		
      }
	  
	  function hide() {
        for (var i=0; i<markers.length; i++) {
          if (markers[i].mycategory == category) {
            markers[i].setVisible(false);
          }
        }
        // == clear the checkbox ==
        document.getElementById(category+"box").checked = false;
        // == close the info window, in case its open on a marker that we just hid
        infowindow.close();
      }
      google.maps.event.addDomListener(window, 'load', initialize);