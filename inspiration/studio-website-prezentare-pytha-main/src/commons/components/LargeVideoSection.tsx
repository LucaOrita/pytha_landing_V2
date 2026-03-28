import React from "react";

interface LargeVideoSectionInterface {
    videoLink: string;
    sectionTitle: string;
    sectionDescription: string;
}

const LargeVideoSection: React.FC<LargeVideoSectionInterface> = ({
                                                                     videoLink,
                                                                     sectionTitle,
                                                                     sectionDescription
                                                                 }) => {
    return (
        <section className="py-20 px-4 md:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-2">
                    {sectionTitle}
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    {sectionDescription}
                </p>
            </div>

            <div className={"w-full h-[600px] rounded-2xl"}>
                <iframe src={videoLink}
                        className="w-full h-full rounded-2xl"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
            </div>
        </section>
    );
};

export default LargeVideoSection;
