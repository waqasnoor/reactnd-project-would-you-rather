const getTabClassNames = (isActive) => {
  if (isActive) return " border-white bg-white text-blue-400 ";
  return "border-blue-400 bg-blue-400 text-white px-4 py-2 hover:bg-white hover:text-blue-400";
};
function Header({ children: text, onClick, isActive }) {
  return (
    <button
      className={`m-1 flex-1 border-2
          m-1 flex-1 border-2 px-4 py-2 ${getTabClassNames(isActive)}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
function Tab({ children }) {
  return <>{children}</>;
}
function Tabs({ children, active }) {
  const headerList = children.filter((child) => child.type === Header);
  const activePage = children
    .filter((child) => child.type === Tab)
    .find((tab) => tab.props.name === active);
  return (
    <>
      <div className="flex justify-between p-1">{headerList}</div>
      {activePage}
    </>
  );
}
Tabs.Header = Header;
Tabs.Tab = Tab;
export default Tabs;
