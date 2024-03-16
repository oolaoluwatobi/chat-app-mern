interface Props {
  onCheckBoxChange(gender: string): void;
  selectedGender: string;
}

const GenderCheckBox = ({ onCheckBoxChange, selectedGender }: Props) => {
  return (
    <>
      <h5 className="text-slate-30 p-2">Prefered Avatar</h5>
      <div className="flex ">
        <div className="form-control">
          <label
            htmlFor="male"
            className={`label gap-2 cursor-pointer ${
              selectedGender === "male" ? "selected" : ""
            }`}
          >
            <span className="label-text text-slate-30">Male</span>
            <input
              type="checkbox"
              className="checkbox border-slate-100"
              checked={selectedGender === "male"}
              onChange={() => onCheckBoxChange("male")}
            />
          </label>
        </div>

        <div className="form-control">
          <label
            htmlFor="female"
            className={`label gap-2 cursor-pointer selec ${
              selectedGender === "female" ? "selected " : ""
            }`}
          >
            <span className="label-text text-slate-30">Female</span>
            <input
              type="checkbox"
              className="checkbox border-slate-100"
              checked={selectedGender === "female"}
              onChange={() => onCheckBoxChange("female")}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default GenderCheckBox;
