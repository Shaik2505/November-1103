const Home = () => {
  const latestNews = [
    {
      id: 1,
      title: "Broadway Reopens",
      image:
        "https://www.theatermania.com/wp-content/uploads/sites/4/2024/11/macysparade.png?resize=768,512",
    },
    {
      id: 2,
      title: "New Musical Announced",
      image:
        "https://www.theatermania.com/wp-content/uploads/sites/4/2024/11/macysparade.png?resize=768,512",
    },
    {
      id: 3,
      title: "Tony Awards Update",
      image:
        "https://www.theatermania.com/wp-content/uploads/sites/4/2024/11/macysparade.png?resize=768,512",
    },
    {
      id: 4,
      title: "Theater Renovation Complete",
      image:
        "https://www.theatermania.com/wp-content/uploads/sites/4/2024/11/macysparade.png?resize=768,512",
    },
    {
      id: 5,
      title: "Rising Star Interview",
      image:
        "https://www.theatermania.com/wp-content/uploads/sites/4/2024/11/macysparade.png?resize=768,512",
    },
    {
      id: 6,
      title: "Critic's Choice Awards",
      image:
        "https://www.theatermania.com/wp-content/uploads/sites/4/2024/11/macysparade.png?resize=768,512",
    },
  ];

  const spotlightShows = [
    {
      id: 1,
      title: "The Lion King",
      image:
        "https://ticketexpress.in/assets/upload/event/media-desktop-sanam-band-live-concert-hyderabad-0-2024-2-5-t-12-27-16.jpg",
    },
    {
      id: 2,
      title: "Hamilton",
      image:
        "https://ticketexpress.in/assets/upload/event/media-desktop-sanam-band-live-concert-hyderabad-0-2024-2-5-t-12-27-16.jpg",
    },
    {
      id: 3,
      title: "Wicked",
      image:
        "https://ticketexpress.in/assets/upload/event/media-desktop-sanam-band-live-concert-hyderabad-0-2024-2-5-t-12-27-16.jpg",
    },
    {
      id: 4,
      title: "Dear Evan Hansen",
      image:
        "https://ticketexpress.in/assets/upload/event/media-desktop-sanam-band-live-concert-hyderabad-0-2024-2-5-t-12-27-16.jpg",
    },
  ];

  const openingSoon = [
    {
      id: 1,
      name: "Phantom of the Opera",
      date: "Jan 10, 2024",
      image:
        "https://img.freepik.com/premium-photo/singer-performing-live-concert_954932-2255.jpg",
    },
    {
      id: 2,
      name: "Chicago",
      date: "Jan 11, 2024",
      image:
        "https://img.freepik.com/premium-photo/singer-performing-live-concert_954932-2255.jpg",
    },
    {
      id: 3,
      name: "The Book of Mormon",
      date: "Jan 12, 2024",
      image:
        "https://img.freepik.com/premium-photo/singer-performing-live-concert_954932-2255.jpg",
    },
    {
      id: 4,
      name: "Aladdin",
      date: "Jan 13, 2024",
      image:
        "https://img.freepik.com/premium-photo/singer-performing-live-concert_954932-2255.jpg",
    },
    {
      id: 5,
      name: "Moulin Rouge!",
      date: "Jan 14, 2024",
      image:
        "https://img.freepik.com/premium-photo/singer-performing-live-concert_954932-2255.jpg",
    },
  ];
  // https://static.vecteezy.com/system/resources/previews/027/102/587/non_2x/male-singer-s-silhouette-illuminated-by-stage-lights-at-a-rock-concert-photo.jpg

  const closingSoon = [
    {
      id: 1,
      name: "Cats",
      date: "Jan 5, 2024",
      image:
        "https://static.vecteezy.com/system/resources/previews/027/102/587/non_2x/male-singer-s-silhouette-illuminated-by-stage-lights-at-a-rock-concert-photo.jpg",
    },
    {
      id: 2,
      name: "Les Misérables",
      date: "Jan 6, 2024",
      image:
        "https://static.vecteezy.com/system/resources/previews/027/102/587/non_2x/male-singer-s-silhouette-illuminated-by-stage-lights-at-a-rock-concert-photo.jpg",
    },
    {
      id: 3,
      name: "The Phantom of the Opera",
      date: "Jan 7, 2024",
      image:
        "https://static.vecteezy.com/system/resources/previews/027/102/587/non_2x/male-singer-s-silhouette-illuminated-by-stage-lights-at-a-rock-concert-photo.jpg",
    },
    {
      id: 4,
      name: "Mamma Mia!",
      date: "Jan 8, 2024",
      image:
        "https://static.vecteezy.com/system/resources/previews/027/102/587/non_2x/male-singer-s-silhouette-illuminated-by-stage-lights-at-a-rock-concert-photo.jpg",
    },
    {
      id: 5,
      name: "Jersey Boys",
      date: "Jan 9, 2024",
      image:
        "https://static.vecteezy.com/system/resources/previews/027/102/587/non_2x/male-singer-s-silhouette-illuminated-by-stage-lights-at-a-rock-concert-photo.jpg",
    },
  ];

  return (
    <main className="bg-background dark:bg-darkBackground">
      {/* Top Story */}
      <section
        className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat p-6 md:p-10"
        style={{
          backgroundImage:
            "url('https://www.deccanchronicle.com/h-upload/2024/11/11/1861581-untitleddesign20.webp')",
          backgroundPosition: "center",
          backgroundSize: "auto",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="h-64 md:h-80 overflow-hidden rounded-lg">
            <img
              src="https://www.theatermania.com/wp-content/uploads/sites/4/2023/11/2023-11-13-TM-Harmony-Opening-Night-Curtain-Call-6.jpg?resize=768,512"
              alt="Bette Midler in Oh, Night on Broadway"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-4 text-white contrast-200 dark:text-darkText">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="text-white contrast-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              delectus illum ut iusto? Enim minus quae aliquam aspernatur
              suscipit cum molestiae incidunt facilis, rem deserunt voluptas
              obcaecati blanditiis iusto quisquam nesciunt perferendis atque?
              Molestiae.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="p-6 md:p-10 ">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Latest News
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {latestNews.map((news) => (
            <div key={news.id} className="relative h-40">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                <p className="text-sm">{news.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spotlight Shows */}
      <section className="p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Spotlight Shows
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {spotlightShows.map((show) => (
            <div key={show.id} className="relative h-60">
              <img
                src={show.image}
                alt={show.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                <p className="text-sm">{show.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Opening/Closing Shows */}
      <section className="w-full bg-gray-100 p-8 md:p-12 dark:bg-slate-800 ">
        <div className="max-w-screen-xl mx-auto ">
          <h3 className="text-3xl font-bold mb-6 text-center ">
            Upcoming Shows
          </h3>
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {openingSoon.map((show) => (
              <li
                key={show.id}
                className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-secondary dark:border-darkSecondary dark:shadow-darkSecondary"
              >
                <img
                  src={show.image}
                  alt={`${show.name} poster`}
                  className="w-full h-40 rounded-lg mb-4 object-cover"
                />
                <div className="text-center">
                  <span className="text-xl font-semibold">{show.name}</span>
                  <div className="text-gray-500 mt-2">{show.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="w-full bg-gray-200 p-8 md:p-12 mt-10 dark:bg-darkBackground">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">Closing Soon</h3>
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {closingSoon.map((show) => (
              <li
                key={show.id}
                className="flex flex-col items-center bg-secondary dark:border-darkSecondary dark:shadow-darkSecondary p-6 rounded-lg shadow-lg"
              >
                <img
                  src={show.image}
                  alt={`${show.name} poster`}
                  className="w-full h-40 rounded-lg mb-4 object-cover"
                />
                <div className="text-center dark:text-darkText">
                  <span className="text-xl font-semibold">{show.name}</span>
                  <div className="text-gray-500 mt-2 dark:text-darkText">{show.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
