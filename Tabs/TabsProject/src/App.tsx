import Styles from "./App.module.scss";
import Tab from "./Tab";
import { Tabs } from "./Tabs";

function App() {
  return (
    <div className={Styles.container}>
      <div className={Styles.tabContainer}>
        <Tabs>
          <Tab name="Tab1">
            <div>Hi Tab 1</div>
          </Tab>
          <Tab name="Tab2">
            <div>Hi Tab 2</div>
          </Tab>
          <Tab name="Tab3">
            <div>Hi Tab 3</div>
          </Tab>
          <Tab name="Tab4">
            <div>Hi Tab 4</div>
          </Tab>
          <Tab name="Tab2">
            <div>Hi Tab 2</div>
          </Tab>
          <Tab name="Tab3">
            <div>Hi Tab 3</div>
          </Tab>
          <Tab name="Tab4">
            <div>Hi Tab 4</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
