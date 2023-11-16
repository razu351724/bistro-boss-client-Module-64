const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 mx-auto my-8">
            <p className="text-center text-[#D99904] font-medium text-xl mb-2">---{heading}---</p>
            <h3 className="text-center text-4xl text-black border-solid border-y-4 py-1 uppercase ">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;