function Destinations() {
  this.locations = []
  this.locationId = 0
}

Destinations.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.locations.push(location);
}

Destinations.prototype.assignId = function() {
  this.locationId += 1;
  return this.locationId;
}

Destinations.prototype.findLocation = function(id) {
  for (var i=0; i< this.locations.length; i++) {
    if (this.locations[i]) {
      if (this.locations[i].id == id) {
        return this.locations[i];
      }
    }
  };
  return false;
}

Destinations.prototype.deleteContact = function(id) {
  for (var i=0; i< this.locations.length; i++) {
    if (this.locations[i]) {
      if (this.locations[i].id == id) {
        delete this.locations[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Contacts ---------
function Location(country, landmarks, timeOfYear) {
  this.country = country,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear
}

Location.prototype.info = function() {
  return this.country + " " + this.landmarks + " " + this.timeOfYear;
}

var Destinations = new Destinations();
var location2 = new Location("Thailand", "Grand Palace", "Spring");
var location1 = new Location("Costa Rica", "Arenal Volcano", "Summerß");
Destinations.addLocation(location1);
Destinations.addLocation(location2);

$(document).ready(function() {
  $("#thai").click(function() {
    $("#loc2").append(location2.country)
    $("#loc2").append(" " + location2.landmarks)
    $("#loc2").append(" " + location2.timeOfYear)
  });
  $("#costa").click(function() {
    $("#loc1").append(location1.country)
    $("#loc1").append(" " + location1.landmarks)
    $("#loc1").append(" " + location1.timeOfYear)
  });
});
