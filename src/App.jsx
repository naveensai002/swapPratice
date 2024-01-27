import { useState } from "react";

const App = () => {
  const [list1, setList1] = useState([
    {
      title: "Item1",
      isChecked: false,
    },
    {
      title: "Item2",
      isChecked: false,
    },
    {
      title: "Item3",
      isChecked: false,
    },
  ]);

  const [list2, setList2] = useState([
    {
      title: "A",
    },
    {
      title: "B",
    },
    {
      title: "C",
    },
  ]);

  const checkHandler = (i) => {
    //do not update the original array instead make a shallow copy
    const updateList1 = [...list1];
    updateList1[i].isChecked = !updateList1[i].isChecked;
    setList1(updateList1);
  };

  const handleSwap = () => {
    const tempList1 = [...list1];
    const tempList2 = [...list2];
    tempList1.map((item, i) => {
      if (item.isChecked) {
        //temp =a
        //a=b
        //b=temp

        const temp = tempList1[i].title;
        tempList1[i].title = tempList2[i].title;
        tempList2[i].title = temp;
      }
      tempList1[i].isChecked = false;
    });
    setList1(tempList1);
    setList2(tempList2);
  };
  return (
    <>
      <div>
        <ul>
          {list1.map((list, i) => {
            return (
              <li key={i}>
                <input
                  type="checkbox"
                  checked={list.isChecked}
                  onClick={() => checkHandler(i)}
                />
                {list.title}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <ul>
          {list2.map((list, i) => {
            return <li key={i}>{list.title}</li>;
          })}
        </ul>
      </div>
      <button type="submit" onClick={handleSwap}>
        Swap List item
      </button>
    </>
  );
};

export default App;
