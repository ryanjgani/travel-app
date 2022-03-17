import React from "react";

const Title = (props) => {
    return (
        <div>
            <h1 className="mt-5 text-2xl text-center font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                {props.title}
            </h1>
        </div>
    );
};

export default Title;
