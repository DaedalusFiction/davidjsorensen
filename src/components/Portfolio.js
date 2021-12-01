import { Project } from "./Project"
import streamerizeCap from "../images/streamerizeCap.png"
import daedalusCap2 from "../images/DaedalusCap2.png"
import WebsiteImage from "./WebsiteImage"
import LanguageIcon from "./LanguageIcon"

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="bg-white">
                    <h2 className="text-gray-900 text-center text-5xl font-bold py-10">Projects</h2>
                <div className="container py-10">
                    <div className="grid portfolio-grid gap-16">
                        <WebsiteImage url="https://www.streamerize.com" image={streamerizeCap} />
                        <div className="flex flex-col justify-center max-w-lg">
                            <h3 className="text-gray-800 text-4xl font-bold">Streamerize</h3>
                            <div className="my-2">
                                        <LanguageIcon color="gray-600" language="HTML" />
                                        <LanguageIcon color="gray-600" language="CSS" />
                                        <LanguageIcon color="gray-600" language="React" />
                                        <LanguageIcon color="gray-600" language="API" />
                                    </div>
                            <p className="text-gray-600">Gets random twitch.tv streams with fewer than about ten viewers</p>
                            
                        </div>
                    </div>
                </div>
                    <div className="bg-green-600">
                        <div className="container py-10">
                            <div className="flex gap-16">
                                <div className="flex flex-col justify-center max-w-lg">
                                    <h3 className="text-gray-100 text-4xl font-bold">Daedalus Editing</h3>
                                    <div className="my-2">
                                        <LanguageIcon color="gray-100" language="HTML" />
                                        <LanguageIcon color="gray-100" language="CSS" />
                                    </div>
                                    <p className="text-gray-100">Personal business website for Developmental and Line Editing</p>
                                </div>
                                <WebsiteImage url="https://www.daedalusediting.com" image={daedalusCap2} />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Portfolio
