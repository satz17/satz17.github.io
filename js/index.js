$(document).ready(function () {
      
    //all the code goes here
    //animation developer text

    var count= 0;

    //calling the function to perform animation developer text
    developer_animation();

    //defining the function
    function developer_animation(){
         
        //this is the code for animation
         setTimeout(function() {
            count++;
            if(count==1){
                title="S";
            } else if(count==2){
                title="Sa";
            } else if(count==3){
                title="Sat";
            } else if(count==4){
                title="Sath";
            } else if(count==5){
                title="Sathi";
            } else if(count==6){
                title="Sathis";
            } else if(count==7){
                title="Sathish";
            } 

            if (count != 8) {

                $('.title').text(` I'm  ${title}`);
                developer_animation();
            }else if (count ==8) {
                count=0;
                setTimeout(function() {
                   
                   //this will be performed after 1sec
                    designer_animation();
                },1000);
            }

         }, 100);
    }

    //animating designer text
    function designer_animation() {

        setTimeout(function () {
            count++;
            if(count==1){
                title="P";
            } else if(count==2){
                title="Pr";
            } else if(count==3){
                title="Pro";
            } else if(count==4){
                title="Prog";
            } else if(count==5){
                title="Progr";
            } else if(count==6){
                title="Progra";
            } else if(count==7){
                title="Program";
            } else if(count==8){
                title="Programm";
            } else if(count==9){
                title="Programme";
            } else if(count==10){
                title="Programmer";
            }

            if (count != 11) {

                $('.title').text(` I'm a ${title}`);
                designer_animation();
            }else if (count ==11) {
                count=0;
                setTimeout(function() {
                   
                   //this will be performed after 1sec
                    developer_animation();
                },1000);
            }

        }, 100);
    }



//adding effects to see resume button
  $('.see_resume').mouseenter(function(){

    $(this).css('background-color','rgb(154, 205, 50)');
  })

  $('.see_resume').mouseleave(function(){

    $(this).css('background-color','rgb(255, 255, 0)');
  })

   animate_title();
  function animate_title(){
    
          
    setTimeout(function(){
        $(".java_name").animate({ fontSize: "+=30px" }, 500);
        $(".java_name").animate({ letterSpacing: "+=15px" }, 1000);
        $(".adobe_name").animate({ fontSize: "+=30px" }, 500);
        $(".adobe_name").animate({ letterSpacing: "+=15px" }, 1000);
        $(".android_name").animate({ fontSize: "+=30px" }, 500);
        $(".android_name").animate({ letterSpacing: "+=15px" }, 1000);
  
        setTimeout(function () {
          $(".java_name").animate({ fontSize: "-=30px" }, 500);
          $(".java_name").animate({ letterSpacing: "-=15px" }, 1000);
          $(".adobe_name").animate({ fontSize: "-=30px" }, 500);
          $(".adobe_name").animate({ letterSpacing: "-=15px" }, 1000);
          $(".android_name").animate({ fontSize: "-=30px" }, 500);
          $(".android_name").animate({ letterSpacing: "-=15px" }, 1000);
          animate_names();
          }, 4000);
      }, 2000);
    }   
    

    $('.project_name').text('WorkRe');
  $('.project_content').text('This application contains a list of all work cafes near you, you can make booking in any cafes you want by selecting the time and date at which you will be arriving at the cafe.')
  //Changing project images while clicking next and prev
  var project_count = 1;
  $('.next').click(function () {
    if (project_count == 4) {
      project_count = 0;
    }
    project_count++;
    $('.actual_img').attr('src', '/img/project_' + project_count + '.png');
    if (project_count == 1) {
      $('.project_name').text('WorkRe');
      $('.project_content').text('This application contains a list of all work cafes near you, you can make booking in any cafes you want by selecting the time and date at which you will be arriving at the cafe.')
    } else if (project_count == 2) {
      $('.project_name').text('MovieMan');
      $('.project_content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')
    } else if (project_count == 3) {
      $('.project_name').text('Geofence App');
      $('.project_content').text('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum');
    } else if (project_count == 4) {
      $('.project_name').text('TechUtsav');
      $('.project_content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')

    }

  });

  $('.prev').click(function () {
    if (project_count == 1) {
      project_count = 5;
    }
    project_count--;
    $('.actual_img').attr('src', '/img/project_' + project_count + '.png');
    if (project_count == 1) {
      $('.project_name').text('WorkRe');
      $('.project_content').text('This application contains a list of all work cafes near you, you can make booking in any cafes you want by selecting the time and date at which you will be arriving at the cafe.')
    } else if (project_count == 2) {
      $('.project_name').text('MovieMan');
      $('.project_content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')
    } else if (project_count == 3) {
      $('.project_name').text('Geofence App');
      $('.project_content').text('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum');
    } else if (project_count == 4) {
      $('.project_name').text('TechUtsav');
      $('.project_content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')

    }

  });






})


