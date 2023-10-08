/*
        Featurettes Component
*/
import Image from "next/image";
import YouTube from "../public/YouTube.jpg";
import poliSmall from "../public/poli-sm.jpg";
import allSaints from "../public/all-saints.jpg";
import help from "../public/svgs/HelpSVG.svg";
import speaking from "../public/svgs/speaking.svg";
import Speaking from "./modals/Speaking";
import Lccc from "./modals/Lccc";
import { motion } from "framer-motion";

type Props = {
  styles: string;
}

export default function Featurettes({styles}:Props) {
  return (
    <>
      <section className={`body-front ${styles}`}>
        <div className="container flex flex-wrap items-center py-24 mx-auto text-zinc-900 dark:text-white">
          {/* Speaking & Engagements Feature */}
          <motion.div
            className="inline-flex items-center justify-center w-full mb-5 md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 100, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="Rev Dave shaking hands with Presidential candidate Pete Buttigieg."
              className="object-center border-8 border-solid rounded-full w-300 h-300 border-zinc-300"
              src={allSaints}
            />
          </motion.div>
          <div className="flex flex-col flex-wrap mb-10 text-center lg:py-6 md:w-1/2 md:pl-12 md:text-left">
            <div className="flex flex-col items-center mb-10 md:items-start">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-5 text-purple-500 bg-white border-4 border-solid rounded-full border-zinc-300">
                <Image
                  alt="Speaking Icon"
                  className="object-center w-16 h-16 rounded-full"
                  src={speaking}
                />
              </div>
              <div className="items-center flex-grow">
                <h2 className="pb-3 mb-3 text-3xl font-medium border-solid md:border-b-2 border-zinc-300 title-font">
                  Speaking
                  <br />& Engagements
                </h2>
                <p className="mb-5 text-base leading-relaxed">
                  Rev. Dave has spoken with audiences large and small, bringing
                  a message of common ground and peace to his listeners. His
                  disarming nature continues to leave his audiences with
                  expanded horizons and a renewed hope for peace. Rev. Dave
                  would welcoming the opportunity to speak at your college,
                  business, church, organization, or small group.
                </p>
                <Speaking />
              </div>
            </div>
          </div>

          {/* Leadership CCC Feature */}
          <motion.div
            className="inline-flex items-center justify-center w-full mb-5 md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 100, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="Rev Dave shaking hand with Presidential candidate."
              className="object-center border-8 border-solid rounded-full w-300 h-300 border-zinc-300"
              src={poliSmall}
            />
          </motion.div>
          <div className="flex flex-col flex-wrap mb-10 text-center mt-14 lg:py-6 md:w-1/2 md:pl-12 md:text-left">
            <div className="flex flex-col items-center mb-10 md:items-start">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-5 text-purple-500 bg-white border-4 border-solid rounded-full border-zinc-300">
                <Image
                  alt="Leadership Help Icon"
                  className="object-center w-16 h-16 rounded-full"
                  src={help}
                />
              </div>
              <div className="flex-grow">
                <h2 className="pb-3 mb-3 text-3xl font-medium border-b-2 border-solid border-zinc-300 title-font">
                  Confidential
                  <br />
                  <span className="text-violet-400">Leadership</span> Care
                </h2>
                <p className="px-16 mb-3 text-base leading-relaxed">
                  It can be{" "}
                  <span className="text-2xl font-light text-violet-400">
                    lonely
                  </span>{" "}
                  living in the{" "}
                  <span className="text-2xl font-light text-violet-400">
                    glass house
                  </span>{" "}
                  of{" "}
                  <span className="text-2xl font-light text-violet-400">
                    leadership
                  </span>
                  .
                </p>
                <p className="mb-3 text-base leading-relaxed">
                  When everyone is looking to you for help with their problems,
                  where do you look for help with yours?
                </p>
                <p className="mb-5 text-base leading-relaxed">
                  For over twenty years, Rev Dave has served as a confidential
                  resource for leaders around the world: CEO's, Ministers,
                  Political Leaders, and more. His unbiased understanding and
                  long experience with divisive and delicate issues, has helped
                  leaders navigate these challenging waters, whether within
                  their organization, or in their own personal lives.
                </p>
                <Lccc />
              </div>
            </div>
          </div>

          {/* Youtube Channel Feature */}
          <motion.div
            className="inline-flex items-center justify-center w-full mb-5 md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 100, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="Rev Dave YouTube Channel Cover Image with Rev Dave at table"
              className="object-center border-8 border-solid rounded-full w-300 h-300 border-zinc399"
              src={YouTube}
            />
          </motion.div>
          <div className="flex flex-col flex-wrap -mb-10 text-center lg:py-6 md:w-1/2 md:pl-12 md:text-left">
            <div className="flex flex-col items-center mb-10 md:items-start">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-5 text-purple-500 bg-white border-4 border-solid rounded-full border-zinc-300">
                {/* YouTube SVG Graphic */}
                <svg
                  aria-hidden="true"
                  className="w-12 h-12"
                  fill="currentColor"
                  id="Layer_1"
                  viewBox="0 0 461 461"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      fill="currentColor"
                      d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                      clipRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="pb-3 mb-3 text-3xl font-medium border-b-2 border-solid border-zinc-300 title-font">
                  Rev. Dave&rsquo;s
                  <br /> <span className="text-violet-400">YouTube</span>{" "}
                  Channel
                </h2>
                <p className="mb-5 text-base leading-relaxed">
                  Rev Dave began his YouTube channel in the hopes of providing
                  his audience with a uniquely HUMAN perspective, focusing on
                  only those things that we as humans hold together as common
                  ground.
                </p>
                <a
                  className="inline-flex items-center text-purple-500"
                  href="https://youtube.com/revdavethompson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    data-modal-target="top-center-modal"
                    data-modal-toggle="top-center-modal"
                    className="block text-white bg-violet-400 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                    type="button"
                  >
                    Visit
                  </button>
                  <span className="ml-5 text-zinc-400">
                    (Don't forget to Subscribe!)
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
