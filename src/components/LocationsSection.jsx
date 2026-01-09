const LocationsSection = () => {
  const locations = [
    {
      id: 1,
      city: "Atlanta",
      address: "1230 Peachtree St. NE",
      cityState: "Atlanta, GA 30309",
      country: "USA",
      phone: "+1 404-631-2000",
      image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      city: "Austin",
      address: "1005 S Congress Ave #5-150",
      cityState: "Austin, TX 78704",
      country: "USA",
      phone: "+1 512-697-2300",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      city: "Chicago",
      address: "111 S Wacker Dr, Suite 1800",
      cityState: "Chicago, IL 60606",
      country: "USA",
      phone: "+1 312-486-1000",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      city: "Denver",
      address: "1455 16th St, Suite 307",
      cityState: "Denver, CO 80202",
      country: "USA",
      phone: "+1 303-446-6920",
      image: "https://images.pexels.com/photos/3952244/pexels-photo-3952244.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-wider uppercase text-black italic mb-8">
            LOCATIONS
          </h2>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="group">
              {/* Image */}
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img
                  src={location.image}
                  alt={`${location.city} office`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div>
                {/* City Name */}
                <h3 className="text-xl font-normal text-black mb-4 group-hover:text-green-600 transition-colors">
                  {location.city}
                </h3>

                {/* Address Section */}
                <div className="mb-4">
                  <div className="text-xs font-bold tracking-wider uppercase text-gray-600 mb-2">
                    ADDRESS
                  </div>
                  <div className="text-sm text-gray-700 leading-relaxed">
                    <div>{location.address}</div>
                    <div>{location.cityState}</div>
                    <div>{location.country}</div>
                  </div>
                </div>

                {/* View on Map Link */}
                <div className="mb-4">
                  <a 
                    href="#" 
                    className="text-sm text-black hover:text-green-600 transition-colors font-medium"
                  >
                    VIEW ON MAP →
                  </a>
                </div>

                {/* Phone Section */}
                <div>
                  <div className="text-xs font-bold tracking-wider uppercase text-gray-600 mb-2">
                    PHONE
                  </div>
                  <a 
                    href={`tel:${location.phone}`}
                    className="text-sm text-gray-700 hover:text-green-600 transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;