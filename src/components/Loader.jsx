const Loader = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6">

            {/* Spinner */}
            <div className="relative h-14 w-14">
                <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                <div className="absolute inset-0 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
            </div>

            {/* Text */}
            <p className="text-sm text-gray-600 tracking-wide">
                Loading, please wait…
            </p>

        </div>
    );
};

export default Loader;
