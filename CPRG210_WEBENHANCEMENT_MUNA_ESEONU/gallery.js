const imgList = [
    {
      id:           234,
      title:        'Maldive Islands, Maldives',
      source:       'Lorem Picsum',
      fileName:     '234.jpg',
      website: 'https://en.wikipedia.org/wiki/Tourism_in_the_Maldives',
      attribution:  {
        source: 'Lorem Picsum',
        credit: 'Hisham Haroon',
        url:  'https://images.unsplash.com/photo-1589805518140-f88a50fd1dbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80',
        
      },
    
    },
    {
      id:           235,
      title:        'Gili Lankanfushi Maldives, Maldives',
      fileName:     '235.jpg',
      website: 'https://gili-lankanfushi.com/',
      attribution:  {
        source: 'Lorem Picsum',
        credit: 'Syd Sujuaan',
        url:  'https://images.unsplash.com/photo-1585572336833-4f34f2101c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        
      }
    },
    {
      id:           236,
      title:        'CHOM, Chiangmai, Thailand',
      fileName:     '236.jpg',
      website: 'https://www.tripadvisor.ca/Tourism-g790337-Chom_Thong-Vacations.html',
      attribution:  {
        source: 'Lorem Picsum',
        credit: 'Mandy Choi',
        url:  'https://images.unsplash.com/photo-1560851691-ebb64b584d3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1075&q=80',
      
      }
    },
    {
      id:           237,
      title:        'manhattan',
      fileName:     '237.jpg',
      website: 'https://www.timeout.com/newyork/attractions/top-attractions-in-manhattan',
      attribution:  {
        source: 'Lorem Picsum',
        credit: 'Yeshi Kangrang',
        url:  'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
        
      }
    },
    {
      id:           238,
      title:        'Semeru, Indonesia',
      fileName:     '238.jpg',
      website: 'https://www.eastjava.com/tourism/malang/semeru-tourism.html',
      attribution:  {
        source: 'Lorem Picsum',
        credit: 'Dwinanda Nurhanif Mujito',
        url:  'https://images.unsplash.com/photo-1535968881874-0c39f1503640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    
      }
    },
    {
      id:           239,
      title:        'Marina Bay, Singapore',
      fileName:     '239.jpg',
      website: 'https://www.stb.gov.sg/content/stb/en.html',
      attribution:  {
        source: 'Lorem Picsum',
        credit: 'Victor He',
        url:  'https://images.unsplash.com/photo-1584455907764-1b160c49a533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1076&q=80',
      }
    }    
]

    let imgTemplate = ''; 
    
    
    // Flex container for images
    const gallery = document.querySelector('.gallery'); 

    console.log(gallery);

    // Let's run the loop!
    // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code

    for (let i = 0; i < imgList.length; i++){
      
      // This loop will run for every image in the list.

      // imgTemplate gradually grows as each HTML img is added to the existing string

      // imgTemplate = imgTemplate + `<img src="https://picsum.photos/id/${imgList[i]}/250/250" alt="Random Lorem Picsum">`;

      // This is the same as the line above except using addition assignment operator
      
      imgTemplate += `<img src="${imgList[i].fileName}" alt= ${imgList[i].title}</h1> <a href= ${imgList[i].website} </a>`;
      
    
    }
    // Add HTML img string to gallery container
    gallery.innerHTML = imgTemplate;


    