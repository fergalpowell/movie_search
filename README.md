# movie_search
Responsive search page that enables the user to search for movies as keywords are typed into the search bar using Django and [The MovieDB](https://www.themoviedb.org/documentation/api?language=en-US).

# configuration
**clone the project:**
+ git clone https://github.com/fergalpowell/movie_search.git 

**create and start a virtual environment:**
+ virtualenv env --no-site-packages
+ source env/bin/activate

**install the project dependencies:**
+ pip install -r requirements.txt

**then run:**
+ python manage.py makemigrations
+ python manage.py migrate
  
**to start the development server**
+ python manage.py runserver
  
**and open http://127.0.0.1:8000/discover/ on your browser to view the app.**

# functionality
**search**
+ use the input area labeled "Title of Movie" in the top right corner of the screen 
(or centre of screen on mobile) to enter the keywords of the movie you are searching.
+ as you input you will see serch results in the center of the screen. scroll down to view more results.

**filters**
+ the movie genre filter located in the right of the browser can be toggled to expand/compress the genre categories.
+ these filters do not impact the search results
+ on mobile the filters are hidden

**side menu**
+ in the browser the side menu is purely cosmetic and will always show the discover page
+ in mobile the side menu can be shown by pressing the hamburger icon in the top right corner of the screen. 
+ to close the side menu, press the x in the top right corner of the menu

**responsive**
+ this webpage is designed to automatically adjust it's display depending on the width of the viewport.
+ viewports with a width of less than 700px will be shown the mobile version of the webpage

