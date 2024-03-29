import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  const bg = getImage(data.allFile.edges[0].node)
  const logo = getImage(data.allFile.edges[1].node)
  return (
    <div className="flex flex-col h-screen font-roboto text-2xl font-medium md:flex-row">
      <div className="hidden blue w-6/12 justify-center bg-gradient-to-bl from-red-start to-red-end text-white md:flex">
        <GatsbyImage
          className="h-full object-cover absolute"
          alt="background"
          image={bg}
        />
        <div className="w-9/12 flex flex-col justify-start relative">
          <div className="absolute mt-8">
            <GatsbyImage image={logo} alt="beam logo" />
            <p className="mt-4 text-4xl w-4/5">
              Enjoy the Convenience of Beam Space Storage
            </p>
          </div>
        </div>
      </div>
      <div className="h-3/5 md:hidden">
        <div className="h-full flex flex-col items-center relative">
          <div className="mt-8 z-50">
            <GatsbyImage image={logo} alt="beam logo" />
            <p className="mt-4 w-80 text-white">
              Enjoy the Convenience of Beam Space Storage
            </p>
          </div>
          <GatsbyImage
            className="h-full pt-5 absolute"
            alt="background"
            image={bg}
          />
          <StaticImage className="absolute top-36" src="../images/wave.svg" />
        </div>
      </div>
      <div className="w-full h-full blue flex justify-center bg-white-75 md:w-6/12 ">
        <div className="w-80 my-10 md:w-3/5 flex flex-col justify-center">
          <h2 className="text-red">Log in to Beam Space</h2>
          <div className="flex flex-col gap-5 mt-5 text-base">
            <button className="h-10 bg-white text-base flex text-center items-center justify-center align-middle rounded-lg font-medium">
              <StaticImage
                className="w-6 mr-3"
                src="../images/google-logo.png"
                alt="google logo"
              />
              Log In With Google
            </button>
            <button className="h-10 bg-fb-blue text-base flex text-center items-center justify-center align-middle rounded-lg text-white font-medium">
              <StaticImage
                className="w-6 mr-3"
                src="../images/fb-logo.png"
                alt="google logo"
              />
              Log In With Facebook
            </button>
            <p className="text-base font-normal flex items-center justify-center text-gray-500 h-16">
              or login with your email
            </p>
          </div>
          <div className="flex flex-col text-base gap-5">
            <div className="flex flex-col gap-2">
              <p>
                Email Address<span className="text-red">*</span>
              </p>
              <input
                type="text"
                placeholder="E.g, name@email.com"
                className="placeholder:px-4 py-2 rounded-lg focus:outline-none focus:px-4 focus:placeholder:p-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Password<span className="text-red">*</span>
              </p>
              <input
                type="password"
                placeholder="Enter your password"
                className="placeholder:px-4 py-2 rounded-lg focus:outline-none focus:px-4 focus:placeholder:p-0"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-base mt-4 gap-4">
            <button className="h-10 w-full bg-red text-base flex text-center items-center justify-center align-middle rounded-lg text-white font-medium">
              Login
            </button>
            <Link className="cursor-pointer text-sky-500">
              Forgot Password ?
            </Link>
            <p>
              Don’t have an account?{" "}
              <Link className="cursor-pointer text-sky-500">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ImageQuery = graphql`
  query MyQuery {
    allFile {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
