export const layout = "Base.tsx";

export default ({ title, children, date, heroImage, ...props }) => (
  <>
    {heroImage ? (
      <img src={heroImage} class="w-full min-h-32 object-cover" />
    ) : null}
    <div class="container mx-auto mt-24">
      <div class="flex m-4">
        <div class="w-full p-4">
          <section data-markdown="false">{children}</section>
        </div>
      </div>
    </div>
  </>
);
