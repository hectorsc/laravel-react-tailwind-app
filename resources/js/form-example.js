<div className="mt-10 sm:mt-0">
    <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="">
                <div className="">
                    <div className="px-4 py-5 sm:p-2">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="first_name"
                                    className="block text-base font-medium text-gray-900"
                                >
                                    First name
                                </label>

                                <input
                                    type="text"
                                    name="first_name"
                                    className="mt-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="last_name"
                                    className="block text-base font-medium text-gray-900"
                                >
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="email_address"
                                    className="block text-base font-medium text-gray-900"
                                >
                                    Email address
                                </label>
                                <input
                                    type="text"
                                    name="email_address"
                                    id="email_address"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="country"
                                    className="block text-medium font-medium text-gray-900"
                                >
                                    Country / Region
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>

                            <div className="col-span-6">
                                <label
                                    htmlFor="street_address"
                                    className="block text-medium font-medium text-gray-900"
                                >
                                    Street address
                                </label>
                                <input
                                    type="text"
                                    name="street_address"
                                    id="street_address"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label
                                    htmlFor="city"
                                    className="block text-medium font-medium text-gray-900"
                                >
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                    htmlFor="state"
                                    className="block text-medium font-medium text-gray-900"
                                >
                                    State / Province
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                    htmlFor="postal_code"
                                    className="block text-medium font-medium text-gray-900"
                                >
                                    ZIP / Postal
                                </label>
                                <input
                                    type="text"
                                    name="postal_code"
                                    id="postal_code"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-2">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 shadow-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>;
