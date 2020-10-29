TRUNCATE TABLE "Events", "Reviews" RESTART IDENTITY;

INSERT INTO "Events" ("Name", "Description", "Requirements","Cost", "Category","Address") VALUES ('Busch Gardens', 'Amusement park! Great rides!','Height requirements for some rides.', 118, 'Outdoors', '10165 N McKinley Dr Tampa, FL 33612');
INSERT INTO "Events" ("Name", "Description", "Requirements","Cost", "Category","Address") VALUES ('Clearwater Beach', 'Great beach! tons of places to get drinks/food!','N/A',0, 'Outdoors', '112 S. Osceola Avenue, Clearwater, FL. 33756');
INSERT INTO "Events" ("Name", "Description", "Requirements","Cost", "Category","Address") VALUES ('Stillwaters Tavern', 'Great food!','N/A',15,'Food' , '224 Beach Dr NE, St. Petersburg, FL 33701');
INSERT INTO "Events" ("Name", "Description", "Requirements","Cost", "Category","Address") VALUES ('Parks & Rec', 'Good drinks!','21 and up',20,'Night Life' , '100 4th St S, St. Petersburg, FL 33701');
INSERT INTO "Events" ("Name", "Description", "Requirements","Cost", "Category","Address") VALUES ('H2O Jet Ski Rentals', 'Ride jet skis, lots of fun!!','emp boaters permit(online test). 16+ to ride alone.',102,'Other' , '25 Causeway Boulevard Slip 25, Clearwater Beach, FL 33767');

INSERT INTO "Reviews" ("EventId", "CreatedAt", "Title", "Body", "BestWorst") VALUES (1, '2020-03-12 14:23:55', 'What an experience!', 'Best coasters in all of Tampa!','The rides were the best thing in my opinion. Thought they could have done a better job organizing the lines.');
INSERT INTO "Reviews" ("EventId", "CreatedAt", "Title", "Body", "BestWorst") VALUES (3, '2020-05-01 17:23:55', 'Yumm!!', 'Great service! Perfect spot in St Pete for a nice meal', 'Service was best thing. Worst thing was the prices were a little high for my taste.');
INSERT INTO "Reviews" ("EventId", "CreatedAt", "Title", "Body", "BestWorst") VALUES (2, '2020-02-01 18:23:45', 'Clear sky!', 'Great beach! Such soft sand!', 'Best thing was the open space and sand! The worst thing was how crowded the beach was.');
