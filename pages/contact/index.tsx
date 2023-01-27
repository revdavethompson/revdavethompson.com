/*
        Contact Page
*/
import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header"
import Image from "next/image";
import rdtAvatar from "../../public/svgs/rdt-avatar.svg"
import { motion } from "framer-motion";


export default function Home() {
    return (
      <>
        <Header />

        {/* RDT HUMAN Intro */}
        <section className="pt-10 px-5 pb-16 lg:px-10">
          <div className="flex items-center flex-wrap">
            <div className="w-full px-10 pt-16 md:w-1/2">
              <Image
                className="border-solid border-8 border-white shadow-lg rounded-full w-300 h-300"
                src={rdtAvatar}
                alt="Earth with Big Question Mark on it"
              />
            </div>
            <div className="px-16 pt-5 md:px-10 w-full md:w-1/2 max-w-screen-xl lg:pt-5 lg:pl-20">
              <div className="max-w-screen-lg text-zinc-500 sm:text-lg lg:pl-[10%] md:text-sm dark:text-zinc-400">
                <motion.p
                  className="tracking-snug mb-3 font-extralight text-xl"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <span className="text-white">Rev. Dave</span> has spent over
                  twenty years building common ground between our most divided
                  of social groups and issues.
                </motion.p>
                <motion.p
                  className="tracking-snug font-extralight text-xl"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  His long experience provided him the opportunity to develop
                  his <strong className="text-white">HUMAN</strong>&nbsp;Ethic,
                  a set of real-world, field-tested rules of conduct necessary
                  for finding the common ground that creates peace.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="pt-10 px-5 lg:px-10">
          <ContactForm />
        </section>
      </>
    );
}