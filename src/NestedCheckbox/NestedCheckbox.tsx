import { Children, useEffect, useState } from "react";

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked }: { data: Array<any>; checked: any; setChecked: (value: any) => void }) => {
  return (
    <div>
      {data.map((i, j) => {
        return (
          <div key={`${i.label}-${j}`}>
            <dl>
              <dd>
                <input
                  type="checkbox"
                  checked={checked[i.id] || false}
                  name=""
                  id={`${i.label}-${j}`}
                  onChange={(e) => {
                    setChecked((prev: any) => {
                      const newState = { ...prev, [i.id]: e.target.checked };
                      const updateChild = (child: Array<any>) => {
                        child.forEach((ele) => {
                          newState[ele.id] = e.target.checked;
                          if (ele.children) {
                            updateChild(ele.children);
                          }
                        });
                      };
                      function getParent(data: string | any[], item: any) {
                        for (let i = 0; i < data.length; i++) {
                          if (data[i].id == item) {
                            return data[i];
                          }
                          if (data[i]?.children) {
                            getParent(data[i].children, item);
                            const isTrue = data[i].children.every((element: { id: string | number }) => newState[element.id]);
                            newState[data[i].id] = isTrue ? true : false;
                          }
                        }
                      }
                      i.children && updateChild(i.children);
                      getParent(CheckboxesData, i.id);
                      return newState;
                    });
                  }}
                />
                <label htmlFor={`${i.label}-${j}`}>
                  {i.label} {checked[i.id] ? "true" : "false"}
                </label>
              </dd>
              <dt>{i.children && <Checkboxes data={i.children} key={`${i.label}-${j}`} checked={checked} setChecked={setChecked} />}</dt>
            </dl>
          </div>
        );
      })}
    </div>
  );
};

export default function NestedCheckbox() {
  const [data, setData] = useState<any>({});

  return (
    <div>
      <h2>Nested Checkbox</h2>
      <Checkboxes data={CheckboxesData} checked={data} setChecked={setData} />
    </div>
  );
}
