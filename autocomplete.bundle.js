const cities = [
    "Akron, OH",
    "Albany, NY",
    "Albuquerque, NM",
    "Allentown, PA",
    "Atlanta, GA",
    "Austin, TX",
    "Bakersfield, CA",
    "Baltimore, MD",
    "Baton Rouge, LA",
    "Birmingham, AL",
    "Boston, MA",
    "Bridgeport, CT",
    "Bronx, NY",
    "Brooklyn, NY",
    "Buffalo, NY",
    "Cape Coral, FL",
    "Charleston, SC",
    "Charlotte, NC",
    "Chicago, IL",
    "Cincinnati, OH",
    "Cleveland, OH",
    "Colorado Springs, CO",
    "Columbia, SC",
    "Columbus, OH",
    "Concord, CA",
    "Dallas, TX",
    "Dayton, OH",
    "Denver, CO",
    "Des Moines, IA",
    "Detroit, MI",
    "El Paso, TX",
    "Fort Worth, TX",
    "Fresno, CA",
    "Grand Rapids, MI",
    "Hartford, CT",
    "Houston, TX",
    "Indianapolis, IN",
    "Jacksonville, FL",
    "Kansas City, MO",
    "Knoxville, TN",
    "Las Vegas, NV",
    "Los Angeles, CA",
    "Louisville, KY",
    "Manhattan, NY",
    "McAllen, TX",
    "Memphis, TN",
    "Mesa, AZ",
    "Miami, FL",
    "Milwaukee, WI",
    "Minneapolis, MN",
    "Mission Viejo, CA",
    "Nashville, TN",
    "New Haven, CT",
    "New Orleans, LA",
    "New York, NY",
    "Ogden, UT",
    "Oklahoma City, OK",
    "Omaha, NE",
    "Orlando, FL",
    "Palm Bay, FL",
    "Philadelphia, PA",
    "Phoenix, AZ",
    "Pittsburgh, PA",
    "Portland, OR",
    "Providence, RI",
    "Provo, UT",
    "Queens, NY",
    "Raleigh, NC",
    "Richmond, VA",
    "Riverside, CA",
    "Rochester, NY",
    "Sacramento, CA",
    "Salt Lake City, UT",
    "San Antonio, TX",
    "San Diego, CA",
    "San Francisco, CA",
    "San Jose, CA",
    "San Juan, PR",
    "Seattle, WA",
    "St. Louis, MO",
    "Tampa, FL",
    "Tucson, AZ",
    "Tulsa, OK",
    "Virginia Beach, VA",
    "Washington, DC",
    "Wichita, KS",
];

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("cityInput");
    const list = document.getElementById("autocomplete-list");

    input.addEventListener("input", function () {
        const val = this.value.toLowerCase();
        list.innerHTML = "";

        if (!val || !Array.isArray(cities)) {
            console.warn("⚠️ cities not loaded or input empty");
            return;
        }

        const filtered = cities
            .filter(city => typeof city === "string" && city.toLowerCase().startsWith(val))
            .slice(0, 10);


        filtered.forEach(city => {
            const item = document.createElement("div");
            item.textContent = city;
            item.onclick = () => {
                input.value = city;
                list.innerHTML = "";
            };
            list.appendChild(item);
        });
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".autocomplete-container")) {
            list.innerHTML = "";
        }
    });
});
