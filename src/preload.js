var imgs = [];
const src = [
  "./imgs/indio-1.jpg"          ,
  "./imgs/indio-2.jpg"          ,
  "./imgs/indio-3.jpg"          ,
  "./imgs/indio-4.png"          ,
];
        
for(var i=0, l=src.length; i<l; i++) {
  imgs[i] = new Image();
  imgs[i].src = src[i];
}




