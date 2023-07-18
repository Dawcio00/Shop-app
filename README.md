# Applications needed:
1)https://www.apachefriends.org/pl/index.html (Xampp)
2)https://www.jetbrains.com/idea/ (IntelliJ)
3)https://www.python.org/downloads/ (Python 3.11.4)
4)https://www.java.com/download/ie_manual.jsp (Java 17)
5)https://nodejs.org/en (Nodejs)
6)https://visualstudio.microsoft.com/pl/vs/older-downloads/  (Visual Studio 2019)
7)https://code.visualstudio.com/ (Visual Studio Code)


 # Backend:
1) We run the whole project in intelij.
2) Run XAMPA (run Apache and mysql, start buttons)
if there was a problem with startup then you have to type in cmd as administrator command: net stop was /y
3) We create a database called shop2 (to enter phpmyadmin click on admin at mysql), the name db, which will connect the project is
given in aplliaction properties, can be any
4) In phpadmin click -> new and type shop2 and then click create.
5) After creating the database, turn on the backend "Demo Application" (backend started correctly, works on port 8080)

# Frontend:
1) Open Visual Studio Code then -> File -> Open folder and select only the frontend folder
1) Open terminal and install packages using command "npm i" or "npm install"
2) Now we start the frontend using "npm start" and then it will take us to the browser page with our application.

# Application
1) Create an admin account for example login:admin and password:1234
2) In the database column isadmin determines whether the user is an admin or not 0 - it means false that the user is not an admin,
1 - indicates that the user is an admin. Here you have to manually replace user with admin from the database.
3) Now we create some user for example login:Julio Hernandez password:1234
4) Log in to the admin and add products to the store, for example:

Mango
https://cdn.galleries.smcloud.net/t/galleries/gf-sY2V-qsJe-LeT8_mango-wlasciwosci-odzywcze-jak-obrac-i-zjesc-mango-1920x1080-nocrop.jpg

Bluberry
https://www.seeds-gallery.shop/6419-large_default/lowbush-blueberry-seeds.jpg

Pineapple
https://cdn.galleries.smcloud.net/t/galleries/gf-D2sz-9BK7-kw3T_ananas-wlasciwosci-i-wartosci-odzywcze-664x442.jpg

Lemon
https://www.lokalnywarzywniak.pl/787-large_default/cytryna-deserowa.jpg


5) We log in to the user and add products to the cart.
6) In the shopping cart panel we set the date of the order and click "Prześlij zamówienie".
7) Log in to the admin and check the order from the user.