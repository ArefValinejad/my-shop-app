import Header from "./components/Header";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default layout;
