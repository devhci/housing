var cityCircle;
var circleArray=[];
 var icons;
var rent;
var flag_markerArray =[];
var flag_marker ;
var Marker_Details;
var MapRoute=[];
var planeMarker=0;
var countForlistBusStopFirstTime=0;
var countForlistTrainStopFirstTime=0;

var countForlistBusStopNotFound=0;
var countForlistTrainStopNotFound=0;

var countForlistBusStopTimeDisplay=0;
var countForlistTrainStopTimeDisplay=0;
var   airportShowCounter=0;
 var directionsService = new google.maps.DirectionsService();;
var time=[];
var  count=0;
var travelTime ;
var airportTravelTime;
var clickvalueoftransport;
var service;
var zoomOnExit;
var priviousClickedId;
var markerIconstore;



		   var selectedMarker;/* = new google.maps.Marker({
            position: latLng,
			map: map,
					icon: flatImage,
					 shadow: flatshadow,
			        title:v.Marker_title,
					id:v.House_id
				
			
          });
		  
		  marker.House_type = v.House_type;
		  marker.House_rent = v.House_rent;
          		  
          */

 var lat_lang={
   lat:0,
   lang:0
 
 
 };
 google.maps.visualRefresh = true;
 var select_image_for_places; 
 
 var circle_close_marker;
 var circle_count=0;
 var marker_id;
 var marker_tracker=[];
 var House_Type={
	   PG_Boys:0,
	    PG_Girls:0,
	   RK1:0,
	   BHK1:0,
       BHK2:0,
       BHK3:0	   
	  };	
	
	var script = '<script type="text/javascript" src="js/markerclusterer';
      if (document.location.search.indexOf('compiled') !== -1) {
        script += '_packed';
      }
      script += '.js"><' + '/script>';
      document.write(script);
	  
	 var clickcounter=0;
	 var map;
	 var markers = [];
	 
	 var places_markers=[];
	 var places_marker;
	  var markerCluster;
	  var flag;
	 
	 var geocoder;
	 var styles = [[{
        url: 'images/button.png',
        height: 50,
        width: 50,
        anchor: [16, 0],
        textColor: 'white',
        textSize: 15
      
      }]];
	 


	   
	 
      function initialize() {
       
	   
	   geocoder = new google.maps.Geocoder();
	   var center = new google.maps.LatLng(28.46688,77.048149);
	   
	  

	  

	   

      map = new google.maps.Map(document.getElementById('map-canvas'), {
             zoom:13,
             center: center,
		     maxZoom: 17,
		     minZoom: 12,
             mapTypeId: google.maps.MapTypeId.ROADMAP
        });

 
      /* search(map);*/
		
		placeMarker();
		
  
	
		autocompletePlaceSearch();	
		    
		/*$("#photo1").click(function(){
          $(".iframe").colorbox({iframe:true, width:"50%", height:"70%"});
         });*/
		 
		 
		 $("#photo").click(function(){
         $(".details-pane").hide();
		 $("#neighbourhood").hide();
		 $("#photo1").show();
		 $("#commute").hide();
		
		 showAllOtherMarkerAfterSwitch();
		  marker_tracker.length=0;
		  clearRoute();
		map.setZoom(zoomOnExit);
		  hide(circleArray);
		 
         });
	
		$(".btn-black").click(function(){
		if(flag=1)
		$("#needFlatModal").hide(100);
		$("#listFlatModal").show();
		$("#listFlatForm").show();

         $(".modal-backdrop").show();
         $("#listFlatSuccess").hide();
		flag=0;
		});
		
		
		$(".btn-blue").click(function(){
		if(flag==0)
		$("#listFlatModal").hide(100);
		$("#needFlatModal").show();
		$("#needFlatForm").show();

          $(".modal-backdrop").show();
         $("#needFlatSuccess").hide();
		flag=1;
		});
		
		$(".close").click(function(){
		
		$("#listFlatModal").hide(100);
		
		$("#needFlatModal").hide();
		$(".modal-backdrop").hide();
		$("#contact_details").hide();
		});
		
		
		$("#fullscreen").click(function (){
		
		$(".group2").colorbox({rel:'group2', transition:"fade"});
		
		
		});
		
		
			
		$("#video").click(function (){
		
$(".vimeo").colorbox({iframe:true, innerWidth:640, innerHeight:390});		
		
		});
		
			
		
		$(".group2").colorbox({rel:'group2', transition:"fade"});
		
		
		$("#neighbourhood1").click(function(){
		$(".details-pane").hide();
		$("#neighbourhood").show();
		$("#commute").hide();
		$("#photo1").hide();
		
		hideAllOtherMarker();
		hideAllPlaceMarker();
		
		if(circleArray.length==0)
		drawCircleOnNearByClick();
		clearRoute();
		
		});
		
		
		
		$("#commute1").click(function(){
		$(".details-pane").hide();
		$("#neighbourhood").hide();
		$("#photo1").hide();
		$("#commute").show();
		 /*map.setZoom(13);*/
		 hideAllOtherMarker();
		 clearRoute();
		 hide(circleArray);
		});
		
		
		
		
		$("#detail1").click(function(){
		$(".details-pane").show();
		$("#neighbourhood").hide();
		$("#commute").hide();
		$("#photo1").hide();
		
		
		   showAllOtherMarkerAfterSwitch();
		    marker_tracker.length=0;
		    clearRoute();
		
		    hide(circleArray);
			map.setZoom(zoomOnExit);
		
		});
		
		
		$("#broker_contact").click(function(){
		
		$(".modal-backdrop").show();
		$("#contact_details").show();
		 
		});
		
		$(".modal-backdrop").click(function(){
		
		$(".modal-backdrop").hide();
		$("#contact_details").hide();
		$("#listFlatModal").hide(100);
		
		$("#needFlatModal").hide();
		
		});
		
		
		
		
		
			$(".exit").click(function(){
			var center=  new google.maps.LatLng(lat_lang['lat'],lat_lang['lang']);
			  map.setCenter(center);
              exitbuttonfunction(priviousClickedId);
			  
			map.setZoom(zoomOnExit);
			
			 
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
			 
			 
			 
			  
			 $(".furnishing-dropdown").mouseenter(function(){
			
			  $("#furnish_type").show();
			
			 });
			  
			 $(".furnishing-dropdown").mouseleave(function(){
			
			  $("#furnish_type").hide();
			
			 });
			 
			
			$('input[name=transport]').attr('checked',false);
			
			 
			 $( ".slider" ).slider({
      range: "min",
      value:78,
      min: 1,
      max: 99,
      slide: function( event, ui ) {
      
        // While sliding, update the value in the #amount div element
        $( "#rentHigherLimit" ).html("Rs "+ ui.value+" K" );
		 
		 /*document.getElementById("PG_Boys"+"box").checked=false;*/
		/* document.getElementById("1RK"+"box").checked=false;*/
		 /*document.getElementById("1BHK"+"box").checked=false;*/
		 /*document.getElementById("2BHK"+"box").checked=false;*/
		 /*document.getElementById("3BHK"+"box").checked=false;*/
		updateMarkerOnSlide();
        
      }
	  
    }); 
	
	/* 
    $("#target1").autocomplete({
      source: PlaceAvalable,
	  minLength:1,
	  select: function( event, ui ) {
	       
			
			codeAddress();
	 }
	
	  
    }).keypress(function(e) { if (e.keyCode === 13)  {codeAddress();} });*/
		
	
	
	$("input:radio[name=transport]").change(function() {
       var value = $(this).val();
	  
	   if (value==1)
	   {
	    map.setZoom(11); 
	   clearRoute();
	    var radius=2000;
		
        
	    showTransportationonclick('train_station',radius);
	    
	 $(".train-stations").children(".results").show();
	  
	    $(".bus-stations").children(".results").hide();
	   $(".airports").children(".results").hide();
	   
	 /*  $(".bus-stations").children(".results").hide();
	   $(".airports").children(".results").hide();
	   */}
	   
	   
	   if (value==2)
	   {
	   
	   clearRoute();
	     var radius=1000;
		   map.setZoom(12); 
	   showTransportationonclick('bus_station',radius);
	   
	  $(".bus-stations").children(".results").show();
	  
	    $(".train-stations").children(".results").hide();
	   $(".airports").children(".results").hide();
	  /*
	     $(".train-stations").children(".results").hide();
		 $(".airports").children(".results").hide();
		 */
	   }
	   
	   if (value==3)
	   {

	   airport();
	   clearRoute();
	   if(airportShowCounter==0){
	    $(".airports").children(".results").append('<li class="airport_distance" data-value="0">I.G.International AirPort </li>');
	     airportShowCounter++;
		 }
		 $(".airports").children(".results").show();
	     $(".bus-stations").children(".results").hide();
		  $(".train-stations").children(".results").hide();

	   }
	   
	   
	   
	   
       });
	   
	
	
	$('#listFlatFormData').submit(function() {
     
				   
$.fn.serializeObject = function()

{

    var o = {};

    var a = this.serializeArray();

    $.each(a, function() {

        if (o[this.name] !== undefined) {

            if (!o[this.name].push) {

                o[this.name] = [o[this.name]];

            }

            o[this.name].push(this.value || '');

        } else {

            o[this.name] = this.value || '';

        }

    });

    return o;

};
		
		
		      $.ajax({ 
               type : "POST",
               url : "http://localhost/website/18-6-2103/include/api/list/",
                data : {
                 json : JSON.stringify($('#listFlatFormData').serializeObject()) 
                  },
                 success: function() {  
                
                 $("#listFlatForm").hide();

                 $("#listFlatSuccess").show();
		   
            },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                   $("#listFlatForm").hide();

                  $("#listFlatError").show();
                }			
        });  
        
		
	return false;	

    });

	
	
	
$('#needFlatFormData').submit(function() {
     
				   
$.fn.serializeObject = function()

{

    var o = {};

    var a = this.serializeArray();

    $.each(a, function() {

        if (o[this.name] !== undefined) {

            if (!o[this.name].push) {

                o[this.name] = [o[this.name]];

            }

            o[this.name].push(this.value || '');

        } else {

            o[this.name] = this.value || '';

        }

    });

    return o;

};
		
		
		      $.ajax({ 
               type : "POST",
               url : "http://localhost/website/18-6-2103/include/api/need/",
                data : {
                 json : JSON.stringify($('#needFlatFormData').serializeObject()) 
                  },
                 success: function() {  
                
                 $("#needFlatForm").hide();

                 $("#needFlatSuccess").show();
		   
            },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                   $("#needFlatForm").hide();

                  $("#needFlatError").show();
                }			
        });  
        
		
	return false;	

    });

	
	

      }
	  

    function  codeAddress()
	{
	
	codeAddress1();
	document.getElementById("target1").value="";
	hide(circleArray);
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
		
		var image = {
      url: 'images/close1.png',
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(12, 25),
      scaledSize: new google.maps.Size(25, 25)
    };

      /*
	  circle_close_marker = new google.maps.Marker({
            
			icon:image,           
		     map: map,
			 title:" click to remove circle",
             position: results[0].geometry.location
        });
		
		google.maps.event.addListener(circle_close_marker, 'click', function() {
   
        hide(circleArray);
        circle_close_marker.setMap(null);
   
        });*/
		
        circle_count++;
		map.setZoom(16); 
		var populationOptions = {
      strokeColor: 'blue',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: 'white',
      fillOpacity: 0.35,
      map: map,
      center: results[0].geometry.location,
      radius: 800
    };
/*cityCircle = new google.maps.Circle(populationOptions);
  circleArray.push(cityCircle);*/
     
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
    return false;
  }

 
	  function searchInGurgaonOnly(address){
	  
	  
	  
	  
	  
	  
	  
	  }
	  
	  
	  function clearRoute()
	  {
	  if(MapRoute.length!=0){
	  for(var i=0;i<MapRoute.length; i++)
			   {
			    MapRoute[i].setMap(null);
				
				}
				}
				
				if(planeMarker!=0)
				{
				
				planeMarker.setMap(null);
	
				}
	  }
	  
	  
	function exitbuttonfunction(priviousClickedId)
  {  

              countForlistBusStopFirstTime=0;
              countForlistTrainStopFirstTime=0;
			  countForlistBusStopTimeDisplay=0;
              countForlistTrainStopTimeDisplay=0;
			  airportShowCounter=0;
			  
			  countForlistBusStopNotFound=0;
              countForlistTrainStopNotFound=0;
			  $('input[name=transport]').attr('checked',false);
			 
		   $(".info-window").hide();
              clickcounter=0;
			  $('.val').remove();
			 /* $('.apt_type').remove();
			  $('.Street_Info_val').remove();
			  */
			  $("#photo1").show();
			  $(".details-pane").hide();
		      $("#neighbourhood").hide();
		      $("#commute").hide();
			   showAllOtherMarkerAfterSwitch();
			   marker_tracker.length=0;
			   hideAllPlaceMarker();
			   clearRoute();
			   
			  $(".results").children().remove();
			  if(airportShowCounter!=0)
			  $(".airports").children(".results").children(".airport_distance").children().remove();
			  hide(circleArray);
			  
			  if(priviousClickedId)
			  { for(var i=0;i<markers.length;i++)
						 {if(markers[i].id==priviousClickedId)
						 {
						  switch(markers[i].House_type)
						  
						  {
						    case "PG_Boys":
						      markers[i].setIcon("images/marker/PG.png");
						       break;
							   case "PG_Girls":
							   markers[i].setIcon("images/marker/PG.png");
							   break;
							   case "1BHK":
							   markers[i].setIcon("images/marker/1BHK.png");
							   break;
							   case "1RK":
							   markers[i].setIcon("images/marker/1RK.png");
							   break;
						  }
						 break;
						 }
						 }
			  
			      priviousClickedId=0;
			  }
			 
			   
  }	
	 
	
	function addValueInDetail(id)
   {
 /*var a =getDetailOfClickedMarker(id);*/
  
 
 

var url = "http://localhost/include/api/need/data/featchContent.php?House_id="+id;
  $.getJSON(url, function(json) {
               
                $.each(json, function(k, v) {    
                	
  $('.rent').append('<span class="val">'+v.House_rent +'</span>');
  $('.aptType').append('<span class="val">'+v.House_type+'</span>');
  $('.rentamount').append('<span class="val">'+ v.House_rent +'</span>');
  $('.Street_Info').append('<span class="val">'+ v.Street_Info +'</span>')      
  $('.securityDeposit').append('<span class="val">'+ v.Security_deposit +'</span>');  
  $('.leaseType').append('<span class="val">'+ v.Lease_type +'</span>');  
  $('.area').append('<span class="val">'+ v.Area +'</span>');
  $('.bedrooms').append('<span class="val">'+ v.Bedrooms +'</span>');
  $('.bathrooms').append('<span class="val">'+ v.Bathrooms +'</span>');
  $('.ac').append('<span class="val">'+ v.Ac +'</span>');
  $('.tv').append('<span class="val">'+ v.Tv +'</span>');
  $('.bed').append('<span class="val">'+ v.Bed +'</span>');
  $('.cupboards').append('<span class="val">'+ v.Cupboards +'</span>');
   if(v.Microwave==true)
   {
   $('.microwave').append('<span class="val"><i class="icon icon-ok"></i></span>');
   }else
      $('.microwave').append('<span class="val"><i class="icon icon-remove"></i></span>');
  
  if(v.WashingMachine==true)
   {
   $('.washingMachine').append('<span class="val"><i class="icon icon-ok"></i></span>');
   }else
      $('.washingMachine').append('<span class="val"><i class="icon icon-remove"></i></span>');
	  
	if(v.SwimmingPool==true)
   {
   $('.swimmingPool').append('<span class="val"><i class="icon icon-ok"></i></span>');
   }else
      $('.swimmingPool').append('<span class="val"><i class="icon icon-remove"></i></span>');
	 
	
	if(v.Lift==true)
   {
   $('.lift').append('<span class="val"><i class="icon icon-ok"></i></span>');
   }else
      $('.lift').append('<span class="val"><i class="icon icon-remove"></i></span>'); 
	  
	  
	  if(v.Gym==true)
   {
   $('.gym').append('<span class="val"><i class="icon icon-ok"></i></span>');
   }else
      $('.gym').append('<span class="val"><i class="icon icon-remove"></i></span>'); 
	  
	  if(v.Stove==true)
   {
   $('.stove').append('<span class="val"><i class="icon icon-ok"></i></span>');
   }else
      $('.stove').append('<span class="val"><i class="icon icon-remove"></i></span>'); 
	 
	 if(v.GasPipeline==true)
   {
   $('.gasPipeline').append('<span class="val"><i class="icon icon-ok"></i></span>');
   }else
      $('.gasPipeline').append('<span class="val"><i class="icon icon-remove"></i></span>'); 
	  
	  if(v.Sofa==true)
   {
   $('.sofa').append('<span class="val"><i class="icon icon-ok"></i></span>');
   }else
      $('.sofa').append('<span class="val"><i class="icon icon-remove"></i></span>'); 
    
	 
	  if(v.Fridge==true)
   {
   $('.fridge').append('<span class="val"><i class="icon icon-ok"></i></span>');
   }else
      $('.fridge').append('<span class="val"><i class="icon icon-remove"></i></span>'); 
	  
	  if(v.DiningTable==true)
   {
   $('.diningTable').append('<span class="val"><i class="icon icon-ok"></i></span>');
   }else
      $('.diningTable').append('<span class="val"><i class="icon icon-remove"></i></span>'); 
	  
	  if(v.Parking==true)
   {
   $('.parking').append('<span class="val"><i class="icon icon-ok"></i></span>');
   }else
      $('.parking').append('<span class="val"><i class="icon icon-remove"></i></span>'); 
    
        
		    lat_lang['lat']=v.latitude;
		    lat_lang['lang']=v.longitude;	

			   });
				
        	
		
        });

  
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
	   clickcounter ++;
	  
	   }
	  
	  }	 
	  
	  
	 
	function getDetailOfClickedMarker(id)
	  {
	     Marker_Details = new Array();
		
		for(var i=0;i<markers.length;i++)
	    {
		  if(data.putmarkers[i].House_id==id)
		  {
		 Marker_Details[0] = data.putmarkers[i].House_type;
		 Marker_Details[1] = data.putmarkers[i].Street_Info;
		 Marker_Details[2] = data.putmarkers[i].House_rent;
		 lat_lang['lat']=data.putmarkers[i].latitude;
		 lat_lang['lang']=data.putmarkers[i].longitude;
		
         return Marker_Details;
      
	  	 }
		  
		
		}
		
	 
	  } 
 	 
	  
	function placeMarker()
    {
           
		service = new google.maps.places.PlacesService(map);   
		   
		   
var url = "http://localhost/include/api/need/data/";
  $.getJSON(url, function(json) {
           i=1;
		   
		   
                $.each(json, function(k, v) 
				{ 	

     var latLng = new google.maps.LatLng(v.latitude,v.longitude);
		  
		  
		  
		  var flatImage = new google.maps.MarkerImage(v.photo_url,
					new google.maps.Size(70,40),
					
					new google.maps.Point(0,0),
					new google.maps.Point(10,10)
				);
				
				  
		  var flatshadow = new google.maps.MarkerImage(v.MarkerShadow,
					new google.maps.Size(70,40),
					
					new google.maps.Point(0,0),
					new google.maps.Point(10,10)
				);
				
				
          var marker = new google.maps.Marker({
            position: latLng,
			map: map,
					icon: flatImage,
					 shadow: flatshadow,
			        title:v.Marker_title,
					id:v.House_id
				
			
          });
		  
		  

		  marker.House_type = v.House_type;
		  marker.House_rent = v.House_rent;
          
          markers.push(marker);
		  
		  google.maps.event.addListener(marker, 'click', function()
		       {
			      
					if(priviousClickedId!=this.id)
					
					{  
					/*
					     for(var i=0;i<markers.length;i++)
						 {if(markers[i].id==priviousClickedId)
						 {
						  switch(markers[i].House_type)
						  
						  {
						    case "PG_Boys":
						      markers[i].setIcon("images/marker/PG.png");
						       break;
							   case "PG_Girls":
							   markers[i].setIcon("images/marker/PG.png");
							   break;
							   case "1BHK":
							   markers[i].setIcon("images/marker/1BHK.png");
							   break;
							   case "1RK":
							   markers[i].setIcon("images/marker/1RK.png");
							   break;
						  }
						 break;
						 }
						 }
						 
					    */
						  
				  
						 
						 this.setIcon(this.getShadow());
					    exitbuttonfunction(priviousClickedId);
					   showinfowindow(this.id);	
                    }else{
					  

                 for(var i=0;i<markers.length;i++)
				 {
				      if(markers[i].id==priviousClickedId)
						 {
						  switch(markers[i].House_type)
						  
						  {
						    case "PG_Boys":
						      markers[i].setIcon("images/marker/PG.png");
						       break;
							   case "PG_Girls":
							   markers[i].setIcon("images/marker/PG.png");
							   break;
							   case "1BHK":
							   markers[i].setIcon("images/marker/1BHK.png");
							   break;
							   case "1RK":
							   markers[i].setIcon("images/marker/1RK.png");
							   break;
						  }
						 break;
						 }
						 }					 
					 showinfowindow(this.id);
					 if(clickcounter%2!=0)
                  this.setIcon(this.getShadow());  
					 }
					 
					/* 
					  if (selectedMarker) {
             selectedMarker.setIcon(this.getIcon());
			  exitbuttonfunction();
			 showinfowindow(this.id);
         }else{
		  
					   showinfowindow(this.id);	}
        marker.setIcon(this.getShadow());
        selectedMarker = marker;
		             
		*/
				  priviousClickedId=this.id;
				  
                   marker_id=this.id;
                  /*map.setCenter(this.getPosition());*/
                  zoomOnExit=map.getZoom();
  				
				});	
				
                
			
		
				});
					
				markerCluster = new MarkerClusterer(map, markers,{
          maxZoom:16,
          gridSize: 60,
		  ignoreHidden:true,
          styles: styles[0]
        });	
				
        });
		 
	
		
		
	
	}	
	  /******************************************update Logic starts**********************/
	  
	  function updateMarkerOnSlide()
	  {
	  rent = $( ".slider" ).slider( "value" )*1000;
	
		
	 if(!document.getElementById("PG_Boys"+"box").checked&&!document.getElementById("PG_Girls"+"box").checked&&!document.getElementById("1RK"+"box").checked&&!document.getElementById("1BHK"+"box").checked&&!document.getElementById("2BHK"+"box").checked&&!document.getElementById("3BHK"+"box").checked)
	 {for (var i=0; i<markers.length; i++) 
		 {
          if ( markers[i].House_rent > rent )
		   { 
            markers[i].setVisible(false);
           }else		   
		   markers[i].setVisible(true);
         }
		markerCluster.repaint();
	 return false;
	}
	 
	
	 if(document.getElementById("PG_Boys"+"box").checked==true && document.getElementById("1RK"+"box").checked==true &&document.getElementById("2BHK"+"box").checked==true&&document.getElementById("1BHK"+"box").checked==true )
	  {
	 
	  
	  for(var i=0;i<markers.length;i++)
	   if((markers[i].House_type=="PG_Boys"||markers[i].House_type=="1RK"||markers[i].House_type=="2BHK"||markers[i].House_type=="1BHK") && markers[i].House_rent < rent)
	       markers[i].setVisible(true);
	     else
	     markers[i].setVisible(false);
	    
	  
	      markerCluster.repaint();
	  return false;
	  } 
	  
	 if(document.getElementById("PG_Boys"+"box").checked==true && document.getElementById("2BHK"+"box").checked==true&&document.getElementById("1BHK"+"box").checked==true )
	  {
	 
	  
	  for(var i=0;i<markers.length;i++)
	   if((markers[i].House_type=="PG_Boys"||markers[i].House_type=="2BHK"||markers[i].House_type=="1BHK") && markers[i].House_rent < rent)
	       markers[i].setVisible(true);
	     else
	     markers[i].setVisible(false);
	    
	  
	      markerCluster.repaint();
	  return false;
	  } 
	 
	 
	 
	 if(document.getElementById("PG_Boys"+"box").checked==true && document.getElementById("1RK"+"box").checked==true &&document.getElementById("1BHK"+"box").checked==true)
	  {
	 
	  
	  for(var i=0;i<markers.length;i++)
	   if((markers[i].House_type=="PG_Boys"||markers[i].House_type=="1RK"||markers[i].House_type=="1BHK") && markers[i].House_rent < rent)
	       markers[i].setVisible(true);
	     else
	     markers[i].setVisible(false);
	    
	  
	      markerCluster.repaint();
	  return false;
	  }
	  
	   
	 if(document.getElementById("PG_Boys"+"box").checked==true && document.getElementById("1RK"+"box").checked==true &&document.getElementById("2BHK"+"box").checked==true)
	  {
	 
	  
	  for(var i=0;i<markers.length;i++)
	   if((markers[i].House_type=="PG_Boys"||markers[i].House_type=="1RK"||markers[i].House_type=="2BHK") && markers[i].House_rent < rent)
	       markers[i].setVisible(true);
	     else
	     markers[i].setVisible(false);
	    
	  
	      markerCluster.repaint();
	  return false;
	  }
	 
	 

	 if(document.getElementById("PG_Boys"+"box").checked==true && document.getElementById("1RK"+"box").checked==true)
	  {
	 
	  
	  for(var i=0;i<markers.length;i++)
	   if((markers[i].House_type=="PG_Boys"||markers[i].House_type=="1RK") && markers[i].House_rent < rent)
	       markers[i].setVisible(true);
	     else
	     markers[i].setVisible(false);
	    
	  
	      markerCluster.repaint();
	  return false;
	  }
	
	 if(document.getElementById("PG_Boys"+"box").checked==true )
	  {
	 
	  
	  for(var i=0;i<markers.length;i++)
	   if(markers[i].House_type=="PG_Boys" && markers[i].House_rent < rent)
	       markers[i].setVisible(true);
	     else
	     markers[i].setVisible(false);
	    
	  
	      markerCluster.repaint();
	  return false;
	  }
	  
	  
	  if(document.getElementById("PG_Girls"+"box").checked==true )
	  {
	 
	  
	  for(var i=0;i<markers.length;i++)
	   if(markers[i].House_type=="PG_Girls" && markers[i].House_rent < rent)
	       markers[i].setVisible(true);
	     else
	     markers[i].setVisible(false);
	    
	  
	      markerCluster.repaint();
	  return false;
	  }
	  
	  if(document.getElementById("2BHK"+"box").checked==true )
	  {
	 
	  
	  for(var i=0;i<markers.length;i++)
	   if(markers[i].House_type=="2BHK" && markers[i].House_rent < rent)
	       markers[i].setVisible(true);
	     else
	     markers[i].setVisible(false);
	    
	  
	      markerCluster.repaint();
	  return false;
	  }
	  
	  if(document.getElementById("1RK"+"box").checked==true )
	  {
	 
	  
	  for(var i=0;i<markers.length;i++)
	   if(markers[i].House_type=="1RK" && markers[i].House_rent < rent)
	       markers[i].setVisible(true);
	     else
	     markers[i].setVisible(false);
	    
	  
	      markerCluster.repaint();
	  return false;
	  }
	  if(document.getElementById("1BHK"+"box").checked==true )
	  {
	 
	  
	  for(var i=0;i<markers.length;i++)
	   if(markers[i].House_type=="1BHK" && markers[i].House_rent < rent)
	       markers[i].setVisible(true);
	     else
	     markers[i].setVisible(false);
	    
	  
	      markerCluster.repaint();
	  return false;
	  }
	
	
	}
	
	
	
	/********************update Logic Ends***********/
	
	  function boxclick(box,category) {
       
           rent = $( ".slider" ).slider( "value" )*1000;

	   if (box.checked) {
	  
	   
	    switch (category) {
    case '1RK':
	    House_Type["RK1"]=1;
        showMarker('1RK');
		if(!document.getElementById("PG_Boys"+"box").checked)
		hideMarker('PG_Boys');
		if(!document.getElementById("2BHK"+"box").checked)
		hideMarker('2BHK');
		if(!document.getElementById("1BHK"+"box").checked)
		hideMarker('1BHK');
		if(!document.getElementById("PG_Girls"+"box").checked)
		hideMarker('PG_Girls');
		if(!document.getElementById("3BHK"+"box").checked)
		hideMarker('3BHK');
        break;
    case 'PG_Boys':
      
        House_Type["PG_Boys"]=1;
		showMarker('PG_Boys');
		
		if(!document.getElementById("1RK"+"box").checked)
		hideMarker('1RK');
		if(!document.getElementById("2BHK"+"box").checked)
		hideMarker('2BHK');
		if(!document.getElementById("1BHK"+"box").checked)
		hideMarker('1BHK');
		
		if(!document.getElementById("PG_Girls"+"box").checked)
		hideMarker('PG_Girls');
		if(!document.getElementById("3BHK"+"box").checked)
		hideMarker('3BHK');
        break;
	case 'PG_Girls':
      
        House_Type["PG_Girls"]=1;
		showMarker('PG_Girls');
		
		if(!document.getElementById("PG_Boys"+"box").checked)
		hideMarker('PG_Boys');
		if(!document.getElementById("1RK"+"box").checked)
		hideMarker('1RK');
		if(!document.getElementById("2BHK"+"box").checked)
		hideMarker('2BHK');
		if(!document.getElementById("1BHK"+"box").checked)
		hideMarker('1BHK');
		if(!document.getElementById("3BHK"+"box").checked)
		hideMarker('3BHK');
        break;	
		
    case '2BHK':
       House_Type["BHK2"]=1;
        showMarker('2BHK');
		if(!document.getElementById("1RK"+"box").checked)
		hideMarker('1RK');
		if(!document.getElementById("PG_Boys"+"box").checked)
		hideMarker('PG_Boys');
		if(!document.getElementById("1BHK"+"box").checked)
		hideMarker('1BHK');
		if(!document.getElementById("PG_Girls"+"box").checked)
		hideMarker('PG_Girls');
		if(!document.getElementById("3BHK"+"box").checked)
		hideMarker('3BHK');
        break;
	case '1BHK':
        House_Type["BHK1"]=1;
        showMarker('1BHK');
		if(!document.getElementById("1RK"+"box").checked)
		hideMarker('1RK');
		if(!document.getElementById("PG_Boys"+"box").checked)
		hideMarker('PG_Boys');
		if(!document.getElementById("2BHK"+"box").checked)
		hideMarker('2BHK');
		if(!document.getElementById("PG_Girls"+"box").checked)
		hideMarker('PG_Girls');
		if(!document.getElementById("3BHK"+"box").checked)
		hideMarker('3BHK');
        break;
		
		
case '3BHK':
        House_Type["BHK3"]=1;
        showMarker('3BHK');
		if(!document.getElementById("1RK"+"box").checked)
		hideMarker('1RK');
		if(!document.getElementById("PG_Boys"+"box").checked)
		hideMarker('PG_Boys');
		if(!document.getElementById("2BHK"+"box").checked)
		hideMarker('2BHK');
		if(!document.getElementById("2BHK"+"box").checked)
		hideMarker('1BHK');
		if(!document.getElementById("PG_Girls"+"box").checked)
		hideMarker('PG_Girls');
        break;		
    default:
        alert("hgfhgdh");
        break;
    }
	  
        }else
		{
		 
		
		hideMarker(category);
		if(!document.getElementById("PG_Boys"+"box").checked&&!document.getElementById("1BHK"+"box").checked && !document.getElementById("2BHK"+"box").checked && !document.getElementById("1RK"+"box").checked&&!document.getElementById("PG_Girls"+"box").checked &&!document.getElementById("3BHK"+"box").checked)
		   {showAll();
		   
		   }
		}
        // == rebuild the side bar
        /*makeSidebar();*/
      }
	  
	  
	   function showMarker(category) {
       
 
	   for (var i=0; i<markers.length; i++) {
          if ( markers[i].House_type == category && ( markers[i].House_rent < rent) ){
            markers[i].setVisible(true);
          }
        }
		markerCluster.repaint();
	
		
   }


		
        
  
	  
	  function hideMarker(category) {
        for (var i=0; i<markers.length; i++) {
          if (markers[i].House_type == category ||(markers[i].House_rent >rent)) {
            markers[i].setVisible(false);
          }
        }
		markerCluster.repaint();
        // == clear the checkbox ==
       /* document.getElementById(category+"box").checked = false;*/
        // == close the info window, in case its open on a marker that we just hid
        
      }
	 
	function showAll()
	{
	  rent = $( ".slider" ).slider( "value" )*1000;
	
	for (var i=0; i<markers.length; i++) {
         
		 if(markers[i].House_rent < rent)
		     {
			 markers[i].setVisible(true);
			 
			 
			 }
           
		   markerCluster.repaint();
        }
	
	
	}
	     
