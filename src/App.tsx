import Icon from "./Icon";

function App() {
  return (
    <div>
      <Icon name="wechat" onClick={() => console.log("hi")} className="q" />
      <Icon name="alipay" />
      <Icon name="qq" />
    </div>
  );
}

export default App;
