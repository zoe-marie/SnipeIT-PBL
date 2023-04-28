# SnipeIT-PBL
This  app integrates Snipe-IT, an IT asset management system, with WLED to create a pick-by-light system for improved warehouse management.
Snipe-IT is an open-source IT asset and license management system, while WLED is a popular open-source software for controlling LED strips and pixels using ESP8266/ESP32 boards. A pick-by-light system is a warehouse order-picking technology that uses lights to guide operators in locating and picking items from storage locations.
WLED is utilized to WS2812 control LED strips attached to storage shelves. The intigration with Snipe-IT, allows the users to easily locate IT assets within the warehouse. As a user searches for a specific asset, the corresponding LED strip segment on the shelf lights up, guiding the user directly to the item's location.

## WLED Setup instructions
In the folowing segment i will explain how to get WLED set up.

### Install and connect to wifi
1. flash WLED on a ESP D1 mini or ESP32 (https://install.wled.me/)
2. connect to WLED-AP wifi with Password: wled1234
3. go to http://4.3.2.1
4. ......

### Set up storage locations
The storage locations are resembled by segments in the WLED software.
We first need to set up the real world storage locations as segments in WLED.

### assigning ESPs and segments in Locations

