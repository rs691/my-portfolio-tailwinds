


// import { useNavigate} from "react-router-dom";



const Layout= () => {

    // const navigate = useNavigate();
    return (
      <>
      
      
        <header className="absolute top-0 right-0 p-4 bg-transparent">
        <div className="navbar bg-base-100">
    <div className="flex-1">
      <button className="btn btn-ghost text-xl">daisyUI</button>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a>Link</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
        </header>
       
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-600 to-emerald-600 dark:from-gray-800 dark:to-gray-900 text-white flex items-center justify-center">
   
      {/* <button onClick={() => navigate('/contact')} className="w-48 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:scale-105 
      focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">Contact</button>
  
  <button onClick={() => navigate('/projects')} className="w-48 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:scale-105 
      focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">Projects</button>
  
  
  <button onClick={() => navigate('/education')} className="w-48 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:scale-105 
      focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">Education</button> */}
  
  
      </div>
        
      
      
  
    
    
     
  
        </>
    );
  };
  
  export default Layout;