function hide(circleArray){

if(circle_count!=0)
{
alert("came inside"+ circle_close_marker.visible);

}

for(var i=0;i<circleArray.length;i++)
circleArray[i].setMap(null);
circleArray.length=0;

hideAllPlaceMarker();
}

function showAllOtherMarkerAfterSwitch()
{  

for(var i=0;i<markers.length;i++)
{
 for (var j=0;j<marker_tracker.length;j++)
if(markers[i].id==marker_tracker[j])
  markers[i].setVisible(true);
markerCluster.repaint();
}



}
	  
function hideAllPlaceMarker()
{


if(places_markers.length!=0)
{
for(var i=0;i<places_markers.length;i++)
{
places_markers[i].setMap(null);
}

}
else
return;

}	  
      
function hideAllOtherMarker()
{

if(marker_tracker.length==0){
 
for(var i=0;i<markers.length;i++)
 if(markers[i].visible && markers[i].id!=marker_id)
 {
 marker_tracker[i]=markers[i].id;
 markers[i].setVisible(false);
 }
}

}
	  
function neighbourhoodclick(placeclicked){


placeSearchNearBy(map,placeclicked);

}	  
	  
function drawCircleOnNearByClick()
{

var pyrmont = new google.maps.LatLng(lat_lang['lat'],lat_lang['lang']);
  
map.setZoom(14);

map.setCenter(pyrmont);

  var populationOptions = {
      strokeColor: 'blue',
      strokeOpacity: 0.8,
      strokeWeight: 0.5,
      fillColor: 'white',
      fillOpacity: 0.35,
      map: map,
      center:pyrmont,
      radius: 2000
    };
cityCircle = new google.maps.Circle(populationOptions);
  
circleArray.push(cityCircle); 

}


	  
function placeSearchNearBy(map,placeclicked)
{


  select_image_for_places=placeclicked;
  var pyrmont = new google.maps.LatLng(lat_lang['lat'],lat_lang['lang']);

 
  var request = {
    location: pyrmont,
    radius: 1500,
    types: [placeclicked]
  };
 

  
  service.nearbySearch(request, callback);
}

	  

