import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="m-5 p-5 rounded shadow-lg"> 
               <h3 className=" text=3xl font-bold">Q: What is Context  API?</h3>
               <p className=" text-blue-500 font-semibold">A: React Context is a way to manage state globally.It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

              </p>
            </div>

            <div className="m-5 p-5 rounded shadow-lg"> 
           <h3 className="text=3xl font-bold">Q: What is Semantic Tag?</h3>
           <p className="text-blue-500 font-semibold"> Semantic elements have meaningful names which tells about type of content. For example header, footer, table, … etc. HTML5 introduces many semantic elements as mentioned below which make the code easier to write and understand for the developer as well as instructs the browser on how to treat them.</p>
            </div>
        </div>
    );
};

export default Blogs;