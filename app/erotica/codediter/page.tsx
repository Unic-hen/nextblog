export default function CodeEditer() {
  return (
    <div className="flex justify-center items-center  ">
      <div className="lg:w-1/2 md:w-full">
        <header className="">
          <h1>Code Editor</h1>
          <p>这是一个代码编辑器，你可以在这里编写和编辑代码。</p>
          <p>太难了，先放了</p>
        </header>
        <div className="py-6 h-96">
          <pre>
            <code>
              <span></span>
            </code>
          </pre>
          <textarea
            name="code"
            id="code"
            className="w-full rounded-md h-full bg-gray-900 text-white p-4"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
