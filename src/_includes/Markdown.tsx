export const layout = "Base.tsx";

export default ({ title, children, date, ...props }) => (
  <div class="container mx-auto mt-24">
    <div class="flex m-4">
      <div class="w-full p-4">
        <section data-markdown="true">{children}</section>
      </div>
    </div>
  </div>
);
