function initialize() {
        var center = new google.maps.LatLng(28.493323,77.097073);

        var map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom:14,
          center: center,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var markers = [];
		
		 var locations = [
      ['Bondi Beach',28.493663,77.09909, 'images/2BHK.png', 'PG For Girls  Unfurnished RS 7000'],
      ['Coogee Beach',28.4914,77.098017, 'images/1BHK.png','PG For Girls  Unfurnished RS 7000'],
      ['Cronulla Beach', 28.490042,77.094927, 'images/PG.png','PG For Girls  Unfurnished RS 7000'],
      ['Manly Beach',  28.490306,77.092266, 'images/2BHK.png','PG For Girls  Unfurnished RS 7000'],
      ['Maroubra Beach', 28.493323,77.097073, 'images/2BHK.png','PG For Girls  Unfurnished RS 7000'],
	  ['Maroubra Beach', 28.493393,77.097473, 'images/PG.png','PG For Girls  Unfurnished RS 7000'],
	  ['Maroubra Beach', 28.493363,77.097573, 'images/PG.png','PG For Girls  Unfurnished RS 7000'],
	  ['Maroubra Beach', 28.493343,77.097373, 'images/PG.png','PG For Girls  Unfurnished RS 7000'],
	  ['Maroubra Beach', 28.494343,77.097173, 'images/PG.png','PG For Girls  Unfurnished RS 7000'],
	  ['Maroubra Beach', 28.495343,77.097273,'images/1BHK.png','PG For Girls  Unfurnished RS 7000'],
	  ['Maroubra Beach', 28.493543,77.097473,'images/1BHK.png','PG For Girls  Unfurnished RS 7000'],
	  ['Maroubra Beach', 28.493323,77.097373, 'images/1BHK.png','PG For Girls  Unfurnished RS 7000'],
	  ['Maroubra Beach', 28.493343,77.097273, 'images/1BHK.png','PG For Girls  Unfurnished RS 7000']
    ];
	var locations1 = [
      ['Bondi Beach',28.493663,77.09909, 'images/1BHK.png'],
      ['Coogee Beach',28.4954,77.096017, 'images/1BHK.png'],
      ['Cronulla Beach', 28.480042,77.098927, 'images/1BHK.png'],
      ['Manly Beach',  28.490306,77.092266, 'images/1BHK.png'],
	  ['Cronulla Beach', 28.480042,77.098927, 'images/1BHK.png'],
      ['Manly Beach',  28.490306,77.092266, 'images/1BHK.png']
      
    ];
		
        for (var i = 0; i < locations.length; i++) {
          
          var latLng = new google.maps.LatLng(locations[i][1], locations[i][2]);
		  
		  if(i%2==0){
		  
		  var trainImage = new google.maps.MarkerImage(locations[i][3],
					new google.maps.Size(130,50),
					
					new google.maps.Point(0,0),
					new google.maps.Point(50,50)
				);
				
				
          var marker = new google.maps.Marker({
            position: latLng,
			map: map,
					icon: trainImage,
					
					title:locations[i][4],
				
			
          });
		  
				}
				else
				{
				var trainImage = new google.maps.MarkerImage(locations[i][3],
					new google.maps.Size(70,50),
					
					new google.maps.Point(0,0),
					new google.maps.Point(50,50)
				);
				
				
          var marker = new google.maps.Marker({
            position: latLng,
			map: map,
					icon: trainImage,
					
					title:locations[i][4],
				
			
          });
				}
				
				
		  
		  
          markers.push(marker);
		  
		  
		  google.maps.event.addListener(marker, 'click', function() {
					
					
					$(".info-window").toggle();
					
						
					
				});
        }
		  var markerCluster = new MarkerClusterer(map, markers);
		
		
		for (var i = 0; i < locations1.length; i++) {
          
          var latLng = new google.maps.LatLng(locations1[i][1], locations[i][2]);
		  
		  if(i%2==0){
		  
		  var trainImage = new google.maps.MarkerImage(locations1[i][3],
					new google.maps.Size(70,50),
					
					new google.maps.Point(10,10),
					new google.maps.Point(40,50)
				);
				
				
          var marker = new google.maps.Marker({
            position: latLng,
			map: map,
					icon: trainImage,
					
					title:locations1[i][4],
				
			
          });
		  
				}
				else
				{
				var trainImage = new google.maps.MarkerImage(locations1[i][3],
					new google.maps.Size(130,50),
					
					new google.maps.Point(0,0),
					new google.maps.Point(50,50)
				);
				
				
          var marker = new google.maps.Marker({
            position: latLng,
			map: map,
					icon: trainImage,
					
					title:locations1[i][4],
				
			
          });
				}
				
				
		  
		  
          markers.push(marker);
		  
		  
		  google.maps.event.addListener(marker, 'click', function() {
					
					
					$(".info-window").toggle();
					
						
					
				});
        }
		
		
        var markerCluster = new MarkerClusterer(map, markers);
		
		
		
		
		
		
		
      }
      google.maps.event.addDomListener(window, 'load', initialize);