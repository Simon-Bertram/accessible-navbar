import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <header className="mb-8">
        <Navbar />
      </header>
      <main>
        <div className="container mx-auto">{children}</div>
      </main>
      <footer>
        <div className="container mx-auto py-4">
          <p>&copy; {new Date().getFullYear()} My Company</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
