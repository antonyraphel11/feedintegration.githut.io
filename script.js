$('#krzanaFeed').on('click', myFunction1);

$('#nyfeed').on('click', myFunction2);

function myFunction1(){


    $('.book').text('');    // Clear the prev loaded data
    //const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=5cdc85674f33427bb230e988713af614'

    var url = 'https://api.krzana.com/v3/publications?channel_ids[]=32735&limit=40';
    $.ajax({
        url: url,
        method: 'get',
        data: {
          format: "JSON"
        },
        success: function(data) {

            for (let i =0 ; i < data.length ; i++){

              const an = $('<a>')
                an.attr('id', "title" + i);
                an.attr('href', data[i].source_url);
                an.attr('target', '_blank');

                const title = $('<h1>');

                title.html(data[i].text);           
              
                an.append(title);
        
              $('.display').append(an);

              if (data[i].thumbnail){

              const img = $('<img />', { 
                id: 'imagei',
                src: data[i].thumbnail,
                alt: 'Test',
                width: "300",
                height: "200"
                
              });

              $('.display').append(img);
            }

            }

        },

        error: function(err) {

            console.log('Error')

        }
    })
    }
    

    function myFunction2(){

      $('.display').text(''); 

      var bookdata = false;

      //const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=5cdc85674f33427bb230e988713af614'
  
      var url = 'https://api.nytimes.com/svc/books/v3//reviews.json?author=Michelle+Obama&api-key=Ta4HRUawXKsb53vZAiugK1Vd8nKzKuFS';
      $.ajax({
          url: url,
          method: 'get',
          data: {
            format: "JSON"
          },
          success: function(data) {
  
            console.log(data) ;

            console.log(data.results[0].book_author) ;

            bookdata = true;

            //const author = data.results[0].book_author;
            //const title = data.results[0].book_title;
            //const byline= data.results[0].byline;
            //const summary = data.results[0].summary;
            //const url1 = data.results[0].url;
              
            // Write data to HTML
            
            const author = $('<h5>');
            author.html('Author: ' + data.results[0].book_author);
            $('.book').append(author);

            const title = $('<h5>');
            title.html('Title: '+ data.results[0].book_title);
            $('.book').append(title);

            const byline = $('<h5>');
            byline.html('Byline: '+ data.results[0].byline);
            $('.book').append(byline);

            const summary = $('<h5>');
            summary.html('Summary: ' + data.results[0].summary);
            $('.book').append(summary);                 
            
            // Anchor tag for URL
            
            const url = $('<a>')
            url.attr('id', "url1" );
            url.attr('href', data.results[0].url);
            url.attr('target', '_blank');

                const label = $('<h1>');

                label.html('Click Here for More Details'); 
                
                url.append(label);
              
                $('.book').append(url);
            


           /* document.getElementById("author").innerHTML = "Author: " + author;
            document.getElementById("title").innerHTML =  "Title: "+ title ;
            document.getElementById("byline").innerHTML = "Byline: " + byline;
            document.getElementById("summary").innerHTML = "Summary: " + summary ;
            document.getElementById("url").href = url1;*/
            
            
  
          },
  
          error: function(err) {
  
              console.log('Error')
  
          }
      })
      }
  