function callback(results, status) {
  if (status != google.maps.places.PlacesServiceStatus.OK) {
    
	hideAllPlaceMarker();
   return ;
  } else {
 
    hideAllPlaceMarker();
    createMarkers(results);

    
  }
}

function createMarkers(places) {
  var bounds = new google.maps.LatLngBounds();
var url_images;

switch(select_image_for_places)
{
case 'bank':
  url_images='images/atm.png';
 break;
 
case 'school':
url_images='images/school.png';
break


case 'post_office':
url_images='images/post.png';
break;


case 'park':
url_images='images/park.png';
break;

case 'bar':
url_images='images/bar.png';
break;

case 'hospital':
url_images='images/hospital.png';
break;


case 'place_of_worship':
url_images='images/temple.png';
break;

case 'shopping_mall' :
url_images='images/mall.png';
break;

default:
   url_images='images/mall.png';

}
  
 
  
  for (var i = 0, place; place = places[i]; i++) {
   
   var image = {
      url: url_images,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(12, 25),
      scaledSize: new google.maps.Size(25, 25)
    };

     places_marker = new google.maps.Marker({
      map: map,
      icon: image,
       title: place.name,
	   tooltip: place.name,
      position: place.geometry.location
    });
	 
	
	

   places_markers.push(places_marker);
     

    bounds.extend(place.geometry.location);
  }
  
}	  
	  

