import { useState } from "react";
import Style from "./App.module.scss";
import FolderComponent from "./FolderComponent";

const parsedDadta = {
  name: "root",
  type: 0,
  child: [
    {
      name: "child1",
      type: 0,
      child: [
        {
          name: "file",
          type: 1,
        },
        {
          name: "file",
          type: 1,
        },
        {
          name: "file",
          type: 1,
        },
      ],
    },
    {
      name: "child2",
      type: 0,
      child: [
        {
          name: "file",
          type: 1,
        },
        {
          name: "child3",
          type: 0,
          child: [
            {
              name: "file",
              type: 1,
            },
          ],
        },
      ],
    },
    {
      name: "file",
      type: 1,
    },
  ],
};

export enum ItemType {
  FOLDER,
  FILE,
}

export interface Folder {
  name: string;
  type: ItemType;
  child?: Folder[];
}

function App() {
  const [directory, setDirectory] = useState<Folder>({
    name: "root",
    type: ItemType.FOLDER,
    child: [],
  });
  // const [directory, setDirectory] = useState<Folder>(parsedDadta);

  const doRerender = () => {
    setDirectory({ ...directory });
  };

  return <FolderComponent node={directory} doRerender={doRerender} />;
}

export default App;
