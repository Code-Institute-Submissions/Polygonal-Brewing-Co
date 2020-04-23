![alt text](https://jumboduck.github.io/Polygonal-Brewing-Co/wireframes/polygonal-readme-logo.png "Polygonal Brewing Co. logo")

# POLYGONAL BREWING CO. WEBSITE

## DESCRIPTION

This is the front-facing website of a hypothetical craft brewery. Its purpose is to invite visitors to its facilities while highlighting its products and elevating its brand.
It is divided in 4 pages:

-   Home: introduces the brewery and gives information about access
-   Beers: showcases the brewery’s products in an attractive way
-   Brewery: explains the company’s ethos and values
-   Visit: a form for users to plan a visit and get in touch

## DEPLOYMENT AND LIVE DEMO

The site has been deployed to github and is accessible on [github pages](https://jumboduck.github.io/Polygonal-Brewing-Co/).

## WIREFRAME

A detailed wire framing process was undertaken to oversee the structure of the site and ensure proper organization of content on desktop and mobile versions of the site.

The final version of the wireframe can be found [here](https://jumboduck.github.io/Polygonal-Brewing-Co/wireframes/Polygonal-Brewing-Wireframe.pdf).

## UX

### Brand and visual identity

For the purposes of this project, a branding scheme was created for the brewery from which its visual identity would ensue. This would carry the design on the website and of the brewery's products, represented by the can designs on the [beers page](https://jumboduck.github.io/Polygonal-Brewing-Co/beers.html).

![alt text](https://jumboduck.github.io/Polygonal-Brewing-Co/wireframes/can-lineup.png "Polygonal Brewing Co. Cans")

The visual identity of Polygonal Brewing Co. is represented by 2 fonts: Raleway for titles and headers, and Montserrat for content. The brand relies on colorful polygonal shapes contrasted with white or off-white backgrounds and text for recognizability.

This conveys an aesthetic of playfulness, creativity, and precision, all core values of the company's brand.

### User stories

At this point, two users were defined for this website: brewery guests and store customers, with the hope of expanding to distributors in the future.

#### Brewery Guests:

-   As a guest, I want to know the location and opening hours of the tap room
-   As a guest, I want to make a group reservation
-   As a guest, I want to organize a tour of the brewing facilities
-   As a guest, I want to get an idea of the location's atmosphere
-   As a guest, I want to know what drinks are served

These goals are accomplished in the following ways:

-   The opening hours, location, and contact information on clearly displayed on the homepage and footer
-   Reservations and visits of the brewery can be organized through the form on the [visit page](https://jumboduck.github.io/Polygonal-Brewing-Co/visit.html)
-   Large images of the tap room and the brewery give potential guests an idea of what to expect when visiting the premises.
-   The [beers page](https://jumboduck.github.io/Polygonal-Brewing-Co/beers.html) gives information to users about available drinks.

#### Store customers

-   As a store customer, I want to know the profiles of the products
-   As a store customer, I want the product to be easy to find on a store shelf
-   As a store customer, I want to know the ethos of the brewery

These goals are accomplished in the following ways:

-   The [beers page](https://jumboduck.github.io/Polygonal-Brewing-Co/beers.html) gives detailed information about each beer's profile
-   The visual identity of the site follows the branding of the cans, creating a uniform and recognizable experience online and on shelves
-   The [brewery](https://jumboduck.github.io/Polygonal-Brewing-Co/brewery.html) page explains what the company is about

### User Experience

![alt text](https://jumboduck.github.io/Polygonal-Brewing-Co/wireframes/devices-display.png "Polygonal Brewing Co. logo")

The site was built for a comfortable intuitive experience across all devices, while maintaining brand authenticity.

Bold colors are used in the header and footer, in line with the company’s brand and to provide anchors to structure the page, while the body uses a cleaner design for legibility.

The website adapts its layout and content based on screen-size for ease of use. The beers page, for example, will turn the list of products into a swipe-able carousel on mobile devices, to provide an enjoyable intuitive experience and prevent excessive scrolling.

Throughout the site, the navigation stays at the top of the display for ease of navigation, and again, as a reminder of the visual identity of the brewery.

## FEATURES

The site uses various features many of which are native to bootstrap:

-   Image carousels to give users an overview of what to expect on location.
-   Sticky navigation always stays at the top of the screen, collapsable on mobile.
-   Modal windows on [Beers](https://jumboduck.github.io/Polygonal-Brewing-Co/beers.html) page to display information about products.
-   Progress bars in said modal windows to display caracteristics of product.
-   On mobile devices the [Beers](https://jumboduck.github.io/Polygonal-Brewing-Co/beers.html) page changes to a carousel, displaying the content in a more user-friendly fashion. Users can swipe left and right to navigate the information.
-   Flexbox classes used to keep footer at the bottom of the page, regardless of content size.

## TESTING

The site was tested on various platforms to ensure proper display across different screen sizes.

Form validation was tested on both the [Visit](https://jumboduck.github.io/Polygonal-Brewing-Co/visit.html) page and the footer form.

The HTML was validated on [W3C Validator](https://validator.w3.org/) and speed tested on [pingdom.com](https://www.pingdom.com/)

### Issues and Bugs

-   The map was originally used using Google Maps. The inability to customize the map brought me to use Google MyMaps instead. This lead to another issue where scrolling down a page with a mouse wheel (or touch pad equivalent) caused the map to zoom in when the cursor was over the map. This was fixed by covering the map with an invisible html container, rendering the mouse wheel ineffective until clicked.
-   Another issue encountered with the map was an automatic banner inside the iframe generated by Google MyMaps. This was fixed by placing the iframe in a container with a negative margin and hiding the overflow of the map.
-   The thin font size superimposed with the multicolor background in the header and footer initially caused some readability issues. Some care and testing had to be done to ensure the text would remain legible across all display sizes.

### Removed Features

-   Initially, I wanted the form on the visit page to auto-fill the "type of visit" field based on how the user got to the page (make a reservation on index.html, book a tour on brewery.html). This feature was dropped because it could not be done without technologies outside of the scope of this project.

## SCALABILITY

-   Adding an online shop functionality for product or merchandise would be an added benefit to the site and the general branding strategy of the company.
-   As the [beer listing](https://jumboduck.github.io/Polygonal-Brewing-Co/beers.html) expands a sorting and search system with should be implemented to facilitate access to content and prevent information overload. This search function should be bolstered by a pagination system.
-   The visit can be enhanced by auto-filling certain fields
-   Analytics tools should be implemented to monitor user behavior in relation to the website's goals.
-   A dynamic menu listing should be added featuring both home and guest beers, easily updated by the bartenders.

## TECHNOLOGIES

### Languages and Frameworks

-   HTML
-   CSS
-   Bootstrap

### Tools Used

-   Balsamiq: Used to create wireframes
-   Gitpod: IDE used for creating and editing code
-   [fontawesome.com](https://fontawesome.com): used for all icons throughout the site
-   [Google MyMaps](https://www.google.com/maps/about/mymaps/): used for custom map on homepage
-   [Google Fonts](https://fonts.google.com/): Raleway and Montserrat fonts imported from google fonts
-   Adobe Photoshop: For creation and editing of all photos and images across the site
-   [Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en): a google chrome extension used to test site at different screen sizes
-   [TinyPNG](https://tinypng.com/) used to compress images
-   [Pingdom](https://www.pingdom.com/) used to test site performance
-   [W3C Validator](https://validator.w3.org/) used to validate HTML code

## MEDIA

-   Vector designs throughout the site (header, footer, and can design) were provided by Patrickss on freepik.com https://www.freepik.com/patrickss, and were edited and resized by myself for the purposes of the site
-   Photos throughout website are courtesy of [https://unsplash.com/](unsplash.com)
-   Font for logo is [Polya by Adrien Coquet](https://www.behance.net/gallery/20118341/POLYA-Free-Font_)

## ACKNOWLEDGMENTS

-   Overlay of map to prevent accidental zooming while scrolling, courtesy of [Tania Rascia](https://www.taniarascia.com/prevent-mouse-scroll-from-zooming-on-embedded-google-maps/) with updated javascript by [Felipe Alarcon](https://github.com/felipe-alarcon)
-   Sticky Footer code from [startbootstrap.com](https://startbootstrap.com/snippets/sticky-footer-flexbox/)
-   Many thanks to [Felipe Alarcon](https://github.com/felipe-alarcon) and [Simen Daehlin](https://github.com/Eventyret) for their invaluable help and feedback and to the Code Institute slack community for their constant support.
