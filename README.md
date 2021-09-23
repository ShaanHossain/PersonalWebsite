# Overview:

This is my personal website.

I've deployed this project to an AWS EC2 that's
running a docker image of this project.

I'm using Route 53 to handle the DNS vs. the google 
one as I purchased this from google domains.

There's a load balancer currently routing all the traffice to my ECS cluster that has the EC2 in it.

The images are stored on ECR.

I have not gotten the SSL certificate working yet,
so I'm still waiting on the HTTPS version of this site. It did not go smoothly when I tried the AWS
version, so I might try with email or with getting
my certificate outside of AWS.


--------------------------------------

### Credit

Credit to beshleyua for the CSS styling for this website. This links to all the places the styling and icons come from.

Icons used:

FontAwesome - https://fontawesome.com/icons?d=gallery&s=brands,solid&m=free

--------------------------------------

Free Google Fonts used:

- Google Fonts, Roboto

--------------------------------------

Sourses

- Animate.css: https://daneden.github.io/animate.css/
- jQuery: https://jquery.com/
- Isotope: https://isotope.metafizzy.co/
- imagesLoaded: http://imagesloaded.desandro.com/
- jQuery Validation Plugin: http://jqueryvalidation.org/
- Magnific Popup: http://dimsemenov.com/plugins/magnific-popup/
- Swiper: https://swiperjs.com/
- SimpleParallax: https://simpleparallax.com/
- Jarallax.js: https://github.com/nk-o/jarallax
- Typed.js: https://mattboldt.com
- Grained.js: https://github.com/sarathsaleem/grained

--------------------------------------
