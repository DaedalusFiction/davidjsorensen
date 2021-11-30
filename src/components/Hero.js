import programmingIcon from "../images/coding.png"

const Hero = () => {
    return (
        <div className="py-60 container">
            <div className="hero flex justify-center">
                <img src={programmingIcon} alt="" />
                <div className="flex flex-col justify-center">
                    <h1 className="text-gray-800 text-5xl font-semibold">Hello! I'm David Sorensen</h1>
                    <p className="text-gray-600 px-5 py-1">a front-end web developer based in Charlottesville, Virginia</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
