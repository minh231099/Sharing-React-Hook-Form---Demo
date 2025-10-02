import { useState } from "react";
import Menu from "./component/Menu";
import DataPreview from "./component/DataPreview";
import NetstedForm from "./component/NestedForm";
import ConditionalForm from "./component/ConditionalField";
import FormArray from "./component/FormArray";
import CustomForm from "./component/CustomValidation";
import UsingUseWatch from "./component/useWatchDemo/useWatchDemo";

function App() {
  const [formData, setFormData] = useState({});
  const [activeMenu, setActiveMenu] = useState("NestedForm");

  const onSubmit = (formValues: any) => {
    setFormData(formValues);
  };

  const onChangeTab = (newTab: string) => {
    clearFormData();
    setActiveMenu(newTab);
  };

  const clearFormData = () => {
    setFormData({});
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Menu active={activeMenu} onChange={onChangeTab} />

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="flex w-full max-w-4xl gap-6">
          {activeMenu === "NestedForm" && <NetstedForm onSubmit={onSubmit} />}

          {activeMenu === "Optional Field" && (
            <ConditionalForm onSubmit={onSubmit} />
          )}

          {activeMenu === "Form Array" && <FormArray onSubmit={onSubmit} />}

          {activeMenu === "Custom Validation" && (
            <CustomForm onSubmit={onSubmit} />
          )}

          <DataPreview formData={formData} />
        </div>
      </div>

      {/* <UsingUseWatch /> */}
    </div>
  );
}

export default App;
