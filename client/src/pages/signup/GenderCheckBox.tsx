const GenderCheckBox = () => {
  return (
    <div className="flex ">
      <div className="form-control">
        <label htmlFor="male" className="label gap-2 cursor-pointer">
          <span className="label-text">Male avatar</span>
          <input type="checkbox" className="checkbox border-slate-100" />
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="female" className="label gap-2 cursor-pointer">
          <span className="label-text">Female avatar</span>
          <input type="checkbox" className="checkbox border-slate-100" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
