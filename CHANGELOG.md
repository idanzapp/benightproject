0.0.1-alpha (2018-10-4)
==========

new commit (2018-10-26, 15:30)
----------------------------
+ Improved left Join

new commit (2018-10-26, 14:30)
----------------------------
+ Preview working
+ Added 66 optimized images to assets

new commit (2018-10-25, 17:00)
----------------------------
+ Added preview of events in a modal


new commit (2018-10-23, 14:20)
----------------------------
+ Fixed header name and back variable change


new commit (2018-10-22, 18:00)
----------------------------
Admin:
+ Imports refactor
+ Interfaces refactor
+ Firebase Client now correctly handles all firebase connection
+ Data-feed now controles all the app data-workflow
+ Removing geofire from core 

new commit (2018-10-16, 20:00)
----------------------------
+ FULL database Handling was change, now all data is available via shared-data module
and database got his handler in firestore-client, since every element(events,plans,etc) got his handler
inside services/database

- db.service & db-extension.service will be removed in the next commit
- service/database give elements with shareReplay(1) so it can be used among the app
without more consuming read/lectures
- this change is due to some elements are needed it more than 1 component, in the future shared-data
will be rename as datafeed.service

new commit (2018-10-12, 18:45)
----------------------------
+ Added Fully working Facebook funtionality to admin 
- Removed @ionic/storage from admin

new commit (2018-10-12, 14:45)
----------------------------
+ Added user-level.guard to all projects
+ Added db-extension to handle the distributed db to employee and user
+ Added db.service and auth.service to employee and user

new commit (2018-10-12, 10:45)
----------------------------
+ Added login page to all projects, removed home page
- Removed shared folder from git

new commit (2018-10-12, 8:45)
----------------------------
+ Added JSECoin mining support to the app 

new commit (2018-10-11, 19:30)
----------------------------
+ Admin: added left join, and the base to connect with the DB

new commit (2018-10-10, 22:00)
----------------------------
+ Updated to angular@latest npm

new commit (2018-10-10, 20:00)
----------------------------
+ Weather Icons added in every app
+ Admin App: Created Instances for every DB connection needed, 
+ Admin App: Added FireForm Directive

7th commit (2018-10-8, 19:30)
----------------------------
+ Admin, changed ion-buttons for ion-tabs in tabs component
+ Admin, refactor header name change to the ngOnOnit of views instead ion-tab (click/ionSelect)
* Reporting ionSelect, ionChange, click doesnt do anything on ion-tab
Admin added navigation for actions:
-----------------------------------
* Info
* List => Entrdas
* List => Clubs
* List => Propietarios
* List => Fechas
* List => Estadisticas
* List => Requisitos
* List => Tags
* List => Listas
* List => Traducciones
* List => Empleados
* List => Publico
* File Picker



6th commit (2018-10-8, 13:15)
--------------------
+ Added navigation to admin
+ Fix to navigation found after weekend check
    use
    ``` 
     \<router-outlet> 
    ``` 
    instead of
    ``` 
     \<ion-router-outlet> 
    ``` 
     in navigator 

5th commit (2018-10-5, 08:30)
--------------------
+ All apps updated (codelyzer@4.5, cordova-plugin-ionic-webwiew@2.2.0,firebase@5.5.3)
+ Added the "x-routing.module.ts" to all pages

4th commit (2018-10-4, 22:00)
--------------------
Benight-Admin:
+ Rudimentary navigation added

Benight-Employee:
+ Rudimentary navigation added


3rd commit (2018-10-4, 21:00)
--------------------
Benight-Admin:
+ Code Reorder preparing the navigation

Benight-Employee:
+ Code Reorder preparing the navigation


2nd commit (2018-10-4, 18:30)
--------------------
Benight:
+ Navegacion Standard

Benight-Admin:
+ Blank Template - NPM UPDATE

Benight-Employee:
+ Blank Template - NPM UPDATE

