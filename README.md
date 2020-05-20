# Project: Travel App

# Author: Manik Rana

# Version: 1.0

# Dependencies: babel, babel loader, css loader, file loader, html loader, html webpack plugin, node sass, sass loader, style loader, webpack, webpack cli, and webpack dev server, service workers

# Project Details

# 1. In this travel app, user enters his/her travel details - city which they wish to travel to and the date of travel.

# 2. The code validates that a city and date are not empty. Then it validates that the date of travel is in fact in future. Then the UI is dynamically updated with the city entered and no. of days left in the trip. Otherwise respective errors are shown.

# 2. Once validated, the app interfaces with 3 different APIs:

# Fetches lat/long and country code from the Geonames API

# Fetches 16 days of weather prediction based on lat/long fetched from previous API

# Fetches an image of the city being visited from Pixabay API

# 3. Extend option chosen - Incoporate icons into forecast
