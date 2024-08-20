import React from 'react'

const GenderCheckBox = () => {
    return (
        <div>
            <div className="flex ">
                <div className="form-control ">
                    <label className="gap-2 cursor-pointer label ">
                        <span className="text-white label-text">Male</span>
                        <input type="checkbox" className="border-blue-500 checkbox" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="gap-2 cursor-pointer label">
                        <span className="ml-2 text-white label-text">Female</span>
                        <input type="checkbox" className="border-blue-500 checkbox" />
                    </label>
                </div>
            </div>

        </div>
    )
}

export default GenderCheckBox
