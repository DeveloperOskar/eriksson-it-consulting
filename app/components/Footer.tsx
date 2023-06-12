export const Footer = () => {
  return (
    <>
      <footer className="x-4 container mx-auto mb-10 flex flex-col px-4 lg:flex-row lg:border-t lg:py-4">
        <aside className="flex grow flex-col border-t py-4 lg:border-r lg:border-t-0 lg:py-0 lg:pl-4">
          <h2 className="text-md mb-2 font-bold uppercase tracking-wide">
            Kontakt
          </h2>
          <a className="text-sm text-gray-500" href="tel:+46707696117">
            Tel: +46707696117
          </a>
          <a
            className="text-sm text-gray-500"
            href="mailto:dev.oskar.eriksson@gmail.com"
          >
            Mail: dev.oskar.eriksson@gmail.com
          </a>
          <p className="text-sm text-gray-500">
            Adress: Britagatan 6b, 702 86 Örebro
          </p>
        </aside>

        <aside className="grow border-t py-4 lg:border-t-0 lg:py-0 lg:pl-4">
          <h2 className="text-md mb-2 font-bold uppercase tracking-wide">
            Status
          </h2>
          <p className="text-sm text-gray-500">Har ett nuvarande uppdrag.</p>
          <p className="text-sm text-gray-500">Ledig för nytt uppdrag</p>
          <p className="text-sm text-gray-500">från och med: 11-11-2023</p>
        </aside>

        <aside className="grow border-t py-4 lg:border-l lg:border-t-0 lg:py-0 lg:pl-4">
          <h2 className="text-md mb-2 font-bold uppercase tracking-wide">
            Följ
          </h2>

          <div className="flex flex-wrap items-center gap-4">
            <a href="https://linkedin.com">
              <svg
                className="h-10 w-10 text-gray-500"
                fill="currentColor"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
              </svg>
            </a>

            <a href="https://linkedin.com">
              <svg
                className="h-10 w-10 text-gray-500"
                fill="currentColor"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
              >
                <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
              </svg>
            </a>

            <a href="https://linkedin.com">
              <svg
                className="h-10 w-10 text-gray-500"
                fill="currentColor"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
              >
                <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
              </svg>
            </a>

            <a href="https://linkedin.com">
              <svg
                className="h-10 w-10 text-gray-500"
                fill="currentColor"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
              </svg>
            </a>
          </div>
        </aside>
      </footer>

      <p className="mb-10 px-20 text-center text-sm text-gray-600">
        Made with &#10084; by Oskar Eriksson <br />
        Extra thanks to NextJs and Vercel for creating awesome tools
      </p>
    </>
  );
};
