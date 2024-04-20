import { ReactElement, useCallback, useState } from "react";
import Tab from "./Tab";
import Styles from "./Tabs.module.scss";

export interface Props {
  children: ReactElement<typeof Tab>[] | ReactElement<typeof Tab>;
}

export const Tabs = ({ children }: Props) => {
  const [activeTabId, setActiveTabId] = useState(0);

  const getTabs = useCallback(() => {
    let tabs = [];
    if (Array.isArray(children)) {
      tabs = [...children];
    } else {
      tabs = [children];
    }
    return tabs;
  }, [children]);

  const handleTabChange = (changedTabId: number) => {
    setActiveTabId(changedTabId);
  };
  const getAllTabsHead = () => {
    return getTabs()?.map((tab, index) => {
      const className = index === activeTabId && Styles.activeTabHead;
      return (
        <div
          className={`${Styles.tabHead}, ${className}`}
          onClick={() => handleTabChange(index)}
        >
          {tab.props.name}
        </div>
      );
    });
  };
  return (
    <div className={Styles.tabs}>
      <div className={Styles.head}>{getAllTabsHead()}</div>
      {getTabs()[activeTabId]}
    </div>
  );
};
