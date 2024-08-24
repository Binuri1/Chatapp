import React from 'react'

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div>
            <div className="flex ">
                <div className="form-control ">
                    <label className={`gap-2 cursor-pointer label ${selectedGender === "male" ? "selected" : ""}`} >
                        <span className="text-white label-text">Male</span>
                        <input type="checkbox" className="border-blue-500 checkbox"
                            checked={selectedGender === "male"}
                            onChange={() => onCheckboxChange("male")} />
                    </label>
                </div>
                <div className="form-control">
                    <label className={`gap-2 cursor-pointer label ${selectedGender === "female" ? "selected" : ""}`}>
                        <span className="ml-2 text-white label-text">Female</span>
                        <input type="checkbox" className="border-blue-500 checkbox"
                            checked={selectedGender === "female"}
                            onChange={() => onCheckboxChange("female")} />
                    </label>
                </div>
            </div>

        </div>
    )
}

export default GenderCheckBox
