

const FullScreenModal = () => {
    return (
      <div className="bg-opacity-75 bg-gray-700 fixed inset-0 flex items-center justify-center">
        <div className="bg-base-200 border border-base-300 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
          <div className="bg-primary text-primary-content px-4 py-2 flex justify-between items-center rounded-t-lg">
            <h2 className="font-semibold">Full Screen Modal</h2>
            <button className="btn btn-sm btn-error">X</button>
          </div>
  
          <div className="p-4">
            <p>This is a larger window container, perfect for complex forms or larger data display.</p>
          </div>
  
          <div className="flex justify-end p-3 bg-base-300 rounded-b-lg space-x-2">
            <button className="btn btn-secondary">Cancel</button>
            <button className="btn btn-primary">Confirm</button>
          </div>
        </div>
      </div>
    );
  };

  

  
  
  function LayoutOutOptions() {
    return (
        <div className="layout-out-options">
            <div className="layout-out-option">
                
                <FullScreenModal />
        </div>
    </div>
    );

}

export default LayoutOutOptions;