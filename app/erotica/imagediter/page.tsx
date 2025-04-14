"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

let buttons = [
  {
    name: "加粗",
    icon: "B",
    type: "bold",
  },
  {
    name: "斜体",
    icon: "I",
    type: "italic",
  },
  {
    name: "下划线",
    icon: "UL",
    type: "underline",
  },
  {
    name: "删除线",
    icon: "DL",
    type: "strikethrough",
  },
  {
    name: "居中",
    icon: "C",
    type: "align-center",
  },
  {
    name: "左对齐",
    icon: "L",
    type: "align-left",
  },
  {
    name: "右对齐",
    icon: "R",
    type: "align-right",
  },
  {
    name: "链接",
    icon: "A",
    type: "link",
  },
  {
    name: "图片",
    icon: "I",
    type: "image",
  },
  {
    name: "撤回",
    icon: "U",
    type: "undo",
  },
  {
    name: "重做",
    icon: "R",
    type: "redo",
  },
];
const selects = [
  {
    name: "字体大小",
    type: "font-size",
    options: [
      {
        value: "h1",
        text: "h1",
      },
      {
        value: "h2",
        text: "h2",
      },
      {
        value: "h3",
        text: "h3",
      },
      {
        value: "p",
        text: "p",
      },
    ],
  },
  {
    name: "字体",
    type: "font-family",

    options: [
      {
        value: "宋体",
        text: "宋体",
      },
      {
        value: "黑体",
        text: "黑体",
      },
      {
        value: "楷体",
        text: "楷体",
      },
    ],
  },
  {
    name: "字体颜色",
    label: "字体颜色",
    type: "font-color",
    options: [
      {
        value: "red",
        text: "红色",
      },
      {
        value: "blue",
        text: "蓝色",
      },
    ],
  },
  {
    name: "背景颜色",
    label: "背景颜色",
    type: "background-color",
    options: [
      {
        value: "red",
        text: "红色",
      },
      {
        value: "blue",
        text: "蓝色",
      },
    ],
  },
];
const editerWidth = 600;
export default function ImageDiter() {
  const [line, setLine] = useState(0);
  const [chose, setChose] = useState("");
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(null);

  const editerRef = useRef<HTMLDivElement>(null);
  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (selection?.rangeCount) {
      // setSelection(selection);
    }
  };
  const handleUpload = () => {
    setOpen(true);
  };
  const handleLink = () => {};
  const handleRedo = () => {};
  const handleUndo = () => {};
  const handleBold = () => {
    const bold = document.createElement("b");
    if (selection) {
      bold.innerHTML = selection;
      editerRef.current?.appendChild(bold);
    }
  };
  useEffect(() => {
    switch (chose) {
      case "link":
        handleLink();
        break;
      case "image":
        handleUpload();
        break;
      case "undo":
        handleUndo();
        break;
      case "redo":
        handleRedo();
        break;
      case "bold":
        handleBold();
        break;
      default:
        break;
    }
  }, [chose]);
  if (3.5 * 16 * 11 > editerWidth) {
    buttons = buttons.splice(0, 9);
    buttons.push({
      name: "省略",
      icon: "···",
      type: "omit",
    });
  }
  return (
    <div className=" flex justify-center items-center bg-black w-full h-screen">
      {open && (
        <div>
          {/* 这是一个modal */}
          <header>
            <p>
              <title>上传图片</title>
              <button onClick={() => setOpen(false)}>关闭</button>
            </p>
          </header>
          <main>
            <p>在这里上传文件</p>
            <button className="w-16 h-16 rounded-lg border-2 border-gray-300 text-6xl">
              <span>+</span>
            </button>
          </main>
          <footer>
            <p>
              <button>返回</button>
              <button>完成</button>
            </p>
          </footer>
        </div>
      )}
      <div
        className="p-4 rounded-lg shadow-lg bg-white "
        style={{ width: editerWidth + "px" }}
        onMouseUp={handleMouseUp}
      >
        <header className="my-6">
          <p>
            {buttons.map((item, index) => {
              return (
                <button
                  key={index}
                  className={clsx(
                    "rounded-lg mr-2 hover:bg-gray-200 w-12 h-12",
                    {
                      "bg-gray-200": chose === item.type,
                    }
                  )}
                  onClick={() => {
                    if (item.type === chose) {
                      return setChose("");
                    }

                    setChose(item.type);
                  }}
                >
                  {item.icon}
                </button>
              );
            })}
          </p>
          <p className="flex flex-wrap gap-4 my-2">
            {selects.map((item, index) => (
              <span key={index}>
                {item.label && (
                  <label htmlFor="font-color" className="mr-2">
                    {item.label}
                  </label>
                )}
                <select
                  name={item.type}
                  id=""
                  style={{ outline: "none" }}
                  className="border-2 border-gray-300 rounded-md p-1"
                >
                  {item.options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </span>
            ))}
          </p>
        </header>
        <main className="w-full h-[400px] border-2 border-gray-300 rounded-lg overflow-hidden">
          <div
            contentEditable={true}
            className="w-full h-full p-2 line-height-4"
            style={{
              outline: "none",
            }}
            ref={editerRef}
            // onChange={}
            onMouseUp={handleMouseUp}
          ></div>
          {/* <textarea
            name="area"
            className="w-full h-full p-2 line-height-4"
            style={{
              outline: "none",
            }}
            value={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatem omnis obcaecati corrupti, laboriosam quas quidem eligendi quisquam voluptas ab blanditiis iusto aliquam, quibusdam doloremque fugit ipsam debitis praesentium. Est accusantium sed vel amet minima deleniti quas placeat, pariatur, vero aliquid dignissimos. Sint dolor expedita, iusto exercitationem quam sit corrupti."
            }
            onChange={(e) => {
              setLine(e.target.value.split("\n").length);
            }}
            onMouseUp={handleMouseUp}
          ></textarea> */}
        </main>
        <footer className="text-right mt-4">
          <span>{line}行</span>
          <span>xx字</span>
        </footer>
      </div>
    </div>
  );
}