function  showTransportationonclick(clickvalue,radius)

{
clickvalueoftransport=clickvalue;

  var pyrmont = new google.maps.LatLng(lat_lang['lat'],lat_lang['lang']);

 
  var request = {
    location: pyrmont,
    radius: radius,
    types: [clickvalue]
  };
 

  
  service.nearbySearch(request, callBackForTransport);

}	



function callBackForTransport(results, status) {
  if (status != google.maps.places.PlacesServiceStatus.OK) {
    hideAllPlaceMarker();
	
	switch(clickvalueoftransport)
	 {
	 case 'bus_station':
	 
	if( countForlistBusStopNotFound==0)
{
	 $(".bus-stations").children(".results").append('<li class="" style=" width:96%;" data-value="0"> No Bus Stop found with in 1000 meter</li>');
     countForlistBusStopNotFound++;
 
	 }	 
	 break;
	 
	 	 case "train_station":
		 
  if( countForlistTrainStopNotFound==0){
	$(".train-stations").children(".results").append('<li class="" style=" width:96%;" data-value="0"> No Metro station found with in 2 K.M</li>');
	 
  countForlistTrainStopNotFound++;
	 }
	 break;
	 
	
	
	}
	
   return ;
  } else {
  
    hideAllPlaceMarker();
    createMarkersForTransport(results);

    
  }
}  
	  

	  function createMarkersForTransport(places)
	  {
	  
	  var bounds = new google.maps.LatLngBounds();
var url_images;

switch(select_image_for_places)
{
case 'atm':
  url_images='images/atm.png';
 break;
 
case 'school':
url_images='images/school.png';
break;



default:
   url_images='images/train.png';

}
  
 
  
  for (var i = 0, place; place = places[i]; i++) {
   
   var image = {
      url: url_images,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(12, 25),
      scaledSize: new google.maps.Size(25, 25)
    };

     places_marker = new google.maps.Marker({
      map: map,
      icon: image,
       title: place.name,
	   tooltip: place.name,
      position: place.geometry.location
    });
	calcRoute(place.geometry.location,i,places.length);
	
	 switch(clickvalueoftransport)
	 {
	 case 'bus_station':
	 if(countForlistBusStopFirstTime<places.length){
	 $(".bus-stations").children(".results").append('<li style="line-height: 14px;" id="a" class="remove_bus_'+i+'" data-value="0">'+ place.name +'</li>');
	 countForlistBusStopFirstTime++;
	 }
	 break;
	 
	 	 case "train_station":
		 if(countForlistTrainStopFirstTime<places.length){
	$(".train-stations").children(".results").append('<li style="line-height: 14px;" id="b" class="remove_train_'+i+'" data-value="0">'+ place.name +'</li>');
	 countForlistTrainStopFirstTime++;
	 }
	 break;
	 
	
	
	}
 places_markers.push(places_marker);
     

    bounds.extend(place.geometry.location);
  }
	  
	  
	  }
	  
	  
	  
