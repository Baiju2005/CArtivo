import { NavLink } from "react-router-dom";
import { AlertTriangle, ArrowLeft } from "lucide-react";

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">

            {/* Icon */}
            <div className="mb-6 flex items-center justify-center rounded-full bg-gray-100 p-6">
                <AlertTriangle className="h-14 w-14 text-gray-400" />
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900">
                404
            </h1>

            <h2 className="mt-2 text-xl font-semibold text-gray-800">
                Page not found
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-md text-gray-600">
                Sorry, the page you’re looking for doesn’t exist or has been moved.
                Let’s get you back on track.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <NavLink
                    to="/"
                    className="inline-flex items-center justify-center gap-2 border border-black px-6 py-3 text-sm font-medium
                     transition hover:bg-black hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Go Home
                </NavLink>

                <NavLink
                    to="/products"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium
                     bg-black text-white transition hover:bg-gray-800"
                >
                    Browse Products
                </NavLink>

            </div>

            {/* Subtext */}
            <p className="mt-10 text-xs text-gray-400">
                If you believe this is a mistake, please contact support.
            </p>

        </div>
    );
};

export default NotFound;
