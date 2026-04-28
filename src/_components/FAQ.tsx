export default ({ faq }) => (
  <section>
    {faq.map(({ title, items }) => (
      <>
        <h3 class="text-xl font-bold mt-8 mb-4">{title}</h3>
        <div class="join join-vertical bg-base-100">
          {items.map(({ title, body }) => (
            <div class="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="accordion" checked="checked" />
              <div class="collapse-title font-semibold">{title}</div>
              <div class="collapse-content text-sm">
                <div
                  dangerouslySetInnerHTML={{
                    __html: body,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    ))}
  </section>
);
