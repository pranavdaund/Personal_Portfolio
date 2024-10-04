import React from 'react'

function Project_Card2() {
    return (
        <>
            <div className="w-[282px] h-[428px] rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                    className="w-full h-[120px] object-cover"
                    src="https://source.unsplash.com/random/188x120"
                    alt="Project Thumbnail"
                />
                <div className="px-4 py-2">
                    <div className="font-bold text-sm mb-1">Project Title goes here</div>
                    <p className="text-gray-600 text-xs leading-tight">
                        This is sample project description. Random things are here in description.
                    </p>
                </div>
                <div className="px-4 pt-2 pb-3">
                    <span className="text-gray-500 text-xs">
                        Tech stack: HTML, JavaScript, SASS, React
                    </span>
                    <div className="mt-2 flex justify-between text-xs">
                        <a
                            href="#"
                            className="text-blue-500 hover:underline"
                        >
                            Live Preview
                        </a>
                        <a
                            href="#"
                            className="text-blue-500 hover:underline flex items-center"
                        >
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.488.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.461-1.11-1.461-.907-.62.069-.607.069-.607 1.003.07 1.53 1.031 1.53 1.031.892 1.529 2.341 1.088 2.911.832.092-.647.349-1.088.635-1.338-2.22-.252-4.555-1.111-4.555-4.944 0-1.091.39-1.983 1.029-2.68-.103-.253-.446-1.271.098-2.65 0 0 .84-.27 2.75 1.026A9.577 9.577 0 0112 6.843a9.59 9.59 0 012.507.338c1.91-1.296 2.75-1.026 2.75-1.026.545 1.379.202 2.397.1 2.65.64.698 1.028 1.59 1.028 2.68 0 3.843-2.337 4.687-4.565 4.934.36.31.679.92.679 1.854 0 1.338-.012 2.419-.012 2.748 0 .268.18.578.688.481A10.002 10.002 0 0022 12c0-5.523-4.477-10-10-10z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            View Code
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project_Card2