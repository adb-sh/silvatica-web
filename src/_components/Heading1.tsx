export default ({ children }) => (
  <div class="flex flex-col justify-center items-center mt-[-2rem]">
    <div class="bg-[url('/background.webp')] bg-center bg-cover text-white px-4 h-screen w-screen flex flex-col justify-center items-center">
      {children}
    </div>
  </div>
);
