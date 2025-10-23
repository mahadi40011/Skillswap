import React from 'react';

const TopRatedProviders = () => {
const providers = [
  {
    id: 1,
    name: "Alex Martin",
    skill: "Guitar Instructor",
    rating: 4.9,
    image:
      "https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png",
  },
  {
    id: 2,
    name: "Sara Hossain",
    skill: "English Coach",
    rating: 4.8,
    image:
      "https://icons.iconarchive.com/icons/iconka/buddy/128/teacher-female-icon.png",
  },
  {
    id: 3,
    name: "John Doe",
    skill: "Web Developer",
    rating: 4.9,
    image:
      "https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/andy-warhol-icon.png",
  },
];

  return (
    <div className='bg-slate-100 p-15 pt-5 rounded-2xl'>
        <h2 className="text-3xl font-bold mb-10 text-center">
           Top Rated Providers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="bg-white shadow-md rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-xl transition-all"
            >
              <img
                src={provider.image}
                alt={provider.name}
                className="w-24 h-24 object-cover mb-4 "
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {provider.name}
              </h3>
              <p className="text-gray-500 font-medium text-sm">{provider.skill}</p>
              <p className="text-yellow-500 font-medium mt-2">
                Rating ⭐{provider.rating}
              </p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default TopRatedProviders;