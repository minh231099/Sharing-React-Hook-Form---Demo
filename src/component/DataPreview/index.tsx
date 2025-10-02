interface DataPreviewProps {
  formData: Record<string, any>;
}

const DataPreview: React.FC<DataPreviewProps> = (props) => {
  const { formData } = props;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 flex-1">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">Data Preview</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-auto h-[400px]">
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
};

export default DataPreview;
