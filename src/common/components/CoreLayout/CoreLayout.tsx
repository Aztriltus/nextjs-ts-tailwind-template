export const CoreLayout = ({ children }) => {
  return (
    <div className="min-h-full h-full relative">
      {/* <Header className="sticky h-[50px] top-0 w-full z-10 bg-navy-600" /> */}
      {/* Height is 100% minus header and footer height */}
      {/* <main className="bg-navy-700 h-[calc(100%-50px-32px)] overflow-y-auto"> */}
      {children}
      {/* </main> */}
      {/* <Footer className="h-[32px] bottom-0 w-full" /> */}
    </div>
  );
};
