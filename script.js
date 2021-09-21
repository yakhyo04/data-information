const all = document.querySelector('#all');
const about = document.querySelector('#about');
const products = document.querySelector('#products');


const data = [
    {
        imgSrc: 'https://picsum.photos/500',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus voluptates labore inventore ipsa eius sit! In sequi quidem vel.'      
    },
    {
        imgSrc: 'https://picsum.photos/500?random=2',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus voluptates labore inventore ipsa eius sit! In sequi quidem vel.'      
    },
    {
        imgSrc: 'https://picsum.photos/500?random=3',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus voluptates labore inventore ipsa eius sit! In sequi quidem vel.'      
    },
    {
        imgSrc: 'https://picsum.photos/500?random=4',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus voluptates labore inventore ipsa eius sit! In sequi quidem vel.'      
    },
    {
        imgSrc: 'https://picsum.photos/500?random=5',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus voluptates labore inventore ipsa eius sit! In sequi quidem vel.'      
    },
    {
        imgSrc: 'https://picsum.photos/500?random=6',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus voluptates labore inventore ipsa eius sit! In sequi quidem vel.'      
    }
];

const data2 = [
    {
        imgSrc: 'https://picsum.photos/500',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus voluptates labore inventore ipsa eius sit! In sequi quidem vel.'      
    },
    {
        imgSrc: 'https://picsum.photos/500?random=2',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus voluptates labore inventore ipsa eius sit! In sequi quidem vel.'      
    },
    {
        imgSrc: 'https://picsum.photos/500?random=3',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus voluptates labore inventore ipsa eius sit! In sequi quidem vel.'      
    },
    {
        imgSrc: 'https://picsum.photos/500?random=4',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus voluptates labore inventore ipsa eius sit! In sequi quidem vel.'      
    }
];

const data3 = [
    {
        imgSrc: 'https://picsum.photos/500',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus voluptates labore inventore ipsa eius sit! In sequi quidem vel.'      
    },
    {
        imgSrc: 'https://picsum.photos/500?random=2',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus voluptates labore inventore ipsa eius sit! In sequi quidem vel.'      
    },
    {
        imgSrc: 'https://picsum.photos/500?random=3',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus voluptates labore inventore ipsa eius sit! In sequi quidem vel.'      
    }
];


all.addEventListener('submit', (e)=>{
        
    e.preventDefault();

    data.forEach((dat) => {
        let newLi = document.createElement('li');
        let title = document.createElement('h2');
        let img = document.createElement('img');
        let desc = document.createElement('p');
    
        title.textContent = dat.title;
        desc.textContent = dat.description;
        img.setAttribute('src', dat.imgSrc)
        newLi.setAttribute('class', 'box')
    
        newLi.appendChild(img)
        newLi.appendChild(title)
        newLi.appendChild(desc)
    
        list.appendChild(newLi)
        
    })
})

about.addEventListener('submit', (e)=>{
    
    e.preventDefault();

    data2.forEach((data2) => {
        let newLi = document.createElement('li');
        let title = document.createElement('h2');
        let img = document.createElement('img');
        let desc = document.createElement('p');
    
        title.textContent = data2.title;
        desc.textContent = data2.description;
        img.setAttribute('src', data2.imgSrc)
        newLi.setAttribute('class', 'box')
    
        newLi.appendChild(img)
        newLi.appendChild(title)
        newLi.appendChild(desc)
    
        list.appendChild(newLi)
    })
})                              
                                            
products.addEventListener('submit', (e)=>{  
    e.preventDefault();
    data3.forEach((data3) => {
        let newLi = document.createElement('li');
        let title = document.createElement('h2');
        let img = document.createElement('img');
        let desc = document.createElement('p');
    
        title.textContent = data3.title;
        desc.textContent = data3.description;
        img.setAttribute('src', data3.imgSrc)
        newLi.setAttribute('class', 'box')
    
        newLi.appendChild(img)
        newLi.appendChild(title)
        newLi.appendChild(desc)
    
        list.appendChild(newLi)
    })
})