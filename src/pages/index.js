import * as React from "react"

import img from "../images/undraw_social_serenity_vhix.svg"
import code from "../images/code.png"

import Layout from "../components/layout"
import Seo from "../components/seo"

import List from "../components/list-check.js"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="">
      <h1 className="text-6xl my-12 text-center sm:text-left">
        Build Digital Promotions
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#af613a] to-[#0eb4d1]">
          Without Limits
        </span>{" "}
      </h1>
    </div>
    <div className="sm:flex">
      <div className="sm:w-1/2 flex flex-col items-center sm:items-start">
        <List />
        <button className="bg-[#0eb4d1] text-white font-bold py-4 px-4 rounded-md w-32">
          {" "}
          Get started{" "}
        </button>
      </div>
      <div className="sm:w-1/2 relative ">
        {/* CEERCLE DECOUPAGE */}
        <div className=" z-0 opacity-50 bg-gradient-to-r from-[#1d2d50] to-[#af613a] absolute sm:top-[-20px] top-0 right-[0px] rounded-full h-[450px] w-[450px]"></div>

        {/* CARD BLANCHE  */}
        <div className=" z-20 bg-white sm:rounded-md font-bold relative p-7 sm:w-5/6 sm:mt-0 mt-10">
          <div className="flex space-x-3 items-center">
            <img src={img} alt="img" className="h-24" />{" "}
            <p className="text-black text-xl font-bold">
              Welcome Nopon Discount
              <br />
              <span className="text-gray-400 text-lg mt-1">
                Expire in 5 days
              </span>
            </p>{" "}
          </div>
          <div className="text-gray-400 ">
            Here is your 10€ discount voucher :{" "}
            <code className="bg-[#0eb4d1] text-gray-600">hello10</code>
            <br />
            Make an order for more than 50€ to use the code.
          </div>
          <div className=" mt-3 ">
            <button className="bg-[#7755cc] text-white font-bold py-2 px-4 rounded-md w-32">
              {" "}
              Go to store{" "}
            </button>
          </div>
          {/* IMAGE BLEU  */}
          <div className="z-10 flex bg-[#1d2d50] shadow shadow-black absolute rounded-md w-[250px] bottom-[-245px] h-64 right-5   md:left-44 md:top-72 md:w-[225px]     lg:top-52 lg:left-56 lg:w-80   justify-center">
            <img src={code} alt="img" className="p-10 h-64" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