function calcRoute(end,i,places_length) {

icons = {
  start: new google.maps.MarkerImage(
   // URL
   '',
   // (width,height)
   new google.maps.Size( 70, 50 ),
   // The origin point (x,y)
   new google.maps.Point( 0, 0 ),
   // The anchor point (x,y)
   new google.maps.Point( 70,50 )
  ),
  end: new google.maps.MarkerImage(
   // URL
    '',
   // (width,height)
   new google.maps.Size( 50, 50 ),
   // The origin point (x,y)
   new google.maps.Point( 10, 10 ),
   // The anchor point (x,y)
   new google.maps.Point( 25,25 )
  )
 };

var pyrmont = new google.maps.LatLng(lat_lang['lat'],lat_lang['lang']);


  var request = {
    origin: pyrmont,
    destination: end,
   
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
 var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true,preserveViewport:true});
   
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
MapRoute.push(directionsDisplay);
map.setZoom(14);
map.setCenter(pyrmont);
	  /*directionsArray.push(directionsDisplay);*/
	   var leg = response.routes[ 0 ].legs[ 0 ];
 
 
 switch(clickvalueoftransport)
 {
  case "train_station":
  if(countForlistTrainStopTimeDisplay<places_length)
 $(".train-stations").children(".results").children(".remove_train_"+i).append('<span class="duration">'+leg.duration.text+'</span>');
 countForlistTrainStopTimeDisplay++;
 break;
 case "bus_station":
 if(countForlistBusStopTimeDisplay<places_length)
 $(".bus-stations").children(".results").children(".remove_bus_"+i).append('<span class="duration">'+leg.duration.text+'</span>');
 countForlistBusStopTimeDisplay++;
 break;
 }
