const fs = require('fs');
const path = require('path');

const renames = [
  { old: "public/graphics/Drew Feig.png", new: "public/graphics/drew-feig.png" },
  { old: "public/graphics/Buld the Main Character.png", new: "public/graphics/build-the-main-character.png" },
  { old: "public/graphics/Red Pink Modern Geometric Speaker Poster.png", new: "public/graphics/speaker-poster.png" },
  { old: "public/graphics/Tech Talk.png", new: "public/graphics/tech-talk.png" },
  { old: "public/graphics/canvas'26.png", new: "public/graphics/canvas-26.png" },
  { old: "public/graphics/ecsoc coming soon.png", new: "public/graphics/ecsoc-coming-soon.png" },
  { old: "public/graphics/Saikat Logo.png", new: "public/graphics/saikat-logo.png" },
  { old: "public/graphics/1 2.png", new: "public/graphics/graphic-1-2.png" },
  { old: "public/graphics/1 3.png", new: "public/graphics/graphic-1-3.png" },
  { old: "public/graphics/2 2.png", new: "public/graphics/graphic-2-2.png" },
  { old: "public/graphics/3 2.png", new: "public/graphics/graphic-3-2.png" },
  { old: "public/graphics/4.png", new: "public/graphics/graphic-4.png" },
  { old: "public/graphics/5.jpg", new: "public/graphics/graphic-5.jpg" },
  { old: "public/graphics/6.jpg", new: "public/graphics/graphic-6.jpg" },
  { old: "public/graphics/Beyond Campus, Into the Future (1) (1).png", new: "public/graphics/beyond-campus.png" },
  { old: "public/graphics/Brown and White Modern New Fashion Poster (3).png", new: "public/graphics/fashion-poster.png" },
  { old: "public/graphics/Zync It or Risk it. (4).png", new: "public/graphics/zync-it.png" },
  { old: "public/graphics/campuskart promotion.png", new: "public/graphics/campuskart-promotion.png" },
  { old: "public/graphics/To get a chance to win (1).jpg", new: "public/graphics/lucky-draw.jpg" },
  { old: "public/graphics/1 (1).jpg", new: "public/graphics/visual-concept-1.jpg" },
  { old: "public/graphics/1.png", new: "public/graphics/visual-concept-2.png" },
  { old: "public/graphics/2.png", new: "public/graphics/visual-concept-3.png" },
  { old: "public/graphics/3.png", new: "public/graphics/visual-concept-4.png" },
  { old: "public/1440P Wallpaper Messi and Jesus.jpeg", new: "public/graphics/messi-and-jesus.jpeg" },
  { old: "public/Untitled design (2).png", new: "public/graphics/creative-design.png" },
  { old: "public/sp.jpeg", new: "public/graphics/atmospheric.jpeg" },
  { old: "public/_ (37).jpeg", new: "public/graphics/abstract-37.jpeg" },
  { old: "public/_ (38).jpeg", new: "public/graphics/abstract-38.jpeg" },
  { old: "public/_ (40).jpeg", new: "public/graphics/abstract-40.jpeg" },
  { old: "public/graphics/Beige Pink Retro Music Song Concert Fest Poster.png", new: "public/graphics/music-festival-poster.png" },
  { old: "public/graphics/Developer (1).png", new: "public/graphics/developer-graphic.png" },
  { old: "public/graphics/Lemon Yellow Fresh Summer Sale Insta Post.png", new: "public/graphics/summer-sale.png" },
  { old: "public/graphics/campuskart card.png", new: "public/graphics/campuskart-card.png" },
  { old: "public/graphics/zynvo Carousel/1.png", new: "public/graphics/zynvo-carousel-1.png" },
  { old: "public/graphics/zynvo Carousel/2.png", new: "public/graphics/zynvo-carousel-2.png" },
  { old: "public/graphics/zynvo Carousel/3.png", new: "public/graphics/zynvo-carousel-3.png" },
  { old: "public/graphics/zynvo Carousel/4.png", new: "public/graphics/zynvo-carousel-4.png" },
  { old: "public/graphics/zynvo Carousel/5.png", new: "public/graphics/zynvo-carousel-5.png" },
  { old: "public/graphics/zynvo Carousel/6.png", new: "public/graphics/zynvo-carousel-6.png" },
  { old: "public/graphics/zynvo Carousel/7.png", new: "public/graphics/zynvo-carousel-7.png" },
  { old: "public/graphics/iit dairy/1.png", new: "public/graphics/iit-dairy-1.png" },
  { old: "public/graphics/iit dairy/2.png", new: "public/graphics/iit-dairy-2.png" },
  { old: "public/graphics/iit dairy/3.png", new: "public/graphics/iit-dairy-3.png" },
  { old: "public/graphics/iit dairy/4.png", new: "public/graphics/iit-dairy-4.png" },
  { old: "public/graphics/iit dairy/5.png", new: "public/graphics/iit-dairy-5.png" },
  { old: "public/graphics/solo show.png", new: "public/graphics/solo-show.png" },
  { old: "public/graphics/gala.png", new: "public/graphics/gala.png" }
];

renames.forEach(rename => {
  if (fs.existsSync(rename.old)) {
    fs.renameSync(rename.old, rename.new);
    console.log(`Renamed ${rename.old} to ${rename.new}`);
  } else {
    console.log(`File not found: ${rename.old}`);
  }
});
