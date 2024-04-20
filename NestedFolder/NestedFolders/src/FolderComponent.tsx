import { Folder, ItemType } from "./App";
import Style from "./App.module.scss";

interface Props {
  node: Folder;
  doRerender: () => void;
}

const FolderComponent = ({ node, doRerender }: Props) => {
  if (node.type == ItemType.FILE) {
    return <div>{node.name}</div>;
  }
  const addFolder = () => {
    node.child?.push({
      type: ItemType.FOLDER,
      child: [],
      name: "rooottt111",
    });
    doRerender();
  };

  const addFile = () => {
    node.child?.push({
      type: ItemType.FILE,
      name: "file111",
    });
    doRerender();
  };
  return (
    <div>
      <div className={Style.folderMetaComponent}>
        <div>{node?.name}</div>
        <button onClick={addFolder}>Folder +</button>
        <button onClick={addFile}>File +</button>
      </div>
      <div className={Style.folderComponent}>
        <ul>
          {node?.child?.map((item) => {
            return (
              <li>
                <FolderComponent node={item} doRerender={doRerender} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FolderComponent;