time[time.length+1]= leg.duration.text;    
	 makeMarker( leg.end_location, icons.end, 'IGI AIRPORT' );
	  
    }
  });
  directionsDisplay.setMap(map);
  map.setCenter(pyrmont);
    
}



function airport()
{



	   hideAllPlaceMarker();


icons = {
  start: new google.maps.MarkerImage(
   // URL
   '',
   // (width,height)
   new google.maps.Size( 70, 50 ),
   // The origin point (x,y)
   new google.maps.Point( 0, 0 ),
   // The anchor point (x,y)
   new google.maps.Point( 70,50 )
  ),
  end: new google.maps.MarkerImage(
   // URL
    'images/airport_large.png',
   // (width,height)
   new google.maps.Size( 120, 80 ),
   // The origin point (x,y)
   new google.maps.Point( 5, 5 ),
   // The anchor point (x,y)
   new google.maps.Point( 25,25 )
  )
 };

var pyrmont = new google.maps.LatLng(lat_lang['lat'],lat_lang['lang']);


  var request = {
    origin: pyrmont,
    destination: "IGI AirPort, new delhi",
   
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
 var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
   
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
MapRoute.push(directionsDisplay);

	  /*directionsArray.push(directionsDisplay);*/
	   var leg = response.routes[ 0 ].legs[ 0 ];
	   
 airportTravelTime=leg.duration.text;
  
      makeplaneMarker( leg.end_location, icons.end, 'IGI AIRPORT' );
	  
	  if(airportShowCounter==1)
	  {
	  $(".airports").children(".results").children(".airport_distance").append('<span class="duration">'+airportTravelTime+'</span>'); 
	  airportShowCounter++;
	  }
    }
  });
  directionsDisplay.setMap(map);
  map.setCenter(pyrmont);


}
function makeplaneMarker( position, icon, title ) {
  planeMarker=new google.maps.Marker({
  position: position,
  map: map,
  icon: icon,
  title: title
 });
}	

