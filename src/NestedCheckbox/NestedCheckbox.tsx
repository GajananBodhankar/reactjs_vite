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

const setAllChecked = (data, checked) => {
  if (Array.isArray(data)) {
    data.map((i) => setAllChecked(i, checked));
  }
  return {
    ...data,
    checked,
    children: data.children ? data.children.map((c) => setAllChecked(c, checked)) : undefined,
  };
};
const Checkboxes = ({ data, setData }: { data: Array<any>; setData: (value: any) => void }) => {
  useEffect(() => console.log(data));
  return (
    <div>
      {data.map((i, j) => {
        return (
          <div key={`${i.label}-${j}`}>
            <dl>
              <dd>
                <input
                  type="checkbox"
                  checked={i.checked}
                  name=""
                  id={`${i.label}-${j}`}
                  onChange={(e) => {
                    if (i.children) {
                      setData((prev: any) => {
                        let result = [];
                        for (let j = 0; j < prev.length; j++) {
                          if (prev[j].label == i.label) {
                            result.push(setAllChecked(prev[j], e.target.checked));
                          } else {
                            result.push(prev[j]);
                          }
                        }
                        return result;
                      });
                    }
                  }}
                />
                <label htmlFor={`${i.label}-${j}`}>
                  {i.label} {JSON.stringify(i.checked)}
                </label>
              </dd>
              <dt>{i.children && <Checkboxes data={i.children} key={`${i.label}-${j}`} setData={setData} />}</dt>
            </dl>
          </div>
        );
      })}
    </div>
  );
};
function getData(data: string | any[]) {
  for (let i = 0; i < data.length; i++) {
    if (data[i]?.children) {
      data[i].checked = false;

      getData(data[i].children);
    } else {
      data[i].checked = false;
    }
  }
  return data;
}

export default function NestedCheckbox() {
  const [data, setData] = useState<any>(getData(CheckboxesData));

  return (
    <div>
      <h2>Nested Checkbox</h2>
      <Checkboxes data={data} setData={setData} />
    </div>
  );
}