function makeMarker( position, icon, title ) {
  new google.maps.Marker({
  position: position,
  map: map,
  icon: icon,
  title: title
 });
}	  


function needFlat()
{
alert("called need flat");



}


function listFlat()
{



$(function() {

    $('#listFlatFormData').submit(function() {
     $("#listFlatForm").hide();
        $('#result').text(JSON.stringify($('#listFlatFormData').serializeObject()));

        return false;

    });

});

/*
 var dataString="hjkfgkdhfkghdjkgh";
      $.ajax({  
            type: "POST",  
            url: "fgcontactform.php",  
            data: dataString,  
            success: function() {  
               
     $("#listFlatForm").hide();


      $("#listFlatSuccess").show();
 
            }  
        });  
        return false; 
    
*/


}

function autocompletePlaceSearch()
{

  var input = /** @type {HTMLInputElement} */(document.getElementById('target1'));
  var autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.bindTo('bounds', map);
 autocomplete.setTypes(['geocode']);
  

  

  google.maps.event.addListener(autocomplete, 'place_changed', function() {

 if(flag_markerArray.length!=0){
 for(var i=0;i<flag_markerArray.length;i++)
 flag_markerArray[i].setMap(null);
 }
 
    autocomplete.setTypes(['geocode']);   
    input.className = '';
    var place = autocomplete.getPlace();
	
    if (!place.geometry) {
      // Inform the user that the place was not found and return.
      input.className = 'notfound';
      return;
    }
	
	
	var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || ''),
		  (place.address_components[3] && place.address_components[3].short_name || '')
      ].join(' ');
    }
	
	var n=address.match(/Gurgaon/g);
	
if(n!=null){
    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
	  map.setZoom(16);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
	 
		  var flagImage = new google.maps.MarkerImage("images/flag.png",
					new google.maps.Size(130,50),
					
					new google.maps.Point(0,0),
					new google.maps.Point(50,50)
				);
				
	 flag_marker = new google.maps.Marker({
    map: map,
	icon:flagImage,
	position:place.geometry.location,
	title:place.name
  });
  
  
    flag_marker.setVisible(true);
  flag_markerArray.push(flag_marker);
    }
    
  });
}	  
	  
	  
google.maps.event.addDomListener(window, 'load', initialize);
	  
	  
	  
	  
	  